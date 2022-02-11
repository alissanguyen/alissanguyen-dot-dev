import * as React from "react";
import { LinksFunction } from "remix";
import styles from "./BlogButton.css";

interface Props {}

export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: styles
  }
];

const BlogButton: React.FC<Props> = ({}) => {
  return (
    <div className="blogbtn-container flex items-center justify-center">
      <a href="/blog" target="_blank">
        <button className="blog-button relative inline-block outline-0 border-0 align-middle no-underline bg-transparent p-0 w-56 h-auto cursor-pointer">
          <span
            className="circle relative block m-0 w-12 h-12"
            aria-hidden="true"
          >
            <span className="icon arrow absolute top-0 bottom-0 m-auto "></span>
          </span>
          <span className="button-text text-lg absolute top-0 left-0 right-0 bottom-0 py-3 px-0 ml-9 font-semibold text-center uppercase text-navBar-blogBtnText">
            Visit my Blog
          </span>
        </button>
      </a>
    </div>
  );
};

export default BlogButton;
