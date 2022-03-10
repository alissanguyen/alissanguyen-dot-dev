import { Entry } from "contentful";
import * as React from "react";
import {
  LinksFunction,
  LoaderFunction,
  MetaFunction,
  useLoaderData
} from "remix";
import { ContentfulBlogPost } from "~/contentful/contentful";
import { fixedWidthLayoutClasses } from "~/constants";
import { getContentfulBlogPostBySlug } from "~/contentful/contentfulClient";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { options } from "~/contentful/richTextMarkdown";
import styles from "~/styles/blogpost.css";
import { links as BlockQuoteStyles } from "~/components/BlogPost/BlockQuote/BlockQuote";
import { links as ImageMediaStyles } from "~/components/BlogPost/ImageMedia/ImageMedia";
import { links as ShareSectionStyles } from "~/components/BlogPost/ShareSection/ShareSection";
import { GrLinkedin } from "react-icons/gr";
import { FaTwitter } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { useTheme } from "~/providers/ThemeProvider";
import { SupportedTheme } from "~/types";
import AuthorSection from "~/components/BlogPost/AuthorSection/AuthorSection";
import ShareSection from "~/components/BlogPost/ShareSection/ShareSection";
import { convertTagsDataFromContentfulToMetaTags } from "~/utils/functions";
import { getPostsAndTags, PostsAndTags } from "~/api/getPostsAndTags";
import RelatedPostsSection from "~/components/BlogPost/RelatedPostsSection/RelatedPostsSection";

interface PostLoaderData extends PostsAndTags {
  blogPost: Entry<ContentfulBlogPost>;
}

export const meta: MetaFunction = ({ data, location }) => {
  const dataWithType: PostLoaderData = data;

  const { blogPost, blogPosts, contentfulTags } = dataWithType;
  const tags = convertTagsDataFromContentfulToMetaTags(blogPost.metadata.tags);
  const imageURl = "https:" + blogPost.fields.blogPostSplash.fields.file.url;
  const webURL = "https://www.alissanguyen.dev" + location.pathname;
  const description = blogPost.fields.blogPostExcerpt.slice(0, 190) + "... ";
  const title = blogPost.fields.blogPostTitle;
  return {
    title: blogPost.fields.blogPostTitle,
    keywords: tags.toString(),
    image: imageURl,
    "og:url": webURL,
    "og:image": imageURl,
    "og:title": title,
    "og:description": description,
    "twitter:card": imageURl ? "summary_large_image" : "summary",
    "twitter:creator": "@alissa_nguyen14",
    "twitter:site": "@alissa_nguyen14",
    "twitter:title": title,
    "twitter:description": description,
    "twitter:image": imageURl,
    "twitter:alt": title,
    "og:image:width": "1200",
    "og:image:height": "630",
    author: "Tam Nguyen"
  };
};

export const loader: LoaderFunction = async ({ params }) => {
  if (!params.slug) {
    throw new Error("Missing slug in params.");
  }

  const [blogPost, { blogPosts, contentfulTags }] = await Promise.all([
    getContentfulBlogPostBySlug(params.slug),
    getPostsAndTags()
  ]);

  return {
    blogPost,
    blogPosts,
    contentfulTags
  };
};

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: styles
    },
    ...BlockQuoteStyles(),
    ...ImageMediaStyles(),
    ...ShareSectionStyles()
  ];
};

const Post: React.FC = ({}) => {
  const { blogPost, blogPosts } = useLoaderData<PostLoaderData>();
  const { theme } = useTheme();

  // $$TODO: another error in the typings for this library.
  const BlogPostBody = documentToReactComponents(
    blogPost.fields.bodyRichText as any,
    options
  );

  const date = new Date(blogPost.sys.updatedAt).toDateString();
  const subDate = date.substring(date.indexOf(" ") + 1);

  const tagsToFindRelatedPostsFor = blogPost.metadata.tags;

  // Only suggest three other blogPosts, TODO: Question -- Should we decide to
  // give three random suggestions or the first three in this array?
  const blogPostWithAtLeastOneSharedTag = blogPosts.items
    .filter((post) => {
      return (
        post.sys.id !== blogPost.sys.id &&
        tagsToFindRelatedPostsFor.some((selectedTag) => {
          return post.metadata.tags.some(
            (tag) => tag.sys.id === selectedTag.sys.id
          );
        })
      );
    })
    .slice(0, 3);

  return (
    <div className="text-post-bodyText">
      <div className={`${fixedWidthLayoutClasses} flex flex-col xl:mb-10`}>
        <a
          href="/blog"
          className="go-back-btn inline-flex border-none items-center justify-start text-xl mb-10 hover:text-post-bodyTextLg duration-100 ease-in w-fit"
        >
          <img
            src={
              theme === SupportedTheme.DARK
                ? "/svg/arrow.svg"
                : "/svg/arrowDark.svg"
            }
            className="go-back-arrow w-6 rounded-full mr-2 hover:text-post-bodyTextLg"
            alt="arrow"
          />
          Go back
        </a>
        <h1 className="BlogPost__Title text-4xl text-post-bodyTextLg xs:text-5xl font-bold leading-relaxed">
          {blogPost.fields.blogPostTitle}
        </h1>
        <div className="w-full flex flex-row justify-between items-center mt-2 mx-auto max-w-[700px]">
          <p className="BlogPost__DatePublish text-xl">{subDate}</p>
          <Author />
        </div>
      </div>
      <img
        src={"https://" + blogPost.fields.blogPostSplash.fields.file.url}
        className="BlogPost__SplashImage m-auto mt-10 xl:mt-0 xl:mb-20"
        alt=""
      />
      <div
        className={`BlogPost text-post-bodyText ${fixedWidthLayoutClasses} xs:pt-10 lg:pt-14 mb-20`}
      >
        <div className="mt-10">{BlogPostBody}</div>
        <ShareSection
          targetHref={blogPost.fields.blogPostSlug}
          title={blogPost.fields.blogPostTitle}
          description={blogPost.fields.blogPostExcerpt}
        />
        <AuthorSection />
      </div>
      <hr></hr>
      <RelatedPostsSection relatedPosts={blogPostWithAtLeastOneSharedTag} />
      <hr></hr>
    </div>
  );
};

export default Post;

const Author = () => {
  return (
    <div className="flex flex-row items-center justify-center">
      <a href="/blog">
        <img
          src="/images/author.jpg"
          alt="AN"
          className="w-10 rounded-full mr-4"
        />
      </a>
      <div className="inline-flex items-center">
        <a href="https://www.linkedin.com/in/tam-pmnguyen/" target="_blank">
          <GrLinkedin className="w-9 h-6 text-post-icon hover:text-post-iconHover mr-2" />
        </a>
        <a href="https://twitter.com/alissa_nguyen14" target="_blank">
          <FaTwitter className="w-8 h-7 text-post-icon hover:text-post-iconHover mr-2" />
        </a>
        <a href="https://www.instagram.com/alissang1211/" target="_blank">
          <FiInstagram className="w-8 h-7 text-post-icon hover:text-post-iconHover" />
        </a>
      </div>
    </div>
  );
};
