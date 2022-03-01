import React from "react";
import { BLOCKS, MARKS, Node, INLINES } from "@contentful/rich-text-types";
import { Options } from "@contentful/rich-text-react-renderer";
import { TEXT_HIGHLIGHT } from "~/constants";
import { tagIdsToDisplayNames } from "~/components/Blog/BlogPostCard";
import { TagLink } from "contentful";

export const Text: React.FC = ({ children }) => (
  <p className="blog-text text-sm">{children}</p>
);

export const Title: React.FC = ({ children }) => (
  <h1 className="blog-title text-4xl">{children}</h1>
);

interface ContentfulRenderedComponentProps {
  node: Node;
}

/**
 * When I publish a blog post and I link to another blog post, this is the component
 * that is rendered!
 */
const ContentfulEmbeddedHyperlinkToInternalBlogPost: React.FC<
  ContentfulRenderedComponentProps
> = (props) => {
  console.log("INSIDE ContentfulEmbeddedHyperlink", props.node);

  const otherPostSlug: string = props.node.data.target.fields.blogPostSlug;

  return (
    <a style={{ color: "red" }} href={`/blog/${otherPostSlug}`}>
      {props.children}
    </a>
  );
};

export const options: Options = {
  renderMark: {
    [MARKS.BOLD]: (text) => <span className="bold font-medium">{text}</span>,
    [MARKS.ITALIC]: (text) => <span className="italic">{text}</span>,
    [MARKS.UNDERLINE]: (text) => <span className="underlined">{text}</span>,
    // TODO: ADD CUSTOM CODE STYLING
    [MARKS.CODE]: (text) => <code className="italic">{text}</code>
    // TODO: ADD CUSTOM HIGHLIGHT TEXT
  },
  //   renderText: {

  //   },
  renderNode: {
    [INLINES.ENTRY_HYPERLINK]: (node: Node, children) => (
      <ContentfulEmbeddedHyperlinkToInternalBlogPost node={node}>
        {children}
      </ContentfulEmbeddedHyperlinkToInternalBlogPost>
    ),
    [BLOCKS.DOCUMENT]: (node: Node, children) => <>{children}</>,
    [BLOCKS.PARAGRAPH]: (node: Node, children) => (
      // There's an error in the types for @contentful/rich-text-react-renderer, type cast as necessary. $$TODO: File an issue to contentful for this issue, potentially fix it too.
      <p className="BlogPost_paragraph text-lg">
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
      // TODO: CUSTOM QUOTE STYLINGS
      <blockquote>{children}</blockquote>
    ),
    [BLOCKS.EMBEDDED_ENTRY]: (node, children) => {
      const post = node.data.target.fields;
      const tags: TagLink[] = node.data.target.metadata.tags;
      console.log("EMBEDDED ENTRY", tags);
      return (
        <a
          href={`/blog/${post.blogPostSlug}`}
          className="flex flex-row w-full text-white"
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
              return <span>{tagName}</span>;
            })}
          </div>
        </a>
      );
    },
    [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
      const assetType = node.data.target.fields.file.contentType;
      console.log(node);
      const maybeDescription = node.data.target.fields.description as
        | string
        | undefined;
      switch (assetType) {
        case "video/mp4":
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
            <>
              <img
                src={node.data.target.fields.file.url}
                alt={node.data.target.fields.description}
              />
              {/* $TODO: style this later */}
              {maybeDescription !== undefined && <em>{maybeDescription}</em>}
            </>
          );
        default:
          console.log("Received unknown asset type: ", assetType);
          return "Nothing to see here...";
      }
    },
    [BLOCKS.TABLE]: (node, children) => <div>{children}</div>,
    [BLOCKS.TABLE_ROW]: (node, children) => <div>{children}</div>,
    [BLOCKS.TABLE_CELL]: (node, children) => <div>{children}</div>,
    [BLOCKS.TABLE_HEADER_CELL]: (node, children) => <div>{children}</div>
  }
};

const addColour = (children: React.ReactNode[] = []) => {
  console.log("Inside addColour", children);

  // flatMap returns a flattened array - very useful
  const mappedChildren = children.flatMap((child) => {
    if (typeof child === "string") {
      console.log("1");
      // the regex that handles parsing the actual string and extracting the text
      const matches = child.match(/\((.+)\)(?=\[(#\w+)\])/);
      if (matches) {
        console.log("2");
        console.log("matches", matches);
        const result = createSpanFromMatches(matches, child);

        console.log("result", result);

        return result;
      }
    }
    if (child !== null && typeof child === "object") {
      console.log("3");
      const element = child as JSX.Element;

      const content = element.props.children;
      const className = element.props.className;
      const matches =
        typeof content === "string" && content.match(/\((.+)\)(?=\[(#\w+)\])/);

      if (matches) {
        console.log("4");
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
  //   console.log("content", content);
  //   console.log("sentence", sentence);

  // $TODO: this will cause more text than expected to be highlighted if there are multiple highlights within one html element

  return [
    content[0],
    <span
      {...restProps}
      style={{ backgroundColor: `${contentfulHighlights[matches[2]]}` }}
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
