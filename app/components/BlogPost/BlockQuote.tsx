import { Node } from "@contentful/rich-text-types";
import * as React from "react";

interface Props {
  node: Node;
}

const BlockQuote: React.FC<Props> = (props) => {
  return (
    <div className="animated-border-quote">
      <blockquote className="BlogPostBlockQuote__Container text-black ">
        {props.children}
      </blockquote>
    </div>
  );
};

export default BlockQuote;
