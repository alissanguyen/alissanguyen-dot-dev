import * as React from "react";
import { ImNpm } from "react-icons/im";
import { BiLinkExternal } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
interface Props {
  type: ExternalLinkType;
  href: string;
}

export type ExternalLinkType = "Github" | "NPM" | "Website";

const SmallExternalLinkButton: React.FC<Props> = (props) => {
  return (
    <a
      className="ExternalLinkButton__Wrapper py-2 px-3 text-sm text-projects-text"
      href={props.href}
      target="_blank"
    >
      <button className="ExternalLinkButton__SmallButton">
        {props.type === "Github" ? (
          <BsGithub className="w-5 h-5" />
        ) : props.type === "Website" ? (
          <BiLinkExternal className="w-5 h-5" />
        ) : (
          <ImNpm className="w-5 h-5" />
        )}
      </button>
    </a>
  );
};

export default SmallExternalLinkButton;
