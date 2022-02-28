import { EntryCollection } from "contentful";
import { LoaderFunction, useLoaderData } from "remix";
import { ContentfulBlogPost } from "~/contentful/contentful";
import { fixedWidthLayoutClasses } from "~/constants";
import { getGlobalContentfulClient } from "~/contentful/contentfulClient";
import * as React from "react";
import BlogPostCard from "~/components/Blog/BlogPostCard";
import SearchBarSection from "~/components/Blog/SearchBarSection";
import TagsSection from "~/components/Blog/TagsSection";

export const loader: LoaderFunction = async () => {
  const t0 = Date.now();
  const blogPosts = await getGlobalContentfulClient().getEntries();
  console.log(
    "Loading blog posts took " + String(Date.now() - t0) + " milliseconds"
  );
  return blogPosts;
};

export default function BlogPage() {
  const loaderData = useLoaderData<EntryCollection<ContentfulBlogPost>>();
  const [searchInput, setSearchInput] = React.useState("");
  const postCount = Object.keys(loaderData).length;
  return (
    <div className={fixedWidthLayoutClasses}>
      <SearchBarSection
        search={searchInput}
        setSearch={setSearchInput}
        count={postCount}
      />
      <TagsSection />

      {loaderData.items.length > 0 ? (
        <ul className="BlogPosts__Wrapper grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {loaderData.items.map((blogPost) => {
            console.log("blug ", blogPost);
            return <BlogPostCard blogPost={blogPost} />;
          })}
        </ul>
      ) : null}
    </div>
  );
}

const convertContentfulBlogPostToArrayOfTitles = (
  posts: EntryCollection<ContentfulBlogPost>
) => {
  const titlesArray = posts.items.map(
    (contentfulBlogPost) => contentfulBlogPost.fields.blogPostTitle
  );

  return titlesArray;
};
