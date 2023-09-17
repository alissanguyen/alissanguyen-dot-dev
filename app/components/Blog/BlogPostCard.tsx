import { Entry } from "contentful";
import * as React from "react";
import { ContentfulBlogPost } from "~/contentful/types";
import BlogPostTags from "./BlogPostTags";
import CopyURLButton from "./CopyURLButton";
import { MdDateRange } from "react-icons/md";
interface Props {
  blogPost: Entry<ContentfulBlogPost>;
}

const BlogPostCard: React.FC<Props> = (props) => {
  const blogPost = props.blogPost;

  const blogPostTags = blogPost.metadata.tags;
  // Date last modified
  const rawDate = new Date(blogPost.sys.updatedAt).toDateString();
  const publishedDate = rawDate.substring(rawDate.indexOf(" ") + 1);

  const postUrl = `https://www.alissanguyen.dev/blog/${blogPost.fields.blogPostSlug}`;
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
        <div className="Card__Container">
          <CopyURLButton
            userRecentlyCopiedText={userRecentlyCopiedText}
            handleCopyURL={handleCopyURL}
          />
          <div className="Card__TextContent h-full flex rounded-b-lg flex-col pt-5 pb-2 px-5 justify-between">
            <div className="flex flex-col">
              <div className="Card__Date__Wrapper">
                <MdDateRange className="h-5" />
                <p className="Card__Date text-base text-gray-500 font-medium font-sans">
                  {publishedDate}
                </p>
              </div>
              <>
                <div className="font-bold text-textLgColor text-xl mb-2 sm:max-h-16 overflow-hidden">
                  {blogPost.fields.blogPostTitle}
                </div>
                <p className="Card__Excerpt text-gray-600 text-base line-clamp-3">
                  {blogPost.fields.blogPostExcerpt}
                </p>
              </>
            </div>
            <BlogPostTags tags={blogPostTags} />
          </div>
        </div>
      </div>
    </a>
  );
};

export default BlogPostCard;
