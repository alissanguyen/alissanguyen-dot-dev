import JavascriptIcon from "./assets/tech/javascript.png";
import CSSIcon from "./assets/tech/css.png";
import FirebaseIcon from "./assets/tech/firebase.png";
import TypescriptIcon from "./assets/tech/typescript.png";
import FramerIcon from "./assets/tech/framer.png";
import HTMLIcon from "./assets/tech/html.png";
import MongoIcon from "./assets/tech/mongo.png";
import AirtableIcon from "./assets/tech/airtable.png";
import NetlifyIcon from "./assets/tech/netlify.png";
import NextIcon from "./assets/tech/next.png";
import NodeIcon from "./assets/tech/node.png";
import NPMIcon from "./assets/tech/npm.png";
import PrismaIcon from "./assets/tech/prisma.png";
import ReactIcon from "./assets/tech/react.png";
import RemixIcon from "./assets/tech/remix.png";
import SendGridIcon from "./assets/tech/sendgrid.png";
import SQLiteIcon from "./assets/tech/sqlite.png";
import StripeIcon from "./assets/tech/stripe.png";
import SupabaseIcon from "./assets/tech/supabase.png";
import TailwindIcon from "./assets/tech/tailwind.png";
import VercelIcon from "./assets/tech/vercel.png";
import ContentfulIcon from "./assets/tech/contentful.png";
import League from "./assets/projects/frontend/league.png";
import Planets from "./assets/projects/frontend/planet.png";
import Lunar from "./assets/projects/frontend/lunar.png";
import Launch from "./assets/projects/frontend/countdown.png";
import Atom from "./assets/projects/frontend/atom.png";
import Typewriter from "./assets/projects/main/type.png";
import Crowdfund from "./assets/projects/main/fund.png";
import Memory from "./assets/projects/main/memory.png";
import Shop from "./assets/projects/main/shop.png";
import Spotter from "./assets/projects/main/spotter.png";
import Clipboard from "./assets/projects/main/clipboard.png";

export const fixedWidthLayoutClasses = `relative max-w-screen-lg w-full text-3xl m-auto`;

export const schools = [
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

export const skills = [
  {
    id: "a",
    name: "Javascript",
    icon: JavascriptIcon,
  },
  {
    id: "b",
    name: "Typescript",
    icon: TypescriptIcon,
  },
  {
    id: "c",
    name: "React.js",
    icon: ReactIcon,
  },
  {
    id: "d",
    name: "HTML",
    icon: HTMLIcon,
  },
  {
    id: "e",
    name: "CSS",
    icon: CSSIcon,
  },
  {
    id: "f",
    name: "Firebase",
    icon: FirebaseIcon,
  },
  {
    id: "g",
    name: "Netlify",
    icon: NetlifyIcon,
  },
  {
    id: "h",
    name: "Supabase",
    icon: SupabaseIcon,
  },
  {
    id: "i",
    name: "MongoDB",
    icon: MongoIcon,
  },
  {
    id: "j",
    name: "Stripe",
    icon: StripeIcon,
  },
  {
    id: "k",
    name: "Next.js",
    icon: NextIcon,
  },
  {
    id: "l",
    name: "Tailwind",
    icon: TailwindIcon,
  },
  {
    id: "m",
    name: "Framer",
    icon: FramerIcon,
  },
  {
    id: "n",
    name: "Airtable",
    icon: AirtableIcon,
  },
  {
    id: "o",
    name: "NPM",
    icon: NPMIcon,
  },
  {
    id: "p",
    name: "Sendgrid",
    icon: SendGridIcon,
  },
  {
    id: "q",
    name: "Prisma",
    icon: PrismaIcon,
  },
  {
    id: "r",
    name: "Vercel",
    icon: VercelIcon,
  },
  {
    id: "s",
    name: "Remix",
    icon: RemixIcon,
  },
  {
    id: "t",
    name: "SQLite",
    icon: SQLiteIcon,
  },
  {
    id: "u",
    name: "Node",
    icon: NodeIcon,
  },
  {
    id: "v",
    name: "Contentful",
    icon: ContentfulIcon,
  },
];

export const abilities = [
  "Create responsive and efficient web pages with React or Remix, with functional components and SSR for better user experience.",
  "Integration with third-parties like Vercel, Netlify, and NextJS to deploy websites and deliver best web performance to users.",
  "Data management with Firestore, Prisma, and Supabase. Implementation of web security/authorization with Firestore & Socket.io and email communication with Sendgrid.",
  "Aplication of modern libraries and frameworks like TailwindCSS, Headless UI, Framer Motion,... to create beautiful and reusable web layout designs.",
];

export const frontendProjects = [
  {
    name: "Lunar",
    description: "A responsive landing page with parallax scrolling effects.",
    gitRepo: "https://github.com/alissanguyen/lunar",
    website: "https://lunar.alissanguyen.dev",
    background: "https://i.imgur.com/HZ8CIlR.png",
    icon: Lunar,
  },
  {
    name: "League of Legends Demo Landing Page",
    description: "A demo landing page for League of Legends with animations.",
    gitRepo: "https://github.com/alissanguyen/league-demo",
    website: "https://league.alissanguyen.dev",
    background: "https://i.imgur.com/Y7vnWZF.png",
    icon: League,
  },
  {
    name: "Launch Countdown",
    description: "A demo launch countdown page with animations.",
    gitRepo: "https://github.com/alissanguyen/launch-countdown",
    website: "https://launch.alissanguyen.dev",
    background: "https://i.imgur.com/OCiDNM0.jpg",
    icon: Launch,
  },
  {
    name: "Atom",
    description: "A responsive website with animations and futuristic design.",
    gitRepo: "https://github.com/alissanguyen/atom",
    website: "https://atom.alissanguyen.dev",
    background: "https://i.imgur.com/ZNulq75.png",
    icon: Atom,
  },
  {
    name: "Planets",
    description:
      "A responsive responsive landing page to learn about planets in the universe.",
    gitRepo: "https://github.com/alissanguyen/planets",
    website: "https://planets.alissanguyen.dev",
    background: "https://i.imgur.com/1vapt4c.png",
    icon: Planets,
  },
];

export const mainProjects = [
  {
    name: "useTypewriter Hook",
    description:
      "A flexible hook for creating typewriter-like experience with React. Users can add functions for further applications.",
    technologies: "React.js, Next.js, TypeScript, CSS",
    gitRepo: "https://github.com/alissanguyen/react-use-typewriter",
    website: "https://usetypewriter.com/",
    npm: "https://www.npmjs.com/package/use-typewriter-hook",
    icon: Typewriter,
  },
  {
    name: "Memory Game",
    description: "A memory game website.",
    technologies: "JavaScript, TypeScript, HTML & CSS",
    gitRepo: "https://github.com/alissanguyen/memory-game",
    website: "https://memory.alissanguyen.dev/",
    icon: Memory,
  },
  {
    name: "Dont Buy From Me",
    description:
      "A demo shopping website with add to cart features and purchases enabled",
    technologies: "Remix, Javascript, Stripe, TailwindCSS, Prisma",
    gitRepo: "https://github.com/alissanguyen/dont-buy-from-me",
    website: "http://www.dontbuyfrom.me/",
    icon: Shop,
  },
  {
    name: "Clipboard Demo Page",
    description:
      "A responsive landing page for a tool called Clipboard with animations.",
    technologies: "React,js, Javascript, HTML & SCSS",
    gitRepo: "https://github.com/alissanguyen/clipboard-page",
    website: "https://clipboard.alissanguyen.dev",
    icon: Clipboard,
  },
  {
    name: "Github Spotter 2.0",
    description:
      "A website designed to search GitHub users by usernames with Github API",
    technologies: "React.js, Javascript, HTML, SCSS & CSS",
    gitRepo: "https://github.com/alissanguyen/github-spotter-2",
    website: "https://githubspotter2.alissanguyen.dev",
    icon: Spotter,
  },
  {
    name: "Crowdfund",
    description: "A responsive demo landing page for crowdfunding projects.",
    technologies: "React.js, Javascript, HTML & CSS",
    gitRepo: "https://github.com/alissanguyen/demo-crowdfunding-page",
    website: "https://crowdfund.alissanguyen.dev",
    icon: Crowdfund,
  },
];

export const otherProjects = [
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

export const facts = [
  {
    index: 1,
    title: "I love cats and I have two :)",
    description:
      "Their names are Rosie (girl) and Felix (boy). They are my love and energy to work",
    background:
      "https://images.unsplash.com/photo-1596854273338-cbf078ec7071?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
  },
  {
    index: 2,
    title: `I once applied to Harvard`,
    description: "Yeah.. It's a long story...but basically I got deferred haha",
    background:
      "https://images.unsplash.com/photo-1594394425161-bf2130df7875?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
  },
  {
    index: 3,
    title: "I am not afraid of snakes or spiders",
    description:
      "They are everywhere back when my family still lived in a rental house in Vietnam so that's why",
    background:
      "https://images.unsplash.com/photo-1621666156563-fc74e5b24695?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1138&q=80",
  },
  {
    index: 4,
    title: "I am a very ambitious person",
    description:
      "I used to think I can be the president of Europe. LMAO I was 10 years old at the time haha.",
    background:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_95-4Ia-BPhznv1oJN0jgp-Y9VB5IduzlT4VCgVY1GCrl_hmFfeWS35jR47jfZi9QGYw&usqp=CAU",
  },
  {
    index: 5,
    title: "My favorite subject was Math",
    description: "I guess the asian trait in me is right.",
    background:
      "https://images.theconversation.com/files/207820/original/file-20180226-140213-yox11e.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip",
  },
  {
    index: 6,
    title: "I unbelievably love mayonnaise!",
    description:
      "I can eat mayo with pretty much everything (except desserts since I'm not alien)",
    background:
      "https://www.vitamix.com/media/other/images/Vitamix-Mayonnaise-square-crop-Recovered__1.jpg",
  },
  {
    index: 7,
    title: "I play 3 musical instruments",
    description:
      "I used to play ukulele, piano, and organ, but nowadays I only play ukulele.",
    background:
      "https://images.squarespace-cdn.com/content/v1/5c2647463e2d09bae7d0ae76/1559217907662-TV5Y15KTYMC7V18CGD5M/Learn+an+instrument",
  },
  {
    index: 8,
    title: "I really like dad jokes but I sucks at them",
    description: "Here's one: ",
    background:
      "http://cdn.shopify.com/s/files/1/0024/4537/7647/products/TD-CT-TS-DAYS-COF_1_1200x630.jpg?v=1538170010",
  },
];
