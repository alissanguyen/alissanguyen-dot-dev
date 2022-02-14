import * as React from "react";

interface Props {}

const BlogButton: React.FC<Props> = ({}) => {
  return (
    <div className="blogbtn-container flex items-center justify-center">
      <a href="/blog" target="_blank">
        {/* TODO: Fix text not align vertically */}
        <button className="blog-button relative inline-block outline-0 border-0 align-middle no-underline bg-transparent p-0 md:w-48 h-auto cursor-pointer">
          <span
            className="circle relative block m-0 md:w-12 md:h-12"
            aria-hidden="true"
          >
            <span className="icon arrow absolute top-0 bottom-0 m-auto md:before:h-2.5 md:before:w-2.5 md:before:top-[-0.25rem] md:before:right-[0.0625rem]"></span>
          </span>
          <span className="button-text md:text-lg absolute top-0 left-0 right-0 bottom-0 py-3 px-0 ml-10 hover:ml-4 font-semibold text-center uppercase text-navBar-blogBtnText">
            Visit my Blog
          </span>
        </button>
      </a>
    </div>
  );
};

export default BlogButton;
