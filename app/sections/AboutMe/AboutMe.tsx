import * as React from "react";
import Avatar from "../../assets/personal/avatar.png";
import styles from "./AboutMe.css";
import { LinksFunction } from "remix";
import FunFacts from "./FunFacts";
import MyStory from "./MyStory";
import Titles from "./Titles";
import Hi from "./Hi";
import { SupportedTheme } from "~/types";
import { useTheme } from "~/providers/ThemeProvider";
import ResumeButton from "~/components/ResumeButton/ResumeButton";

export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: styles
  }
];
const AboutMe: React.FC = (props) => {
  const { theme } = useTheme();

  return (
    <article className="aboutme-section felx flex-col justify-center px-12 lg:py-20 sm:p-14 md:py-20 lg:px-5 xl:p-0">
      <div className="">
        <div className="flex flex-col sm:grid sm:grid-cols-5 sm:gap-5 mb-5">
          <div className="flex flex-col col-span-3">
            <div className="bio-description md:text-lg leading-10 lg:text-lg ">
              <Hi />
              <div className="my-10 text-lg">
                <p className="text-aboutMe-aboutMeText">
                  Welcome to my personal website!
                </p>
                <p className="mb-10 my-4 text-aboutMe-aboutMeText">
                  I enjoy building software that makes peoples' lives easier by
                  focusing on elegant, performant, and maintainable frontend
                  code. I also enjoy petting every cat I see.
                </p>
                <div className="spacer-div sm:mt-10"></div>
                <Titles />
                <div className="mt-12"></div>
                <div className="resume-btn-wrapper w-fit">
                  <ResumeButton />
                </div>
              </div>
            </div>
          </div>

          <div className="avatar-image-wrapper sm:col-span-2 justify-self-end lg:mb-0 mb-10">
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
