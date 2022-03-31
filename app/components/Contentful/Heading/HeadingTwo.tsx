import * as React from "react";

const HeadingTwo: React.FC = (props) => {
  return (
    <h3 className="BlogPost__HeadingTwo text-4xl xs:text-5xl mt-10 mb-5 text-post-bodyTextLg">
      {props.children}
    </h3>
  );
};

export default HeadingTwo;
