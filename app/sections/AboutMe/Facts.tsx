import * as React from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";

interface Props {}

const facts = [
  {
    index: 1,
    title: "I love cats and I have two :)",
    description:
      "Rosie (girl) and Felix (boy) are my love and energy to work hard everyday.",
    image: "/images/facts/cat.jpg",
    color: "sky"
  },
  {
    index: 2,
    title: `I once applied to Harvard`,
    description: "Yeah.. It's a long story...but basically I got deferred haha",
    image: "/images/facts/harvard.jpg",
    color: "blue"
  },
  {
    index: 3,
    title: "I am not afraid of snakes or spiders",
    description: "They are everywhere in Vietnam so that's why I adapted.",
    image: "/images/facts/snake.jpg",
    color: "indigo"
  },
  {
    index: 4,
    title: "I am a very ambitious person",
    description:
      "When I was 10 I thought I can be the president of Europe XD. ",
    image: "/images/facts/ambitious.jpg",
    color: "violet"
  },
  {
    index: 5,
    title: "My favorite subject was Math",
    description:
      "I love it in high school. I guess it's the asian trait in me.",
    image: "/images/facts/math.jpg",
    color: "purple"
  },
  {
    index: 6,
    title: "I unbelievably love mayonnaise!",
    description:
      "I can eat mayo with pretty much everything (except desserts LOL).",
    image: "/images/facts/mayonnaise.jpg",
    color: "fuschia"
  },
  {
    index: 7,
    title: "I play 3 musical instruments",
    description:
      "I used to play ukulele, piano, and organ, now I only play ukulele.",
    image: "/images/facts/piano.jpg",
    color: "pink"
  },
  {
    index: 8,
    title: "I really like dad jokes but I sucks at them",
    description: "Here's one: ",
    image: "/images/facts/dad-joke.jpg",
    color: "rose"
  }
];
const Facts: React.FC<Props> = ({}) => {
  return (
    <div className="Mobile__FactCards__Container w-full rounded-2xl w-full p-2 mx-auto bg-white">
      {facts.map((fact) => (
        <>
          <FactCard
            title={fact.title}
            description={fact.description}
            image={fact.image}
            color={fact.color}
          />
          <div className="spacer-div mt-2"></div>
        </>
      ))}
    </div>
  );
};

export default Facts;

interface FactCardProps {
  title: string;
  description: string;
  image: string;
  color: string;
}
const FactCard: React.FC<FactCardProps> = (props) => {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button
            className={`Mobile__FactCard__Title__Btn flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-${props.color}-900 bg-${props.color}-100 rounded-lg hover:bg-${props.color}-200 focus:outline-none focus-visible:ring focus-visible:ring-${props.color}-500 focus-visible:ring-opacity-75`}
          >
            <span>{props.title}</span>
            <ChevronUpIcon
              className={`${
                open ? "transform rotate-180" : ""
              } w-5 h-5 text-${props.color}-500`}
            />
          </Disclosure.Button>
          <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500 flex flex-row items-center justify-start">
            <span>{props.description}</span>
            <img
              src={props.image}
              alt=""
              className="Mobile__FactCard__Image object-cover w-12"
            />
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};
