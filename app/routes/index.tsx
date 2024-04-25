import {
  useActionData,
  useNavigation
} from "@remix-run/react";
import {
  ActionFunction,
  LinksFunction,
  MetaFunction,
  json,
} from "@remix-run/node";
import {
  EatLearnCode,
  GradientBackground3,
} from "~/components/Decoration";
import { links as linkButtonStyles } from "~/components/ExternalLinkButton/ExternalLinkButton";
import {
  AUTHOR,
  fixedWidthLayoutClasses,
  IMAGE_HEIGHT,
  PORTFOLIO_IMAGE_URL,
  IMAGE_WIDTH,
  PORTFOLIO_WEBSITE_NAME,
  TWITTER_ACC,
  TWITTER_CARD_TYPE,
  WEBSITE_DESCRIPTION,
  WEBSITE_KEYWORDS,
  WEBSITE_URL
} from "~/constants";
import AboutMe, { links as aboutMeStyles } from "~/sections/AboutMe/AboutMe";
import { links as ResumeBtnStyles } from "~/components/ResumeButton/ResumeButton";
import { links as SocialMediaStyles } from "~/components/SocialMedia/SocialMedia";
import Projects, {
  links as projectsStyles
} from "~/sections/Projects/Projects";
import * as React from "react";
import { ContactFormFields, Message } from "~/types";
import {
  badRequest,
  ContactFormFieldErrors,
  validateEmail,
  validateMessage,
} from "~/utils/functions";
import { contactFormHtmlId } from "~/constants";
import ReactGA from "react-ga";
import Portfolio from "~/sections/Resume/Portfolio";
import Resume, { links as resumeStyles } from "~/sections/Resume/Resume";

export const meta: MetaFunction = () => {
  return {
    title: PORTFOLIO_WEBSITE_NAME,
    description: WEBSITE_DESCRIPTION,
    keywords: WEBSITE_KEYWORDS,
    image: PORTFOLIO_IMAGE_URL,
    "twitter:title": PORTFOLIO_WEBSITE_NAME,
    "twitter:description": WEBSITE_DESCRIPTION,
    "twitter:alt": PORTFOLIO_WEBSITE_NAME,
    "twitter:image": PORTFOLIO_IMAGE_URL,
    "twitter:card": TWITTER_CARD_TYPE,
    "twitter:creator": TWITTER_ACC,
    "twitter:site": TWITTER_ACC,
    "og:url": WEBSITE_URL,
    "og:image": PORTFOLIO_IMAGE_URL,
    "og:title": PORTFOLIO_WEBSITE_NAME,
    "og:description": WEBSITE_DESCRIPTION,
    "og:image:width": IMAGE_WIDTH,
    "og:image:height": IMAGE_HEIGHT,
    author: AUTHOR,
    "theme-color": "#16181a"
  };
};
export const links: LinksFunction = () => {
  return [
    {
      rel: "canonical",
      href: "https://www.alissanguyen.com/"
    },
    ...linkButtonStyles(),
    ...aboutMeStyles(),
    ...resumeStyles(),
    ...projectsStyles(),
    ...ResumeBtnStyles(),
    ...SocialMediaStyles()
  ];
};

const TRACKING_ID = "UA-223958752-1";
ReactGA.initialize(TRACKING_ID);


export const action: ActionFunction = async ({
  request
}): Promise<Response> => {
  const formData = await request.formData();
  const email = formData.get(ContactFormFields.email);
  const message = formData.get(ContactFormFields.message);

  const fields = { email, message };

  const fieldErrors: ContactFormFieldErrors = {
    email: validateEmail(email),
    message: validateMessage(message)
  };

  if (Object.values(fieldErrors).some(Boolean)) {
    return badRequest({ fieldErrors, fields });
  }

  const coercedEmail = email as string;
  const coercedMessage = message as string;

  const messageFields: Message = {
    email: coercedEmail,
    message: coercedMessage
  };

  /**
   * We need to do a runtime require because there's a bug with sendgrid???
   */
  const sgMail = require("@sendgrid/mail");
  sgMail.setApiKey(process.env.SENDGRID_SECRET_API_KEY);

  function createHtml(fromEmail: string, body: string) {
    const html = `<h3>From email: ${fromEmail}</h3>
    <p>Message: ${body}</p>`;
    return html;
  }
  const msg = {
    to: "im.tamnguyen@gmail.com", // Change to your recipient
    from: "alissa.nguyen1211@gmail.com", // Change to your verified sender
    text: messageFields.message,
    html: createHtml(
      messageFields.email,
      messageFields.message
    )
  };

  try {
    const jsonResponse: Response = await sgMail
      .send(msg)
      .then(() => {
        return {
          status: 200
        };
      })
      .catch((error: any) => {
        console.error(error);
        return {
          status: error && error.status ? error.status : 500
        };
      });

    return json(
      {
        status: 200,
        fieldErrors: {}
      },
      jsonResponse
    );
  } catch (error: any) {
    console.error("Failed to send confirmation email to: ", coercedEmail);
    return json(
      {
        status: 200,
        fieldErrors: {}
      },
      {
        status: error && error.status ? error.status : 500
      }
    );
  }
};



const Index: React.FC = () => {
  const actionData:
    | { fieldErrors: Partial<ContactFormFieldErrors>; status: number }
    | undefined = useActionData();

  const transition = useNavigation();

  React.useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  /**
   * When we get back a 200 status code, clear the form.
   */
  React.useEffect(() => {
    const maybeContactForm = document.getElementById(
      contactFormHtmlId
    ) as HTMLFormElement | null;

    if (maybeContactForm && actionData && actionData.status === 200) {
      maybeContactForm.reset();
    }
  }, [actionData]);

  return (
    <>
      <div className="app tracking-wide text-lg">
        <div className={`${fixedWidthLayoutClasses} flex flex-col`}>
          <AboutMe actionData={actionData} transition={transition} />

          <div style={{ zIndex: -1 }}>
            <GradientBackground3 />
            <div className="spacer-div"></div>
            <EatLearnCode />
          </div>
          <div className="spacer-div mt-24 custom2:mt-24"></div>
          <Portfolio />
          <Resume />
          <div className="spacer-div mt-24 custom2:mt-24"></div>
          <section id="projects">
            <div className="spacer-div sm:mt-0"></div>
            <Projects />
          </section>
          <div className="spacer-div mt-24"></div>
          <div className="spacer-div mt-10"></div>
        </div>
      </div>
    </>
  );
};

export default Index;
