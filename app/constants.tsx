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
  BLUE = "#d8ffff",
  YELLOW = "#ffff7b",
  GREEN = "",
  RED = "#ffbebe",
  ORANGE = "#fdceb2",
  PINK = "",
  PURPLE = ""
}
export const fixedWidthLayoutClasses = `relative max-w-screen-lg w-full text-3xl m-auto px-8 py-8 sm:px-12 sm:py-14 md:py-20 lg:px-5 xl:p-0`;

export const skills = [
  {
    id: "a",
    name: "Javascript",
    icon: JavascriptIcon
  },
  {
    id: "b",
    name: "Typescript",
    icon: TypescriptIcon
  },
  {
    id: "c",
    name: "React.js",
    icon: ReactIcon
  },
  {
    id: "d",
    name: "HTML",
    icon: HTMLIcon
  },
  {
    id: "e",
    name: "CSS",
    icon: CSSIcon
  },
  {
    id: "f",
    name: "Firebase",
    icon: FirebaseIcon
  },
  {
    id: "g",
    name: "Netlify",
    icon: NetlifyIcon
  },
  {
    id: "h",
    name: "Supabase",
    icon: SupabaseIcon
  },
  {
    id: "i",
    name: "MongoDB",
    icon: MongoIcon
  },
  {
    id: "j",
    name: "Stripe",
    icon: StripeIcon
  },
  {
    id: "k",
    name: "Next.js",
    icon: NextIcon
  },
  {
    id: "l",
    name: "Tailwind",
    icon: TailwindIcon
  },
  {
    id: "m",
    name: "Framer",
    icon: FramerIcon
  },
  {
    id: "n",
    name: "Airtable",
    icon: AirtableIcon
  },
  {
    id: "o",
    name: "NPM",
    icon: NPMIcon
  },
  {
    id: "p",
    name: "Sendgrid",
    icon: SendGridIcon
  },
  {
    id: "q",
    name: "Prisma",
    icon: PrismaIcon
  },
  {
    id: "r",
    name: "Vercel",
    icon: VercelIcon
  },
  {
    id: "s",
    name: "Remix",
    icon: RemixIcon
  },
  {
    id: "t",
    name: "SQLite",
    icon: SQLiteIcon
  },
  {
    id: "u",
    name: "Node",
    icon: NodeIcon
  },
  {
    id: "v",
    name: "Contentful",
    icon: ContentfulIcon
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
    img: "https://i.imgur.com/HZ8CIlR.png"
  },
  {
    name: "League Demo Page",
    description: "A demo landing page for League of Legends with animations.",
    gitRepo: "https://github.com/alissanguyen/league-demo",
    website: "https://league.alissanguyen.dev",
    img: "https://i.imgur.com/Y7vnWZF.png"
  },
  {
    name: "Atom",
    description: "A responsive website with animations and futuristic design.",
    gitRepo: "https://github.com/alissanguyen/atom",
    website: "https://atom.alissanguyen.dev",
    img: "https://i.imgur.com/ZNulq75.png"
  },
  {
    name: "Planets",
    description:
      "A responsive responsive landing page to learn about planets in the universe.",
    gitRepo: "https://github.com/alissanguyen/planets",
    website: "https://planets.alissanguyen.dev",
    img: "https://i.imgur.com/1vapt4c.png"
  },
  {
    name: "Calculator App",
    description:
      "A responsive calculator app with mobile-first design and custom theme widget.",
    gitRepo: "https://github.com/alissanguyen/calculator-app",
    website: "https://calculator.alissanguyen.dev",
    img: "https://i.imgur.com/asEhHgd.jpg"
  },
  {
    name: "Github Spotter 2.0",
    img: "https://i.imgur.com/oXIL4zD.png",
    description:
      "A website designed to search GitHub users by usernames with Github API",
    gitRepo: "https://github.com/alissanguyen/github-spotter-2",
    website: "https://githubspotter2.alissanguyen.dev"
  }
];

export const mainProjects = [
  {
    name: "useTypewriter Hook",
    img: "https://i.imgur.com/DX81Bvq.png",
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
    img: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
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
    img: "https://i.imgur.com/qwHu5TP.png",
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
    img: "https://i.imgur.com/baL7lHc.png",
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
    background:
      "https://images.unsplash.com/photo-1596854273338-cbf078ec7071?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
  },
  {
    index: 2,
    title: `I once applied to Harvard`,
    description: "Yeah.. It's a long story...but basically I got deferred haha",
    background:
      "https://images.unsplash.com/photo-1594394425161-bf2130df7875?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
  },
  {
    index: 3,
    title: "I am not afraid of snakes or spiders",
    description: "They are everywhere in Vietnam so that's why I adapted.",
    background:
      "https://images.unsplash.com/photo-1621666156563-fc74e5b24695?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1138&q=80"
  },
  {
    index: 4,
    title: "I am a very ambitious person",
    description:
      "When I was 10 I thought I can be the president of Europe XD. ",
    background:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_95-4Ia-BPhznv1oJN0jgp-Y9VB5IduzlT4VCgVY1GCrl_hmFfeWS35jR47jfZi9QGYw&usqp=CAU"
  },
  {
    index: 5,
    title: "My favorite subject was Math",
    description:
      "I love it in high school. I guess it's the asian trait in me.",
    background:
      "https://images.theconversation.com/files/207820/original/file-20180226-140213-yox11e.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip"
  },
  {
    index: 6,
    title: "I unbelievably love mayonnaise!",
    description:
      "I can eat mayo with pretty much everything (except desserts LOL).",
    background:
      "https://www.vitamix.com/media/other/images/Vitamix-Mayonnaise-square-crop-Recovered__1.jpg"
  },
  {
    index: 7,
    title: "I play 3 musical instruments",
    description:
      "I used to play ukulele, piano, and organ, now I only play ukulele.",
    background:
      "https://images.squarespace-cdn.com/content/v1/5c2647463e2d09bae7d0ae76/1559217907662-TV5Y15KTYMC7V18CGD5M/Learn+an+instrument"
  },
  {
    index: 8,
    title: "I really like dad jokes but I sucks at them",
    description: "Here's one: ",
    background:
      "http://cdn.shopify.com/s/files/1/0024/4537/7647/products/TD-CT-TS-DAYS-COF_1_1200x630.jpg?v=1538170010"
  }
];
