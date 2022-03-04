import * as React from "react";
import { tags } from "~/constants";

interface Props {}

const TagsSection: React.FC<Props> = ({}) => {
  return (
    //   TODO: Search blog posts by tags selected
    <div className="Tags__Wrapper mb-16 text-blog-lgText custom:w-1/2 custom:mt-0">
      <p className="BlogPage__SubHeader mb-4">Search blog by topics</p>
      <div className="tags-wrapper flex flex-row flex-wrap">
        {tags.map((tag) => (
          <button
            key={tag.id}
            className={`tag-wrapper ${tag.style} text-base flex items-center justify-center py-1 px-3 my-2 rounded-full mr-2`}
          >
            <p className="text-base font-normal tracking-wide">#{tag.name}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default TagsSection;
