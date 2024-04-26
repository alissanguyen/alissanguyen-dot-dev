import Launch from "./assets/otherprojects/launch.png";
import Invoice from "./assets/otherprojects/invoice.png";
import Pomodoro from "./assets/otherprojects/pomodoro.png";
import Weather from "./assets/otherprojects/weather.png";
import Atom from "./assets/otherprojects/atom.png"
import Game from "./assets/otherprojects/game.png"
import Spotter from "./assets/otherprojects/spotter.png"
import Calculator from "./assets/otherprojects/calculator.png"
import Clip from "./assets/otherprojects/paper-clip.png"

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaGithub,
  FaLinkedin
} from "react-icons/fa";

export const IMAGE_WIDTH = "1200";
export const IMAGE_HEIGHT = "630";
export const PORTFOLIO_WEBSITE_NAME = "Alissa Nguyen";
export const BLOG_WEBSITE_NAME = "Alissa Nguyen's Blog";
export const TWITTER_CARD_TYPE = "summary_large_image";
export const AUTHOR = "Alissa Nguyen";
export const WEBSITE_URL = "https://www.alissanguyen.com/";
export const BLOG_URL = "https://www.alissanguyen.com/blog";
export const TWITTER_ACC = "@ai_alissa";
export const TWITTER_PUBLISHER = "https://twitter.com/ai_alissa";
export const WEBSITE_KEYWORDS =
  "Learn Remix, React, JavaScript, Typescript, Alissa Nguyen Blog, Alissa Nguyen, Software Development, Software Engineer, Modern Programing, Frontend Engineer, Web Developer, AlissaNguyen";
export const BLOG_KEYWORDS =
  "Learn Remix, React, JavaScript, Typescript, Personal Blog, Technical Blog, Alissa Nguyen, Alissa Nguyen Blog, Software Development, Developer, Software Engineer, Modern Programing, Frontend Programmer, Web Developer";
export const WEBSITE_DESCRIPTION =
  "Hi, I'm Alissa. I'm a software engineer in Seattle, WA. I enjoy building software with elegant, performant, and maintainable frontend code.";
export const BLOG_DESCRIPTION =
  "Hi, I'm Alissa. I write blog about what I know and tutorials for Remix, React, web development and more.";
export const PORTFOLIO_IMAGE_URL =
  "https://www.alissanguyen.com/images/preview.jpg";
export const BLOG_IMAGE_URL =
  "https://www.alissanguyen.com/images/blogpreview.jpg";

export const topLevelLinksOnMobile: { href: string; displayName: string }[] = [
  {
    href: "/",
    displayName: "Home"
  },
  {
    href: "/blog",
    displayName: "Blog"
  },
  {
    href: "#portfolio",
    displayName: "Portfolio",
  },
  {
    href: "#resume",
    displayName: "Resume",
  },
  {
    href: "#contact",
    displayName: "Contact",
  },
];
export const topLevelLinksOnDesktop: { href: string; displayName: string; onClick?: () => void }[] = [
  {
    href: "/",
    displayName: "Home"
  },
  {
    href: "/blog",
    displayName: "Blog",
  },
  {
    href: "#portfolio",
    displayName: "Portfolio",
  },
  {
    href: "#resume",
    displayName: "Resume",
  },
  {
    href: "#contact",
    displayName: "Contact",
  },
];

export const THEME_COOKIE_KEY = "alissa_nguyen_dev_theme";
interface SocialMediaIconData {
  name: string;
  className: string;
  icon: React.FC;
  externalUrl: string;
}
export const sm: SocialMediaIconData[] = [
  {
    name: "Facebook",
    className: "icon facebook relative bg-white text-black hover:text-white",
    icon: () => <FaFacebookF />,
    externalUrl: "https://www.facebook.com/alissa.1404"
  },
  {
    name: "Twitter",
    className: "icon twitter text-black hover:text-white",
    icon: () => <FaTwitter />,
    externalUrl: "https://twitter.com/ai_alissa"
  },
  {
    name: "Instagram",
    className: "icon instagram text-black hover:text-white",
    icon: () => <FaInstagram />,
    externalUrl: "https://www.instagram.com/alissang1211/"
  },
  {
    name: "Github",
    className: "icon github text-black hover:text-white",
    icon: () => <FaGithub />,
    externalUrl: "https://github.com/alissanguyen"
  },
  {
    name: "Linkedin",
    className: "icon linkedin text-black hover:text-white",
    icon: () => <FaLinkedin />,
    externalUrl: "https://www.linkedin.com/in/alissa-nguyen-dev/"
  }
];
export const contactFormHtmlId = "contact-form";

export const tags = [
  { id: "algorithms", name: "algorithms" },
  { id: "tutorials", name: "tutorials" },
  { id: "frontEnd", name: "front-end" },
  { id: "backEnd", name: "backend" },
  { id: "css", name: "css" },
  { id: "html", name: "html" },
  { id: "javascript", name: "javascript" },
  { id: "performance", name: "performance" },
  { id: "personal", name: "personal" },
  { id: "productivity", name: "productivity" },
  { id: "react", name: "react" },
  { id: "remix", name: "remix" },
  { id: "typescript", name: "typescript" },
  { id: "git", name: "git" },
  { id: "resources", name: "resources" },
  { id: "testing", name: "testing" },
  { id: "general", name: "general" },
  { id: "security", name: "security" },
  { id: "hosting", name: "hosting" },
  { id: "databases", name: "databases" },
  { id: "aiml", name: "AI/ML" },
  { id: "dataStructures", name: "data structures" },
];

export const enum TEXT_HIGHLIGHT {
  BLUE = "var(--blue)",
  YELLOW = "var(--yellow)",
  GREEN = "var(--green)",
  RED = "var(--red)",
  ORANGE = "var(--orange)",
  PINK = "var(--pink)",
  PURPLE = "var(--purple)"
}
export const enum STICKY_HIGHLIGHT {
  BLUE = "rgba(75, 150, 255, 0.1)",
  YELLOW = "var(--sticky-yellow-bg)",
  GREEN = "var(--sticky-green-bg)",
  ORANGE = "var(--sticky-orange-bg)",
  PINK = "rgb(255, 69, 140, 0.1)",
  PURPLE = "rgb(196, 69, 255, 0.1)",
  RED = "rgba(255, 69, 69, 0.1)"
}
export const enum STICKY_BORDER {
  BLUE = "rgba(75, 150, 255, 1)",
  YELLOW = "var(--sticky-yellow-border)",
  GREEN = "var(--sticky-green-border)",
  ORANGE = "var(--sticky-orange-border)",
  PINK = "rgb(255, 81, 148)",
  PURPLE = "rgb(203, 89, 255)",
  RED = "rgb(255, 69, 69)"
}
export const fixedWidthLayoutClasses = `relative max-w-screen-xl w-full text-3xl m-auto px-8 sm:px-12 lg:px-5 xl:px-0`;

export const tech = [
  {
    id: 'python',
    name: 'Python',
    icon: "/images/tech/python.svg"
  },
  {
    id: "aws",
    name: "AWS",
    icon: "/images/tech/aws-dark.svg"
  },
  {
    id: "cloudflare",
    name: "Cloudflare",
    icon: "/images/tech/cloudflare.svg"
  },
  {
    id: "mondodb",
    name: "MongoDB",
    icon: "/images/tech/mongodb.svg"
  },
  {
    id: "firebase",
    name: "Firebase",
    icon: "/images/tech/firebase.svg"
  },
  {
    id: "contentful",
    name: "Contentful",
    icon: "/images/tech/contentful.svg"
  },
  {
    id: "pytorch",
    name: "Pytorch",
    icon: "/images/tech/pytorch.svg"
  },
  {
    id: "tensorflow",
    name: "TensorFlow",
    icon: "/images/tech/tensorflow.svg"
  },
  {
    id: "sendgrid",
    name: "SendGrid",
    icon: "/images/tech/sendgrid.svg"
  },
  {
    id: "vercel",
    name: "Vercel",
    icon: "/images/tech/vercel.svg"
  },
  {
    id: "remix",
    name: "Remix",
    icon: "/images/tech/remix.svg"
  },
  {
    id: "tailwind",
    name: "Tailwind",
    icon: "/images/tech/tailwindcss.svg"
  },
  {
    id: "npm",
    name: "NPM",
    icon: "/images/tech/npm.svg"
  },
  {
    id: "netlify",
    name: "Netlify",
    icon: "/images/tech/netlify.svg"
  },
]
// export const abilities = [
//   "Writing easily understood, modular, fast, and type-safe code with TypeScript and modern JavaScript syntax and publishing packages to NPM.",
//   "Responsive and performant web pages with React or Remix, with and SSR for a better user experience.",
//   "Deployment to platforms such as Vercel, Netlify, and Cloudflare to leverage caching and firewalls at the edge.",
//   "Creating JAM Stack frontend applications that integrate with modern headless content management systems (CMS) like Contentful and payment APIs like Stripe",
//   "Data management with Firestore, Prisma, or Supabase. Use of classic web security principles and user authorization/authentication with Firebase Auth and automated emails with Sendgrid.",
//   "Modern UI libraries like TailwindCSS, Headless UI, Framer Motion, etc. to create beautiful, responsive, and accessible web apps quickly."
// ];

export const mainProjects = [
  {
    name: "useTypewriter Hook",
    img: "/images/projects/usetypewriter.jpg",
    description:
      `Fast, minimal, and customizable React hook to allow developers to easily add a "typewriter-like" animation to their app. Supports customization, while having useful defaults, of typing speed, delay, and a blinking cursor. Works for both client-side rendered and server-side-rendered React apps by supporting ESM and CommonJS via JS environment detection. Receives 40-100 downloads a week. Users can add functions for further applications.`,
    role: "2020 — Design & web development",
    frameworks: "React.js, Next.js, TypeScript, CSS",
    gitRepo: "https://github.com/alissanguyen/react-use-typewriter",
    website: "https://usetypewriter.com/",
    npm: "https://www.npmjs.com/package/use-typewriter-hook",
    bgLight: "linear-gradient(-120deg, #fedfe7, #fbedff)",
    bgDark:
      "linear-gradient(120deg, rgba(255, 91, 137, 0.25) 53.5%, rgba(234, 68, 68, .25) 100.2%)"
  },
  {
    name: "Portfolio & Blog",
    description: "Personal website hosting technical writing. Published articles on continuous integration, contributing to open source, and React fundamentals. Authored a widely circulated article on creating a performant scroll indicator in React and Typescript. Wrote a 1,500 word article on contributing to open source as a beginner that has received >10,000 impressions.",
    role: "2020-2024 — Design & web development",
    frameworks: "Remix, TypeScript, SendGrid, Contentful",
    gitRepo: "",
    website: "www.alissanguyen.com",
    bgLight: "linear-gradient(120deg, #ffeede, #fff9ea)",
    bgDark:
      "linear-gradient(120deg, rgba(217, 164, 4, .25) 10.7%, rgba(242, 116, 5, .25) 113.2%)"
  },
  {
    name: "Planets",
    img: "/images/projects/planets.jpg",
    description:
      "A responsive landing page to learn about commonly known planets in the universe. Features CSS animations and page-switching.",
    role: "2020 — Web development",
    gitRepo: "https://github.com/alissanguyen/planets",
    frameworks: "Javascript, HTML, CSS & styled-components",
    website: "https://planets.alissanguyen.dev",
    bgLight: "linear-gradient(120deg, #d3e0ff, #eaeaff)",
    bgDark: "linear-gradient(120deg, rgba(82, 91, 219, .25) 11.2%, rgba(65, 71, 150, 0.25))"
  },
  {
    name: "Memory Game",
    description: "A memory game website with multiplayer feature. Players can be in group of 1-4 people. Offer icon or number themes and grid of 4x4 or 6x6.",
    gitRepo: "https://github.com/alissanguyen/memory-game",
    frameworks: "Javascript, HTML, CSS",
    role: "2020 — Web development",
    website: "https://memory.alissanguyen.dev/",
    bgLight: "linear-gradient(120deg, #d4ffd3, #eeffea)",
    bgDark: "linear-gradient(120deg, rgba(82, 219, 86, 0.25) 11.2%, rgba(65, 150, 73, 0.25))"
  },
];

export const otherProjects = [
  {
    icon: Launch,
    name: "Launch Countdown",
    description: "A demo launch countdown page with animations.",
    gitRepo: "https://github.com/alissanguyen/launch-countdown",
    website: "https://launch.alissanguyen.dev"
  },
  {
    icon: Clip,
    name: "Clipboard Page",
    description: "Responsive landing page for a tool called Clipboard with animations and transitions.",
    gitRepo: "https://github.com/alissanguyen/clipboard-page",
    website: "https://clipboard.alissanguyen.dev",
  },
  {
    icon: Spotter,
    name: "GitHub Spotter 2.0",
    description:
      "A website designed to search GitHub users by usernames with GitHub API.",
    gitRepo: "https://github.com/alissanguyen/github-spotter-2",
    website: "https://githubspotter2.alissanguyen.dev"
  },
  {
    icon: Atom,
    name: "Atom",
    description: "A responsive website with animations and futuristic design.",
    gitRepo: "https://github.com/alissanguyen/atom",
    website: "https://atom.alissanguyen.dev",
  },
  {
    icon: Calculator,
    name: "Calculator App",
    description:
      "A responsive calculator app with mobile-first design and custom theme widget.",
    gitRepo: "https://github.com/alissanguyen/calculator-app",
    website: "https://calculator.alissanguyen.dev",
  },
  {
    icon: Invoice,
    name: "Invoice App Demo",
    description: "A demo UI for invoices management.",
    gitRepo: "https://github.com/alissanguyen/invoice-app-demo",
    website: "https://invoices.alissanguyen.dev"
  },
  {
    icon: Game,
    name: "League of Legends",
    description: "A demo landing page for League of Legends with animations.",
    gitRepo: "https://github.com/alissanguyen/league-demo",
    website: "https://league.alissanguyen.dev",
  },
  {
    icon: Pomodoro,
    name: "Pomodoro Timer App",
    description: "A pomodoro inspired timer with mobile-first design.",
    gitRepo: "https://github.com/alissanguyen/pomodoro-app",
    website: "https://pomodoro.alissanguyen.dev/"
  },
  {
    icon: Weather,
    name: "Weatherly",
    description:
      "A 5-day weather website that includes forecast for every 3 hours.",
    gitRepo: "https://github.com/alissanguyen/weatherly",
    website: "https://weatherly.alissanguyen.dev/"
  }
];

const facts = [
  {
    index: 1,
    title: "I love cats and I have two :)",
    description:
      "Rosie (girl) and Felix (boy) are my love and energy to work hard everyday.",
    background: "/images/facts/cat.jpg"
  },
  {
    index: 2,
    title: `I once applied to Harvard`,
    description: "Yeah.. It's a long story...but basically I got deferred haha",
    background: "/images/facts/harvard.jpg"
  },
  {
    index: 3,
    title: "I am not afraid of snakes or spiders",
    description: "They are everywhere in Vietnam so that's why I adapted.",
    background: "/images/facts/snake.jpg"
  },
  {
    index: 4,
    title: "I am a very ambitious person",
    description:
      "When I was 10 I thought I can be the president of Europe XD. ",
    background: "/images/facts/ambitious.jpg"
  },
  {
    index: 5,
    title: "My favorite subject was Math",
    description:
      "I love it in high school. I guess it's the asian trait in me.",
    background: "/images/facts/math.jpg"
  },
  {
    index: 6,
    title: "I unbelievably love mayonnaise!",
    description:
      "I can eat mayo with pretty much everything (except desserts LOL).",
    background: "/images/facts/mayonnaise.jpg"
  },
  {
    index: 7,
    title: "I play 3 musical instruments",
    description:
      "I used to play ukulele, piano, and organ, now I only play ukulele.",
    background: "/images/facts/piano.jpg"
  },
  {
    index: 8,
    title: "I really like dad jokes but I suck at them",
    description: "Unfortunately these jokes only work if you git them.",
    background: "/images/facts/dad-joke.jpg"
  }
];

export const funFacts = [
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


export const NAVBAR_ID = "Navbar";

