import * as React from "react";
import FrontendProjects from "~/components/FrontendProjects";
import MainProjects from "~/components/MainProjects";
interface Props {}

const Projects: React.FC<Props> = ({}) => {


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
