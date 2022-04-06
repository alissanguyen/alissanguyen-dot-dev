import * as React from "react";

const HeadingTwo: React.FC = (props) => {
  return (
    <h3 className="BlogPost__HeadingTwo text-3xl xs:text-4xl custom2:text-[3.2rem] custom2:leading-[4rem] mt-10 mb-5 text-post-bodyTextLg">
      {props.children}
    </h3>
  );
};

export default HeadingTwo;
