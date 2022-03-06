import { Tag } from "contentful";
import * as React from "react";
import { getBlogPostsWithMatchingTag } from "~/contentful/contentfulClient";
import clsx from "clsx";
import type { ChangeEventHandler } from "react";
import { CustomCheckboxContainer, CustomCheckboxInput } from "@reach/checkbox";

interface Props {
  tags: Tag[];
}

const TagsSection: React.FC<Props> = (props) => {
  const [tag, setTag] = React.useState("");

  return (
    //   TODO: Search blog posts by tags selected
    <div className="Tags__Wrapper mb-16 text-blog-lgText custom:w-1/2 custom:mt-0">
      <p className="BlogPage__SubHeader mb-4">Search blog by topics</p>
      <div className="tags-wrapper flex flex-row flex-wrap">
        {props.tags.map((tag) => (
          <button
            key={tag.sys.id}
            className={`tag-wrapper text-base flex items-center justify-center py-1 px-3 my-2 rounded-full mr-2`}
            onClick={() => setTag(tag.sys.id)}
          >
            <p className="text-base font-normal tracking-wide">#{tag.name}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default TagsSection;

interface TagProps {
  tag: string;
  tagId: string;
  selected: boolean;
  onClick?: ChangeEventHandler<HTMLInputElement>;
  disabled?: boolean;
}

const Tag: React.FC<TagProps> = (props) => {
  return (
    <CustomCheckboxContainer
      as="label"
      key={props.tagId}
      checked={props.selected}
      onChange={props.onClick}
      className={clsx(
        "relative mb-4 mr-4 block h-auto w-auto cursor-pointer rounded-full px-6 py-3 transition",
        {
          "text-primary bg-secondary": !props.selected,
          "text-inverse bg-inverse": props.selected,
          "focus-ring opacity-100": !props.disabled,
          "opacity-25": props.disabled
        }
      )}
      disabled={props.disabled}
    >
      <CustomCheckboxInput
        checked={props.selected}
        value={props.tag}
        className="sr-only"
      />
      <span>{props.tag}</span>
    </CustomCheckboxContainer>
  );
};
