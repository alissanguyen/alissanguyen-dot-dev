import {
  ActionFunction,
  json,
  LinksFunction,
  useActionData,
  useTransition
} from "remix";
import {
  EatLearnCode,
  GradientBackground3,
  Portfolio
} from "~/components/Decoration";
import { links as linkButtonStyles } from "~/components/ExternalLinkButton/ExternalLinkButton";
import { fixedWidthLayoutClasses } from "~/constants";
import AboutMe, { links as aboutMeStyles } from "~/sections/AboutMe/AboutMe";
import ContactMeSection, {
  links as contactStyles
} from "~/sections/Contact/Contact";
import MySkills, { links as skillsStyles } from "~/sections/MySkills/MySkills";
import { links as ResumeBtnStyles } from "~/components/ResumeButton/ResumeButton";
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
  validateName,
  validateSubject
} from "~/utils/functions";
import { contactFormHtmlId } from "~/constants";

export const links: LinksFunction = () => {
  return [
    ...linkButtonStyles(),
    ...aboutMeStyles(),
    ...skillsStyles(),
    ...projectsStyles(),
    ...contactStyles(),
    ...ResumeBtnStyles()
  ];
};

export const action: ActionFunction = async ({
  request
}): Promise<Response> => {
  const formData = await request.formData();
  const email = formData.get(ContactFormFields.email);
  const subject = formData.get(ContactFormFields.subject);
  const name = formData.get(ContactFormFields.name);
  const message = formData.get(ContactFormFields.message);

  const fields = { subject, email, name, message };

  const fieldErrors: ContactFormFieldErrors = {
    name: validateName(name),
    subject: validateSubject(subject),
    email: validateEmail(email),
    message: validateMessage(message)
  };

  if (Object.values(fieldErrors).some(Boolean)) {
    return badRequest({ fieldErrors, fields });
  }

  const coercedEmail = email as string;
  const coercedName = name as string;
  const coercedSubject = subject as string;
  const coercedMessage = message as string;

  const messageFields: Message = {
    email: coercedEmail,
    name: coercedName,
    subject: coercedSubject,
    message: coercedMessage
  };

  /**
   * We need to do a runtime require because there's a bug with sendgrid???
   */
  const sgMail = require("@sendgrid/mail");
  sgMail.setApiKey(process.env.SENDGRID_SECRET_API_KEY);

  function createHtml(fromEmail: string, name: string, body: string) {
    const html = `<h3>From email: ${fromEmail}</h3>
    <h3>From user: ${name}</h3>
    <p>Message: ${body}</p>`;
    return html;
  }
  const msg = {
    to: "im.tamnguyen@gmail.com", // Change to your recipient
    from: "alissa.nguyen1211@gmail.com", // Change to your verified sender
    subject: messageFields.subject,
    text: messageFields.message,
    html: createHtml(
      messageFields.email,
      messageFields.name,
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

  const transition = useTransition();

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
      <div className="app tracking-wide text-lg overflow-hidden">
        <div className={`${fixedWidthLayoutClasses} flex flex-col`}>
          <AboutMe />
          <div style={{ zIndex: -1 }}>
            <GradientBackground3 />
            <div className="spacer-div mt-20 xs:mt-80"></div>
            <EatLearnCode />
          </div>
          <Portfolio />
          <div className="spacer-div xs:mt-44 sm:mt-96"></div>
          <MySkills />
          <div className="spacer-div mt-24 custom2:mt-24"></div>
          <section id="projects">
            <div className="spacer-div sm:mt-0"></div>
            <Projects />
          </section>
          <div className="spacer-div mt-24"></div>
          <div className="spacer-div mt-10"></div>
        </div>
        <div className="blob-bg" id="contact">
          <div className={`${fixedWidthLayoutClasses} py-20`}>
            <ContactMeSection
              fieldErrors={actionData && actionData.fieldErrors}
              transition={transition}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
