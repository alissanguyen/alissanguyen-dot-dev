import * as React from "react";
import Avatar from "../../assets/personal/avatar.png";
import styles from "./AboutMe.css";
import SocialMedia from "~/components/SocialMedia/SocialMedia";
import { LinksFunction } from "remix";
import FunFacts from "./FunFacts";
import MyStory from "./MyStory";
import Titles from "./Titles";
import Hi from "./Hi";
import { SupportedTheme } from "~/types";
import { useTheme } from "~/providers/ThemeProvider";

export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: styles
  }
];
const AboutMe: React.FC = (props) => {
  const { theme } = useTheme();

  return (
    <article className="aboutme-section felx flex-col justify-center lg:py-20 sm:p-14 md:p-20 lg:px-5 xl:p-0">
      <div className="">
        <div className="md:flex md:flex-row lg:grid lg:grid-cols-5 lg:gap-5 lg:mb-5">
          <div className="flex flex-col lg:col-span-3">
            <div className="bio-description md:text-lg md:leading-10 lg:text-lg ">
              <Hi />
              <div className="sm:my-10 lg:max-w-xl sm:text-lg">
                <p className="text-aboutMe-aboutMeText">
                  Welcome to my personal website!
                </p>
                <p className="md:mb-10 lg:my-4 text-aboutMe-aboutMeText">
                  I enjoy building software that makes peoples' lives easier by
                  focusing on elegant, performant, and maintainable frontend
                  code. I also enjoy petting every cat I see.
                </p>
                <div className="spacer-div sm:mt-10"></div>
                <Titles />
                <div className="mt-12"></div>
                <div className="text-textLgColor lg:flex lg:flex-col lg:items-baseline">
                  <SocialMedia />
                </div>
              </div>
            </div>
          </div>

          <div className="avatar-image-wrapper lg:col-span-2 lg:justify-self-end lg:mb-0 md:mb-10">
            <img
              src={Avatar}
              alt=""
              className={`avatar-image ${
                theme === SupportedTheme.DARK ? "dark" : ""
              }  lg:h-[30rem]`}
            />
          </div>
          <div className="spacer-div sm:mt-10"></div>
        </div>
        <MyStory />
      </div>
      <div className="spacer-div mt-20 md:mt-24"></div>
      <FunFacts />
    </article>
  );
};

export default AboutMe;
