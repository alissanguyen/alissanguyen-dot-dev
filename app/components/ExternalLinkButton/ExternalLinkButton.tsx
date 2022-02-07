import * as React from "react";
import { Link, LinkProps, LinksFunction } from "remix";
import styles from "./ExternalLinkButton.css";

interface Props {
  to: string;
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
    <Link
      {...props.linkProps}
      to={props.to}
      className={"ExternalLinkButton__Wrapper py-2 px-3"}
    >
      <button className={"ExternalLinkButton__Button"}>
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
    </Link>
  );
};

const ExternalLinkSvg = () => {
  return (
    <svg
      fill="none"
      height="20"
      stroke="currentColor"
      stroke-linecap="square"
      stroke-linejoin="arcs"
      stroke-width="1"
      viewBox="0 0 24 24"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
      className="ExternalLinkButton__Icon absolute"
    >
      <path d="M5 12h13M12 5l7 7-7 7"></path>
    </svg>
  );
};

/**
 * <LinkBu
 */

export default ExternalLinkButton;
