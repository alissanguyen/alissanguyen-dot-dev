import { Entry } from "contentful";
import * as React from "react";
import { LoaderFunction, useLoaderData } from "remix";
import { ContentfulBlogPost } from "~/contentful/contentful";
import { fixedWidthLayoutClasses } from "~/constants";
import { getContentfulBlogPostBySlug } from "~/contentful/contentfulClient";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { options } from "~/contentful/richTextMarkdown";

interface Props {}

export const loader: LoaderFunction = ({ params }) => {
  if (!params.slug) {
    throw new Error("Missing slug in params.");
  }

  return getContentfulBlogPostBySlug(params.slug);
};

const Post: React.FC<Props> = ({}) => {
  const loaderData = useLoaderData<Entry<ContentfulBlogPost> | undefined>();

  console.log("LOADER DATA FOR POST: ", loaderData);

  if (!loaderData) {
    return <div>Loading your blog post heheheheh</div>;
  }

  console.log(loaderData);

  const BlogPostBody = documentToReactComponents(
    loaderData.fields.bodyRichText,
    options
  );

  console.log("BODY", BlogPostBody?.toString);
  /**
   * Title
   * splash
   * markdown
   * date
   * tags
   */
  return (
    <div className={fixedWidthLayoutClasses}>
      <h1 className="text-white text-3xl">{loaderData.fields.blogPostTitle}</h1>
      <p>{new Date(loaderData.sys.updatedAt).toDateString()}</p>
      <div className="bg-white p-3">{BlogPostBody}</div>
    </div>
  );
};

export default Post;
