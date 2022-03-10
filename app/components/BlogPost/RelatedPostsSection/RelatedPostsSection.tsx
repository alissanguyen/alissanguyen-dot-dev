import { Entry } from "contentful";
import * as React from "react";
import { ContentfulBlogPost } from "~/contentful/contentful";
import { fixedWidthLayoutClasses } from "~/constants";
import RelatedPostCard from "./RelatedPostCard";

interface Props {
  relatedPosts: Entry<ContentfulBlogPost>[];
}

const RelatedPostsSection: React.FC<Props> = (props) => {
  return (
    <div
      className={`${fixedWidthLayoutClasses} max-w-[1000px] pt-20 pb-20 sm:pb-32 lg:pb-44`}
    >
      <div className="flex flex-col items-start justify-center text-3xl mb-10">
        <p className="text-post-bodyTextLg text-5xl font-medium mb-5">
          If you found this article helpful.
        </p>
        <p className="text-post-bodyText text-4xl">
          You will love these ones as well.
        </p>
      </div>
      <div className="RelatedBlogPosts__Wrapper grid gap-10 gap-y-20 md:grid-cols-2 lg:grid-cols-3">
        {props.relatedPosts.map((post) => (
          <RelatedPostCard key={post.sys.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default RelatedPostsSection;
