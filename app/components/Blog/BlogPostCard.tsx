import { Entry } from "contentful";
import * as React from "react";
import { ContentfulBlogPost } from "~/contentful/contentful";
import BlogPostTags from "./BlogPostTags";
import CopyURLButton from "./CopyURLButton";

interface Props {
  blogPost: Entry<ContentfulBlogPost>;
}

const BlogPostCard: React.FC<Props> = (props) => {
  const blogPost = props.blogPost;

  const blogPostTags = blogPost.metadata.tags;

  const postUrl = `alissanguyen.dev/blog/${blogPost.fields.blogPostSlug}`;
  const [userRecentlyCopiedText, setUsetRecentlyCopiedText] =
    React.useState(false);

  const handleCopyURL = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigator.clipboard.writeText(postUrl);
    setUsetRecentlyCopiedText(true);
  };

  React.useEffect(() => {
    let timeout: number | undefined;

    if (userRecentlyCopiedText) {
      timeout = window.setTimeout(() => setUsetRecentlyCopiedText(false), 1500);
    }

    return () => {
      window.clearTimeout(timeout);
    };
  }, [userRecentlyCopiedText]);
  return (
    <a
      href={`/blog/${blogPost.fields.blogPostSlug}`}
      className="h-full rounded-lg"
    >
      <div className="h-full">
        <div className="Card__Container relative bg-white flex flex-col content-between rounded-lg h-full shadow-lg custom2:hover:scale-105 duration-200">
          <CopyURLButton
            userRecentlyCopiedText={userRecentlyCopiedText}
            handleCopyURL={handleCopyURL}
          />
          <img
            className="Card__Image min-h-[12.5rem] h-[12.5rem] bg-no-repeat rounded-t-lg object-cover relative overflow-hidden"
            src={"https://" + blogPost.fields.blogPostSplash.fields.file.url}
            alt="Post Image"
          />
          <div className="Card__TextContent h-full justify-between flex rounded-b-lg flex-col pt-5 pb-2 px-5">
            <div className="">
              <div className="font-bold text-grey-900 text-xl mb-2 sm:h-16 overflow-hidden">
                {blogPost.fields.blogPostTitle}
              </div>
              <p className="Card__Excerpt text-blogPage-postCardSubtext text-gray-600 text-base line-clamp-3">
                {blogPost.fields.blogPostExcerpt}
              </p>
            </div>
            <BlogPostTags tags={blogPostTags} />
          </div>
        </div>
      </div>
    </a>
  );
};

export default BlogPostCard;
