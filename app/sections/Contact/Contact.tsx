import * as React from "react";
import { LinksFunction } from "@remix-run/node";
import { Form } from "@remix-run/react"
import Alert from "~/components/Alert";
import { contactFormHtmlId } from "~/constants";
import { useTheme } from "~/providers/ThemeProvider";
import { AlertType, ContactFormFields, SupportedTheme } from "~/types";
import { ContactFormFieldErrors } from "~/utils/functions";
import styles from "./Contact.css";
import SparkleSVG from "~/components/SparkleSVG";

interface Props extends React.PropsWithChildren {
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

  const buttonText = hasError ? "Failed to send" :
    transition.state === "submitting"
      ? "Sending..."
      : transition.state === "loading"
        ? "Sent!"
        : "Send";

  return (
    <div className="" id="contact">
      <div className='flex flex-row items-center text-2xl gap-3 font-medium w-fit rounded-3xl border-2 border-gray-300 text-textSmColor px-8 py-2'>
        <SparkleSVG />
        <h2>Contact Me</h2>
      </div>
      <p className="Slogan ContactMe__Slogan gradient-text my-6">Let's make something<br></br>awesome together!</p>
      <div className="contact-form-wrapper gap-5 mt-5 text-lg w-full">
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
        ) : null}
        <Form
          id={contactFormHtmlId}
          method="post"
          action="/?index"
          className="contact-form flex flex-col text-contact-label w-full"
        >
          <div className="user-box relative">
            <input
              id={ContactFormFields.name}
              name={ContactFormFields.name}
              type="text"
              required
              pattern="^[a-zA-Z\s]+$"
              className="Form__Input relative block w-full md:w-[1/2] px-3 py-1"
            />
            <label
              htmlFor={ContactFormFields.name}
              className="text-base pt-2 pb-1"
            >
              Your name
            </label>
            <div className={`error text-sm font-medium italic ${errorMessageClassname}`}>
              <p>{fieldErrors?.name && fieldErrors?.name}</p>
            </div>
          </div>

          <div className="user-box relative">
            <input
              id={ContactFormFields.email}
              name={ContactFormFields.email}
              type="email"
              required
              pattern="^[A-Za-z0-9._\%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$)"
              className="Form__Input relative block w-full md:w-[1/2] px-3 py-1"
            />
            <label
              htmlFor={ContactFormFields.email}
              className="text-base pt-2 pb-1"
            >
              Your email
            </label>
            <div className={`error text-sm font-medium italic ${errorMessageClassname}`}>
              <p>{fieldErrors?.email && fieldErrors?.email}</p>
            </div>
          </div>
          <div className="user-box relative">
            <textarea
              id={ContactFormFields.message}
              name={ContactFormFields.message}
              required
              className="Form__Input relative block w-full md:w-[80%] px-3 py-1"
            />
            <label
              htmlFor={ContactFormFields.message}
              className="text-textLgcolor text-base pt-2 pb-1"
            >
              Your message
            </label>
            <div className={`error text-sm font-medium italic ${errorMessageClassname}`}>
              <p>{fieldErrors?.message && fieldErrors?.message}</p>
            </div>
          </div>

          <button
            type="submit"
            name="Send"
            className="contact-btn border-2 border-contact-buttonBorder hover:bg-contact-buttonHover rounded-lg text-base mt-7 text-lgColor py-3 w-full"
          >
            {buttonText}
          </button>
        </Form>
      </div>
    </div>

  );
};

export default ContactMeSection;
