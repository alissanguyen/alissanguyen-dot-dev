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

export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: styles
  }
];
interface Props {
  theme: SupportedTheme;
}
const AboutMe: React.FC<Props> = (props) => {
  const [avatar, setAvatar] = React.useState("dark");

  const handleAvatarClassname = () => {
    props.theme === SupportedTheme.DARK ? setAvatar("dark") : setAvatar("light");
  };

  return (
    <article className="aboutme-section felx flex-col justify-center py-20">
      <div className="">
        <div className="grid grid-cols-5 gap-5 mb-5">
          <div className="flex flex-col col-span-3">
            <div className="bio-description text-lg font-light text-textLgColor tracking-wide ">
              <Hi />
              <div className="my-10 max-w-xl">
                <p className=" text-aboutMe-aboutMeText">
                  I'm a software engineer living in Seattle, WA.
                </p>
                <p className="my-4 text-aboutMe-aboutMeText">
                  I started programming in late 2020. My focus is on building
                  and delivering software that is elegantly designed, efficient,
                  and user-friendly.
                </p>
                <Titles />
                <div className="mt-12"></div>
                <div className="text-textLgColor flex flex-col items-baseline">
                  <SocialMedia />
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-2 justify-self-end">
            <img
              src={Avatar}
              alt=""
              className={`avatar-image ${avatar} h-[30rem]`}
            />
          </div>
        </div>
        <MyStory />
      </div>
      <div className="spacer-div mt-10"></div>
      <FunFacts />
    </article>
  );
};

export default AboutMe;
