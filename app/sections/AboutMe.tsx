import * as React from "react";
import { AboutMeTitles } from "~/components/Decoration";
import Funfacts from "~/components/Funfacts";
import Avatar from "../assets/avatar.png";
import SchoolIcon from "../assets/graduation.png";

const AboutMe: React.FC = () => {
  const schools = [
    {
      name: "Rhodes College",
      duration: "08/2019 - Current",
    },
    {
      name: "Santa Fe Catholic High School",
      duration: "01/2018 - 05/2019",
    },
    {
      name: "Western Michigan Christian High School",
      duration: "08/2017 - 12/2017",
    },
    {
      name: "Le Quy Don High School for the Gifted",
      duration: "08/2016 - 05/2017",
    },
  ];
  return (
    <article className="aboutme-section min-h-screen justify-center px-20">
      <div className="grid grid-cols-5 gap-5">
        <div className="flex flex-col col-span-3">
          <AboutMeTitles />
          <BioDescription />
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

const BioDescription: React.FC = ({}) => {
  return (
    <div className="text-lg font-light text-gray-900 tracking-wide">
      <div className="my-10 max-w-xl">
        <p className="">I'm currently living in Seattle, WA.</p>
        <p className="my-4">
          I love with programming and I am fervid to deliver software that is
          beautifully designed, efficient, and user-friendly. My goal is to
          write effective code that is simple to understand and implemented.
        </p>
        <h1 className="reveal-text leading-none relative after:pointer-events-none py-4 font-extrabold whitespace-nowrap cursor-default after:absolute after:top-0 after:bottom-0 after:left-0 after:right-0 text-6xl md:text-5xl sm:text-4xl xs:text-3xl xxs:text-2xl">
          My story
        </h1>
        <p className="fade-in-text my-4">
          I am originally from Ho Chi Minh City, Vietnam and went to study in
          the United States on my own when I was 15. In my free time, I like to
          watch youtube, netflix, or playing League of Legends. My favorite
          youtubers are Danny Gonzales and Drew Gooden (Go GREG and Little
          Stinkers!).
        </p>
      </div>
    </div>
  );
};
