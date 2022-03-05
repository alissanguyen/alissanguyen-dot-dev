import * as React from "react";
import { sm } from "~/constants";
import { useTheme } from "~/providers/ThemeProvider";
import { SupportedTheme } from "~/types";

const SocialMedia: React.FC = ({}) => {
  const { theme } = useTheme();
  const styles = getTextStyles(theme)
  return (
    <div className="sm-wrapper grid grid-cols-5 gap-4 items-center ">
      {sm.map((element) => {
        const IconMarkup = element.icon;

        return (
          <div
            className={`${element.className} social-media-icon-wrapper relative bg-aboutMe-smIconBg flex flex-col justify-center items-center justify-self-center ${styles}`}
            key={element.name}
          >
            <div className="tooltip absolute top-0 text-sm text-white bg-white">
              {element.name}
            </div>
            <a href={element.externalUrl} target="_blank">
              <span className="flex justify-center items-center text-lg">
                <IconMarkup />
              </span>
            </a>
          </div>
        );
      })}
    </div>
  );
};

const getTextStyles = (
  theme: SupportedTheme
) => {
  return theme === SupportedTheme.LIGHT ? "text-black hover:text-white" : "text-white"
}

export default SocialMedia;
