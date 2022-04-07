import React from "react";
import { BLOCKS, MARKS, Node, INLINES } from "@contentful/rich-text-types";
import { Options } from "@contentful/rich-text-react-renderer";
import { TagLink } from "contentful";
import EntryHyperLink from "~/components/Contentful/EntryHyperLink/EntryHyperLink";
import HyperLink from "~/components/Contentful/HyperLink/HyperLink";
import BlockQuote from "~/components/Contentful/BlockQuote/BlockQuote";
import {
  ContentfulBlogPost,
  ContentfulCodeBlock,
  ContentfulCodeSandbox,
  ContentfulGif,
  ContentfulIllustration,
  ContentfulQuote,
  ContentfulStickyNote,
  ContentfulTable,
  ContentfulVideo
} from "./types";
import BlogPostTags from "~/components/Blog/BlogPostTags";
import ImageMedia from "~/components/Contentful/ImageMedia/ImageMedia";
import CodeBlock from "~/components/Contentful/CodeBlock/CodeBlock";
import HeadingFive from "~/components/Contentful/Heading/HeadingFive";
import HeadingOne from "~/components/Contentful/Heading/HeadingOne";
import HeadingTwo from "~/components/Contentful/Heading/HeadingTwo";
import HeadingThree from "~/components/Contentful/Heading/HeadingThree";
import HeadingFour from "~/components/Contentful/Heading/HeadingFour";
import HeadingSix from "~/components/Contentful/Heading/HeadingSix";
import StickyNote from "~/components/Contentful/StickyNote/StickyNote";
import { addColour } from "./contentfulUtils";
import Illustration from "~/components/Contentful/Illustration/Illustration";

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
      const [className, setClassName] = React.useState<string>("");
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
        setClassName(
          randomColor !== undefined ? randomColor : "custom-underline--yellow"
        );
      }
      React.useEffect(() => randomUnderlinedColor(), [className]);
      return (
        <span className={`custom-underline text-post-bodyTextLg ${className}`}>
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
    [BLOCKS.PARAGRAPH]: (node: Node, children) => {
      return (
        // There's an error in the types for @contentful/rich-text-react-renderer, type cast as necessary. $$TODO: File an issue to contentful for this issue, potentially fix it too.
        <p className="BlogPost__Paragraph text-lg relative z-10">
          {addColour(children as React.ReactNode[])}
        </p>
      );
    },
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
    [BLOCKS.OL_LIST]: (node: Node, children) => (
      <ol className="ml-12 mb-8 list-decimal">{children}</ol>
    ),
    [BLOCKS.UL_LIST]: (node: Node, children) => (
      <ul className="list-disc ml-10">{children}</ul>
    ),
    [BLOCKS.LIST_ITEM]: (node: any, children) => {
      return (
        <li className="List__Item text-xl list-item leading-8">{children}</li>
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
        case "table":
          const tableData: ContentfulTable = node.data.target.fields;
          return (
            <div
              className="table-container text-lg mt-5 mb-10 text-left mx-auto w-full"
              dangerouslySetInnerHTML={{ __html: tableData.tableMarkdown }}
            ></div>
          );
        case "illustration":
          const illustrationData: ContentfulIllustration =
            node.data.target.fields;
          return (
            <Illustration
              rawData={illustrationData}
              location="outside sticky"
            />
          );
        case "rawVideoHtml":
          const videoMarkupData: ContentfulVideo = node.data.target.fields;
          const videoMarkup: string = videoMarkupData.rawHtmlMarkup;
          return <div dangerouslySetInnerHTML={{ __html: videoMarkup }}></div>;
        case "blogPost":
          const post: ContentfulBlogPost = node.data.target.fields;
          const tags: TagLink[] = node.data.target.metadata.tags;
          return (
            <a
              href={`/blog/${post.blogPostSlug}`}
              className="flex flex-col custom2:flex-row w-full EmbeddedEntry_BlogPost_Card mt-4 px-5 pt-5 custom2:p-5 rounded-lg"
              key={post.blogPostSlug}
            >
              <img
                src={post.blogPostSplash.fields.file.url}
                alt={post.blogPostSplash.fields.title}
                title={post.blogPostSplash.fields.title}
                className="object-cover w-full mb-2 custom2:mb-0 custom2:max-w-[240px] custom2:mr-5 rounded-lg"
              />
              <div className="flex flex-col items-baseline justify-between">
                <span className="text-xl mb-2 text-blog-lgText font-bold">
                  {post.blogPostTitle}
                </span>
                <p className="text-base text-gray-400">
                  {post.blogPostExcerpt}
                </p>
                <BlogPostTags tags={tags} />
              </div>
            </a>
          );
        case "codeBlock":
          const codeBlockData: ContentfulCodeBlock = node.data.target.fields;
          return <CodeBlock data={codeBlockData} />;
        case "stickyNote":
          const noteData: ContentfulStickyNote = node.data.target.fields;
          return <StickyNote stickyData={noteData} />;
        case "gif":
          const gifData: ContentfulGif = node.data.target.fields;
          return (
            <div dangerouslySetInnerHTML={{ __html: gifData.gifMarkup }} />
          );
        case "codeSandbox":
          const sandboxData: ContentfulCodeSandbox = node.data.target.fields;
          return (
            <div className="BlogPost__SandBox__Container mt-5">
              <div
                dangerouslySetInnerHTML={{ __html: sandboxData.rawMarkup }}
              ></div>
            </div>
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
              alt={node.data.target.fields.title}
              description={maybeDescription ? maybeDescription : undefined}
            />
          );
        default:
          return (
            <ImageMedia
              src={node.data.target.fields.file.url}
              alt={node.data.target.fields.title}
              description={maybeDescription ? maybeDescription : undefined}
            />
          );
      }
    },
    [BLOCKS.TABLE]: (node, children) => (
      <table>
        <tbody>{children}</tbody>
      </table>
    ),
    [BLOCKS.TABLE_ROW]: (node, children) => <tr>{children}</tr>,
    [BLOCKS.TABLE_CELL]: (node, children) => <td>{children}</td>,
    [BLOCKS.TABLE_HEADER_CELL]: (node, children) => <thead>{children}</thead>
  }
};
