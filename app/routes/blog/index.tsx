import { EntryCollection } from "contentful";
import { LoaderFunction, useLoaderData } from "remix";
import { ContentfulBlogPost } from "~/ contentful";
import { fixedWidthLayoutClasses } from "~/constants";
import { getGlobalContentfulClient } from "~/integrations/contentful";
import * as React from "react";
import { tags } from "~/constants";
import { DocumentTextIcon } from "@heroicons/react/outline";

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

  return (
    <div className={fixedWidthLayoutClasses}>
      <div className="BlogPage__Header__Wrapper mb-16 grid grid-cols-4 text-white">
        <div className="col-span-2">
          <p className="BlogPage__SubHeader mb-4">
            Let's go through my journey together{" "}
          </p>
          <p className="BlogPage__SubHeader mb-12">with great articles.</p>
          <div className="post-search-bar-input-wrapper mt-1 relative flex flex-row h-16 rounded-2xl border shadow-sm border-gray-300 items-center px-3 max-w-lg">
            <input
              type="blog-post-search-bar"
              name="blog-post-search-bar"
              id="text"
              value={searchInput}
              onChange={(e) => {
                e.preventDefault();
                setSearchInput(e.target.value);
              }}
              className="focus:ring-none bg-transparent focus:outline-none active:ring-none block w-full pl-7 focus:appearance-none pr-12 text-lg border-gray-200 rounded-md"
              placeholder="Search posts"
            />
            <div className="absolute inset-y-0 right-10 pl-3 flex items-center pointer-events-none">
              <span className="mr-2">
                <DocumentTextIcon className="h-5 w-5 text-smTextColor" />
              </span>
              <p className="text-sm text-smTextColor opacity-80">
                {Object.keys(loaderData).length}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* TODO: Search blog posts by topics */}
      <div className="Tags__Wrapper mb-16 text-white">
        <p className="BlogPage__SubHeader mb-4">Search blog by topics</p>
        <div className="tags-wrapper flex flex-row flex-wrap">
          {tags.map((tag) => (
            <button className="tag-wrapper border shadow-sm mx-1 my-2 py-1 px-4 rounded-2xl">
              <p className="text-base font-light"># {tag.name}</p>
            </button>
          ))}
        </div>
      </div>

      {loaderData.items.length > 0 ? (
        <ul className="BlogPosts__Wrapper grid gap-10 posts-list lg:grid-cols-3">
          {loaderData.items.map((blogPost) => {
            console.log(
              `slug for ${blogPost.fields.blogPostTitle}: ${blogPost.fields.blogPostSlug}`
            );

            return (
              <li>
                <a href={`/blog/${blogPost.fields.blogPostSlug}`}>
                  <p className="text-sm">{blogPost.fields.blogPostTitle}</p>
                </a>
                <p className="text-sm">{}</p>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}
