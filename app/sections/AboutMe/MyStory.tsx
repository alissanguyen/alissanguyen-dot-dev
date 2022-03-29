import * as React from "react";
import { Globe } from "~/components/Decoration";

const MyStory: React.FC = ({}) => {
  return (
    <div className="my-story-wrapper flex flex-col items-baseline w-full text-textSmColor">
      <span className="my-story-title reveal-text text-textLgColor leading-none relative after:pointer-events-none py-4 font-extrabold whitespace-nowrap cursor-default after:absolute after:top-0 after:bottom-0 after:left-0 after:right-0 lg:text-6xl md:text-5xl sm:text-4xl xs:text-3xl xxs:text-2xl">
        My story
      </span>
      <div className="fade-in-text my-story-content md:mt-2 flex flex-col sm:flex-row items-center">
        <p className="my-4 text-lg xs:mb-8 sm:w-4/5 leading-7 text-text-SmColor">
          I was born and raised in Vietnam. When I was 15, I came to America on
          my own as a transfer student. After graduating in Florida, I attended
          Rhodes College in Tennessee for a year before the pandemic forced me
          to move to Seattle in 2020 when I started programming.
        </p>
        <Globe />
      </div>
      <div className="spacer-div mb-10 sm:mb-0"></div>
      <MyselfCard />
    </div>
  );
};

export default MyStory;

const JINX_ANIMATION_TIMEOUT_MS = 3000;
const JINX_ELEMENT_ID = "jinx-svg";

const MyselfCard: React.FC = () => {
  React.useEffect(() => {
    setTimeout(() => {
      const jinxImg = document.getElementById(JINX_ELEMENT_ID);

      if (jinxImg) {
        jinxImg.classList.remove("hidden");
      }
    }, JINX_ANIMATION_TIMEOUT_MS);
  }, []);

  return (
    <div className="myself-card px-8 pt-6 w-full overflow-visible relative custom2:w-4/5">
      <div className="my-hobbies">
        <h2 className="text-2xl font-medium mb-2">A little bit about me</h2>
        <p className=" text-base text-subText leading-7">
          In my free time, I like to watch Youtube and Netflix, and playing
          games. My favorite youtubers are Danny Gonzales and Drew Gooden (Go
          Greg and Little Stinkers!). Some games I usually play are Wild Rift,
          Clash of Clans, and League of Legends.
        </p>
        <div className="pb-6"></div>
      </div>
      <img
        id={JINX_ELEMENT_ID}
        loading="lazy"
        src="/svg/jinx.svg"
        alt="Jinx - my favorite League of Legends champion"
        className="jinx-img hidden"
      />
    </div>
  );
};
