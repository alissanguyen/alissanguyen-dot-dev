import * as React from "react";
import { DocumentTextIcon } from "@heroicons/react/outline";
import BlogIndexDecoration from "./BlogIndexDecoration";

interface Props {
  search: string;
  setSearch: (input: string) => void;
  count: number;
}

const SearchBarSection: React.FC<Props> = (props) => {
  return (
    <div className="BlogPage__Header__Wrapper">
      <div className="custom2:col-span-3 sm:col-span-2 ">
        <p className="BlogPage__SubHeader mb-5 text-5xl font-medium leading-snug">
          Find educational resources for React, Remix and more.
        </p>
        <p className="BlogPage__SubHeader mb-10 leading-normal text-post-bodyText text-3xl font-normal">
          Tag along with me as I explore new tech and share my learning along
          the way!
        </p>
        <div className="SearchBar__InputWrapper">
          <input
            type="text"
            name="Search blog posts"
            id="blog-post-search-bar"
            value={props.search}
            onChange={(e) => {
              props.setSearch(e.target.value);
            }}
            className="SearchBar__Input"
            placeholder="Search posts"
          />
          <div className="SearchBar__Icon">
            <span className="mr-2">
              <DocumentTextIcon className="h-5 w-5" />
            </span>
            <p className="text-sm opacity-80">{props.count}</p>
          </div>
        </div>
      </div>
      <BlogIndexDecoration />
    </div>
  );
};

export default SearchBarSection;
