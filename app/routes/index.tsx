import {
  ActionFunction,
  Form,
  json,
  LinksFunction,
  useActionData
} from "remix";
import {
  EatLearnCode,
  GradientBackground3,
  Portfolio
} from "~/components/Decoration";
import { links as linkButtonStyles } from "~/components/ExternalLinkButton/ExternalLinkButton";
import { fixedWidthLayoutClasses } from "~/constants";
import AboutMe, { links as aboutMeStyles } from "~/sections/AboutMe/AboutMe";
import {
  ContactFormSendButton,
  links as contactStyles,
  YoutubeLogoWithHeart
} from "~/sections/Contact/Contact";
import MySkills, { links as skillsStyles } from "~/sections/MySkills/MySkills";
import Projects, {
  links as projectsStyles
} from "~/sections/Projects/Projects";
import { ContactFormFields, Message } from "~/types";
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
    const response: Response = await sgMail
      .send(msg)
      .then(() => {
        console.log("Email sent");

        return json(undefined, {
          status: 200
        });
      })
      .catch((error: any) => {
        console.error(error);

        return json(undefined, {
          status: error && error.status ? error.status : 500
        });
      });

    return response;
  } catch (error: any) {
    console.error("Failed to send confirmation email to: ", coercedEmail);
    return json(undefined, {
      status: error && error.status ? error.status : 500
    });
  }
  // Redirect to home page, clear form and show a notice of whether or not user send a message successfully

  // handleFormSubmitted(formData, ["name", "email", "subject", "message"]);
};

const Index: React.FC = () => {
  const actionData:
    | { fieldErrors: Partial<ContactFormFieldErrors> }
    | undefined = useActionData();

  const ContactTitle = () => {
    return (
      <svg viewBox="0 0 1000 110" className="contact-title">
        <text textAnchor="middle" x="50%" y="90%" className="text-9xl">
          Get in touch
        </text>
      </svg>
    );
  };

  // console.log(`ACTION DATA: ${JSON.stringify(actionData)}`);

  return (
    <div className="app tracking-wide">
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
        <section>
          <MySkills />
        </section>
        <div className="spacer-div mt-24"></div>
        <section id="Projects">
          <Projects />
        </section>
        <div className="spacer-div mt-24"></div>

        <div className="spacer-div mt-10"></div>
      </div>
      <div className="blob-bg" id="Contact">
        <div className={`${fixedWidthLayoutClasses} py-20`}>
          <div className="contact-wrapper">
            <ContactTitle />
            <div className="mt-20"></div>
            <div className="grid grid-cols-2">
              <div className="flex flex-col flex-start">
                <YoutubeLogoWithHeart />
              </div>
              <Form
                method="post"
                action="/?index"
                className="contact-form flex flex-col text-textLgColor"
              >
                <label
                  htmlFor={ContactFormFields.name}
                  className="text-sm text-base pt-2"
                >
                  Your name
                </label>
                <input
                  id={ContactFormFields.name}
                  name={ContactFormFields.name}
                  type="text"
                  className="appearance-none rounded-lg relative block w-full px-3 py-1"
                />
                <div className="error">
                  <p>
                    {actionData?.fieldErrors?.name &&
                      actionData?.fieldErrors?.name}
                  </p>
                </div>
                <label
                  htmlFor={ContactFormFields.email}
                  className="text-sm text-base pt-2"
                >
                  Your email
                </label>
                <input
                  id={ContactFormFields.email}
                  name={ContactFormFields.email}
                  type="email"
                  className="appearance-none rounded-lg relative block w-full px-3 py-1"
                />
                <div className="error">
                  <p>
                    {actionData?.fieldErrors?.email &&
                      actionData?.fieldErrors?.email}
                  </p>
                </div>
                <label
                  htmlFor={ContactFormFields.subject}
                  className="text-textLgcolor  text-sm text-base pt-2"
                >
                  Your email subject
                </label>
                <input
                  id={ContactFormFields.subject}
                  name={ContactFormFields.subject}
                  type="text"
                  className="appearance-none rounded-lg relative block w-full px-3 py-2"
                />
                <div className="error">
                  <p>
                    {actionData?.fieldErrors?.subject &&
                      actionData?.fieldErrors?.subject}
                  </p>
                </div>
                <label
                  htmlFor={ContactFormFields.message}
                  className="text-textLgcolor text-sm text-base py-2"
                >
                  Your message
                </label>
                <textarea
                  id={ContactFormFields.message}
                  name={ContactFormFields.message}
                  className="appearance-none rounded-lg relative block w-full px-3 py-1 mb-7"
                />
                <div className="error">
                  <p>
                    {actionData?.fieldErrors?.message &&
                      actionData?.fieldErrors?.message}
                  </p>
                </div>
                <ContactFormSendButton />
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
