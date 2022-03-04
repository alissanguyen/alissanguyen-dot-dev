import * as React from "react";
import { useLocation } from "remix";
import { useTheme } from "~/providers/ThemeProvider";
import { SupportedTheme } from "~/types";

interface Props {}

const Footer: React.FC<Props> = ({}) => {
  const location = useLocation();
  const onBlogRoute = location.pathname === "/blog" || location.pathname === "/blog/";

  return (
    <div className="w-full relative">
      {onBlogRoute ? <Waves /> : null}
      <div className="bottom-0 py-5 w-full flex flex-col items-center justify-center text-xs sm:text-sm text-textSmColor">
        <p>Built and designed by Alissa Nguyen a.k.a Tam Nguyen.</p>
        <p>Copyright © {new Date().getFullYear()} All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;

const Waves = () => {
  return (
    <div className="ocean">
      <div className="wave"></div>
      <div className="wave"></div>
    </div>
  );
};
