import * as React from "react";

const HeadingFive: React.FC = (props) => {
  return (
    <h5 className={`text-2xl text-post-bodyTextLg mt-2 mb-1 font-medium`}>
      {props.children}
    </h5>
  );
};

export default HeadingFive;
