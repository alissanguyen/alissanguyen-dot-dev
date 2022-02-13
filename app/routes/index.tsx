import {
  EatLearnCode,
  GradientBackground2,
  Portfolio
} from "~/components/Decoration";
import Contact, { links as contactStyles } from "~/sections/Contact/Contact";
import { AlertType, ContactFormFields, Message, SupportedTheme } from "~/types";
import {
  badRequest,
  handleFormSubmitted,
  validateEmail,
  validateMessage,
  validateName,
  validateSubject
} from "~/utils/functions";
import { ActionFunction, LinksFunction, redirect, useActionData } from "remix";
import Alert from "~/components/Alert";

import { links as linkButtonStyles } from "~/components/ExternalLinkButton/ExternalLinkButton";
import AboutMe, { links as aboutMeStyles } from "~/sections/AboutMe/AboutMe";
import MySkills, { links as skillsStyles } from "~/sections/MySkills/MySkills";
import Projects, {
  links as projectsStyles
} from "~/sections/Projects/Projects";
import { fixedWidthLayoutClasses } from "~/constants";

export const links: LinksFunction = () => {
  return [
    ...linkButtonStyles(),
    ...aboutMeStyles(),
    ...skillsStyles(),
    ...projectsStyles(),
    ...contactStyles()
  ];
};

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const email = formData.get(ContactFormFields.email);
  const subject = formData.get(ContactFormFields.subject);
  const name = formData.get(ContactFormFields.name);
  const message = formData.get(ContactFormFields.message);

  const fields = { subject, email, name, message };

  const fieldErrors = {
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

  const confirmedMsg = {
    to: messageFields.email,
    from: "im.tamnguyen@gmail.com",
    subject: "Message successfully sent on alissanguyen.dev.",
    text: `Hi ${messageFields.name}, you have successfully sent your message to me. I will reply within 48 hours. Thank you for your feedback.`
  };

  try {
    await sgMail
      .send(msg)
      .then(() => {
        console.log("Email sent");

        sgMail
          .send(confirmedMsg)
          .then(() => {
            console.log("Confirmed email sent");
            <Alert
              type={AlertType.CONFIRMED}
              message="You have received a confirmation email about your message."
            />;
          })
          .catch((error: Error) => {
            console.log(error);
          });

        return (
          <Alert
            type={AlertType.SUCCESS}
            message="You have successfully sent your message to Alissa!"
          />
        );
      })
      .catch((error: Error) => {
        console.error(error);

        return (
          <Alert
            type={AlertType.ERROR}
            message="Failed to send your message to Alissa :( Please try again"
          />
        );
      });
  } catch (e) {
    console.error("Failed to send confirmation email to: ", coercedEmail);
  }
  // Redirect to home page, clear form and show a notice of whether or not user send a message successfully

  handleFormSubmitted(formData, ["name", "email", "subject", "message"]);
  return redirect("/");
};

// TODO: Make theme available as props to all sections (Outlet)
interface Props {}
const Index: React.FC<Props> = (props) => {
  const actionData = useActionData();
  return (
    <div className="app tracking-wide font-light">
      <div className={`${fixedWidthLayoutClasses} flex flex-col`}>
        <section id="AboutMe">
          <AboutMe />
        </section>
        <div
          style={{
            zIndex: -1
          }}
        >
          <GradientBackground2 />
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
          <Contact data={actionData} />
        </div>
      </div>
    </div>
  );
};

export default Index;
