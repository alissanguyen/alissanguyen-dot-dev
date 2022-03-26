import React from "react";
import { BLOCKS, MARKS, Node, INLINES } from "@contentful/rich-text-types";
import { Options } from "@contentful/rich-text-react-renderer";
import { TEXT_HIGHLIGHT } from "~/constants";
import { TagLink } from "contentful";
import EntryHyperLink from "~/components/Contentful/EntryHyperLink/EntryHyperLink";
import HyperLink from "~/components/Contentful/HyperLink/HyperLink";
import BlockQuote from "~/components/Contentful/BlockQuote/BlockQuote";
import { ContentfulQuote } from "./types";
import BlogPostTags from "~/components/Blog/BlogPostTags";
import ImageMedia from "~/components/Contentful/ImageMedia/ImageMedia";
import CodeBlock from "~/components/Contentful/CodeBlock/CodeBlock";
import { BsDot } from "react-icons/bs";
import HeadingFive from "~/components/Contentful/Heading/HeadingFive";
import HeadingOne from "~/components/Contentful/Heading/HeadingOne";
import HeadingTwo from "~/components/Contentful/Heading/HeadingTwo";
import HeadingThree from "~/components/Contentful/Heading/HeadingThree";
import HeadingFour from "~/components/Contentful/Heading/HeadingFour";
import HeadingSix from "~/components/Contentful/Heading/HeadingSix";
function randomUnderlinedColor() {
  const underlinedColorClassNames = [
    "custom-underline--yellow",
    "custom-underline--green",
    "custom-underline--red"
  ];
  const randomColor =
    underlinedColorClassNames[
      Math.floor(Math.random() * underlinedColorClassNames.length)
    ];
  return randomColor;
}

export const options: Options = {
  renderMark: {
    [MARKS.BOLD]: (text) => (
      <span className="bold font-bold text-post-bodyTextLg">
        {addColour([text])}
      </span>
    ),
    [MARKS.ITALIC]: (text) => (
      <span className="italic text-post-bodyTextLg">{text}</span>
    ),
    [MARKS.UNDERLINE]: (text) => {
      const underlinedClassName = randomUnderlinedColor();
      return (
        <span className={`custom-underline ${underlinedClassName}`}>
          {text}
        </span>
      );
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
    [INLINES.HYPERLINK]: (node: Node, children) => (
      <HyperLink url={node.data.uri}>{children}</HyperLink>
    ),
    [INLINES.ENTRY_HYPERLINK]: (node: Node, children) => (
      <EntryHyperLink node={node}>{children}</EntryHyperLink>
    ),
    [BLOCKS.DOCUMENT]: (node: Node, children) => <>{children}</>,
    [BLOCKS.PARAGRAPH]: (node: Node, children) => (
      // There's an error in the types for @contentful/rich-text-react-renderer, type cast as necessary. $$TODO: File an issue to contentful for this issue, potentially fix it too.
      <p className="BlogPost__Paragraph text-lg relative z-10">
        {addColour(children as React.ReactNode[])}
      </p>
    ),
    [BLOCKS.HEADING_1]: (node: Node, children) => (
      <HeadingOne>{children}</HeadingOne> //text-6xl
    ),
    [BLOCKS.HEADING_2]: (node: Node, children) => (
      <HeadingTwo>{children}</HeadingTwo> //text-5xl
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
    [BLOCKS.OL_LIST]: (node: Node, children) => <ol>{children}</ol>,
    [BLOCKS.UL_LIST]: (node: Node, children) => (
      <ul className="list-disc ml-10">{children}</ul>
    ),
    [BLOCKS.LIST_ITEM]: (node: Node, children) => {
      const stringToDisplay = node.content[0].content[0].value;
      return (
        <li className="text-xl inline-flex list-item list-disc leading-8">
          {stringToDisplay}
        </li>
      );
    },
    [BLOCKS.HR]: (node: Node) => <div className="spacer-div h-7"></div>,
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
              className="flex flex-row w-full EmbeddedEntry_BlogPost_Card p-5 rounded-lg"
              key={post.blogPostSlug}
            >
              <img
                src={post.blogPostSplash.fields.file.url}
                alt="cover image for post"
                className="object-cover max-w-[300px] mr-10 rounded-lg"
              />
              <div className="flex flex-col items-baseline justify-between">
                <span className="text-2xl text-blog-lgText font-bold">
                  {post.blogPostTitle}
                </span>
                <p className="text-lg text-gray-400">{post.blogPostExcerpt}</p>
                <BlogPostTags tags={tags} />
              </div>
            </a>
          );
        // case "codeblock":
        //   const data = node.data.target.fields.content;

        case "codeBlock":
          const data = node.data.target.fields.codeText;
          return <CodeBlock data={data} />;
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
              description={maybeDescription ? maybeDescription : undefined}
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

/**
 * The purpose of this function is to check if any of the passed in children
 * or any of the passed in children's children meet the regex pattern of text
 * inside parens followed by text inside brackets. If so, it returns a span
 * wrapper around the string that meets the pattern. The span has a classname
 * to apply some colored text and appropriate background color, aka a highlight.
 * If it does not, just return the children as is.
 */
const addColour = (children: null | React.ReactNode[] = []) => {
  if (children === null) {
    /**
     * Perhaps an overly defensive check, but we can't trust everything
     * contentful gives us ;)
     */
    return children;
  }

  // flatMap returns a flattened array - very useful
  const mappedChildren = children.flatMap((child) => {
    /**
     * child is a string when the node is normal text without any italicization,
     * bolding, underlining, strikethrough, etc.
     */
    if (typeof child === "string") {
      // the regex that handles parsing the actual string and extracting the text
      const matches = child.match(highlightedTextMatcher);
      if (matches) {
        const result = createSpanFromMatches(matches, child);
        return result;
      }
    }

    /**
     *
     */
    if (typeof child === "object") {
      const element = child as JSX.Element;

      const content = element.props.children;

      const className = element.props.className;
      const stringMatches =
        typeof content === "string" && content.match(highlightedTextMatcher);

      /**
       * Handle the case where content is an object. This is when the highlighted text is also bolded or italicized, or both
       */
      if (
        content &&
        content.props &&
        typeof content.props.children === "string"
      ) {
        const textContent = content.props.children;

        const objectChildMatches = textContent.match(highlightedTextMatcher);

        /**
         * objectChildMatches will only be true when the child we're looking at
         * meets the regex pattern of text inside parens followed by text inside
         * brackets
         */
        if (objectChildMatches) {
          return createSpanFromMatches(objectChildMatches, textContent, {
            className
          });
        }
      }

      /**
       * stringMatches will only be truthy when it meets the regex pattern of
       * text inside parens followed by text inside brackets
       */
      if (stringMatches) {
        return createSpanFromMatches(stringMatches, content, { className });
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

  // $TODO: this will cause more text than expected to be highlighted if there are multiple highlights within one html element
  return [
    content[0],
    <span
      key={matches[1]}
      {...restProps}
      style={{
        color: "#000000",
        backgroundColor: `${contentfulHighlights[matches[2]]}`
      }}
    >
      {matches[1]}
    </span>,
    content[1]
  ];
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
