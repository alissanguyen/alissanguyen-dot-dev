import * as React from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { useTheme } from "~/providers/ThemeProvider";
import { SupportedTheme } from "~/types";

const facts = [
  {
    index: 1,
    title: "I love cats and I have two :)",
    description:
      "Rosie (girl) and Felix (boy) are my love and energy to work hard everyday.",
    image: "/images/facts/cat.jpg",
    color: "sky",
    imgDescription: "Pic of cat"
  },
  {
    index: 2,
    title: `I once applied to Harvard`,
    description: "Yeah.. It's a long story...but basically I got deferred haha",
    image: "/images/facts/harvard.jpg",
    color: "blue",
    imgDescription: "Pic of Harvard"
  },
  {
    index: 3,
    title: "I am not afraid of snakes or spiders",
    description: "They are everywhere in Vietnam so that's why I adapted.",
    image: "/images/facts/snake.jpg",
    color: "indigo",
    imgDescription: "Pic of snake"
  },
  {
    index: 4,
    title: "I am a very ambitious person",
    description:
      "When I was 10 I thought I can be the president of Europe XD. ",
    image: "/images/facts/ambitious.jpg",
    color: "violet",
    imgDescription: "Illustration"
  },
  {
    index: 5,
    title: "My favorite subject was Math",
    description:
      "I love it in high school. I guess it's the asian trait in me.",
    image: "/images/facts/math.jpg",
    color: "purple",
    imgDescription: "Pic of math on chalkboard"
  },
  {
    index: 6,
    title: "I unbelievably love mayonnaise!",
    description:
      "I can eat mayo with pretty much everything (except desserts LOL).",
    image: "/images/facts/mayonnaise.jpg",
    color: "fuchsia",
    imgDescription: "Pic of mayonnaise"
  },
  {
    index: 7,
    title: "I play 3 musical instruments",
    description:
      "I used to play ukulele, piano, and organ, now I only play ukulele.",
    image: "/images/facts/piano.jpg",
    color: "pink",
    imgDescription: "Pic of piano"
  },
  {
    index: 8,
    title: "I really like dad jokes but I suck at them",
    description: "Unfortunately these jokes only work if you git them.",
    image: "/images/facts/dad-joke.jpg",
    color: "rose",
    imgDescription: "Pic of a dad (not my dad)"
  }
];
const Facts: React.FC = ({}) => {
  const { theme } = useTheme();
  return (
    <div className="Mobile__Facts__Wrapper">
      <div className="Mobile__Facts__Title__Wrapper inline-flex items-center">
        <span className="md:text-4xl sm:text-3xl font-medium mb-5 text-textLgColor mb-8">
          Random fun facts about me
        </span>
      </div>
      <div
        className={`Mobile__FactCards w-full rounded-2xl w-full mx-auto bg-transparent text-lg grid grid-rows-8 gap-2`}
      >
        {facts.map((fact) => (
          <FactCard
            key={fact.description}
            theme={theme}
            title={fact.title}
            description={fact.description}
            image={fact.image}
            color={fact.color}
            imageAlt={`Image to illustrate ${fact.title}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Facts;

interface FactCardProps {
  theme: SupportedTheme;
  title: string;
  description: string;
  image: string;
  color: string;
  imageAlt: string;
}
const FactCard: React.FC<FactCardProps> = (props) => {
  const className =
    props.theme === SupportedTheme.LIGHT
      ? `text-${props.color}-900 bg-${props.color}-100 hover:bg-${props.color}-200 focus-visible:ring-${props.color}-500`
      : `text-${props.color}-100 bg-${props.color}-900 hover:bg-${props.color}-700 focus-visible:ring-${props.color}-500`;

  const descriptionText =
    props.theme === SupportedTheme.LIGHT ? "text-gray-600" : "text-gray-300";
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button
            className={`Mobile__FactCard__Title__Btn flex justify-between items-center w-full px-4 py-2 font-medium text-left rounded-lg ${className} focus:outline-none focus-visible:ring focus-visible:ring-opacity-75`}
            name={open ? "close" : "open"}
          >
            <span>{props.title}</span>
            <ChevronDownIcon
              className={`${open ? "transform rotate-180" : ""} w-5 h-5 text-${
                props.color
              }-500`}
            />
          </Disclosure.Button>
          <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500 flex flex-row items-center justify-start text-base">
            <span className={descriptionText}>{props.description}</span>
            <img
              src={props.image}
              alt={props.imageAlt}
              title={props.imageAlt}
              className="Mobile__FactCard__Image ml-2 object-cover w-32 rounded-lg"
            />
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};
