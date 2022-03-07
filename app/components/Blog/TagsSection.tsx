import { Tag } from "contentful";
import * as React from "react";
import { getBlogPostsWithMatchingTag } from "~/contentful/contentfulClient";
import clsx from "clsx";
import type { ChangeEventHandler } from "react";
import { CustomCheckboxContainer, CustomCheckboxInput } from "@reach/checkbox";
import styles from "./Blog.css";
import { LinksFunction } from "remix";

export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: styles
  }
];

interface Props {
  tags: Tag[];
}

const TagsSection: React.FC<Props> = (props) => {
  const [tag, setTag] = React.useState("");

  return (
    //   TODO: Search blog posts by tags selected
    <div className="Tags__Wrapper my-16 text-blog-lgText">
      <p className="BlogPage__SubHeader mb-4 font-medium">
        Search blog by topics
      </p>
      <div className="tags-wrapper flex flex-row flex-wrap">
        {props.tags.map((tag) => (
          <button
            key={tag.sys.id}
            className={`tag-wrapper text-lg flex items-center justify-center py-1 px-3 my-2 rounded-full mr-3 bg-blog-tagBg focus-ring`}
            onClick={() => setTag(tag.sys.id)}
          >
            <p className="font-normal tracking-wide">#{tag.name}</p>
          </button>
          // <Tag tag={tag.name} tagId={tag.sys.id} selected={false}/>
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
          "text-black bg-gray-100": !props.selected,
          "text-white bg-black": props.selected,
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
