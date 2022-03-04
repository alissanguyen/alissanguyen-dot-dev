import React from "react";
import { BLOCKS, MARKS, Node, INLINES } from "@contentful/rich-text-types";
import { Options } from "@contentful/rich-text-react-renderer";
import { TEXT_HIGHLIGHT } from "~/constants";
import { tagIdsToDisplayNames } from "~/components/Blog/BlogPostCard";
import { TagLink } from "contentful";
import HyperLink from "~/components/BlogPost/HyperLink/HyperLink";
import BlockQuote from "~/components/BlogPost/BlockQuote/BlockQuote";
import ImageMedia from "~/components/BlogPost/ImageMedia/ImageMedia";
import { ContentfulQuote } from "./contentful";

export const options: Options = {
  renderMark: {
    [MARKS.BOLD]: (text) => <span className="bold font-bold">{text}</span>,
    [MARKS.ITALIC]: (text) => <span className="italic">{text}</span>,
    [MARKS.UNDERLINE]: (text) => <span className="underlined">{text}</span>,
    // TODO: ADD CUSTOM CODE STYLING
    [MARKS.CODE]: (text) => <code className="italic">{text}</code>
  },
  renderNode: {
    [INLINES.ENTRY_HYPERLINK]: (node: Node, children) => (
      <HyperLink node={node}>{children}</HyperLink>
    ),
    [BLOCKS.DOCUMENT]: (node: Node, children) => <>{children}</>,
    [BLOCKS.PARAGRAPH]: (node: Node, children) => (
      // There's an error in the types for @contentful/rich-text-react-renderer, type cast as necessary. $$TODO: File an issue to contentful for this issue, potentially fix it too.
      <p className="BlogPost__Paragraph text-lg relative z-10">
        {addColour(children as React.ReactNode[])}
      </p>
    ),
    [BLOCKS.HEADING_1]: (node: Node, children) => (
      <h1 className="text-7xl">{children}</h1>
    ),
    [BLOCKS.HEADING_2]: (node: Node, children) => (
      <h2 className="text-6xl">{children}</h2>
    ),
    [BLOCKS.HEADING_3]: (node: Node, children) => (
      <h3 className="text-5xl">{children}</h3>
    ),
    [BLOCKS.HEADING_4]: (node: Node, children) => (
      <h4 className="text-4xl">{children}</h4>
    ),
    [BLOCKS.HEADING_5]: (node: Node, children) => (
      <h5 className="text-3xl">{children}</h5>
    ),
    [BLOCKS.HEADING_6]: (node: Node, children) => (
      <h6 className="text-2xl">{children}</h6>
    ),
    [BLOCKS.OL_LIST]: (node: Node, children) => <ol>{children}</ol>,
    [BLOCKS.UL_LIST]: (node: Node, children) => <ul>{children}</ul>,
    [BLOCKS.LIST_ITEM]: (node: Node, children) => <li>{children}</li>,
    [BLOCKS.HR]: (node: Node) => <hr></hr>,
    [BLOCKS.QUOTE]: (node: Node, children) => (
      <blockquote>{children}</blockquote>
    ),

    [BLOCKS.EMBEDDED_ENTRY]: (node, children) => {
      const contentModel = node.data.target.sys.contentType.sys.id;

      switch (contentModel) {
        case "quote":
          const quoteData: ContentfulQuote = node.data.target.fields;
          return <BlockQuote quoteData={quoteData} />;
        case "blogPost":
          const post = node.data.target.fields;
          const tags: TagLink[] = node.data.target.metadata.tags;
          return (
            <a
              href={`/blog/${post.blogPostSlug}`}
              className="flex flex-row w-full text-white"
              key={post.blogPostSlug}
            >
              <img
                src={post.blogPostSplash.fields.file.url}
                alt=""
                className="object-cover w-44"
              />
              <div className="flex flex-col items-baseline justify-between">
                <span className="text-2xl">{post.blogPostTitle}</span>
                <p className="text-lg">{post.blogPostExcerpt}</p>
                {tags.map((tag) => {
                  const tagName = tagIdsToDisplayNames[tag.sys.id];
                  return <span key={tag.sys.id}>{tagName}</span>;
                })}
              </div>
            </a>
          );
        default:
          return (
            <p className="text-base text-rose-500">Error loading asset entry</p>
          );
      }
    },
    [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
      const assetType = node.data.target.fields.file.contentType;
      const maybeDescription = node.data.target.fields.description as
        | string
        | undefined;
      switch (assetType) {
        case "video/mp4":
          // TODO: Add video stylings
          return (
            <video width="100%" height="100%" controls>
              <source src={node.data.target.fields.file.url} type="video/mp4" />
            </video>
          );
        case "image/jpeg":
        case "image/svg+xml":
        case "image/gif":
        case "image/png":
          return (
            <ImageMedia
              src={node.data.target.fields.file.url}
              alt={node.data.target.fields.description}
              description={maybeDescription ? maybeDescription : undefined}
            />
          );
        default:
          return (
            <ImageMedia
              src={node.data.target.fields.file.url}
              alt={node.data.target.fields.description}
            />
          );
      }
    },
    [BLOCKS.TABLE]: (node, children) => <div>{children}</div>,
    [BLOCKS.TABLE_ROW]: (node, children) => <div>{children}</div>,
    [BLOCKS.TABLE_CELL]: (node, children) => <div>{children}</div>,
    [BLOCKS.TABLE_HEADER_CELL]: (node, children) => <div>{children}</div>
  }
};

/**
 * Looks for a substring where there is a string surrounded by parens, immediately
 * followed by a word in brackets.
 */
const highlightedTextMatcher = /\((.+)\)(?=\[(\w+)\])/;

const addColour = (children: React.ReactNode[] = []) => {
  // flatMap returns a flattened array - very useful
  const mappedChildren = children.flatMap((child) => {
    if (typeof child === "string") {
      // the regex that handles parsing the actual string and extracting the text
      const matches = child.match(highlightedTextMatcher);
      if (matches) {
        const result = createSpanFromMatches(matches, child);
        return result;
      }
    }
    if (child !== null && typeof child === "object") {
      const element = child as JSX.Element;

      const content = element.props.children;
      const className = element.props.className;
      const matches =
        typeof content === "string" && content.match(highlightedTextMatcher);

      if (matches) {
        return createSpanFromMatches(matches, content, { className });
      }
    }
    // make sure to always return the content if there is no match to the regex
    return child;
  });

  return mappedChildren;
};

const createSpanFromMatches = (
  matches: RegExpMatchArray,
  text: string,
  restProps = {}
) => {
  const content = text.split(`${matches[0]}[${matches[2]}]`);

  //   const tempSentence = text.replace(`${matches[0]}[${matches[2]}]`, "## ##")
  //   const sentence = tempSentence.split("##")

  // $TODO: this will cause more text than expected to be highlighted if there are multiple highlights within one html element

  return [
    content[0],
    <span
      {...restProps}
      style={{ color: "#000000", backgroundColor: `${contentfulHighlights[matches[2]]}` }}
    >
      {matches[1]}
    </span>,
    content[1]
  ];

  //   return [...new Set(sentence)] // get the unique values / avoid ["", ""] - when there are no other parts of text
  //     .map((text) =>
  //       text === " " ? ( // map over the unique values to replace that which was split
  //         <span {...restProps} style={{ backgroundColor: `${matches[2]}` }}>
  //           {matches[1]}
  //         </span> // return the element with the colour
  //       ) : (
  //         text
  //       )
  //     ); // or return the text
};

const contentfulHighlights: Record<string, string> = {
  blue: TEXT_HIGHLIGHT.BLUE,
  yellow: TEXT_HIGHLIGHT.YELLOW,
  green: TEXT_HIGHLIGHT.GREEN,
  red: TEXT_HIGHLIGHT.RED,
  orange: TEXT_HIGHLIGHT.ORANGE,
  pink: TEXT_HIGHLIGHT.PINK,
  purple: TEXT_HIGHLIGHT.PURPLE
};
