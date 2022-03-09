import { Entry, TagLink } from "contentful";
import * as React from "react";
import { tags } from "~/constants";
import { ContentfulBlogPost } from "~/contentful/contentful";
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
              <p className="text-blogPage-postCardSubtext text-gray-600 text-base sm:h-32 md:h-36 overflow-y-hidden">
                {blogPost.fields.blogPostExcerpt}
              </p>
            </div>
            <BlogPostTags tags={blogPostTags} />
            <hr></hr>
            <div className="flex flex-row items-center justify-between pt-2">
              <div className="inline-flex items-center justify-between">
                <img
                  src="/images/author.jpg"
                  alt="AN"
                  className="rounded-full w-10 mr-2"
                />
                <p className="text-base uppercase">Alissa</p>
              </div>
              <p className="uppercase text-base text-right flex items-center justify-end">
                15 mins
              </p>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

/**
 * 1. Create react component
 * 2. Store the rendered div containing description/excerpt as a ref
 * 3. If the Div clientHeight is greater than scrollHeight, then set `hasOverflow` state to true
 * 4. If `hasOverflow` state is true, then render `see more` button
 * 5. If see more button is tapped, set `overFlowIsVisible` to true
 * 6. If `overFlowIsVisible` is true, remove the classname that hides overflow
 */

export default BlogPostCard;

export const tagIdsToDisplayNames = tags.reduce<Record<string, string>>(
  (acc, cur) => {
    acc[cur.id] = cur.name;
    return acc;
  },
  {}
);

interface TagsProps {
  tags: TagLink[];
}

const BlogPostTags: React.FC<TagsProps> = (props) => {
  const blogPostTags = props.tags;
  return (
    <div className="PostCard__TagsWrapper pt-2 pb-4 w-full overflow-hidden">
      {blogPostTags.map((tag) => {
        const title =
          tagIdsToDisplayNames[
            tag.sys.id
          ]; /** Lookup in the `tags` constant. */

        return (
          <span
            key={tag.sys.id}
            className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-600 mr-2"
          >
            #{title}
          </span>
        );
      })}
    </div>
  );
};
