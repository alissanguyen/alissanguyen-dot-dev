import { Asset, RichTextContent } from "contentful";

export interface ContentfulBlogPost {
  blogPostTitle: string; //Short text
  blogPostSplash: Asset;
  blogPostSlug: string; //Short text
  blogPostExcerpt: string; //Long text
  bodyRichText: RichTextContent;
  isVisibleInProduction: boolean;
  blogPostKeywords: string; //Short text
  blogPostReferences: string; //Long text, currently not being used
}

export interface ContentfulQuote {
  quoteDescription: string; //Long text
  author: string; //Short text
}

export interface ContentfulCodeBlock {
  codeText: string; //Long text
  codeBlockMetadata: null; //JSON Object, currently not being used, will be use for highlighting custom line(s) of codes later
}

export interface ContentfulRawVideoHtml {
  rawHtmlMarkup: string; //Long text
}

export interface ContentfulStickyNote {
  stickyColor: string; //Short text
  stickyTitle: string; //Short text
  stickyBodyRichText: RichTextContent; //Rich text
}
