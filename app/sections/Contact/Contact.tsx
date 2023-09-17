import * as React from "react";
import { LinksFunction } from "@remix-run/node";
import { Form } from "@remix-run/react"
import Alert from "~/components/Alert";
import { contactFormHtmlId } from "~/constants";
import { useWasInViewAtLeastOnce } from "~/hooks/useWasInViewAtLeastOnce";
import { useTheme } from "~/providers/ThemeProvider";
import { AlertType, ContactFormFields, SupportedTheme } from "~/types";
import { ContactFormFieldErrors } from "~/utils/functions";
import styles from "./Contact.css";

interface Props {
  fieldErrors: Partial<ContactFormFieldErrors> | undefined;
  transition: any;
}

export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: styles
  }
];

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
      <div className="contact-form-wrapper">
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
            className="Form__Input rounded-lg relative block w-full px-3 py-1"
          />
          <div className={`error text-sm font-medium italic ${errorMessageClassname}`}>
            <p>{fieldErrors?.email && fieldErrors?.email}</p>
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
            className="Form__Input rounded-lg relative block w-full px-3 py-1"
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
  );
};

export default ContactMeSection;
