import { Node } from "@contentful/rich-text-types";
import * as React from "react";

interface Props {
  node: Node;
}

/**
 * When I publish a blog post and I link to another blog post, this is the component
 * that is rendered!
 */
const HyperLink: React.FC<Props> = (props) => {
  const otherPostSlug: string = props.node.data.target.fields.blogPostSlug;

  return (
    //   TODO: Add stylings when hover
    <a style={{ color: "blue" }} href={`/blog/${otherPostSlug}`}>
      {props.children}
    </a>
  );
};

export default HyperLink;
