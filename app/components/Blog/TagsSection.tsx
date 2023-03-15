import { Tag } from "contentful";
import * as React from "react";
import { useTheme } from "~/providers/ThemeProvider";
import { SupportedTheme } from "~/types";

interface Props {
  tags: Tag[];
  selectedTags: Set<string>;
  onTagSelect: (id: string) => void;
  availableTags: Set<string>;
}

const TagsSection: React.FC<Props> = (props) => {
  const { theme } = useTheme();
  return (
    <div className="Tags__Wrapper mt-16 md:mt-32 mb-16 text-blog-lgText">
      <p className="BlogPage__SubHeader text-xl mb-4 font-bold">
        Search blog by topics
      </p>
      <div className="tags-wrapper flex flex-row flex-wrap">
        {props.tags.map((tag) => (
          <TagBadge
            key={tag.sys.id}
            tag={tag.name}
            tagId={tag.sys.id}
            theme={theme}
            selected={props.selectedTags.has(tag.sys.id)}
            onClick={() => {
              props.onTagSelect(tag.sys.id);
            }}
            disabled={!props.availableTags.has(tag.sys.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default TagsSection;

interface TagBadgeProps {
  tag: string;
  tagId: string;
  selected: boolean;
  onClick: (tagId: string) => void;
  disabled?: boolean;
  theme: SupportedTheme;
}

const TagBadge: React.FC<TagBadgeProps> = (props) => {
  const selectedClassName =
    props.theme === SupportedTheme.DARK
      ? "bg-white text-black"
      : "bg-black text-white";
  const disabledClassName = "opacity-25";

  return (
    <button
      name={"Filter for" + props.tag}
      aria-label={props.tag}
      className={`mb-4 mr-4 h-auto w-auto cursor-pointer rounded-full px-6 py-3 transition flex ${
        props.selected ? selectedClassName : "bg-blog-tagBg"
      } ${props.disabled ? disabledClassName : "focus-ring"}`}
      onClick={() => props.onClick(props.tagId)}
      disabled={props.disabled}
    >
      <span className="text-lg">{"#" + props.tag}</span>
    </button>
  );
};
