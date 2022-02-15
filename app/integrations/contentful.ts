import contentful, { Entry } from "contentful";
import { ContentfulBlogPost } from "~/ contentful";

let GLOBAL_CONTENTFUL_CLIENT: contentful.ContentfulClientApi | null = null;

export const getGlobalContentfulClient = () => {
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

export const getContentfulBlogPostBySlug = async (slug: string) => {
  const queryResults = await getGlobalContentfulClient().getEntries({
    content_type: "blogPost",
    "fields.blogPostSlug": slug,
    limit: 1
  });

  if (queryResults.items.length <= 0) {
    throw new Error("No blog post with that slug found :(");
  }

  return queryResults.items[0] as Entry<ContentfulBlogPost>;
};
