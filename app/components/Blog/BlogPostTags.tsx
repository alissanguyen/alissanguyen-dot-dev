import { TagLink } from "contentful";
import * as React from "react";
import { tags } from "~/constants";

interface Props {
  tags: TagLink[];
}

export const tagIdsToDisplayNames = tags.reduce<Record<string, string>>(
  (acc, cur) => {
    acc[cur.id] = cur.name;
    return acc;
  },
  {}
);

const BlogPostTags: React.FC<Props> = (props) => {
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
            className="PostCard__Tag inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-600 mr-2"
          >
            #{title}
          </span>
        );
      })}
    </div>
  );
};

export default BlogPostTags;
