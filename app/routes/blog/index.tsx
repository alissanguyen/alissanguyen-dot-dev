import { Entry, EntryCollection, Tag } from "contentful";
import { LinksFunction, LoaderFunction, useLoaderData } from "remix";
import { ContentfulBlogPost } from "~/contentful/contentful";
import { fixedWidthLayoutClasses, tags } from "~/constants";
import * as React from "react";
import BlogPostCard from "~/components/Blog/BlogPostCard";
import SearchBarSection from "~/components/Blog/SearchBarSection";
import TagsSection from "~/components/Blog/TagsSection";
import { links as blogPostCardStyles } from "~/components/Blog/BlogPostCard";
import { getPostsAndTags, PostsAndTags } from "~/api/getPostsAndTags";

export const loader: LoaderFunction = getPostsAndTags;

export const links: LinksFunction = () => {
  return [...blogPostCardStyles()];
};


export default function BlogPage() {
  const { blogPosts, contentfulTags } = useLoaderData<PostsAndTags>();

  const [searchInput, setSearchInput] = React.useState("");
  const postCount = Object.keys(blogPosts).length;

  return (
    <div className={fixedWidthLayoutClasses}>
      <SearchBarSection
        search={searchInput}
        setSearch={setSearchInput}
        count={postCount}
      />
      <TagsSection tags={contentfulTags.items} />
      <div className="spacer-div mt-20 relative"></div>
      <img
        src="/images/blobs/Ellipse 3.svg"
        alt=""
        className="blog-blob-3 absolute hidden lg:block w-96 lg:translate-x-[-20rem] lg:translate-y-[-10rem] xl:translate-y-[-20rem] xl:translate-x-[-28rem] 2xl:translate-x-[-30rem] 3xl:translate-x-[-40rem] z-[-99]"
      />
      <img
        src="/images/blobs/Pinky.svg"
        alt=""
        className="blog-blob-4 absolute w-44 hidden lg:block lg:translate-x-[10rem] lg:translate-y-[-7rem] top-0 xl:translate-y-[-10rem] xl:translate-x-[14rem] 2xl:translate-x-[18rem] 3xl:translate-x-[25rem] right-0 z-[-99]"
      />
      <img
        src="/images/blobs/ellipse1.svg"
        alt=""
        className="blog-blob-1 absolute hidden lg:block w-56 lg:translate-x-[-5rem] xl:translate-x-[-10rem] lg:translate-y-[35rem] z-[-99]"
      />
      <img
        src="/images/blobs/ellipse2.svg"
        alt=""
        className="blog-blob-2 absolute w-72 bottom-0 hidden lg:block lg:translate-x-[18rem] lg:translate-y-[-15rem] xl:translate-x-[15rem] 2xl:translate-x-[25rem] xl:translate-y-[-10rem] 3xl:translate-x-[40rem] right-0 z-[-99]"
      />
      {blogPosts.items.length > 0 ? (
        <ul className="BlogPosts__Wrapper grid gap-10 gap-y-20 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.items.map((blogPost) => {
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
