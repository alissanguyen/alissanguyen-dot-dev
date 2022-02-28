import { Asset, RichTextContent } from "contentful";

interface ContentfulBlogPost {
  blogPostTitle: string;
  blogPostSplash: Asset;
  blogPostBodyHtml: RichTextContent;
  blogPostImages: Asset[];
  blogPostSlug: string;
  blogPostExcerpt: string;
  bodyRichText: RichTextContent;
}
