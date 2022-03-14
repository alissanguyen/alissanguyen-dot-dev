import {
  LinksFunction,
  LoaderFunction,
  MetaFunction,
  useLoaderData
} from "remix";
import { fixedWidthLayoutClasses } from "~/constants";
import * as React from "react";
import BlogPostCard from "~/components/Blog/BlogPostCard";
import SearchBarSection from "~/components/Blog/SearchBarSection";
import TagsSection from "~/components/Blog/TagsSection";
import { getPostsAndTags, PostsAndTags } from "~/api/getPostsAndTags";
import blogStyles from "~/components/Blog/Blog.css";
import { handleWebTitle } from "~/utils/functions";

export const loader: LoaderFunction = getPostsAndTags;

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: blogStyles }];
};
export const meta: MetaFunction = ({ data, location }) => {
  const description = "Alissa Nguyen's Blog";
  const keywords =
    "remix, react, javascript, typescript, personal blog, blog, alissa nguyen, alissa, tam nguyen, seattle, software, technologogy, developer website, tech, software engineer, programming, programmer, web developer, frontend";
  const title = handleWebTitle(location);
  const imageURL = "https://www.alissanguyen.dev/images/blogpreview.jpg";

  return {
    title: title,
    description: description,
    keywords: keywords,
    image: imageURL,
    "twitter:title": title,
    "twitter:description": description,
    "twitter:alt": title,
    "twitter:image": imageURL,
    "twitter:card": "summary_large_image",
    "twitter:creator": "@alissa_nguyen14",
    "twitter:site": "@alissa_nguyen14",
    "og:url": "https://www.alissanguyen.dev/",
    "og:image": imageURL,
    "og:title": title,
    "og:description": description,
    "og:image:width": "1200",
    "og:image:height": "630",
    author: "Alissa Nguyen"
  };
};
export default function BlogPage() {
  const { blogPosts, contentfulTags } = useLoaderData<PostsAndTags>();
  const [searchInput, setSearchInput] = React.useState("");
  const postCount = Object.keys(blogPosts.items).length;

  const [selectedTagIds, setSelectedTagIds] = React.useState<Set<string>>(
    new Set([])
  );

  const updateSelectedTagIds = (tagId: string) => {
    setSelectedTagIds((prev) => {
      const clone = new Set(prev);

      /**
       * If this tag id already exists in the set of selectedTagIds, then remove it
       * If not, add it to the set
       */
      const tagIdAlreadyIncluded = clone.has(tagId);
      if (tagIdAlreadyIncluded) {
        clone.delete(tagId);
        return clone;
      } else {
        clone.add(tagId);
        return clone;
      }
    });
  };

  const selectedTagIdsAsArray = [...selectedTagIds];

  // Return all queried blog posts id no tag selected, otherwise return only if for every selectedTag, each filteredBlogPost has to contain that tag
  const filteredBlogPostsByTags =
    selectedTagIds.size === 0
      ? blogPosts.items
      : blogPosts.items.filter((post) => {
          return selectedTagIdsAsArray.every((selectedTag) => {
            return post.metadata.tags.some((tag) => tag.sys.id === selectedTag);
          });
        });

  /** Create a set of available tag Ids by iterating over all the filtered blog posts and adding their tags to this set. */
  const availableTagIds: Set<string> = filteredBlogPostsByTags.reduce<
    Set<string>
  >((acc, cur) => {
    const tags = cur.metadata.tags; // Array of objects
    tags.forEach((tag) => {
      const alreadyHasThisTagId = acc.has(tag.sys.id);
      if (alreadyHasThisTagId) {
        return;
      }
      acc.add(tag.sys.id);
    });
    return acc;
  }, new Set([]));

  const searchInputRegex = new RegExp(
    escapeSearchTermForRegularExpressionConstruction(searchInput),
    "i"
  );

  const filteredBlogPostsByName =
    searchInput === ""
      ? filteredBlogPostsByTags
      : filteredBlogPostsByTags.filter((post) => {
          return searchInputRegex.test(post.fields.blogPostTitle);
        });

  // TODO: Add loading state
  // TODO: Persists tags and search selection in the url
  return (
    <div className={fixedWidthLayoutClasses}>
      <SearchBarSection
        search={searchInput}
        setSearch={setSearchInput}
        count={postCount}
      />
      <TagsSection
        tags={contentfulTags.items}
        selectedTags={selectedTagIds}
        onTagSelect={updateSelectedTagIds}
        availableTags={availableTagIds}
      />
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
      {/* <img
        src="/images/blobs/ellipse1.svg"
        alt=""
        className="blog-blob-1 absolute hidden lg:block w-56 lg:translate-x-[-5rem] xl:translate-x-[-10rem] z-[-99]"
      /> */}
      <img
        src="/images/blobs/ellipse2.svg"
        alt=""
        className="blog-blob-2 absolute w-72 bottom-0 hidden lg:block lg:translate-x-[18rem] lg:translate-y-[-15rem] xl:translate-x-[15rem] 2xl:translate-x-[25rem] xl:translate-y-[-10rem] 3xl:translate-x-[40rem] right-0 z-[-99]"
      />
      {filteredBlogPostsByName.length > 0 ? (
        <ul className="BlogPosts__Wrapper grid gap-10 gap-y-20 md:grid-cols-2 lg:grid-cols-3">
          {filteredBlogPostsByName.map((blogPost) => {
            return <BlogPostCard key={blogPost.sys.id} blogPost={blogPost} />;
          })}
        </ul>
      ) : (
        <div className="flex items-center m-auto flex-row justify-center">
          <p className="text-3xl text-blog-lgText mr-10">
            Oh no.. there is some problems loading blog posts :(
          </p>
          <img src="/images/cry2.png" alt="" className="w-44" />
        </div>
      )}
      {/* $$TODO: Add load more button */}
    </div>
  );
}

const escapeSearchTermForRegularExpressionConstruction = (
  str: string
): string => {
  return str.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");
};
