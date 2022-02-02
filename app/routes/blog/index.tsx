import { EntryCollection } from "contentful";
import { LoaderFunction, Outlet, useLoaderData } from "remix";
import { ContentfulBlogPost } from "~/ contentful";
import { fixedWidthLayoutClasses } from "~/constants";
import { getGlobalContentfulClient } from "~/integrations/contentful";

export const loader: LoaderFunction = async () => {
  const blogPosts = await getGlobalContentfulClient().getEntries();
  return blogPosts;
};

export default function BlogPage() {
  const loaderData = useLoaderData<EntryCollection<ContentfulBlogPost>>();

  return (
    <div className={fixedWidthLayoutClasses}>
      {loaderData.items.length > 0 ? (
        <ul>
          {loaderData.items.map((blogPost) => (
            <a>
              <li key={blogPost.sys.id}>{blogPost.fields.blogPostTitle}</li>
              {console.log(blogPost)}
            </a>
          ))}
        </ul>
      ) : null}
      <Outlet />
    </div>
  );
}
