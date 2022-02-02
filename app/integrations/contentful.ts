import contentful from "contentful";

let GLOBAL_CONTENTFUL_CLIENT: contentful.ContentfulClientApi | null = null;

export const getGlobalContentfulClient = () => {
  if (!GLOBAL_CONTENTFUL_CLIENT) {
    const secretApiKey = process.env.CONTENTFUL_SECRET_API_KEY;
    if (!secretApiKey) {
      throw new Error("Secret Contentful API Key not found.");
    }
    GLOBAL_CONTENTFUL_CLIENT = contentful.createClient({
      space: "ms0r4bhnm3d4",
      accessToken: secretApiKey,
    });
  }
  return GLOBAL_CONTENTFUL_CLIENT;
};
