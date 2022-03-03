import * as React from "react";
import { tags } from "~/constants";

interface Props {}

const TagsSection: React.FC<Props> = ({}) => {
  return (
    //   TODO: Search blog posts by tags selected
    <div className="Tags__Wrapper mb-16 text-white">
      <p className="BlogPage__SubHeader mb-4">Search blog by topics</p>
      <div className="tags-wrapper flex space-x-2 flex-row flex-wrap">
        {tags.map((tag) => (
          <button
            key={tag.id}
            className={`tag-wrapper ${tag.style} text-base flex items-center justify-center py-1 px-3 my-2 rounded-full`}
          >
            <p className="text-base font-normal tracking-wide">#{tag.name}</p>
          </button>
        ))}
      </div>
    </div>
  );
};
// shadow-sm mx-1 my-2 py-1 px-4 rounded-2xl

export default TagsSection;
