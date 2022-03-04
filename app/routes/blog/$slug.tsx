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
import styles from "~/styles/blog.css";
import { links as BlockQuoteStyles } from "~/components/BlogPost/BlockQuote/BlockQuote";
import { links as ImageMediaStyles } from "~/components/BlogPost/ImageMedia/ImageMedia";
import AuthorAvatar from "~/assets/author/avatar.jpeg";
import { GrLinkedin } from "react-icons/gr";
import { FaTwitter } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import ArrowDark from "~/assets/arrow.svg";
import Arrow from "~/assets/arrowDark.svg";
import { useTheme } from "~/providers/ThemeProvider";
import { SupportedTheme } from "~/types";
import AuthorSection from "~/components/BlogPost/AuthorSection/AuthorSection";
import ShareSection from "~/components/BlogPost/ShareSection/ShareSection";
import { convertTagsDataFromContentfulToMetaTags } from "~/utils/functions";

export const meta: MetaFunction = ({ data, location }) => {
  const metaData: Entry<ContentfulBlogPost> = data;
  const tags = convertTagsDataFromContentfulToMetaTags(metaData.metadata.tags)
  const imageURl = "https:" + metaData.fields.blogPostSplash.fields.file.url;
  const webURL = "https://www.alissanguyen.dev" + location.pathname;
  const description = metaData.fields.blogPostExcerpt.slice(190) + "... "
  console.log("TAGS", tags.toString());
  console.log("WEB URL", webURL);
  console.log("Image", imageURl);
  console.log("TITLE", metaData.fields.blogPostTitle);
  return {
    title: metaData.fields.blogPostTitle,
    keywords: tags.toString(),
    image: imageURl,
    "og:url": webURL,
    "og:image": imageURl,
    "og:title": metaData.fields.blogPostTitle,
    "og:description": description,
    "twitter:card": "summary_large_image",
    "twitter:creator": "@alissa_nguyen14",
    "twitter:site": "@alissa_nguyen14",
    "twitter:title": metaData.fields.blogPostTitle,
    "twitter:description": metaData.fields.blogPostExcerpt,
    "twitter:image": imageURl,
    "twitter:alt": metaData.fields.blogPostTitle,
    "og:image:width": "1200",
    "og:image:height": "600",
    author: "Tam Nguyen",
  };
};
export const loader: LoaderFunction = ({ params }) => {
  if (!params.slug) {
    throw new Error("Missing slug in params.");
  }

  return getContentfulBlogPostBySlug(params.slug);
};

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: styles
    },
    ...BlockQuoteStyles(),
    ...ImageMediaStyles()
  ];
};

const Post: React.FC = ({}) => {
  const loaderData = useLoaderData<Entry<ContentfulBlogPost> | undefined>();
  const { theme } = useTheme();

  if (!loaderData) {
    return <div>Loading your blog post heheheheh</div>;
  }

  // $$TODO: another error in the typings for this library.
  const BlogPostBody = documentToReactComponents(
    loaderData.fields.bodyRichText as any,
    options
  );

  const date = new Date(loaderData.sys.updatedAt).toDateString();
  const subDate = date.substring(date.indexOf(" ") + 1);

  return (
    <div className="text-post-bodyText">
      <div className={`${fixedWidthLayoutClasses} flex flex-col mb-10`}>
        <a
          href="/blog"
          className="go-back-btn inline-flex border-none items-center justify-start text-xl mb-10 hover:text-post-bodyTextLg duration-200 ease-in w-fit"
        >
          <img
            src={theme === SupportedTheme.DARK ? ArrowDark : Arrow}
            className="go-back-arrow w-6 rounded-full mr-2 hover:text-post-bodyTextLg"
            alt=""
          />
          <p className="">Go back</p>
        </a>
        <h1 className="BlogPost__Title text-4xl text-post-bodyTextLg xs:text-5xl font-bold leading-relaxed">
          {loaderData.fields.blogPostTitle}
        </h1>
        <div className="w-full flex flex-row justify-between items-center mt-2 xs:mt-8 mx-auto max-w-[700px]">
          <p className="BlogPost__DatePublish text-xl">{subDate}</p>
          <Author />
        </div>
      </div>
      <img
        src={loaderData.fields.blogPostSplash.fields.file.url}
        className="BlogPost__SplashImage m-auto xs:mb-20"
        alt=""
      />
      <div
        className={`BlogPost text-post-bodyText ${fixedWidthLayoutClasses} mb-20`}
      >
        <div className="mt-10">{BlogPostBody}</div>
        <ShareSection
          targetHref={loaderData.fields.blogPostSlug}
          title={loaderData.fields.blogPostTitle}
        />
        <AuthorSection />
      </div>
      <hr></hr>
    </div>
  );
};

export default Post;

const Author = () => {
  return (
    <div className="flex flex-row items-center justify-center">
      <a href="/blog">
        <img src={AuthorAvatar} alt="AN" className="w-10 rounded-full mr-4" />
      </a>
      <div className="inline-flex items-center">
        <a href="https://www.linkedin.com/in/tam-pmnguyen/" target="_blank">
          <GrLinkedin className="w-9 h-6 text-post-icon hover:text-post-linkedin mr-2" />
        </a>
        <a href="https://twitter.com/alissa_nguyen14" target="_blank">
          <FaTwitter className="w-8 h-7 text-post-icon hover:text-post-twitter mr-2" />
        </a>
        <a href="https://www.instagram.com/alissang1211/" target="_blank">
          <FiInstagram className="w-8 h-7 text-post-icon hover:text-post-instagram" />
        </a>
      </div>
    </div>
  );
};
