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
      <button className="ExternalLinkButton__SmallButton flex items-center justify-center">
        {props.type === "Github" ? (
          <BsGithub className="w-5 h-5 hover:text-blue-600" />
        ) : props.type === "Website" ? (
          <BiLinkExternal className="w-5 h-5 hover:text-sky-400" />
        ) : (
          <div className="h-5 w-5 flex items-center justify-center">
            <ImNpm className="w-4 h-4 hover:text-rose-600" />
          </div>
        )}
      </button>
    </a>
  );
};

export default SmallExternalLinkButton;
