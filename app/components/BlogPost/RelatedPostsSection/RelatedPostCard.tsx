import { Entry } from "contentful";
import * as React from "react";
import BlogPostTags from "~/components/Blog/BlogPostTags";
import { ContentfulBlogPost } from "~/contentful/types";

interface Props {
  post: Entry<ContentfulBlogPost>;
}

const RelatedPostCard: React.FC<Props> = (props) => {
  const rawDateData = new Date(props.post.sys.updatedAt).toDateString();
  const date = rawDateData.substring(rawDateData.indexOf(" ") + 1);
  const tags = props.post.metadata.tags;
  return (
    <div className="RelatedBlogPost__Card__Container">
      <a
        href={`/blog/${props.post.fields.blogPostSlug}`}
        className="RelatedBlogPost__Link__Container h-full rounded-lg"
      >
        <img
          src={props.post.fields.blogPostSplash.fields.file.url}
          alt={props.post.fields.blogPostSplash.fields.title}
          title={props.post.fields.blogPostSplash.fields.title}
          className="RelatedBlogPost__Image rounded-lg w-full h-80"
          loading="lazy"
        />
      </a>
      <div className="flex flex-col">
        <span className="inline-flex text-xl md:text-2xl text-gray-400 font-bold mt-2 mb-3">
          {date} — 5 min read
        </span>
        <span className="RelatedBlogPost__Title text-blog-lgText font-bold text-2xl md:text-3xl">
          {props.post.fields.blogPostTitle}
        </span>
        <div>
          <BlogPostTags tags={tags} />
        </div>
      </div>
    </div>
  );
};

export default RelatedPostCard;
