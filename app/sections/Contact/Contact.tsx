import { Transition } from "@remix-run/react/transition";
import * as React from "react";
import { Form, LinksFunction } from "remix";
import Alert from "~/components/Alert";
import SocialMedia from "~/components/SocialMedia/SocialMedia";
import { contactFormHtmlId } from "~/constants";
import { useWasInViewAtLeastOnce } from "~/hooks/useWasInViewAtLeastOnce";
import { useTheme } from "~/providers/ThemeProvider";
import { AlertType, ContactFormFields, SupportedTheme } from "~/types";
import { ContactFormFieldErrors } from "~/utils/functions";
import styles from "./Contact.css";

interface Props {
  fieldErrors: Partial<ContactFormFieldErrors> | undefined;
  transition: Transition;
}

export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: styles
  }
];

const ContactTitle = () => {
  const { setRef, wasInViewAtLeastOnce } = useWasInViewAtLeastOnce();

  const contactTitleClassname = wasInViewAtLeastOnce
    ? "contact-title"
    : undefined;

  return (
    <svg
      viewBox="0 0 900 110"
      className={`${contactTitleClassname} contact-title xl:mt-20`}
      ref={setRef}
    >
      <text textAnchor="middle" x="50%" y="90%" className="text-9xl">
        Get in touch!
      </text>
    </svg>
  );
};
const ContactMeSection: React.FC<Props> = (props) => {
  const { fieldErrors, transition } = props;
  const { theme } = useTheme();

  const hasError = fieldErrors && Object.keys(fieldErrors).length > 0;
  const hasSuccess = fieldErrors && Object.keys(fieldErrors).length === 0;

  const errorMessageClassname = theme === SupportedTheme.DARK ? "text-[rgb(0, 255, 127)]" : "text-[rgb(255, 0, 0)]"

  const buttonText =
    transition.state === "submitting"
      ? "Sending..."
      : transition.state === "loading"
      ? "Sent!"
      : "Send";

  return (
    <div className="contact-wrapper flex flex-col items-center justify-center translate-y-[-1rem] xs:translate-y-0 xl:translate-y-[-5rem]">
      <ContactTitle />
      <div className="spacer-div mt-10"></div>
      <div className="contact-form-wrapper w-full custom2:w-[90%] sm:w-4/5 md:w-2/3 lg:w-1/2">
        <Form
          id={contactFormHtmlId}
          method="post"
          action="/?index"
          className="contact-form flex flex-col text-contact-label w-full"
        >
          {hasError ? (
            <Alert
              message={"Failed to send message, please try again."}
              type={AlertType.ERROR}
            />
          ) : hasSuccess ? (
            <Alert
              message={"I've received your message :)"}
              type={AlertType.SUCCESS}
            />
          ) : (
            <Alert
              message={"Tell me anything! Or shoot me a message on LinkedIn!"}
              type={AlertType.CONFIRMED}
            />
          )}

          <label
            htmlFor={ContactFormFields.name}
            className="text-base pt-2 pb-1"
          >
            Your name
          </label>
          <input
            id={ContactFormFields.name}
            name={ContactFormFields.name}
            type="text"
            required
            className="appearance-none rounded-lg relative block w-full px-3 py-1"
          />
          <div className={`error text-sm font-medium italic ${errorMessageClassname}`}>
            <p>{fieldErrors?.name && fieldErrors?.name}</p>
          </div>
          <label
            htmlFor={ContactFormFields.email}
            className="text-base pt-2 pb-1"
          >
            Your email
          </label>
          <input
            id={ContactFormFields.email}
            name={ContactFormFields.email}
            type="email"
            required
            className="appearance-none rounded-lg relative block w-full px-3 py-1"
          />
          <div className={`error text-sm font-medium italic ${errorMessageClassname}`}>
            <p>{fieldErrors?.email && fieldErrors?.email}</p>
          </div>
          <label
            htmlFor={ContactFormFields.subject}
            className="text-textLgcolor text-base pt-2 pb-1"
          >
            Your email subject
          </label>
          <input
            id={ContactFormFields.subject}
            name={ContactFormFields.subject}
            type="text"
            required
            className="appearance-none rounded-lg relative block w-full px-3 py-2"
          />
          <div className={`error text-sm font-medium italic ${errorMessageClassname}`}>
            <p>{fieldErrors?.subject && fieldErrors?.subject}</p>
          </div>
          <label
            htmlFor={ContactFormFields.message}
            className="text-textLgcolor text-base pt-2 pb-1"
          >
            Your message
          </label>
          <textarea
            id={ContactFormFields.message}
            name={ContactFormFields.message}
            required
            className="appearance-none rounded-lg relative block w-full px-3 py-1"
          />
          <div className={`error text-sm font-medium italic ${errorMessageClassname}`}>
            <p>{fieldErrors?.message && fieldErrors?.message}</p>
          </div>
          <button
            type="submit"
            name="Send"
            className="contact-btn bg-contact-send hover:bg-contact-sendHover focus:bg-contact-sendHover rounded-lg text-base mt-7 text-white py-3 w-full"
          >
            {buttonText}
          </button>
        </Form>
      </div>
      <div className="text-textLgColor flex justify-center mt-6 mb-10">
        <SocialMedia />
      </div>
    </div>
  );
};

export default ContactMeSection;
