import * as React from "react";

const HeadingFive: React.FC = (props) => {
  return (
    <h6
      className={`BlogPost__HeadingFive text-xl custom2:text-2xl text-post-bodyTextLg mt-2 mb-1 font-medium`}
    >
      {props.children}
    </h6>
  );
};

export default HeadingFive;
