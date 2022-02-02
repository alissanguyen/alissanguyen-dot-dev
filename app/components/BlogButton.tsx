import * as React from "react";
import { Link } from "remix";

interface Props {}

const BlogButton: React.FC<Props> = ({}) => {
  return (
    <Link to="/blog">
      <button className="blog-button box-border relative inline-block align-center no-underline justify-center font-extrabold uppercase px-10 py-3 rounded-2xl">
        Go to my blog!
      </button>
    </Link>
  );
};

export default BlogButton;
