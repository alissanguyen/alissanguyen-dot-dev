import { Entry, EntryCollection } from "contentful";
import * as contentful from "contentful";
import { ContentfulBlogPost } from "./types";

let GLOBAL_CONTENTFUL_CLIENT: contentful.ContentfulClientApi | null = null;

const getGlobalContentfulClient = () => {
  if (!GLOBAL_CONTENTFUL_CLIENT) {
    const secretApiKey = process.env.CONTENTFUL_SECRET_API_KEY;
    if (!secretApiKey) {
      throw new Error("Secret Contentful API Key not found.");
    }
    GLOBAL_CONTENTFUL_CLIENT = contentful.createClient({
      space: "ms0r4bhnm3d4",
      accessToken: secretApiKey
    });
  }
  return GLOBAL_CONTENTFUL_CLIENT;
};

const QUERY_ONLY_VISIBLE_IN_PRODUCTION =
  process.env.NODE_ENV === "production"
    ? {
        "fields.isVisibleInProduction": true
      }
    : {};

export const getContentfulBlogPostBySlug = async (slug: string) => {
  const queryResults = await getGlobalContentfulClient().getEntries({
    content_type: "blogPost",
    "fields.blogPostSlug": slug,
    limit: 1,
    ...QUERY_ONLY_VISIBLE_IN_PRODUCTION
  });

  if (queryResults.items.length <= 0) {
    throw new Error("No blog post with that slug found :(");
  }

  return queryResults.items[0] as Entry<ContentfulBlogPost>;
};

export const getContentfulBlogPosts = async () => {
  const queryResults = await getGlobalContentfulClient().getEntries({
    content_type: "blogPost",
    ...QUERY_ONLY_VISIBLE_IN_PRODUCTION,
    order: "-sys.updatedAt"
  });

  return queryResults as EntryCollection<ContentfulBlogPost>;
};

// Get back all tags from contentful
export const getContentfulTags = async () => {
  const queryResults = await getGlobalContentfulClient()
    .getTags()
    .then((response) => {
      return response;
    });

  return queryResults;
};

// Get back all entries with matching tag --- Currently unused, should consider removing this function
export const getBlogPostsWithMatchingTag = async (
  tagId: string | undefined
) => {
  if (tagId === undefined) {
    return;
  }
  const queryResults = await getGlobalContentfulClient().getEntries({
    "metadata.tags.sys.id[in]": tagId,
    ...QUERY_ONLY_VISIBLE_IN_PRODUCTION,
    order: "-sys.createdAt"
  });
  return queryResults as EntryCollection<ContentfulBlogPost>;
};
