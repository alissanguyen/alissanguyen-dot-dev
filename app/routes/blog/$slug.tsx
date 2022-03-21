import { Entry, TagLink } from "contentful";
import * as React from "react";
import {
  LinksFunction,
  LoaderFunction,
  MetaFunction,
  useLoaderData
} from "remix";
import { ContentfulBlogPost } from "~/contentful/types";
import { fixedWidthLayoutClasses } from "~/constants";
import { getContentfulBlogPostBySlug } from "~/contentful/contentfulClient";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { options } from "~/contentful/richTextMarkdown";
import styles from "~/styles/blogpost.css";
import { links as BlockQuoteStyles } from "~/components/Contentful/BlockQuote/BlockQuote";
import { links as ImageMediaStyles } from "~/components/Contentful/ImageMedia/ImageMedia";
import { links as ShareSectionStyles } from "~/components/BlogPost/ShareSection/ShareSection";
import {links as CodeBlockStyles } from "~/components/Contentful/CodeBlock/CodeBlock"
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
import { tagIdsToDisplayNames } from "~/components/Blog/BlogPostTags";

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
    author: "Alissa Nguyen"
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
    {
      rel: "stylesheet",
      href: "/prism/prism.css"
    },
    ...BlockQuoteStyles(),
    ...ImageMediaStyles(),
    ...ShareSectionStyles(),
    ...CodeBlockStyles()
  ];
};

const Post: React.FC = ({}) => {
  const { blogPost, blogPosts } = useLoaderData<PostLoaderData>();
  const { theme } = useTheme();

  console.log("POST DATA", blogPost);
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
        className={`BlogPost text-post-bodyText ${fixedWidthLayoutClasses}  mb-20`}
      >
        <div className="mt-10">{BlogPostBody}</div>
        <div className="flex flex-col lg:flex-row lg:justify-between mt-16">
          <div className="text-base mb-16 lg:mb-0">
            <span className="text-lg font-medium">Tags:</span>{" "}
            {blogPost.metadata.tags.map((tag) => (
              <TagBadge tag={tag} theme={theme} />
            ))}
          </div>
          <ShareSection
            targetHref={blogPost.fields.blogPostSlug}
            title={blogPost.fields.blogPostTitle}
            description={blogPost.fields.blogPostExcerpt}
          />
        </div>
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
        <a
          href="https://www.linkedin.com/in/alissa-nguyen-dev/"
          target="_blank"
        >
          <GrLinkedin className="w-9 h-6 text-post-icon hover:text-post-iconHover mr-2" />
        </a>
        <a href="https://twitter.com/alissang_dev" target="_blank">
          <FaTwitter className="w-8 h-7 text-post-icon hover:text-post-iconHover mr-2" />
        </a>
        <a href="https://www.instagram.com/alissang1211/" target="_blank">
          <FiInstagram className="w-8 h-7 text-post-icon hover:text-post-iconHover" />
        </a>
      </div>
    </div>
  );
};

interface TagProps {
  tag: TagLink;
  theme: SupportedTheme;
}
const TagBadge: React.FC<TagProps> = (props) => {
  const tagName = tagIdsToDisplayNames[props.tag.sys.id];

  return (
    <>
      {props.theme === SupportedTheme.LIGHT ? (
        <div className="tag-badge bg-gray-600 before:bg-gray-600 hover:bg-gray-900 before:hover:bg-gray-900 text-gray-200 hover:text-white inline-flex items-center">
          {tagName}
        </div>
      ) : (
        <div className="tag-badge tag-dark bg-gray-300 before:bg-gray-300 before:hover:bg-white hover:bg-white text-gray-700 hover:text-black inline-flex items-center">
          {tagName}
        </div>
      )}
    </>
  );
};
