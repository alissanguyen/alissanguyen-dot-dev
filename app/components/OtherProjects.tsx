import * as React from "react";

interface Props {}

const OtherProjects: React.FC<Props> = ({}) => {
  const others = [
    {
      name: "Glass Gaming",
      description:
        "A demo weather forecast website that provide international and local 5-day weather forcast every 3 hours.",
      technologies: "React.js, Javascript, HTML / CSS",
      gitRepo: "https://github.com/alissanguyen/weatherly",
      website: "https://weatherly.alissanguyen.dev/",
    },
    {
      name: "Invoice App Demo",
      description: "A demo for a bulletin board, with stickies to track tasks",
      technologies: "React.js, Typescript, HTML / CSS, Javascript",
      gitRepo: "https://github.com/alissanguyen/bulletin-board-demo",
      website: "https://bulletin-board-demo.alissanguyen.dev/",
    },
    {
      name: "Bookmark Page Demo",
      description:
        "A task tracking website with DND (drag-and-drop) feature for prioritizing",
      technologies: "React.js, Next.js, Javascript",
      gitRepo: "https://github.com/alissanguyen/priority-task-tracker",
      website: "",
    },
    {
      name: "BMI Calculator",
      description:
        "An online timer that you can set the hour, minute, and second, and start it. Simple and easy!",
      technologies: "React.js, Javascript, HTML / CSS",
      gitRepo: "https://github.com/alissanguyen/countdown-timer",
      website: "https://countdown-timer.alissanguyen.dev/",
    },
    {
      name: "Weatherly",
      description:
        "A website that let people find GitHub users by their usernames. You can type in a random name and you might surprisingly find a Git user with that same username!",
      technologies: "React.js, Javascript, HTML / CSS",
      gitRepo: "https://github.com/alissanguyen/github-user-finder",
      website: "https://githubspotter.alissanguyen.dev",
    },
    {
      name: "Bulletin Board Demo",
      description:
        "An online timer that you can set the hour, minute, and second, and start it. Simple and easy!",
      technologies: "React.js, Javascript, HTML / CSS",
      gitRepo: "https://github.com/alissanguyen/countdown-timer",
      website: "https://countdown-timer.alissanguyen.dev/",
    },
  ];
  return <div>Hi</div>;
};

export default OtherProjects;
