import * as React from "react";
import { LinksFunction } from "@remix-run/node";
import { sm } from "~/constants";
import { useTheme } from "~/providers/ThemeProvider";
import { SupportedTheme } from "~/types";
import styles from "./SocialMedia.css?url";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
};

const SocialMedia: React.FC<React.PropsWithChildren> = ({ }) => {
  const { theme } = useTheme();
  const styles = getTextStyles(theme);
  return (
    <div className="sm-wrapper flex flex-col gap-4">
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

const getTextStyles = (theme: SupportedTheme) => {
  return theme === SupportedTheme.LIGHT
    ? "text-black hover:text-white"
    : "text-white";
};

export default SocialMedia;
