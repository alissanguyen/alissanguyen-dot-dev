import { Entry, TagLink } from "contentful";
import * as React from "react";
import { Link } from "remix";
import { tags } from "~/constants";
import { ContentfulBlogPost } from "~/contentful/contentful";

interface Props {
  blogPost: Entry<ContentfulBlogPost>;
}

const BlogPostCard: React.FC<Props> = (props) => {
  const blogPost = props.blogPost;
  const blogPostTags = blogPost.metadata.tags;

  return (
    <Link
      to={`/blog/${blogPost.fields.blogPostSlug}`}
      key={blogPost.sys.id}
      className="h-full rounded-lg"
    >
      <div key={blogPost.sys.id} className="h-full">
        <div className="Card__Container bg-white flex flex-col content-between rounded-lg h-full shadow-lg hover:scale-105 duration-200">
          <img
            className="Card__Image w-full min-h-[12.5rem] h-[12.5rem] bg-no-repeat rounded-t-lg object-cover"
            src={blogPost.fields.blogPostSplash.fields.file.url}
            alt="Post Image"
          />
          <div className="Card__TextContent h-full justify-between flex rounded-b-lg flex-col p-5">
            <div className="">
              <div className="font-bold text-grey-900 text-xl mb-2">
                {blogPost.fields.blogPostTitle}
              </div>
              <p className="text-blogPage-postCardSubtext text-gray-600 text-base max-h-48 overflow-y-hidden">
                {blogPost.fields.blogPostExcerpt}
              </p>
            </div>
            <BlogPostTags tags={blogPostTags} />
            <hr></hr>
            <p className="uppercase text-base text-right">15 min read</p>
          </div>
        </div>
      </div>
    </Link>
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

const tagIdsToDisplayNames = tags.reduce<Record<string, string>>((acc, cur) => {
  acc[cur.id] = cur.name;
  return acc;
}, {});

interface TagsProps {
  tags: TagLink[];
}

const BlogPostTags: React.FC<TagsProps> = (props) => {
  const blogPostTags = props.tags;
  console.log(blogPostTags);
  return (
    <div className="PostCard__TagsWrapper py-4 w-full">
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
