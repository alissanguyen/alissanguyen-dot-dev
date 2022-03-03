import { Node } from "@contentful/rich-text-types";
import * as React from "react";

interface Props {
  node: Node;
}

const BlockQuote: React.FC<Props> = (props) => {
  return (
    <div className="BlogPostBlockQuote__Container quote animated-border-quote">
        <blockquote>
            {props.children}
        </blockquote>
    </div>
  );
};

export default BlockQuote;
