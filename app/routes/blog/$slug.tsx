import { Entry } from "contentful";
import * as React from "react";
import { LinksFunction, LoaderFunction, useLoaderData } from "remix";
import { ContentfulBlogPost } from "~/contentful/contentful";
import { fixedWidthLayoutClasses } from "~/constants";
import { getContentfulBlogPostBySlug } from "~/contentful/contentfulClient";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { options } from "~/contentful/richTextMarkdown";
import styles from "~/styles/blog.css";

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
    }
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
  return (
    <div className={fixedWidthLayoutClasses}>
      <h1 className="text-white text-3xl">{loaderData.fields.blogPostTitle}</h1>
      <p>{new Date(loaderData.sys.updatedAt).toDateString()}</p>
      <div className="bg-white p-3">{BlogPostBody}</div>
      <div>{BlogPostRelatedSection}</div>
    </div>
  );
};

export default Post;
