import { EntryCollection } from "contentful";
import { LoaderFunction, Outlet, useLoaderData } from "remix";
import { ContentfulBlogPost } from "~/ contentful";
import { fixedWidthLayoutClasses } from "~/constants";
import { getGlobalContentfulClient } from "~/integrations/contentful";

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

  /**
   * splashImage: post.fields
   */
  return (
    <div className={fixedWidthLayoutClasses}>
      {loaderData.items.length > 0 ? (
        <ul>
          {loaderData.items.map((blogPost) => {
            const post = blogPost.fields;
            return (
              <div>
                <a>
                  {/* <li key={blogPost.id}>{post.blogPostTitle}</li> */}
                </a>
                <p className="text-sm">
                  {JSON.stringify(blogPost.fields, null, 2)}
                </p>
              </div>
            );
          })}
        </ul>
      ) : null}
      {/* <Outlet /> */}
    </div>
  );
}
