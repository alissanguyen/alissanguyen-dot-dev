import * as React from "react";
import styles from "./AboutMe.css";
import { LinksFunction } from "@remix-run/node";
import FunFacts from "./FunFacts";
import MyStory from "./MyStory";
import Titles from "./Titles";
import Hi from "./Hi";
import { useTheme } from "~/providers/ThemeProvider";
import ResumeButton from "~/components/ResumeButton/ResumeButton";
import Facts from "./Facts";

export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: styles
  }
];
const AboutMe: React.FC = (props) => {
  const { theme } = useTheme();

  return (
    <section id="AboutMe" className="AboutMe__Wrapper">
      <article className="aboutme-wrapper flex flex-col justify-center">
        <div className="Introduction__Wrapper" id="introductionWrapper">
          <div className="flex flex-col sm:grid sm:grid-cols-5 sm:gap-5 mb-5">
            <div className="flex flex-col col-span-3">
              <Hi />
              <div className="bio-description md:text-lg leading-10 text-textSmColor">
                <div className="my-10 text-lg">
                  <p className="my-4">
                    Welcome to my personal website!
                  </p>
                  <p className="mb-5 xs:mb-10">
                    I enjoy building software that makes peoples' lives easier
                    by writing elegant, performant, and maintainable frontend
                    code. I also enjoy petting every cat I see.
                  </p>
                  <div className="spacer-div mt-5 sm:mt-10"></div>
                  <Titles />
                  <div className="mt-5 xs:mt-12"></div>
                  <div className="resume-btn-wrapper w-fit">
                    <ResumeButton />
                  </div>
                </div>
              </div>
            </div>

            <div className="avatar-image-wrapper sm:col-span-2 justify-self-end lg:mb-0 mb-10">
              <img
                src={"/images/avatar.jpeg"}
                alt="A picture of me uwu"
                title="Picture of me"
                className={`avatar-image lg:h-[30rem] rounded-xl`}
              />
            </div>

            <div className="spacer-div sm:mt-10"></div>
          </div>

          <MyStory />
        </div>
        <div className="spacer-div mt-20 md:mt-24 lg:mt-56"></div>
        <FunFacts />
        <Facts />
      </article>
    </section>
  );
};

export default AboutMe;
