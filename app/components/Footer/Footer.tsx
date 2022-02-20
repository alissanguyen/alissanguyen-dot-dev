import * as React from "react";

interface Props {}

const Footer: React.FC<Props> = ({}) => {
  return (
    <div className="bottom-0 py-5 w-full flex flex-col items-center justify-center text-xs sm:text-sm text-textSmColor">
      <p>Built and designed by Alissa Nguyen a.k.a Tam Nguyen.</p>
      <p>Copyright © 2021 All Rights Reserved.</p>
    </div>
  );
};

export default Footer;
