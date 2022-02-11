import * as React from "react";

interface Props {}

const Footer: React.FC<Props> = ({}) => {
  return (
    <div className="bottom-0 py-5 w-full">
      <p className="text-sm text-textSmColor text-center">
        Built and designed by Alissa Nguyen a.k.a Tam Nguyen. Copyright © 2021
        All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
