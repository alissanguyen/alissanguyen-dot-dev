import GlassGaming from "./assets/otherprojects/game.png";
import Launch from "./assets/otherprojects/launch.png";
import Bookmark from "./assets/otherprojects/bookmark.png";
import Memory from "./assets/otherprojects/memory.png";
import Invoice from "./assets/otherprojects/invoice.png";
import Pomodoro from "./assets/otherprojects/pomodoro.png";
import Weather from "./assets/otherprojects/weather.png";

export const THEME_COOKIE_KEY = "alissa_nguyen_dev_theme";

export const contactFormHtmlId = "contact-form";

export const tags = [
  {
    id: "frontEnd",
    name: "front-end",
    style: "bg-gray-200 text-gray-800"
  },
  {
    id: "general",
    name: "general",
    style: "bg-red-200 text-red-800"
  },
  {
    id: "backEnd",
    name: "backend",
    style: "bg-orange-200 text-orange-800"
  },
  {
    id: "css",
    name: "css",
    style: "bg-blue-200 text-blue-800"
  },
  {
    id: "html",
    name: "html",
    style: "bg-yellow-200 text-yellow-800"
  },
  {
    id: "javascript",
    name: "javascript",
    style: "bg-teal-200 text-teal-800"
  },
  {
    id: "performance",
    name: "performance",
    style: "bg-green-200 text-green-800"
  },
  {
    id: "personal",
    name: "personal",
    style: "bg-purple-200 text-purple-800"
  },
  {
    id: "productivity",
    name: "productivity",
    style: "bg-indigo-200 text-indigo-800"
  },
  {
    id: "react",
    name: "react",
    style: "bg-pink-200 text-pink-800"
  },
  {
    id: "remix",
    name: "remix",
    style: "bg-red-200 text-red-800"
  },
  {
    id: "typescript",
    name: "typescript",
    style: "bg-orange-200 text-orange-800"
  },
  {
    id: "git",
    name: "git",
    style: "bg-green-200 text-green-800"
  },
  {
    id: "testing",
    name: "testing",
    style: "bg-teal-200 text-teal-800"
  },
  {
    id: "resources",
    name: "resources",
    style: "bg-yellow-200 text-yellow-800"
  }
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
export const fixedWidthLayoutClasses = `relative max-w-screen-lg w-full text-3xl m-auto px-8 py-8 sm:px-12 sm:py-14 md:py-20 lg:px-5 xl:p-0`;

export const skills = [
  {
    id: "a",
    name: "Javascript",
    icon: "/images/tech/javascript.svg"
  },
  {
    id: "b",
    name: "Typescript",
    icon: "/images/tech/typescript.svg"
  },
  {
    id: "c",
    name: "React.js",
    icon: "/images/tech/react.svg"
  },
  {
    id: "d",
    name: "HTML",
    icon: "/images/tech/html5.svg"
  },
  {
    id: "e",
    name: "CSS",
    icon: "/images/tech/css3.svg"
  },
  {
    id: "f",
    name: "Firebase",
    icon: "/images/tech/firebase.svg"
  },
  {
    id: "g",
    name: "Netlify",
    icon: "/images/tech/netlify.svg"
  },
  {
    id: "h",
    name: "Supabase",
    icon: "/images/tech/supabase.svg"
  },
  {
    id: "i",
    name: "MongoDB",
    icon: "/images/tech/mongodb.svg"
  },
  {
    id: "j",
    name: "Stripe",
    icon: "/images/tech/stripe.svg"
  },
  {
    id: "k",
    name: "Next.js",
    icon: "/images/tech/nextjs.svg"
  },
  {
    id: "l",
    name: "Tailwind",
    icon: "/images/tech/tailwindcss.svg"
  },
  {
    id: "m",
    name: "Framer",
    icon: "/images/tech/framer.svg"
  },
  {
    id: "n",
    name: "Airtable",
    icon: "/images/tech/airtable.svg"
  },
  {
    id: "o",
    name: "NPM",
    icon: "/images/tech/npm.svg"
  },
  {
    id: "p",
    name: "Sendgrid",
    icon: "/images/tech/sendgrid.svg"
  },
  {
    id: "q",
    name: "Prisma",
    icon: "/images/tech/prisma.svg"
  },
  {
    id: "r",
    name: "Vercel",
    icon: "/images/tech/vercel.svg"
  },
  {
    id: "s",
    name: "Remix",
    icon: "/images/tech/remix.svg"
  },
  {
    id: "u",
    name: "NodeJS",
    icon: "/images/tech/nodejs.svg"
  },
  {
    id: "v",
    name: "Contentful",
    icon: "images/tech/contentful.svg"
  }
];

export const abilities = [
  "Build responsive and efficient web pages with React or Remix, with functional components and SSR for a better user experience.",
  "Integration with third-parties such as Vercel, Netlify, and NextJS to deliver websites with top performance to users.",
  "Data management with Firestore, Prisma, and Supabase. Use of web security/authorization with Firestore & Socket.io and email communication with Sendgrid.",
  "Utilization of modern libraries and frameworks like TailwindCSS, Headless UI, Framer Motion,... to create beautiful and reusable web layout designs."
];

export const recentProjects = [
  {
    name: "Lunar",
    description:
      "A simple demo landing page with parallax scrolling effect and responsive layout.",
    gitRepo: "https://github.com/alissanguyen/lunar",
    website: "https://lunar.alissanguyen.dev",
    img: "/images/projects/lunar.jpg"
  },
  {
    name: "League Demo Page",
    description: "A demo landing page for League of Legends with animations.",
    gitRepo: "https://github.com/alissanguyen/league-demo",
    website: "https://league.alissanguyen.dev",
    img: "/images/lol.jpg"
  },
  {
    name: "Atom",
    description: "A responsive website with animations and futuristic design.",
    gitRepo: "https://github.com/alissanguyen/atom",
    website: "https://atom.alissanguyen.dev",
    img: "/images/projects/atom.jpg"
  },
  {
    name: "Planets",
    description:
      "A responsive responsive landing page to learn about planets in the universe.",
    gitRepo: "https://github.com/alissanguyen/planets",
    website: "https://planets.alissanguyen.dev",
    img: "/images/projects/planets.jpg"
  },
  {
    name: "Calculator App",
    description:
      "A responsive calculator app with mobile-first design and custom theme widget.",
    gitRepo: "https://github.com/alissanguyen/calculator-app",
    website: "https://calculator.alissanguyen.dev",
    img: "/images/projects/calculator.jpg"
  },
  {
    name: "Github Spotter 2.0",
    img: "/images/projects/githubspotter2.jpg",
    description:
      "A website designed to search GitHub users by usernames with Github API",
    gitRepo: "https://github.com/alissanguyen/github-spotter-2",
    website: "https://githubspotter2.alissanguyen.dev"
  }
];

export const mainProjects = [
  {
    name: "useTypewriter Hook",
    img: "/images/projects/usetypewriter.jpg",
    description:
      "A flexible hook for creating typewriter-like experience with React. Users can add functions for further applications.",
    role: "2020 — Design & web development",
    frameworks: ["React.js", "Next.js", "TypeScript", "CSS"],
    gitRepo: "https://github.com/alissanguyen/react-use-typewriter",
    website: "https://usetypewriter.com/",
    npm: "https://www.npmjs.com/package/use-typewriter-hook",
    bgLight: "linear-gradient(-120deg, #fedfe7, #fbedff)",
    bgDark:
      "linear-gradient(120deg, rgba(255, 91, 137, 0.25) 53.5%, rgba(234, 68, 68, .25) 100.2%)"
  },

  {
    name: "Dont Buy From Me",
    img: "/images/projects/dontbuyfromme.jpg",
    description:
      "A demo shopping website with add to cart features and purchases enabled",
    role: "2020 — Design & web development",
    frameworks: ["Remix", "Stripe", "TailwindCSS", "Prisma"],
    gitRepo: "https://github.com/alissanguyen/dont-buy-from-me",
    website: "http://www.dontbuyfrom.me/",
    inProgress: true,
    bgLight: "linear-gradient(120deg, #d3e0ff, #eaeaff)",
    bgDark:
      "linear-gradient(120deg, rgba(82, 91, 219, .25) 11.2%, rgba(65, 71, 150, 0.25))"
  },
  {
    name: "Clipboard Demo Page",
    img: "/images/projects/clipboard.jpg",
    description:
      "A responsive landing page for a tool called Clipboard with animations.",
    role: "2020 — Web development",
    frameworks: ["React.js", "Javascript", "HTML & SCSS"],
    gitRepo: "https://github.com/alissanguyen/clipboard-page",
    website: "https://clipboard.alissanguyen.dev",
    bgLight: "linear-gradient(120deg, #ffeede, #fff9ea)",
    bgDark:
      "linear-gradient(120deg, rgba(217, 164, 4, .25) 10.7%, rgba(242, 116, 5, .25) 113.2%)"
  },
  {
    name: "Crowdfund",
    img: "/images/projects/crowdfund.jpg",
    description: "A responsive demo landing page for crowdfunding projects.",
    role: "2020 — Web development",
    frameworks: ["React.js", "Javascript", "HTML & CSS"],
    gitRepo: "https://github.com/alissanguyen/demo-crowdfunding-page",
    website: "https://crowdfund.alissanguyen.dev",
    bgLight: "linear-gradient(120deg, #e0f7ff, #dffff4)",
    bgDark:
      "linear-gradient(120deg, rgba(14, 174, 87, .25) 0%, rgba(12, 116, 117, .25) 90%)"
  }
];

export const otherProjects = [
  {
    icon: GlassGaming,
    name: "Glass Gaming",
    description:
      "A demo UI for gamers to track gaming progress with inneumorphism design",
    gitRepo: "https://github.com/alissanguyen/glass-gaming-website",
    website: "https://glassgaming.alissanguyen.dev"
  },
  {
    icon: Launch,
    name: "Launch Countdown",
    description: "A demo launch countdown page with animations",
    gitRepo: "https://github.com/alissanguyen/launch-countdown",
    website: "https://launch.alissanguyen.dev"
  },
  {
    icon: Bookmark,
    name: "Bookmark Page Demo",
    description: "A demo landing page for a bookmark tool.",
    gitRepo: "https://github.com/alissanguyen/demo-bookmark-page",
    website: "https://bookmark.alissanguyen.dev"
  },
  {
    icon: Memory,
    name: "Memory Game",
    description: "A memory game website",
    gitRepo: "https://github.com/alissanguyen/memory-game",
    website: "https://memory.alissanguyen.dev/"
  },
  {
    icon: Invoice,
    name: "Invoice App Demo",
    description: "A demo UI for invoices management",
    gitRepo: "https://github.com/alissanguyen/invoice-app-demo",
    website: "https://invoices.alissanguyen.dev"
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

export const facts = [
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
    title: "I really like dad jokes but I sucks at them",
    description: "Here's one: ",
    background: "/images/facts/dad-joke.jpg"
  }
];
