import * as React from "react";
import FrontendProjects from "~/components/FrontendProjects";
import MainProjects from "~/components/MainProjects";
interface Props {}

const Projects: React.FC<Props> = ({}) => {
  const others = [
    {
      name: "Weatherly",
      description:
        "A demo weather forecast website that provide international and local 5-day weather forcast every 3 hours.",
      technologies: "React.js, Javascript, HTML / CSS",
      gitRepo: "https://github.com/alissanguyen/weatherly",
      website: "https://weatherly.alissanguyen.dev/",
    },
    {
      name: "Bulletin Board",
      description: "A demo for a bulletin board, with stickies to track tasks",
      technologies: "React.js, Typescript, HTML / CSS, Javascript",
      gitRepo: "https://github.com/alissanguyen/bulletin-board-demo",
      website: "https://bulletin-board-demo.alissanguyen.dev/",
    },
    {
      name: "Priority Task Tracker",
      description:
        "A task tracking website with DND (drag-and-drop) feature for prioritizing",
      technologies: "React.js, Next.js, Javascript",
      gitRepo: "https://github.com/alissanguyen/priority-task-tracker",
      website: "",
    },
    {
      name: "Countdown Timer",
      description:
        "An online timer that you can set the hour, minute, and second, and start it. Simple and easy!",
      technologies: "React.js, Javascript, HTML / CSS",
      gitRepo: "https://github.com/alissanguyen/countdown-timer",
      website: "https://countdown-timer.alissanguyen.dev/",
    },
    {
      name: "Github Spotter",
      description:
        "A website that let people find GitHub users by their usernames. You can type in a random name and you might surprisingly find a Git user with that same username!",
      technologies: "React.js, Javascript, HTML / CSS",
      gitRepo: "https://github.com/alissanguyen/github-user-finder",
      website: "https://githubspotter.alissanguyen.dev",
    },
  ];

  return (
    <div>
      <h1>My projects</h1>
      <MainProjects />
      <FrontendProjects />
    </div>
  );
};

export default Projects;

const others = [
  {
    name: "Glass Gaming",
    description: "A responsive website built with HTML and CSS",
    technologies: "React.js, Javascript, HTML / CSS",
    gitRepo: "https://github.com/alissanguyen/github-user-finder",
    website:
      "https://www.youtube.com/watch?v=OJEQaVT45XA&list=PLNPsnMKCW_FQqnhbnV8G1ACcXQtpKxXpK&index=16",
  },
  {
    name: "Weatherly",
    description: "A responsive website built with HTML and CSS",
    technologies: "React.js, Javascript, HTML / CSS",
    gitRepo: "https://github.com/alissanguyen/github-user-finder",
    website:
      "https://www.youtube.com/watch?v=OJEQaVT45XA&list=PLNPsnMKCW_FQqnhbnV8G1ACcXQtpKxXpK&index=16",
  },
  {
    name: "Bookmark Landing Page",
    description: "A responsive website built with HTML and CSS",
    technologies: "React.js, Javascript, HTML / CSS",
    gitRepo: "https://github.com/alissanguyen/github-user-finder",
    website:
      "https://www.youtube.com/watch?v=OJEQaVT45XA&list=PLNPsnMKCW_FQqnhbnV8G1ACcXQtpKxXpK&index=16",
  },
  {
    name: "Invoice App Demo",
    description: "A responsive website built with HTML and CSS",
    technologies: "React.js, Javascript, HTML / CSS",
    gitRepo: "https://github.com/alissanguyen/github-user-finder",
    website:
      "https://www.youtube.com/watch?v=OJEQaVT45XA&list=PLNPsnMKCW_FQqnhbnV8G1ACcXQtpKxXpK&index=16",
  },
  {
    name: "Countdown timer",
    description: "A responsive website built with HTML and CSS",
    technologies: "React.js, Javascript, HTML / CSS",
    gitRepo: "https://github.com/alissanguyen/github-user-finder",
    website:
      "https://www.youtube.com/watch?v=OJEQaVT45XA&list=PLNPsnMKCW_FQqnhbnV8G1ACcXQtpKxXpK&index=16",
  },
  {
    name: "BMI Calculator",
    description: "A responsive website built with HTML and CSS",
    technologies: "React.js, Javascript, HTML / CSS",
    gitRepo: "https://github.com/alissanguyen/github-user-finder",
    website:
      "https://www.youtube.com/watch?v=OJEQaVT45XA&list=PLNPsnMKCW_FQqnhbnV8G1ACcXQtpKxXpK&index=16",
  },
  {
    name: "Bulletin board demo",
    description: "A responsive website built with HTML and CSS",
    technologies: "React.js, Javascript, HTML / CSS",
    gitRepo: "https://github.com/alissanguyen/github-user-finder",
    website:
      "https://www.youtube.com/watch?v=OJEQaVT45XA&list=PLNPsnMKCW_FQqnhbnV8G1ACcXQtpKxXpK&index=16",
  },
];
