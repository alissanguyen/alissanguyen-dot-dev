import { EntryCollection } from "contentful";
import { LinksFunction, LoaderFunction, useLoaderData } from "remix";
import { ContentfulBlogPost } from "~/contentful/contentful";
import { fixedWidthLayoutClasses } from "~/constants";
import { getContentfulBlogPosts } from "~/contentful/contentfulClient";
import * as React from "react";
import BlogPostCard from "~/components/Blog/BlogPostCard";
import SearchBarSection from "~/components/Blog/SearchBarSection";
import TagsSection from "~/components/Blog/TagsSection";
import { links as blogPostCardStyles } from "~/components/Blog/BlogPostCard";

export const loader: LoaderFunction = async () => {
  const blogPosts = await getContentfulBlogPosts();
  return blogPosts;
};
export const links: LinksFunction = () => {
  return [...blogPostCardStyles()];
};

export default function BlogPage() {
  const loaderData = useLoaderData<EntryCollection<ContentfulBlogPost>>();
  console.log(loaderData, "hi");
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
        <ul className="BlogPosts__Wrapper grid gap-10 gap-y-20 md:grid-cols-2 lg:grid-cols-3">
          {loaderData.items.map((blogPost) => {
            return <BlogPostCard key={blogPost.sys.id} blogPost={blogPost} />;
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
