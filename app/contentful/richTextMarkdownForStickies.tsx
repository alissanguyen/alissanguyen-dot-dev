import React from "react";
import { BLOCKS, MARKS, Node, INLINES } from "@contentful/rich-text-types";
import { Options } from "@contentful/rich-text-react-renderer";
import EntryHyperLink from "~/components/Contentful/EntryHyperLink/EntryHyperLink";
import { ContentfulIllustration } from "./types";
import ImageMedia from "~/components/Contentful/ImageMedia/ImageMedia";
import HeadingFive from "~/components/Contentful/Heading/HeadingFive";
import HeadingThree from "~/components/Contentful/Heading/HeadingThree";
import HeadingFour from "~/components/Contentful/Heading/HeadingFour";
import HeadingSix from "~/components/Contentful/Heading/HeadingSix";
import { addColour } from "./contentfulUtils";
import { useTheme } from "~/providers/ThemeProvider";
import { SupportedTheme } from "~/types";
import Illustration from "~/components/Contentful/Illustration/Illustration";

export const stickyOptions: Options = {
  renderMark: {
    [MARKS.BOLD]: (text) => {
      const { theme } = useTheme();
      return (
        <span
          className={`bold font-bold opacity-90 ${
            theme === SupportedTheme.LIGHT ? "text-black" : "text-white"
          }`}
        >
          {addColour([text])}
        </span>
      );
    },
    [MARKS.ITALIC]: (text) => {
      return <span className="italic">{text}</span>;
    },
    [MARKS.UNDERLINE]: (text) => {
      return <span className={`custom-underline`}>{text}</span>;
    },
    [MARKS.CODE]: (children) => {
      return (
        <code className="BlogPost__Paragraph__Code inline-flex font-medium">
          {children}
        </code>
      );
    }
  },
  renderNode: {
    [INLINES.HYPERLINK]: (node: Node, children) => {
      const { theme } = useTheme();
      return (
        <a
          className={`BlogPost__HyperLink ${
            theme === SupportedTheme.DARK
              ? "text-cyan-200 hover:text-white"
              : "text-cyan-700 hover:text-black"
          }`}
          href={node.data.uri}
        >
          {children}
        </a>
      );
    },
    [INLINES.ENTRY_HYPERLINK]: (node: Node, children) => (
      <EntryHyperLink node={node}>{children}</EntryHyperLink>
    ),
    [BLOCKS.DOCUMENT]: (node: Node, children) => <>{children}</>,
    [BLOCKS.PARAGRAPH]: (node: Node, children) => (
      // There's an error in the types for @contentful/rich-text-react-renderer, type cast as necessary. $$TODO: File an issue to contentful for this issue, potentially fix it too.
      <p className="Sticky__Paragraph">
        {addColour(children as React.ReactNode[])}
      </p>
    ),
    [BLOCKS.HEADING_3]: (node: Node, children) => (
      <HeadingThree>{children}</HeadingThree> //text-4xl
    ),
    [BLOCKS.HEADING_4]: (node: Node, children) => (
      <HeadingFour>{children}</HeadingFour> //text-3xl
    ),
    [BLOCKS.HEADING_5]: (node: Node, children) => (
      <HeadingFive>{children}</HeadingFive> //text-2xl
    ),
    [BLOCKS.HEADING_6]: (node: Node, children) => (
      <HeadingSix>{children}</HeadingSix> //text-xl
    ),
    [BLOCKS.OL_LIST]: (node: Node, children) => (
      <ol className="list-decimal">{children}</ol>
    ),
    [BLOCKS.UL_LIST]: (node: Node, children) => (
      <ul className="list-disc">{children}</ul>
    ),
    [BLOCKS.LIST_ITEM]: (node: any, children) => {
      return (
        <li className="inline-flex list-item leading-8 ml-10">{children}</li>
      );
    },
    [BLOCKS.HR]: (node: Node) => <div className="spacer-div h-7"></div>,
    [BLOCKS.EMBEDDED_ENTRY]: (node, children) => {
      const contentModel = node.data.target.sys.contentType.sys.id;
      switch (contentModel) {
        case "illustration":
          const illustrationData: ContentfulIllustration =
            node.data.target.fields;
          return (
            <Illustration rawData={illustrationData} location="inside sticky" />
          );
        default:
          return <p className="text-rose-500">Error loading asset entry</p>;
      }
    },
    [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
      const assetType = node.data.target.fields.file.contentType;
      const maybeDescription = node.data.target.fields.description as
        | string
        | undefined;
      // Stickies should only take images as media assets, no videos
      return (
        <ImageMedia
          src={node.data.target.fields.file.url}
          alt={node.data.target.fields.description}
          description={maybeDescription ? maybeDescription : undefined}
        />
      );
    },
    // TODO: Add table styling
    [BLOCKS.TABLE]: (node, children) => <div>{children}</div>,
    [BLOCKS.TABLE_ROW]: (node, children) => <div>{children}</div>,
    [BLOCKS.TABLE_CELL]: (node, children) => <div>{children}</div>,
    [BLOCKS.TABLE_HEADER_CELL]: (node, children) => <div>{children}</div>
  }
};
