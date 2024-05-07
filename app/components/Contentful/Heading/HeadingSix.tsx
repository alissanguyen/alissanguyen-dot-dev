import * as React from "react";

const HeadingSix: React.FC<React.PropsWithChildren> = (props) => {
  return (
    <p className={`font-bold text-xl mb-5 mt-10 xs:font-medium`}>
      {props.children}
    </p>
  );
};

export default HeadingSix;
