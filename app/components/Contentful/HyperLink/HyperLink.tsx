import * as React from "react";

interface Props {
  url: string;
}

const HyperLink: React.FC<Props> = (props) => {
  return (
    <a href={props.url} className="BlogPost__HyperLink text-post-bodyTextLg">
      {props.children}
    </a>
  );
};

export default HyperLink;
