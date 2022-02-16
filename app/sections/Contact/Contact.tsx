import * as React from "react";
import { Form, LinksFunction } from "remix";
import Alert from "~/components/Alert";
import SocialMedia from "~/components/SocialMedia/SocialMedia";
import { AlertType, ContactFormFields } from "~/types";
import { ContactFormFieldErrors } from "~/utils/functions";

import styles from "./Contact.css";

interface Props {
  fieldErrors: Partial<ContactFormFieldErrors> | undefined;
}

export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: styles
  }
];

const ContactMeSection: React.FC<Props> = (props) => {
  const { fieldErrors } = props;

  const hasError = fieldErrors && Object.keys(fieldErrors).length > 0;
  const hasSuccess = fieldErrors && Object.keys(fieldErrors).length === 0;

  const ContactTitle = () => {
    return (
      <svg viewBox="0 0 1000 110" className="contact-title">
        <text textAnchor="middle" x="50%" y="90%" className="text-9xl">
          Get in touch
        </text>
      </svg>
    );
  };

  return (
    <div className="contact-wrapper flex flex-col items-center justify-center">
      <ContactTitle />
      <div className="spacer-div mt-20"></div>
      <div className="contact-form-wrapper w-1/2">
        <Form
          method="post"
          action="/?index"
          className="contact-form flex flex-col text-contact-label w-full"
        >
          {hasError ? <Alert message={"TESTS"} type={AlertType.ERROR} /> : null}
          {hasSuccess && !hasError ? (
            <Alert
              message={"I've received your message :)"}
              type={AlertType.CONFIRMED}
            />
          ) : null}
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
            required
            className="appearance-none rounded-lg relative block w-full px-3 py-1"
          />
          <div className="error">
            <p>{fieldErrors?.name && fieldErrors?.name}</p>
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
            required
            className="appearance-none rounded-lg relative block w-full px-3 py-1"
          />
          <div className="error">
            <p>{fieldErrors?.email && fieldErrors?.email}</p>
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
            required
            className="appearance-none rounded-lg relative block w-full px-3 py-2"
          />
          <div className="error">
            <p>{fieldErrors?.subject && fieldErrors?.subject}</p>
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
            required
            className="appearance-none rounded-lg relative block w-full px-3 py-1 mb-7"
          />
          <div className="error">
            <p>{fieldErrors?.message && fieldErrors?.message}</p>
          </div>
          <button
            type="submit"
            className="contact-btn bg-contact-send hover:bg-contact-sendHover rounded-lg text-base text-white py-3 w-full"
          >
            Send
          </button>
        </Form>
      </div>
      <div className="text-textLgColor flex justify-center mt-6">
        <SocialMedia />
      </div>
    </div>
  );
};

export default ContactMeSection;
