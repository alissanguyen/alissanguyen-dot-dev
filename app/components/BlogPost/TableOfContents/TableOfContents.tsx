import * as React from "react";
import { BLOCKS } from "@contentful/rich-text-types";
import {
  documentToReactComponents,
  Options
} from "@contentful/rich-text-react-renderer";

interface Props {}

// Implement this
const TabelOfContents: React.FC<{ body: any }> = ({ body }) => {
  // the body is the json object returned by the rich text field
  const headingTypes = [BLOCKS.HEADING_2, BLOCKS.HEADING_3];

  const headings = body.json.content.filter((item: any) =>
    headingTypes.includes(item.nodeType)
  );

  const document = {
    nodeType: "document",
    content: headings
  };

  const options: Options = {
    renderNode: {
      [BLOCKS.HEADING_2]: (node, children) => {
        return <li>{children}</li>;
      },
      [BLOCKS.HEADING_3]: (node, children) => {
        return (
          <nav>
            <h2>Table of contents</h2>
            <ul>{documentToReactComponents(document as any, options)}</ul>
          </nav>
        );
      }
    }
  };
  return <div>Hi</div>;
};

export default TabelOfContents;





