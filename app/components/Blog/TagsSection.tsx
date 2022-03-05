import { Tag } from "contentful";
import * as React from "react";

interface Props {
  tags: Tag[];
}

const TagsSection: React.FC<Props> = (props) => {
  return (
    //   TODO: Search blog posts by tags selected
    <div className="Tags__Wrapper mb-16 text-blog-lgText custom:w-1/2 custom:mt-0">
      <p className="BlogPage__SubHeader mb-4">Search blog by topics</p>
      <div className="tags-wrapper flex flex-row flex-wrap">
        {props.tags.map((tag) => (
          <button
            key={tag.sys.id}
            className={`tag-wrapper text-base flex items-center justify-center py-1 px-3 my-2 rounded-full mr-2`}
          >
            <p className="text-base font-normal tracking-wide">#{tag.name}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default TagsSection;
