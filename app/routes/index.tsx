import {
  ActionFunction,
  Form,
  json,
  LinksFunction,
  useActionData
} from "remix";
import Alert from "~/components/Alert";
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
import Projects, {
  links as projectsStyles
} from "~/sections/Projects/Projects";
import { AlertType, ContactFormFields, Message } from "~/types";
import {
  badRequest,
  ContactFormFieldErrors,
  validateEmail,
  validateMessage,
  validateName,
  validateSubject
} from "~/utils/functions";

export const links: LinksFunction = () => {
  return [
    ...linkButtonStyles(),
    ...aboutMeStyles(),
    ...skillsStyles(),
    ...projectsStyles(),
    ...contactStyles()
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
        console.log("Email sent");

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

    console.log(`Contact Form Response: ${JSON.stringify(jsonResponse)}`);
    return json(
      {
        fieldErrors: {}
      },
      jsonResponse
    );
  } catch (error: any) {
    console.error("Failed to send confirmation email to: ", coercedEmail);
    return json(
      {
        fieldErrors: {}
      },
      {
        status: error && error.status ? error.status : 500
      }
    );
  }
  // Redirect to home page, clear form and show a notice of whether or not user send a message successfully

  // handleFormSubmitted(formData, ["name", "email", "subject", "message"]);
};

const Index: React.FC = () => {
  const actionData:
    | { fieldErrors: Partial<ContactFormFieldErrors> }
    | undefined = useActionData();

  /** TODO: add loading state */

  console.log("actionData", actionData);

  return (
    <div className="app tracking-wide text-lg">
      <div className={`${fixedWidthLayoutClasses} flex flex-col`}>
        <section id="AboutMe">
          <AboutMe />
        </section>
        <div
          style={{
            zIndex: -1
          }}
        >
          <GradientBackground3 />
          <div className="spacer-div mt-80"></div>
          <EatLearnCode />
        </div>

        <div className="spacer-div mt-96" id="Portfolio"></div>
        <Portfolio />
        <div className="spacer-div mt-96"></div>
        <section className="sm:p-14 md:p-20 lg:px-5 xl:p-0">
          <MySkills />
        </section>
        <div className="spacer-div mt-24"></div>
        <section id="Projects" className="sm:p-14 md:p-20 lg:px-5 xl:p-0">
          <Projects />
        </section>
        <div className="spacer-div mt-24"></div>

        <div className="spacer-div mt-10"></div>
      </div>
      <div className="blob-bg" id="Contact min-w-full">
        <div className={`${fixedWidthLayoutClasses} py-20`}>
          <ContactMeSection
            fieldErrors={actionData && actionData.fieldErrors}
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
