import * as React from "react";

const HeadingSix: React.FC = (props) => {
  return (
    <h6 className={`font-bold text-xl mb-5 mt-10 xs:font-medium`}>
      {props.children}
    </h6>
  );
};

export default HeadingSix;
