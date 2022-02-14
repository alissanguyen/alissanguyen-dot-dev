import * as React from "react";
import { Form, LinksFunction } from "remix";
import Alert from "~/components/Alert";
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

  console.log(hasSuccess, fieldErrors);

  return (
    <div className="contact-wrapper flex flex-col items-center justify-center">
      <ContactTitle />
      <div className="spacer-div mt-20"></div>
      <Form
        method="post"
        action="/?index"
        className="contact-form flex flex-col text-textLgColor w-1/2"
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
          className="appearance-none rounded-lg relative block w-full px-3 py-1 mb-7"
        />
        <div className="error">
          <p>{fieldErrors?.message && fieldErrors?.message}</p>
        </div>
        <button
          type="submit"
          className="contact-btn bg-blue-600 text-white p-5 w-full"
        >
          Send
        </button>
      </Form>
    </div>
  );
};

export default ContactMeSection;
