import * as React from "react";
import { LinkProps, LinksFunction } from "remix";
import styles from "./ExternalLinkButton.css";

interface Props {
  to: string;
  accessibilityName: string;
  linkProps?: Omit<LinkProps, "to">;
  children: JSX.Element | string;
}

export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: styles
  }
];

const ExternalLinkButton: React.FC<Props> = (props) => {
  const children =
    typeof props.children === "string" ? (
      <span>{props.children}</span>
    ) : (
      props.children
    );

  return (
    <a
      {...props.linkProps}
      href={props.to}
      className={"ExternalLinkButton__Wrapper py-2 px-3 text-sm"}
    >
      <button
        role="link"
        name={props.accessibilityName}
        aria-label={props.accessibilityName}
        tabIndex={-1}
        className={"ExternalLinkButton__Button"}
      >
        {React.cloneElement(children, {
          ...children.props,
          className: "ExternalLinkButton__ButtonContents relative inline-flex",
          children: (
            <>
              {children.props.children}
              <div className="relative flex items-center">
                <ExternalLinkSvg />
              </div>
            </>
          )
        })}
      </button>
    </a>
  );
};

const ExternalLinkSvg = () => {
  return (
    <svg
      fill="none"
      height="20"
      stroke="currentColor"
      strokeLinecap="square"
      strokeLinejoin="inherit"
      strokeWidth="1"
      viewBox="0 0 24 24"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
      className="ExternalLinkButton__Icon absolute"
    >
      <path d="M5 12h13M12 5l7 7-7 7"></path>
    </svg>
  );
};

export default ExternalLinkButton;
