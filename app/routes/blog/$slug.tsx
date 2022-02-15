import { Entry } from "contentful";
import * as React from "react";
import { LoaderFunction, useLoaderData } from "remix";
import { ContentfulBlogPost } from "~/ contentful";
import { getContentfulBlogPostBySlug } from "~/integrations/contentful";

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

  return (
    <>
      <h1>{loaderData.fields.blogPostTitle}</h1>
      <div>{loaderData.fields.blogPostContent}</div>
    </>
  );
};

export default Post;
