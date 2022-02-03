import * as React from "react";

interface Props {}

const Contact: React.FC<Props> = ({}) => {
  return (
    <div>
      <ContactTitle />
    </div>
  );
};

export default Contact;

const ContactTitle = () => {
  return (
    <svg viewBox="0 0 1280 720" className="contact-svg">
      <text textAnchor="middle" x="50%" y="50%" className="text-9xl">
        Get in touch.
      </text>
    </svg>
  );
};
