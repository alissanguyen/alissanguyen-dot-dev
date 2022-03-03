import { Asset, RichTextContent } from "contentful";

interface ContentfulBlogPost {
  blogPostTitle: string;
  blogPostSplash: Asset;
  blogPostSlug: string;
  blogPostExcerpt: string;
  bodyRichText: RichTextContent;
  relatedSection: RichTextContent;
}

interface ContentfulQuote {
  quoteDescription: string;
  author: string;
}