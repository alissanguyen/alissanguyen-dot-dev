import * as React from "react";
import { ContentfulStickyNote } from "~/contentful/types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { stickyOptions } from "~/contentful/richTextMarkdownForStickies";
import { STICKY_BORDER, STICKY_HIGHLIGHT } from "~/constants";
interface Props {
  stickyData: ContentfulStickyNote;
}

const StickyNote: React.FC<Props> = (props) => {
  const stickyColorCode = props.stickyData.stickyColor;
  const stickyBgColor = contentfulStickyBackgrounds[stickyColorCode];
  const stickyBorderColor = contentfulStickyBorders[stickyColorCode];

  const body = documentToReactComponents(
    props.stickyData.stickyBodyRichText as any,
    stickyOptions
  );
  console.log(body, "STICKY BODY RICH TEXT");
  return (
    <div
      className="Sticky__Container mt-5 px-5 py-3 rounded-r-xl"
      style={{
        borderLeft: `solid 6px ${stickyBorderColor}`,
        backgroundColor: `${stickyBgColor}`,
        color: `${stickyBorderColor}`
      }}
    >
      <p className="Sticky__Title text-xl font-extrabold tracking-wide">
        {props.stickyData.stickyTitle}
      </p>
      <div className="text-lg mx-5 my-3 font-medium">{body}</div>
    </div>
  );
};

export default StickyNote;

const contentfulStickyBackgrounds: Record<string, string> = {
  yellow: STICKY_HIGHLIGHT.YELLOW,
  blue: STICKY_HIGHLIGHT.BLUE,
  pink: STICKY_HIGHLIGHT.PINK,
  green: STICKY_HIGHLIGHT.GREEN,
  orange: STICKY_HIGHLIGHT.ORANGE,
  purple: STICKY_HIGHLIGHT.PURPLE,
  red: STICKY_HIGHLIGHT.RED
};

const contentfulStickyBorders: Record<string, string> = {
  yellow: STICKY_BORDER.YELLOW,
  blue: STICKY_BORDER.BLUE,
  pink: STICKY_BORDER.PINK,
  green: STICKY_BORDER.GREEN,
  orange: STICKY_BORDER.ORANGE,
  purple: STICKY_BORDER.PURPLE,
  red: STICKY_BORDER.RED
};
