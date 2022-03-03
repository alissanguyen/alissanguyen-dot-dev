import { Entry } from "contentful";
import * as React from "react";
import { LinksFunction, LoaderFunction, useLoaderData } from "remix";
import { ContentfulBlogPost } from "~/contentful/contentful";
import { fixedWidthLayoutClasses } from "~/constants";
import { getContentfulBlogPostBySlug } from "~/contentful/contentfulClient";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { options } from "~/contentful/richTextMarkdown";
import styles from "~/styles/blog.css";
import { links as ImageMediaStyles } from "~/components/BlogPost/ImageMedia/ImageMedia";
import { links as BlockQuoteStyles } from "~/components/BlogPost/BlockQuote/BlockQuote";
import AuthorAvatar from "~/assets/author/avatar.jpeg";
import LinkedinIcon from "~/assets/author/linkedin.svg";
import TwitterIcon from "~/assets/author/twitter.svg";

export const loader: LoaderFunction = ({ params }) => {
  if (!params.slug) {
    throw new Error("Missing slug in params.");
  }

  return getContentfulBlogPostBySlug(params.slug);
};

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: styles
    },
    ...ImageMediaStyles(),
    ...BlockQuoteStyles()
  ];
};

const Post: React.FC = ({}) => {
  const loaderData = useLoaderData<Entry<ContentfulBlogPost> | undefined>();

  if (!loaderData) {
    return <div>Loading your blog post heheheheh</div>;
  }

  // $$TODO: another error in the typings for this library.
  const BlogPostBody = documentToReactComponents(
    loaderData.fields.bodyRichText as any,
    options
  );

  const BlogPostRelatedSection = documentToReactComponents(
    loaderData.fields.relatedSection as any,
    options
  );
  console.log(loaderData + "LOADER DATAAAA");
  console.log(BlogPostBody + "BODYYYY");

  return (
    <div className={`BlogPost text-post-bodyText ${fixedWidthLayoutClasses}`}>
      <h1 className="BlogPost__Title text-5xl font-bold leading-relaxed mb-10">
        {loaderData.fields.blogPostTitle}
      </h1>
      <div className="w-full flex flex-row justify-between items-center">
        <p className="BlogPost__DatePublish text-2xl">
          {new Date(loaderData.sys.updatedAt).toDateString()}
        </p>
        <Author />
      </div>
      <div className="mt-10">{BlogPostBody}</div>
      <div>{BlogPostRelatedSection}</div>
    </div>
  );
};

export default Post;

const Author = () => {
  return (
    <div className="flex flex-row items-center justify-center">
      <img src={AuthorAvatar} alt="AN" className="w-10 rounded-full mr-3" />
      <div className="inline-flex items-center">
        <img src={TwitterIcon} alt="" className="w-8 mr-2" />
        <img src={LinkedinIcon} alt="" className="w-8" />
      </div>
    </div>
  );
};
