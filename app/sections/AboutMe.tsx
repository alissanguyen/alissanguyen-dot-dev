import * as React from "react";
import { facts, schools } from "~/constants";
import Avatar from "../assets/avatar.png";
import SchoolIcon from "../assets/graduation.png";

const AboutMe: React.FC = () => {
  return (
    <article className="aboutme-section min-h-screen justify-center px-20">
      <div className="grid grid-cols-5 gap-5">
        <div className="flex flex-col col-span-3">
          <AboutMeTitles />
          <div className="bio-description text-lg font-light text-gray-900 tracking-wide">
            <div className="my-10 max-w-xl">
              <p className="">I'm currently living in Seattle, WA.</p>
              <p className="my-4">
                I love with programming and I am fervid to deliver software that
                is beautifully designed, efficient, and user-friendly. My goal
                is to write effective code that is simple to understand and
                implemented.
              </p>
              <h1 className="reveal-text leading-none relative after:pointer-events-none py-4 font-extrabold whitespace-nowrap cursor-default after:absolute after:top-0 after:bottom-0 after:left-0 after:right-0 text-6xl md:text-5xl sm:text-4xl xs:text-3xl xxs:text-2xl">
                My story
              </h1>
              <p className="fade-in-text my-4">
                I am originally from Ho Chi Minh City, Vietnam and went to study
                in the United States on my own when I was 15. In my free time, I
                like to watch youtube, netflix, or playing League of Legends. My
                favorite youtubers are Danny Gonzales and Drew Gooden (Go GREG
                and Little Stinkers!).
              </p>
            </div>
          </div>
          <div>
            <h1 className="font-bold mb-5">Education</h1>
            {schools.map((school) => (
              <div className="text-lg flex flex-row justify-between mb-5 max-w-2xl items-center">
                <div className="inline-flex items-center">
                  <img src={SchoolIcon} className="w-5 mr-5" />
                  <li className="list-none font-light">{school.name}</li>
                </div>
                <p className="text-base font-light italic text-right">
                  {school.duration}
                </p>
              </div>
            ))}
          </div>
        </div>
        <img src={Avatar} alt="" className="avatar-image col-span-2" />
      </div>
      <div className="h-48"></div>
      <Funfacts />
    </article>
  );
};

export default AboutMe;

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
                    backgroundImage: `url(${fact.background})`,
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
