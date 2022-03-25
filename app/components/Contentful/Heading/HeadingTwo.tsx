import * as React from "react";

const HeadingTwo: React.FC = (props) => {
  return (
    <h2 className="BlogPost__HeadingTwo text-5xl mt-10 mb-5 text-post-bodyTextLg">
      {props.children}
    </h2>
  );
};

export default HeadingTwo;
