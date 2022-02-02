import { Asset } from "contentful";

interface ContentfulBlogPost {
  blogPostTitle: string;
  blogPostSplash: Asset;
  blogPostContent: string;
  blogPostImages: Asset[];
}
