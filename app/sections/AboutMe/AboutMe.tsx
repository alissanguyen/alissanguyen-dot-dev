import * as React from "react";
import { facts } from "~/constants";
import Avatar from "../../assets/avatar.png";
import styles from "./AboutMe.css";
import { useTypewriter } from "use-typewriter-hook";
import SocialMedia from "~/components/SocialMedia/SocialMedia";
import { LinksFunction } from "remix";
import Globe from "../../assets/globe.svg";

export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: styles
  }
];

const AboutMe: React.FC = () => {
  return (
    <article className="aboutme-section justify-center p-20">
      <div className="">
        <div className="grid grid-cols-5 gap-5">
          <div className="flex flex-col col-span-3">
            <div className="bio-description text-lg font-light text-white tracking-wide ">
              <Hi />
              <div className="my-10 max-w-xl">
                <p className="">
                  I'm a software engineer living in Seattle, WA.
                </p>
                <p className="my-4">
                  I started programming in late 2020. My focus is on building
                  and delivering software that is elegantly designed, efficient,
                  and user-friendly.
                </p>
                <AboutMeTitles />
                <div className="mt-10"></div>
                <div className="text-gray-900 flex flex-col items-baseline">
                  <SocialMedia />
                  <BlogButton />
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-2">
            <img src={Avatar} alt="" className="avatar-image" />
          </div>
          {/* TODO: Fix animation position not syncing between localhost version and netlify version. */}
          {/* <Laptop /> */}
        </div>
        <div className="mt-10"></div>
        <MyStory />
      </div>
      <div className="mt-32"></div>
      <Funfacts />
    </article>
  );
};

export default AboutMe;

const BlogButton = () => {
  return (
    <div className="blog-button-wrapper">
      <a href="#" className="fancy-button pop-onhover bg-gradient1">
        <span>
          <i className="fa-duotone fa-face-disguise"></i>Visit my Blog
        </span>
      </a>
    </div>
  );
};

const MyStory: React.FC = () => {
  return (
    <div className="my-story-wrapper flex flex-row">
      <div>
        <h1 className="reveal-text leading-none relative after:pointer-events-none py-4 font-extrabold whitespace-nowrap cursor-default after:absolute after:top-0 after:bottom-0 after:left-0 after:right-0 text-6xl md:text-5xl sm:text-4xl xs:text-3xl xxs:text-2xl">
          My story
        </h1>
        <p className="fade-in-text my-4 text-lg font-light">
          I was born and raised in Vietnam. When I was 15, I came to America on
          my own as a transfer student. After graduating in Florida, I attended
          Rhodes College in Tennessee for a year before the pandemic forced me
          to move to Seattle to be with relatives and is where I live currently.
        </p>
        <p className="fade-in-text my-4 text-lg font-light">
          In my free time, I like to watch Youtube and Netflix, and playing
          League of Legends. My favorite youtubers are Danny Gonzales and Drew
          Gooden (Go Greg and Little Stinkers!).
        </p>
        <div className="my-10"></div>
      </div>
      <img src={Globe} alt="" className="w-1/3 globe-3d"></img>
    </div>
  );
};

const AboutMeTitles = () => {
  return (
    <div className="title-content">
      <div className="title-content__container inline-flex overflow-hidden font-semibold items-center">
        <p className="title-content__container__text m-0 float-left inline-flex">
          I'm a
        </p>
        <span className="blinker">[</span>
        <ul className="title-content__container__list text-left list-none">
          <li key={0} className="title-content__container__list__item m-0">
            software engineer
          </li>
          <li key={1} className="title-content__container__list__item m-0">
            freelance artist
          </li>
          <li key={2} className="title-content__container__list__item m-0">
            manga/anime lover !
          </li>
          <li key={3} className="title-content__container__list__item m-0">
            cat mom 🐈‍⬛ 🐈
          </li>
        </ul>
        <span className="blinker">]</span>
      </div>
    </div>
  );
};
const Funfacts: React.FC = () => {
  const [hover, setHover] = React.useState("");
  const handleHover = () => {
    if (hover === "") {
      setHover("hover");
    }
    if (hover === "hover") {
      setHover("");
    }
  };

  return (
    <div className="FunFacts__Wrapper">
      <div className="FunFacts__Title__Wrapper inline-flex items-center">
        <span className="text-3xl font-semibold mb-5">
          Random fun facts about me
        </span>
      </div>

      <div className="wrapper">
        <div className="cols flex flex-wrap justify-between">
          {facts.map((fact) => (
            <div
              key={fact.index}
              className={`col ${hover} justify-between items-center cursor-auto my-5`}
              onTouchStart={handleHover}
            >
              <div className="container">
                <div
                  className="front flex justify-center items-center bg-cover text-center bg-center h-auto after:absolute after:top-0 after:left-0 after:w-full after:rounded-lg after:h-full after:block rounded-lg after:opacity-50"
                  style={{
                    backgroundImage: `url(${fact.background})`
                  }}
                >
                  <div className="inner w-full box-border outline outline-1 outline-transparent px-4">
                    <p className="text-white relative after:absolute after:block after:left-0 after:right-0 text-4xl">
                      {fact.index}
                    </p>
                    <span className="text-white text-lg">{fact.title}</span>
                  </div>
                </div>
                <div className="back absolute top-0 flex left-0 w-full justify-center items-center bg-cover text-center bg-center h-auto bg-gray-100 rounded-lg">
                  <div className="inner w-full box-border outline outline-1 outline-transparent opacity-90 px-4">
                    <p className="p text-gray-900 opacity-100 text-lg">
                      {fact.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Hi = () => {
  const targetText = "I'm Alissa👋 ";

  const { textValue: typedText, wrapperClassName } = useTypewriter({
    targetText: targetText,
    autoStartDelay: 400,
    typingDelayMillis: 70
  });

  const stringToSearch = "Alissa";

  const startIndex = targetText.indexOf(stringToSearch);
  const endIndex = startIndex + stringToSearch.length;

  const fragments = splitTargetText(typedText, startIndex, endIndex);

  return (
    <div className="font-semibold text-8xl sm:text-7xl xs:text-6xl xxs:text-4xl">
      <div className="welcome flex whitespace-pre inline-flex leading-none text-center justify-center items-center after:inline-flex after:items-center">
        <p className="">Hi,</p>
        <p> </p>

        <span className={`${wrapperClassName}`}>{fragments}</span>
      </div>
    </div>
  );
};

const splitTargetText = (
  str: string,
  startIndex: number,
  endIndex: number
): React.ReactNode[] => {
  const customStyle = {
    color: "#95ffd3"
  };
  return [
    <span key={0} className="inline-block">
      {str.slice(0, startIndex)}
    </span>,
    <span key={1} className="inline-block">
      <span className={"custom-typewriter-text"} style={customStyle}>
        {str.slice(startIndex, endIndex)}
      </span>
    </span>,
    <span key={2} className="inline-block">
      {str.slice(endIndex, str.length)}
    </span>
  ];
};
