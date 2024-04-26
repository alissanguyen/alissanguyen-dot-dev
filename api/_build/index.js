var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_server = require("react-dom/server"), import_react = require("@remix-run/react"), import_config = require("dotenv/config"), import_jsx_runtime = require("react/jsx-runtime");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.RemixServer, { context: remixContext, url: request.url })
  );
  return responseHeaders.set("Content-Type", "text/html"), new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  CatchBoundary: () => CatchBoundary,
  ErrorBoundary: () => ErrorBoundary,
  default: () => root_default,
  links: () => links,
  loader: () => loader
});
var import_react5 = require("@remix-run/react");

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-S474G3XE.css";

// app/styles/global.css
var global_default = "/build/_assets/global-RDAO5XAO.css";

// app/root.tsx
var React4 = __toESM(require("react"));

// app/components/NavBar/NavBar.tsx
var import_react4 = require("@remix-run/react");

// app/providers/ModalProvider.tsx
var React = __toESM(require("react")), import_jsx_runtime2 = require("react/jsx-runtime"), ModalContext = React.createContext(
  void 0
), useModalContext = () => {
  let contextValue = React.useContext(ModalContext);
  if (!contextValue)
    throw new Error(
      "You are trying to use useModalContext without rendering a ModalContext.Provider somewhere above this component in the component tree. Render a ModalContext.Provider somewhere above this component in the component tree to resolve this issue."
    );
  return contextValue;
}, ModalContextProvider = (props) => {
  let [modalIsOpen, setModalIsOpen] = React.useState(!1), updateModalStatus = (newValue) => {
    setModalIsOpen(newValue);
  };
  return React.useEffect(() => {
    modalIsOpen ? (document.body.classList.add("fixed"), document.body.classList.add("overflow-y-hidden"), document.body.style.height = "100vh") : (document.body.classList.remove("fixed"), document.body.classList.remove("overflow-y-hidden"), document.body.style.removeProperty("height"));
  }, [modalIsOpen]), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    ModalContext.Provider,
    {
      value: {
        modalIsOpen,
        updateModalStatus
      },
      children: props.children
    }
  );
};

// app/providers/ThemeProvider.tsx
var React2 = __toESM(require("react")), import_jsx_runtime3 = require("react/jsx-runtime"), ThemeContext = React2.createContext(
  void 0
), useTheme = () => {
  let contextValue = React2.useContext(ThemeContext);
  if (!contextValue)
    throw new Error(
      "You are trying to use useGlobalContext without rendering a ThemeContext.Provider somewhere above this component in the component tree. Render a ThemeContext.Provider somewhere above this component in the component tree to resolve this issue."
    );
  return contextValue;
}, ThemeContextProvider = (props) => {
  let [theme, setTheme] = React2.useState(props.initialTheme), updateTheme = (newTheme) => {
    setTheme(newTheme);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
    ThemeContext.Provider,
    {
      value: {
        theme,
        updateTheme
      },
      children: props.children
    }
  );
};

// app/components/ThemeButton/ThemeButton.tsx
var import_jsx_runtime4 = require("react/jsx-runtime"), getClassName = (theme) => theme === "light" /* LIGHT */ ? "border-2 border-gray-400 hover:border-black" : "border-2 border-gray-400 hover:border-white", mobileSun = "/svg/mobileSun.svg", ThemeButton = (props) => {
  let { theme, updateTheme } = useTheme(), { modalIsOpen } = useModalContext(), sun = "/svg/sun.svg", className = getClassName(theme), handleToggleTheme = (oldTheme) => {
    updateTheme(
      oldTheme === "dark" /* DARK */ ? "light" /* LIGHT */ : "dark" /* DARK */
    );
  }, nextTheme = theme === "dark" /* DARK */ ? "light" /* LIGHT */ : "dark" /* DARK */, generateFormData = () => {
    let form = new FormData();
    return form.append("theme", nextTheme), form;
  };
  function toggleTheme(theme2) {
    requestAnimationFrame(() => {
      handleToggleTheme(theme2), fetch("/setTheme?index", {
        method: "POST",
        body: generateFormData(),
        credentials: "same-origin"
      });
    });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_jsx_runtime4.Fragment, { children: modalIsOpen ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "ThemeButton_Wrapper", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
    "button",
    {
      name: "Switch to light mode",
      className: `rounded-full px-5 py-3 inline-flex items-center justify-center ${className}`,
      onClick: () => toggleTheme(theme),
      children: theme === "light" /* LIGHT */ ? /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "inline-flex items-center justify-center text-base", children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
          "img",
          {
            className: "theme-icon select-none mr-4 w-5",
            src: mobileSun,
            alt: "Sun icon",
            title: "Sun"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { className: "text-black", children: "Switch to dark mode" })
      ] }) : /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "inline-flex items-center justify-center text-base", children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
          "img",
          {
            src: "/svg/moon-blog.svg",
            alt: "Moon icon",
            title: "Moon",
            className: "theme-icon flex items-center m-auto justify-center w-5 select-none"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { className: "ml-4 text-gray-200 hover:text-white", children: "Switch to light mode" })
      ] })
    }
  ) }) : /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "ThemeButton_Wrapper", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
    "button",
    {
      name: "Switch to dark theme",
      className: "theme-container",
      onClick: () => toggleTheme(theme),
      children: theme === "light" /* LIGHT */ ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
        "img",
        {
          className: "theme-icon select-none",
          src: sun,
          alt: "Sun icon",
          title: "Sun"
        }
      ) : /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(MoonIcon, {})
    }
  ) }) });
}, MoonIcon = (props) => /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
  "img",
  {
    src: "/svg/moon.svg",
    alt: "Moon icon",
    title: "Moon",
    className: "theme-icon flex items-center m-auto justify-center w-8 select-none"
  }
), ThemeButton_default = ThemeButton, SimplifiedThemeButton = () => {
  let { theme, updateTheme } = useTheme(), handleToggleTheme = (oldTheme) => {
    updateTheme(
      oldTheme === "dark" /* DARK */ ? "light" /* LIGHT */ : "dark" /* DARK */
    );
  }, nextTheme = theme === "dark" /* DARK */ ? "light" /* LIGHT */ : "dark" /* DARK */, generateFormData = () => {
    let form = new FormData();
    return form.append("theme", nextTheme), form;
  };
  function toggleTheme(theme2) {
    requestAnimationFrame(() => {
      handleToggleTheme(theme2), fetch("/setTheme?index", {
        method: "POST",
        body: generateFormData(),
        credentials: "same-origin"
      });
    });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "SimplifiedThemeButton_Wrapper", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
    "button",
    {
      name: "light theme",
      className: "rounded-full px-5 py-3 inline-flex items-center justify-center ",
      onClick: () => toggleTheme(theme),
      children: theme === "light" /* LIGHT */ ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "h-7 w-7 text-gray-600 hover:text-black ease-in duration-100",
          fill: "none",
          viewBox: "0 0 24 24",
          stroke: "currentColor",
          strokeWidth: "1.5",
          children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            "path",
            {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            }
          )
        }
      ) : /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "h-7 w-7 text-gray-400 hover:text-white ease-in duration-100",
          fill: "none",
          viewBox: "0 0 24 24",
          stroke: "currentColor",
          strokeWidth: "1.5",
          children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            "path",
            {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            }
          )
        }
      )
    }
  ) });
};

// app/assets/otherprojects/launch.png
var launch_default = "/build/_assets/launch-Q2SHHKB7.png";

// app/assets/otherprojects/invoice.png
var invoice_default = "/build/_assets/invoice-ASYB6UL2.png";

// app/assets/otherprojects/pomodoro.png
var pomodoro_default = "/build/_assets/pomodoro-5X7SIOCR.png";

// app/assets/otherprojects/weather.png
var weather_default = "/build/_assets/weather-KIFYQBNS.png";

// app/assets/otherprojects/atom.png
var atom_default = "/build/_assets/atom-VGMAKRS3.png";

// app/assets/otherprojects/game.png
var game_default = "/build/_assets/game-2M7LXPAD.png";

// app/assets/otherprojects/spotter.png
var spotter_default = "/build/_assets/spotter-2T4WO3EH.png";

// app/assets/otherprojects/calculator.png
var calculator_default = "/build/_assets/calculator-OLIYZPRU.png";

// app/assets/otherprojects/paper-clip.png
var paper_clip_default = "/build/_assets/paper-clip-773SIKMN.png";

// app/constants.tsx
var import_fa = require("react-icons/fa"), import_jsx_runtime5 = require("react/jsx-runtime"), IMAGE_WIDTH = "1200", IMAGE_HEIGHT = "630", PORTFOLIO_WEBSITE_NAME = "Alissa Nguyen", BLOG_WEBSITE_NAME = "Alissa Nguyen's Blog", TWITTER_CARD_TYPE = "summary_large_image", AUTHOR = "Alissa Nguyen", WEBSITE_URL = "https://www.alissanguyen.com/", BLOG_URL = "https://www.alissanguyen.com/blog", TWITTER_ACC = "@ai_alissa", TWITTER_PUBLISHER = "https://twitter.com/ai_alissa", WEBSITE_KEYWORDS = "Learn Remix, React, JavaScript, Typescript, Alissa Nguyen Blog, Alissa Nguyen, Software Development, Software Engineer, Modern Programing, Frontend Engineer, Web Developer, AlissaNguyen", BLOG_KEYWORDS = "Learn Remix, React, JavaScript, Typescript, Personal Blog, Technical Blog, Alissa Nguyen, Alissa Nguyen Blog, Software Development, Developer, Software Engineer, Modern Programing, Frontend Programmer, Web Developer", WEBSITE_DESCRIPTION = "Hi, I'm Alissa. I'm a software engineer in Seattle, WA. I enjoy building software with elegant, performant, and maintainable frontend code.", BLOG_DESCRIPTION = "Hi, I'm Alissa. I write blog about what I know and tutorials for Remix, React, web development and more.", PORTFOLIO_IMAGE_URL = "https://www.alissanguyen.com/images/preview.jpg", BLOG_IMAGE_URL = "https://www.alissanguyen.com/images/blogpreview.jpg", topLevelLinksOnMobile = [
  {
    href: "/",
    displayName: "Home"
  },
  {
    href: "/blog",
    displayName: "Blog"
  },
  {
    href: "/#portfolio",
    displayName: "Portfolio"
  },
  {
    href: "/#resume",
    displayName: "Resume"
  },
  {
    href: "/#contact",
    displayName: "Contact"
  }
], topLevelLinksOnDesktop = [
  {
    href: "/",
    displayName: "Home"
  },
  {
    href: "/blog",
    displayName: "Blog"
  },
  {
    href: "/#portfolio",
    displayName: "Portfolio"
  },
  {
    href: "/#resume",
    displayName: "Resume"
  },
  {
    href: "/#contact",
    displayName: "Contact"
  }
], THEME_COOKIE_KEY = "alissa_nguyen_dev_theme", sm = [
  {
    name: "Facebook",
    className: "icon facebook relative bg-white text-black hover:text-white",
    icon: () => /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_fa.FaFacebookF, {}),
    externalUrl: "https://www.facebook.com/alissa.1404"
  },
  {
    name: "Twitter",
    className: "icon twitter text-black hover:text-white",
    icon: () => /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_fa.FaTwitter, {}),
    externalUrl: "https://twitter.com/ai_alissa"
  },
  {
    name: "Instagram",
    className: "icon instagram text-black hover:text-white",
    icon: () => /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_fa.FaInstagram, {}),
    externalUrl: "https://www.instagram.com/alissang1211/"
  },
  {
    name: "Github",
    className: "icon github text-black hover:text-white",
    icon: () => /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_fa.FaGithub, {}),
    externalUrl: "https://github.com/alissanguyen"
  },
  {
    name: "Linkedin",
    className: "icon linkedin text-black hover:text-white",
    icon: () => /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_fa.FaLinkedin, {}),
    externalUrl: "https://www.linkedin.com/in/alissa-nguyen-dev/"
  }
], contactFormHtmlId = "contact-form", tags = [
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
  { id: "dataStructures", name: "data structures" }
];
var fixedWidthLayoutClasses = "relative max-w-screen-xl w-full text-3xl m-auto px-8 sm:px-12 lg:px-5 xl:px-0", tech = [
  {
    id: "python",
    name: "Python",
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
  }
], mainProjects = [
  {
    name: "useTypewriter Hook",
    img: "/images/projects/usetypewriter.jpg",
    description: 'Fast, minimal, and customizable React hook to allow developers to easily add a "typewriter-like" animation to their app. Supports customization, while having useful defaults, of typing speed, delay, and a blinking cursor. Works for both client-side rendered and server-side-rendered React apps by supporting ESM and CommonJS via JS environment detection. Receives 40-100 downloads a week. Users can add functions for further applications.',
    role: "2020 \u2014 Design & web development",
    frameworks: "React.js, Next.js, TypeScript, CSS",
    gitRepo: "https://github.com/alissanguyen/react-use-typewriter",
    website: "https://usetypewriter.com/",
    npm: "https://www.npmjs.com/package/use-typewriter-hook",
    bgLight: "linear-gradient(-120deg, #fedfe7, #fbedff)",
    bgDark: "linear-gradient(120deg, rgba(255, 91, 137, 0.25) 53.5%, rgba(234, 68, 68, .25) 100.2%)"
  },
  {
    name: "Portfolio & Blog",
    description: "Personal website hosting technical writing. Published articles on continuous integration, contributing to open source, and React fundamentals. Authored a widely circulated article on creating a performant scroll indicator in React and Typescript. Wrote a 1,500 word article on contributing to open source as a beginner that has received >10,000 impressions.",
    role: "2020-2024 \u2014 Design & web development",
    frameworks: "Remix, TypeScript, SendGrid, Contentful",
    gitRepo: "",
    website: "www.alissanguyen.com",
    bgLight: "linear-gradient(120deg, #ffeede, #fff9ea)",
    bgDark: "linear-gradient(120deg, rgba(217, 164, 4, .25) 10.7%, rgba(242, 116, 5, .25) 113.2%)"
  },
  {
    name: "Planets",
    img: "/images/projects/planets.jpg",
    description: "A responsive landing page to learn about commonly known planets in the universe. Features CSS animations and page-switching.",
    role: "2020 \u2014 Web development",
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
    role: "2020 \u2014 Web development",
    website: "https://memory.alissanguyen.dev/",
    bgLight: "linear-gradient(120deg, #d4ffd3, #eeffea)",
    bgDark: "linear-gradient(120deg, rgba(82, 219, 86, 0.25) 11.2%, rgba(65, 150, 73, 0.25))"
  }
], otherProjects = [
  {
    icon: launch_default,
    name: "Launch Countdown",
    description: "A demo launch countdown page with animations.",
    gitRepo: "https://github.com/alissanguyen/launch-countdown",
    website: "https://launch.alissanguyen.dev"
  },
  {
    icon: paper_clip_default,
    name: "Clipboard Page",
    description: "Responsive landing page for a tool called Clipboard with animations and transitions.",
    gitRepo: "https://github.com/alissanguyen/clipboard-page",
    website: "https://clipboard.alissanguyen.dev"
  },
  {
    icon: spotter_default,
    name: "GitHub Spotter 2.0",
    description: "A website designed to search GitHub users by usernames with GitHub API.",
    gitRepo: "https://github.com/alissanguyen/github-spotter-2",
    website: "https://githubspotter2.alissanguyen.dev"
  },
  {
    icon: atom_default,
    name: "Atom",
    description: "A responsive website with animations and futuristic design.",
    gitRepo: "https://github.com/alissanguyen/atom",
    website: "https://atom.alissanguyen.dev"
  },
  {
    icon: calculator_default,
    name: "Calculator App",
    description: "A responsive calculator app with mobile-first design and custom theme widget.",
    gitRepo: "https://github.com/alissanguyen/calculator-app",
    website: "https://calculator.alissanguyen.dev"
  },
  {
    icon: invoice_default,
    name: "Invoice App Demo",
    description: "A demo UI for invoices management.",
    gitRepo: "https://github.com/alissanguyen/invoice-app-demo",
    website: "https://invoices.alissanguyen.dev"
  },
  {
    icon: game_default,
    name: "League of Legends",
    description: "A demo landing page for League of Legends with animations.",
    gitRepo: "https://github.com/alissanguyen/league-demo",
    website: "https://league.alissanguyen.dev"
  },
  {
    icon: pomodoro_default,
    name: "Pomodoro Timer App",
    description: "A pomodoro inspired timer with mobile-first design.",
    gitRepo: "https://github.com/alissanguyen/pomodoro-app",
    website: "https://pomodoro.alissanguyen.dev/"
  },
  {
    icon: weather_default,
    name: "Weatherly",
    description: "A 5-day weather website that includes forecast for every 3 hours.",
    gitRepo: "https://github.com/alissanguyen/weatherly",
    website: "https://weatherly.alissanguyen.dev/"
  }
];
var NAVBAR_ID = "Navbar";

// app/components/NavBar/NavLink.tsx
var import_react2 = require("@remix-run/react");
var import_jsx_runtime6 = require("react/jsx-runtime"), getTextColorClassNameForNavLink = (currentTheme) => {
  if (currentTheme === "dark" /* DARK */)
    return "text-gray-400 hover:text-white";
  if (currentTheme === "light" /* LIGHT */)
    return "text-gray-400 hover:text-black";
}, NavLink = ({
  to,
  isCurrentRoute,
  ...rest
}) => {
  let { theme } = useTheme(), textColorClassName = getTextColorClassNameForNavLink(
    theme
  );
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("li", { className: `focus:outline-none block whitespace-nowrap text-lg font-medium px-5 py-2 nav-link ${textColorClassName} ${isCurrentRoute ? "text-navBar-linkActive nav-link-active" : null}`, children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
    import_react2.Link,
    {
      prefetch: "intent",
      to,
      ...rest
    }
  ) });
}, NavLink_default = NavLink;

// app/components/NavBar/MobileMenu.tsx
var import_menu_button2 = require("@reach/menu-button");

// app/components/NavBar/MobileMenuList.tsx
var import_menu_button = require("@reach/menu-button"), import_framer_motion = require("framer-motion"), import_react3 = require("@remix-run/react");
var import_jsx_runtime7 = require("react/jsx-runtime"), MobileMenuList = (props) => {
  let shouldReduceMotion = (0, import_framer_motion.useReducedMotion)();
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_framer_motion.AnimatePresence, { children: props.isExpanded ? /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
    import_menu_button.MenuPopover,
    {
      position: (mobileMenuExpandButton) => ({
        top: `calc(${Number(mobileMenuExpandButton == null ? void 0 : mobileMenuExpandButton.top) + Number(mobileMenuExpandButton == null ? void 0 : mobileMenuExpandButton.height)}px + 2.25rem)`,
        // 2.25 rem = py-9 from navbar
        left: 0,
        bottom: 0,
        right: 0
      }),
      className: "block z-50",
      children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
        import_framer_motion.motion.div,
        {
          initial: { y: -50, opacity: 0 },
          animate: { y: 0, opacity: 1 },
          exit: { y: -50, opacity: 0 },
          transition: {
            duration: shouldReduceMotion ? 0 : 0.15,
            ease: "linear"
          },
          className: "MenuLists h-full overflow-y-scroll border-t border-mobileNav-border pb-12 outline-none",
          children: /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(import_menu_button.MenuItems, { className: "MobileNav__MenuItemsWrapper flex border-none bg-transparent p-0 h-full flex-col", children: [
            topLevelLinksOnMobile.map(
              (link) => /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
                import_menu_button.MenuLink,
                {
                  className: "MobileNav__MenuItem border-b border-mobileNav-border px-[5vw] text-lg py-9",
                  as: import_react3.Link,
                  to: link.href,
                  children: link.displayName
                },
                link.href
              )
            ),
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "noscript-hidden py-9 text-center flex justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(ThemeButton_default, {}) })
          ] })
        }
      )
    }
  ) : null });
}, MobileMenuList_default = MobileMenuList;

// app/components/NavBar/MobileMenu.tsx
var React3 = __toESM(require("react"));
var import_jsx_runtime8 = require("react/jsx-runtime"), getClassName2 = (theme, modalIsOpen) => {
  if (modalIsOpen)
    return theme === "light" /* LIGHT */ ? "text-gray-400 hover:text-black border-gray-400 hover:border-black focus:border-black" : "text-gray-500 hover:text-white border-gray-500 hover:border-white focus:border-white";
  if (theme === "light" /* LIGHT */)
    return "text-gray-400 hover:text-black border-gray-400 hover:border-black focus:border-black";
  if (theme === "dark" /* DARK */)
    return "text-gray-500 hover:text-white border-gray-500 hover:border-white focus:border-white";
}, MobileMenu = (props) => {
  let { modalIsOpen, updateModalStatus } = useModalContext(), className = getClassName2(
    props.theme,
    modalIsOpen
  );
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_menu_button2.Menu, { children: ({ isExpanded }) => (React3.useEffect(() => {
    updateModalStatus(isExpanded);
  }, [isExpanded]), /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(import_jsx_runtime8.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
      import_menu_button2.MenuButton,
      {
        id: "menu--1",
        "aria-label": isExpanded ? "Close menu" : "Open menu",
        name: isExpanded ? "Close menu" : "Open menu",
        className: "focus:outline-none inline-flex h-12 w-12 items-center justify-center rounded-full border-2 p-1 transition " + className,
        children: /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(
          "svg",
          {
            className: `ham hamRotate ham8 ${modalIsOpen ? "active" : ""}`,
            viewBox: "0 0 100 100",
            width: "80",
            id: "ham-button",
            fill: "currentColor",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
                "path",
                {
                  className: "line top",
                  d: "m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20",
                  fill: "currentColor"
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
                "path",
                {
                  className: "line middle",
                  d: "m 30,50 h 40",
                  fill: "currentColor"
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
                "path",
                {
                  className: "line bottom",
                  d: "m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20",
                  fill: "currentColor"
                }
              )
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(MobileMenuList_default, { ...props, isExpanded })
  ] })) });
}, MobileMenu_default = MobileMenu;

// app/components/NavBar/NavBar.tsx
var import_jsx_runtime9 = require("react/jsx-runtime"), Navbar = (props) => {
  let location = (0, import_react4.useLocation)(), { theme } = useTheme(), currentTopLevelRoute = location.pathname.split("/")[1];
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_jsx_runtime9.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
    "div",
    {
      className: fixedWidthLayoutClasses + " mb-10 md:mb-16 lg:mb-20",
      id: NAVBAR_ID,
      children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("nav", { className: "NavBar__Wrapper max-w-screen-lg flex flex-row relative", children: /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "NavBar__InnerWrapper fixed top-[2rem] bg-blue-10 z-[100] flex flex-row gap-40 items-center justify-between w-full max-w-screen-xl rounded-lg left-[0] xl:left-auto pl-8 sm:pl-12 pb-15 pr-5 xl:px-0 p-4 lg:p-0 lg:pl-5", style: {
        backgroundColor: `rgba(107, 107, 107, ${props.navbarOpacity})`,
        backdropFilter: `blur(${props.navbarOpacity * 50}px)`
      }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
          NavLogo,
          {
            isCurrentRoute: getIsActiveRoute(
              "/",
              currentTopLevelRoute === void 0 ? "" : currentTopLevelRoute
            )
          }
        ) }),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("nav", { className: "Dekstop__NavBar hidden lg:flex list-none w-full justify-right", children: /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "flex flex-row items-center justify-between w-full", children: [
          topLevelLinksOnDesktop.map((link) => /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
            NavLink_default,
            {
              to: link.href,
              isCurrentRoute: getIsActiveRoute(
                link.href,
                currentTopLevelRoute === void 0 ? "" : currentTopLevelRoute
              ),
              children: link.displayName
            },
            link.href
          )),
          /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: "noscript-hidden hidden lg:block", children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(ThemeButton_default, {}) })
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: "Mobile__NavBar fixed right-[2rem] sm:right-[3rem] flex items-center justify-center z-[200]", children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: "block lg:hidden", children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(MobileMenu_default, { theme }) }) })
      ] }) })
    }
  ) });
}, getIsActiveRoute = (href, currentTopLevelRoute) => href.startsWith("/#") ? !1 : "/" + currentTopLevelRoute === href, NavBar_default = Navbar, NavLogo = (props) => {
  let { theme } = useTheme(), { modalIsOpen } = useModalContext(), logoText = getLogoClassName(
    theme,
    modalIsOpen
  ), IS_CURRENT_ROUTE_CLASSNAME = "text-navBar-linkActive";
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
    import_react4.Link,
    {
      prefetch: "intent",
      to: "/",
      className: `logo focus:outline-none block whitespace-nowrap text-2xl font-medium transition uppercase ${logoText} ${props.isCurrentRoute ? IS_CURRENT_ROUTE_CLASSNAME : null}`,
      children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { children: "Alissa Nguyen" })
    }
  );
}, getLogoClassName = (theme, modalIsOpen) => modalIsOpen ? theme === "light" /* LIGHT */ ? "text-gray-500 hover:text-black" : "text-gray-400 hover:text-white" : theme === "light" /* LIGHT */ ? "text-gray-500 hover:text-black" : "text-gray-400 hover:text-white";

// app/components/NavBar/NavBar.css
var NavBar_default2 = "/build/_assets/NavBar-TYYVIFNQ.css";

// app/components/Error/ErrorPage.css
var ErrorPage_default = "/build/_assets/ErrorPage-M6OXMGJC.css";

// app/components/ThemeButton/ThemeButton.css
var ThemeButton_default2 = "/build/_assets/ThemeButton-EQVZE2NE.css";

// app/components/Footer/Footer.tsx
var import_jsx_runtime10 = require("react/jsx-runtime"), Footer = ({}) => /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "w-full relative", children: /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "bottom-0 py-2 w-full flex flex-col items-center justify-center text-xs text-textSmColor", children: [
  /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("p", { children: "Built and designed by Alissa Nguyen a.k.a Tam Nguyen." }),
  /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("p", { children: [
    "Copyright \xA9 ",
    (/* @__PURE__ */ new Date()).getFullYear(),
    " All Rights Reserved."
  ] })
] }) }), Footer_default = Footer;

// app/utils/theme.server.ts
var import_node = require("@remix-run/node");
var sessionSecret = process.env.SESSION_SECRET;
if (!sessionSecret)
  throw new Error("SESSION_SECRET must be set");
var themeStorage = (0, import_node.createCookieSessionStorage)({
  cookie: {
    name: "alissa_nguyen_dev_theme",
    secure: !0,
    secrets: [sessionSecret],
    sameSite: "lax",
    path: "/",
    httpOnly: !0
  }
});
async function getThemeSession(request) {
  let session = await themeStorage.getSession(request.headers.get("Cookie"));
  return {
    getTheme: () => {
      let themeValue = session.get(THEME_COOKIE_KEY);
      return isTheme(themeValue) ? themeValue : "light" /* LIGHT */;
    },
    setTheme: (theme) => session.set(THEME_COOKIE_KEY, theme),
    commit: () => themeStorage.commitSession(session)
  };
}
var isTheme = (maybeTheme) => maybeTheme === "dark" /* DARK */ || maybeTheme === "light" /* LIGHT */;

// app/components/Error/ErrorPage.tsx
var import_jsx_runtime11 = require("react/jsx-runtime"), ErrorPage = (props) => {
  let error = props.error;
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_jsx_runtime11.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("main", { children: [
    null,
    /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "font-mono text-white flex flex-col w-full h-full justify-start pt-20 px-10 sm:px-0 max-w-[800px] m-auto z-50 ", children: [
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("p", { className: "text-4xl custom2:text-5xl mb-5 xs:mb-10 font-bold z-50", children: "UH OH! You're lost." }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "text-lg inline-flex mb-10 xs:mb-14 z-50 leading-9", children: /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("p", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("span", { style: { color: "#0CECDD" }, children: [
          '"www.alissanguyen.com',
          props.pathname,
          '"'
        ] }),
        " ",
        "is not a page on alissanguyen.com. How you got here is a mystery. But you can click the",
        " ",
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { className: "font-bold text-sky-500", children: "blue" }),
        " button below to go back to homepage, or the",
        " ",
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { className: "font-bold text-rose-500", children: "red" }),
        " one to explore my blog :)"
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "z-50 mb-10 text-lg tracking-wide xs:tracking-normal", children: [
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
          "a",
          {
            href: "/",
            className: "rounded-full px-5 py-3 bg-blue-500 hover:bg-blue-600 text-white mr-5",
            children: "Home"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
          "a",
          {
            href: "/blog",
            className: "rounded-full px-5 py-3 bg-rose-500 hover:bg-rose-600 text-white mr-5",
            children: "Blog"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Flowers, {})
  ] }) });
}, ErrorPage_default2 = ErrorPage, Flowers = () => /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "FlowersContainer relative", children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "night", children: /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "Flowers absolute ", children: [
  /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "Flower Flower--1", children: [
    /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "Flower__Leafs Flower__Leafs--1", children: [
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "Flower__Leaf Flower__Leaf--1" }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "Flower__Leaf Flower__Leaf--2" }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "Flower__Leaf Flower__Leaf--3" }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "Flower__Leaf Flower__Leaf--4" }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "Flower__WhiteCircle" }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "Flower__Light Flower__Light--1" }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "Flower__Light Flower__Light--2" }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "Flower__Light Flower__Light--3" }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "Flower__Light Flower__Light--4" }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "Flower__Light Flower__Light--5" }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "Flower__Light Flower__Light--6" }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "Flower__Light Flower__Light--7" }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "Flower__Light Flower__Light--8" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "Flower__Line", children: [
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "Flower__LineLeaf Flower__LineLeaf--1" }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "Flower__LineLeaf Flower__LineLeaf--2" }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "Flower__LineLeaf Flower__LineLeaf--3" }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "Flower__LineLeaf Flower__LineLeaf--4" }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "Flower__LineLeaf Flower__LineLeaf--5" }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "Flower__LineLeaf Flower__LineLeaf--6" })
    ] })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "Flower Flower--2", children: [
    /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "Flower__Leafs Flower__Leafs--2", children: [
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "Flower__Leaf Flower__Leaf--1" }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "Flower__Leaf Flower__Leaf--2" }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "Flower__Leaf Flower__Leaf--3" }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "Flower__Leaf Flower__Leaf--4" }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "Flower__WhiteCircle" }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "Flower__Light Flower__Light--1" }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "Flower__Light Flower__Light--2" }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "Flower__Light Flower__Light--3" }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "Flower__Light Flower__Light--4" }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "Flower__Light Flower__Light--5" }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "Flower__Light Flower__Light--6" }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "Flower__Light Flower__Light--7" }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "Flower__Light Flower__Light--8" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "Flower__Line", children: [
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "Flower__LineLeaf Flower__LineLeaf--1" }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "Flower__LineLeaf Flower__LineLeaf--2" }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "Flower__LineLeaf Flower__LineLeaf--3" }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "Flower__LineLeaf Flower__LineLeaf--4" })
    ] })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "Flower Flower--3", children: [
    /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "Flower__Leafs Flower__Leafs--3", children: [
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "Flower__Leaf Flower__Leaf--1" }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "Flower__Leaf Flower__Leaf--2" }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "Flower__Leaf Flower__Leaf--3" }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "Flower__Leaf Flower__Leaf--4" }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "Flower__WhiteCircle" }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "Flower__Light Flower__Light--1" }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "Flower__Light Flower__Light--2" }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "Flower__Light Flower__Light--3" }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "Flower__Light Flower__Light--4" }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "Flower__Light Flower__Light--5" }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "Flower__Light Flower__Light--6" }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "Flower__Light Flower__Light--7" }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "Flower__Light Flower__Light--8" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "Flower__Line", children: [
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "Flower__LineLeaf Flower__LineLeaf--1" }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "Flower__LineLeaf Flower__LineLeaf--2" }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "Flower__LineLeaf Flower__LineLeaf--3" }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "Flower__LineLeaf Flower__LineLeaf--4" })
    ] })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "grow-ans", style: { animationDelay: "1.2s" }, children: /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "Flower__g-long", children: [
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "Flower__g-long__top" }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "Flower__g-long__bottom" })
  ] }) }),
  /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "growing-grass", children: /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "Flower__Grass Flower__Grass--1", children: [
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "Flower__Grass--top" }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "Flower__Grass--bottom" }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "Flower__GrassLeaf Flower__GrassLeaf--1" }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "Flower__GrassLeaf Flower__GrassLeaf--2" }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "Flower__GrassLeaf Flower__GrassLeaf--3" }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "Flower__GrassLeaf Flower__GrassLeaf--4" }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "Flower__GrassLeaf Flower__GrassLeaf--5" }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "Flower__GrassLeaf Flower__GrassLeaf--6" }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "Flower__GrassLeaf Flower__GrassLeaf--7" }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "Flower__GrassLeaf Flower__GrassLeaf--8" }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "Flower__GrassOverlay" })
  ] }) }),
  /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "growing-grass", children: /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "Flower__Grass Flower__Grass--2", children: [
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "Flower__Grass--top" }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "Flower__Grass--bottom" }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "Flower__GrassLeaf Flower__GrassLeaf--1" }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "Flower__GrassLeaf Flower__GrassLeaf--2" }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "Flower__GrassLeaf Flower__GrassLeaf--3" }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "Flower__GrassLeaf Flower__GrassLeaf--4" }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "Flower__GrassLeaf Flower__GrassLeaf--5" }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "Flower__GrassLeaf Flower__GrassLeaf--6" }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "Flower__GrassLeaf Flower__GrassLeaf--7" }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "Flower__GrassLeaf Flower__GrassLeaf--8" }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "Flower__GrassOverlay" })
  ] }) }),
  /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "grow-ans", style: { animationDelay: "2.4s" }, children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "Flower__g-right Flower__g-right--1", children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "Leaf" }) }) }),
  /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "grow-ans", style: { animationDelay: "2.8s" }, children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "Flower__g-right Flower__g-right--2", children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "Leaf" }) }) }),
  /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "grow-ans", style: { animationDelay: "2.8s" }, children: /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "Flower__g-front", children: [
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "Flower__g-front__Leaf-wrapper Flower__g-front__Leaf-wrapper--1", children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "Flower__g-front__Leaf" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "Flower__g-front__Leaf-wrapper Flower__g-front__Leaf-wrapper--2", children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "Flower__g-front__Leaf" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "Flower__g-front__Leaf-wrapper Flower__g-front__Leaf-wrapper--3", children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "Flower__g-front__Leaf" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "Flower__g-front__Leaf-wrapper Flower__g-front__Leaf-wrapper--4", children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "Flower__g-front__Leaf" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "Flower__g-front__Leaf-wrapper Flower__g-front__Leaf-wrapper--5", children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "Flower__g-front__Leaf" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "Flower__g-front__Leaf-wrapper Flower__g-front__Leaf-wrapper--6", children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "Flower__g-front__Leaf" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "Flower__g-front__Leaf-wrapper Flower__g-front__Leaf-wrapper--7", children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "Flower__g-front__Leaf" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "Flower__g-front__Leaf-wrapper Flower__g-front__Leaf-wrapper--8", children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "Flower__g-front__Leaf" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "Flower__g-front__Line" })
  ] }) }),
  /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "grow-ans", style: { animationDelay: "3.2s" }, children: /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "Flower__g-fr", children: [
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "Leaf" }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "Flower__g-fr__Leaf Flower__g-fr__Leaf--1" }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "Flower__g-fr__Leaf Flower__g-fr__Leaf--2" }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "Flower__g-fr__Leaf Flower__g-fr__Leaf--3" }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "Flower__g-fr__Leaf Flower__g-fr__Leaf--4" }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "Flower__g-fr__Leaf Flower__g-fr__Leaf--5" }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "Flower__g-fr__Leaf Flower__g-fr__Leaf--6" }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "Flower__g-fr__Leaf Flower__g-fr__Leaf--7" }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "Flower__g-fr__Leaf Flower__g-fr__Leaf--8" })
  ] }) }),
  /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "long-g long-g--0", children: [
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "grow-ans", style: { animationDelay: "3s" }, children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "Leaf Leaf--0" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "grow-ans", style: { animationDelay: "2.2s" }, children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "Leaf Leaf--1" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "grow-ans", style: { animationDelay: "3.4s" }, children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "Leaf Leaf--2" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "grow-ans", style: { animationDelay: "3.6s" }, children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "Leaf Leaf--3" }) })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "long-g long-g--1", children: [
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "grow-ans", style: { animationDelay: "3.6s" }, children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "Leaf Leaf--0" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "grow-ans", style: { animationDelay: "3.8s" }, children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "Leaf Leaf--1" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "grow-ans", style: { animationDelay: "4s" }, children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "Leaf Leaf--2" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "grow-ans", style: { animationDelay: "4.2s" }, children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "Leaf Leaf--3" }) })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "long-g long-g--2", children: [
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "grow-ans", style: { animationDelay: "4s" }, children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "Leaf Leaf--0" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "grow-ans", style: { animationDelay: "4.2s" }, children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "Leaf Leaf--1" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "grow-ans", style: { animationDelay: "4.4s" }, children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "Leaf Leaf--2" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "grow-ans", style: { animationDelay: "4.6s" }, children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "Leaf Leaf--3" }) })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "long-g long-g--3", children: [
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "grow-ans", style: { animationDelay: "4s" }, children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "Leaf Leaf--0" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "grow-ans", style: { animationDelay: "4.2s" }, children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "Leaf Leaf--1" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "grow-ans", style: { animationDelay: "3s" }, children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "Leaf Leaf--2" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "grow-ans", style: { animationDelay: "3.6s" }, children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "Leaf Leaf--3" }) })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "long-g long-g--4", children: [
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "grow-ans", style: { animationDelay: "4s" }, children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "Leaf Leaf--0" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "grow-ans", style: { animationDelay: "4.2s" }, children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "Leaf Leaf--1" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "grow-ans", style: { animationDelay: "3s" }, children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "Leaf Leaf--2" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "grow-ans", style: { animationDelay: "3.6s" }, children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "Leaf Leaf--3" }) })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "long-g long-g--5", children: [
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "grow-ans", style: { animationDelay: "4s" }, children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "Leaf Leaf--0" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "grow-ans", style: { animationDelay: "4.2s" }, children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "Leaf Leaf--1" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "grow-ans", style: { animationDelay: "3s" }, children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "Leaf Leaf--2" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "grow-ans", style: { animationDelay: "3.6s" }, children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "Leaf Leaf--3" }) })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "long-g long-g--6", children: [
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "grow-ans", style: { animationDelay: "4.2s" }, children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "Leaf Leaf--0" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "grow-ans", style: { animationDelay: "4.4s" }, children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "Leaf Leaf--1" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "grow-ans", style: { animationDelay: "4.6s" }, children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "Leaf Leaf--2" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "grow-ans", style: { animationDelay: "4.8s" }, children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "Leaf Leaf--3" }) })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "long-g long-g--7", children: [
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "grow-ans", style: { animationDelay: "3s" }, children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "Leaf Leaf--0" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "grow-ans", style: { animationDelay: "3.2s" }, children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "Leaf Leaf--1" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "grow-ans", style: { animationDelay: "3.5s" }, children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "Leaf Leaf--2" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "grow-ans", style: { animationDelay: "3.6s" }, children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "Leaf Leaf--3" }) })
  ] })
] }) }) });

// app/root.tsx
var import_jsx_runtime12 = require("react/jsx-runtime"), links = () => [
  { rel: "stylesheet", href: tailwind_default },
  { rel: "stylesheet", href: ThemeButton_default2 },
  { rel: "stylesheet", href: NavBar_default2 },
  { rel: "stylesheet", href: global_default },
  { rel: "stylesheet", href: ErrorPage_default },
  {
    rel: "apple-touch-icon",
    sizes: "180x180",
    href: "/apple-touch-icon.png"
  },
  {
    rel: "icon",
    type: "image/png",
    sizes: "16x16",
    href: "/favicon-16x16.png"
  },
  {
    rel: "icon",
    type: "image/png",
    sizes: "32x32",
    href: "/favicon-32x32.png"
  },
  {
    rel: "manifest",
    href: "/site.webmanifest"
  }
], loader = async ({ request, params }) => ({
  theme: (await getThemeSession(request)).getTheme()
}), App = () => {
  let { theme } = (0, import_react5.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(ThemeContextProvider, { initialTheme: theme, children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(ModalContextProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(Document, { children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(Layout, { children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_react5.Outlet, {}) }) }) }) });
}, convertSupportedThemeToClassName = (theme, onBlogRoute) => theme === "light" /* LIGHT */ ? onBlogRoute ? "light-theme light-theme-blog" : "light-theme" : onBlogRoute ? "dark-theme dark-theme-blog" : "dark-theme", Document = (props) => {
  let { theme } = useTheme(), onBlogRoute = (0, import_react5.useLocation)().pathname.startsWith("/blog");
  return React4.useEffect(() => {
    document.body.classList.add("Background__ColorTransition--short");
  }, []), /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(
    "html",
    {
      lang: "en",
      className: `${convertSupportedThemeToClassName(theme, onBlogRoute)}`,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("head", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("meta", { charSet: "utf-8" }),
          /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
          /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("base", { href: "https://www.alissanguyen.com" }),
          /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_react5.Meta, {}),
          /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_react5.Links, {})
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("body", { id: "root", children: [
          /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
            "script",
            {
              async: !0,
              src: "https://platform.twitter.com/widgets.js"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("noscript", { children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
            "div",
            {
              style: {
                backgroundColor: "black",
                color: "white",
                padding: 30
              },
              children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("p", { style: { fontSize: "1.5em" }, children: "This site works much better with JavaScript enabled..." })
            }
          ) }),
          props.children,
          /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_react5.ScrollRestoration, { getKey: (location2, matches) => location2.key }),
          /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_react5.Scripts, {}),
          !1
        ] })
      ]
    }
  );
}, Layout = (props) => {
  let [navbarOpacity, setNavbarOpacity] = React4.useState(0);
  return React4.useEffect(() => {
    let handleScroll = () => {
      let scrollPosition = window.scrollY, newOpacity = Math.min(scrollPosition / 200, 0.2);
      setNavbarOpacity(newOpacity), localStorage.setItem("scrollPosition", scrollPosition.toString());
    }, savedScrollPosition = localStorage.getItem("scrollPosition");
    if (savedScrollPosition) {
      let scrollPosition = parseInt(savedScrollPosition);
      window.scrollTo(0, scrollPosition);
      let initialOpacity = Math.min(scrollPosition / 200, 0.2);
      setNavbarOpacity(initialOpacity);
    }
    return window.addEventListener("scroll", handleScroll), () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []), /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(import_jsx_runtime12.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(NavBar_default, { navbarOpacity }),
    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_react5.ScrollRestoration, { getKey: (location, matches) => (console.log(location.key), location.key) }),
    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "Document__Content screen-body", children: props.children }),
    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(Footer_default, {})
  ] });
};
function ErrorBoundary({ error }) {
  let location = (0, import_react5.useLocation)();
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("html", { lang: "en", className: "dark", children: [
    /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("meta", { charSet: "utf-8" }),
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_react5.Meta, {}),
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("title", { children: "Oh no..." }),
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_react5.Links, {})
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("body", { id: "root", children: [
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "app tracking-wide text-lg overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
        ErrorPage_default2,
        {
          error,
          heroMsg: "500 - Oh no, something did not go well.",
          pathname: location.pathname,
          subMsg: "is currently not working. So sorry."
        }
      ) }),
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_react5.Scripts, {}),
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(Footer_default, {})
    ] })
  ] });
}
var CatchBoundary = (props) => {
  let caught = (0, import_react5.useCatch)(), location = (0, import_react5.useLocation)();
  if (caught.status === 404)
    return /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("html", { lang: "en", children: [
      /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("head", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("meta", { charSet: "utf-8" }),
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_react5.Meta, {}),
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("title", { children: "404 - Oh no..." }),
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_react5.Links, {})
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("body", { id: "root", children: [
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("noscript", { children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
          "div",
          {
            style: {
              backgroundColor: "black",
              color: "white",
              padding: 30
            },
            children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("p", { style: { fontSize: "1.5em" }, children: "This site works much better with JavaScript enabled..." })
          }
        ) }),
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "app tracking-wide", children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
          ErrorPage_default2,
          {
            heroMsg: "404 - Oh no, you found a page that's missing stuff.",
            pathname: location.pathname,
            subMsg: "is not a page on alissanguyen.com. So sorry."
          }
        ) }),
        props.children
      ] })
    ] });
  throw new Error(`Unhandled error: ${caught.status}`);
}, root_default = App;

// app/routes/setTheme/index.tsx
var setTheme_exports = {};
__export(setTheme_exports, {
  action: () => action,
  loader: () => loader2
});
var import_node2 = require("@remix-run/node");
var action = async ({ request }) => {
  let themeSession = await getThemeSession(request), theme = (await request.formData()).get("theme");
  return isTheme(theme) ? (themeSession.setTheme(theme), new Response(void 0, {
    headers: {
      "Set-Cookie": await themeSession.commit()
    }
  })) : (0, import_node2.json)({
    success: !1,
    message: `theme value of ${theme} is not a valid theme`
  });
}, loader2 = async () => (0, import_node2.redirect)("/", { status: 404 });

// app/routes/resume/index.tsx
var resume_exports = {};
__export(resume_exports, {
  loader: () => loader3
});
var import_node3 = require("@remix-run/node"), loader3 = () => (0, import_node3.redirect)("/resume.pdf");

// app/routes/blog/$slug.tsx
var slug_exports = {};
__export(slug_exports, {
  default: () => slug_default,
  links: () => links6,
  loader: () => loader4,
  meta: () => meta
});
var import_react7 = require("@remix-run/react");

// app/contentful/contentfulClient.ts
var contentful = __toESM(require("contentful")), GLOBAL_CONTENTFUL_CLIENT = null, getGlobalContentfulClient = () => {
  if (!GLOBAL_CONTENTFUL_CLIENT) {
    let secretApiKey = process.env.CONTENTFUL_SECRET_API_KEY;
    if (!secretApiKey)
      throw new Error("Secret Contentful API Key not found.");
    GLOBAL_CONTENTFUL_CLIENT = contentful.createClient({
      space: "ms0r4bhnm3d4",
      accessToken: secretApiKey
    });
  }
  return GLOBAL_CONTENTFUL_CLIENT;
}, QUERY_ONLY_VISIBLE_IN_PRODUCTION = {
  "fields.isVisibleInProduction": !0
}, getContentfulBlogPostBySlug = async (slug) => {
  let queryResults = await getGlobalContentfulClient().getEntries({
    content_type: "blogPost",
    "fields.blogPostSlug": slug,
    limit: 1,
    ...QUERY_ONLY_VISIBLE_IN_PRODUCTION
  });
  if (queryResults.items.length <= 0)
    throw new Error("No blog post with that slug found :(");
  return queryResults.items[0];
}, getContentfulBlogPosts = async () => await getGlobalContentfulClient().getEntries({
  content_type: "blogPost",
  ...QUERY_ONLY_VISIBLE_IN_PRODUCTION,
  order: "-sys.updatedAt"
}), getContentfulTags = async () => await getGlobalContentfulClient().getTags().then((response) => response);

// app/routes/blog/$slug.tsx
var import_rich_text_react_renderer2 = require("@contentful/rich-text-react-renderer");

// app/contentful/defaultRichTextMarkdown.tsx
var import_react6 = __toESM(require("react")), import_rich_text_types2 = require("@contentful/rich-text-types");

// app/components/Contentful/EntryHyperLink/EntryHyperLink.tsx
var import_jsx_runtime13 = require("react/jsx-runtime"), EntryHyperLink = (props) => {
  let otherPostSlug = props.node.data.target.fields.blogPostSlug;
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
    "a",
    {
      className: "BlogPost__EntryHyperLink text-post-hyperlink underlined hover:text-post-hyperlinkHover italic",
      href: `/blog/${otherPostSlug}`,
      children: props.children
    }
  );
}, EntryHyperLink_default = EntryHyperLink;

// app/components/Contentful/HyperLink/HyperLink.tsx
var import_jsx_runtime14 = require("react/jsx-runtime"), HyperLink = (props) => {
  let { theme } = useTheme();
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
    "a",
    {
      href: props.url,
      className: `BlogPost__HyperLink font-medium ${theme === "light" /* LIGHT */ ? "text-blue-500 hover:text-black" : "text-cyan-400 hover:text-white"} ease-in duration-100`,
      children: props.children
    }
  );
}, HyperLink_default = HyperLink;

// app/components/Contentful/BlockQuote/BlockQuote.css
var BlockQuote_default = "/build/_assets/BlockQuote-LVUCWY5B.css";

// app/components/Contentful/BlockQuote/BlockQuote.tsx
var import_jsx_runtime15 = require("react/jsx-runtime"), links2 = () => [{ rel: "stylesheet", href: BlockQuote_default }], BlockQuote = (props) => /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("blockquote", { className: "BlogPostBlockQuote__Container p-8 mt-8 mb-12 mx-0 border-t-[1px] border-t-gray-300 flex flex-col", children: [
  /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("p", { className: "BlogPostBlockQuote__Description font-medium m-auto flex items-center justify-center text-post-quote w-2/3", children: props.quoteData.quoteDescription }),
  /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("p", { className: "BlogPostBlockQuote__Author italic text-xl text-post-quoteAuthor text-right mt-5", children: props.quoteData.author })
] }), BlockQuote_default2 = BlockQuote;

// app/components/Blog/BlogPostTags.tsx
var import_jsx_runtime16 = require("react/jsx-runtime"), tagIdsToDisplayNames = tags.reduce(
  (acc, cur) => (acc[cur.id] = cur.name, acc),
  {}
), BlogPostTags = (props) => {
  let blogPostTags = props.tags;
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { className: "PostCard__TagsWrapper pt-2 pb-4 w-full overflow-hidden", children: blogPostTags.map((tag) => {
    let title = tagIdsToDisplayNames[tag.sys.id];
    return /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(
      "span",
      {
        className: "PostCard__Tag inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-600 mr-2",
        children: [
          "#",
          title
        ]
      },
      tag.sys.id
    );
  }) });
}, BlogPostTags_default = BlogPostTags;

// app/components/Contentful/ImageMedia/ImageMedia.css
var ImageMedia_default = "/build/_assets/ImageMedia-6A4LWN2M.css";

// app/components/Contentful/ImageMedia/ImageMedia.tsx
var import_jsx_runtime17 = require("react/jsx-runtime"), links3 = () => [{ rel: "stylesheet", href: ImageMedia_default }], ImageMedia = (props) => /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: "BlogPost__ImageMedia__Container", children: [
  /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
    "img",
    {
      src: "https:" + props.src,
      alt: props.alt,
      title: props.alt,
      className: "BlogPost__ImageMedia m-auto flex",
      loading: "lazy"
    }
  ),
  props.description !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("em", { className: "BlogPost__ImageMedia__Description mx-8 my-2 italic flex text-center items-center justify-center text-base", children: props.description })
] }), ImageMedia_default2 = ImageMedia;

// app/components/Contentful/CodeBlock/CodeBlock.css
var CodeBlock_default = "/build/_assets/CodeBlock-PFVHMXOZ.css";

// app/components/Contentful/CodeBlock/CodeBlock.tsx
var import_prism_react_renderer = __toESM(require("prism-react-renderer")), import_github = __toESM(require("prism-react-renderer/themes/github")), import_vsDark = __toESM(require("prism-react-renderer/themes/vsDark"));
var import_jsx_runtime18 = require("react/jsx-runtime"), links4 = () => [{ rel: "stylesheet", href: CodeBlock_default }], CodeBlock = (props) => {
  let codeText = props.data.codeText, { theme } = useTheme(), language = props.data.language;
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { className: "CodeBlock__Wrapper rounded-lg mt-3 mb-6", children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
    import_prism_react_renderer.default,
    {
      ...import_prism_react_renderer.defaultProps,
      theme: theme === "light" /* LIGHT */ ? import_github.default : import_vsDark.default,
      code: codeText,
      language,
      children: ({ className, tokens, getLineProps, getTokenProps }) => /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { className: "CodeBlock", children: [
        props.data.fileName !== void 0 ? /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { className: "CodeBlock__FileName__Container w-full rounded-t-lg", children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("p", { className: "CodeBlock__FileName text-center", children: props.data.fileName }) }) : null,
        /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
          "pre",
          {
            className: `${className} CodeBlock__InnerContainer overflow-x-auto roundedLg p-4 ${props.data.fileName ? "pt-2" : ""}
                `,
            children: tokens.map((line, i) => {
              let { classname, ...restProps } = getLineProps({
                line,
                key: i
              });
              return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(import_jsx_runtime18.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)(
                "div",
                {
                  ...restProps,
                  className: `${className} LineNo__${i + 1} grid CodeBlock__LineWrapper relative ${props.data.shouldDisplayLineNumber ? "gap-10" : ""} breakWord whitespace-preWrap`,
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
                      "span",
                      {
                        className: `CodeBlock__LineNo pl-1 ${props.data.shouldDisplayLineNumber ? "visible" : "invisible"}`,
                        style: { position: "sticky" },
                        children: i + 1
                      }
                    ) }),
                    /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { className: "", children: line.map((token, key) => {
                      let { className: className2, ...restProps2 } = getTokenProps({
                        token,
                        key
                      });
                      return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(import_jsx_runtime18.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
                        "span",
                        {
                          ...restProps2,
                          className: `${className2} CodeBlock__Token--smol-tab`
                        },
                        key
                      ) });
                    }) })
                  ]
                },
                i
              ) });
            })
          }
        )
      ] })
    }
  ) });
}, CodeBlock_default2 = CodeBlock;

// app/components/Contentful/Heading/HeadingFive.tsx
var import_jsx_runtime19 = require("react/jsx-runtime"), HeadingFive = (props) => /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
  "h6",
  {
    className: "BlogPost__HeadingFive text-xl custom2:text-2xl text-post-bodyTextLg mt-2 mb-1 font-medium",
    children: props.children
  }
), HeadingFive_default = HeadingFive;

// app/components/Contentful/Heading/HeadingOne.tsx
var import_jsx_runtime20 = require("react/jsx-runtime"), HeadingOne = (props) => {
  let { theme } = useTheme();
  return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
    "h2",
    {
      className: `BlogPost__HeadingOne text-4xl xs:text-5xl custom2:text-6xl mb-5 mt-5 font-medium ${theme === "light" /* LIGHT */ ? "text-emerald-500" : "text-teal-400"}`,
      children: props.children
    }
  );
}, HeadingOne_default = HeadingOne;

// app/components/Contentful/Heading/HeadingTwo.tsx
var import_jsx_runtime21 = require("react/jsx-runtime"), HeadingTwo = (props) => /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("h3", { className: "BlogPost__HeadingTwo text-3xl xs:text-4xl custom2:text-[2.5rem] mt-8 mb-5 text-post-bodyTextLg", children: props.children }), HeadingTwo_default = HeadingTwo;

// app/components/Contentful/Heading/HeadingThree.tsx
var import_jsx_runtime22 = require("react/jsx-runtime"), HeadingThree = (props) => {
  let { theme } = useTheme();
  return /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
    "h4",
    {
      className: `BlogPost__HeadingThree text-2xl font-medium xs:font-normal xs:text-3xl custom2:text-4xl leading-10 mb-5 mt-10 ${theme === "light" /* LIGHT */ ? "text-sky-600" : "text-sky-400"}`,
      children: props.children
    }
  );
}, HeadingThree_default = HeadingThree;

// app/components/Contentful/Heading/HeadingFour.tsx
var import_jsx_runtime23 = require("react/jsx-runtime"), HeadingFour = (props) => {
  let { theme } = useTheme();
  return /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
    "h5",
    {
      className: `BlogPost__HeadingFour text-2xl xs:text-3xl mt-10 ${theme === "light" /* LIGHT */ ? "text-purple-500" : "text-fuchsia-400"} font-medium`,
      children: props.children
    }
  );
}, HeadingFour_default = HeadingFour;

// app/components/Contentful/Heading/HeadingSix.tsx
var import_jsx_runtime24 = require("react/jsx-runtime"), HeadingSix = (props) => /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("p", { className: "font-bold text-xl mb-5 mt-10 xs:font-medium", children: props.children }), HeadingSix_default = HeadingSix;

// app/components/Contentful/StickyNote/StickyNote.tsx
var import_rich_text_react_renderer = require("@contentful/rich-text-react-renderer");

// app/contentful/richTextMarkdownForStickies.tsx
var import_rich_text_types = require("@contentful/rich-text-types");

// app/contentful/contentfulUtils.tsx
var import_jsx_runtime25 = require("react/jsx-runtime"), highlightedTextMatcher = /\((.+)\)(?=\[(\w+)\])/, addColour = (children = []) => children === null ? children : children.flatMap((child) => {
  if (typeof child == "string") {
    let matches = child.match(highlightedTextMatcher);
    if (matches)
      return createSpanFromMatches(matches, child);
  }
  if (typeof child == "object") {
    let element = child, content = element.props.children, className = element.props.className, stringMatches = typeof content == "string" && content.match(highlightedTextMatcher);
    if (content && content.props && typeof content.props.children == "string") {
      let textContent = content.props.children, objectChildMatches = textContent.match(highlightedTextMatcher);
      if (objectChildMatches)
        return createSpanFromMatches(objectChildMatches, textContent, {
          className
        });
    }
    if (stringMatches)
      return createSpanFromMatches(stringMatches, content, { className });
  }
  return child;
}), createSpanFromMatches = (matches, text, restProps = {}) => {
  let content = text.split(`${matches[0]}[${matches[2]}]`);
  return [
    content[0],
    /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
      "span",
      {
        ...restProps,
        style: {
          color: "#000000",
          backgroundColor: `${matches[2] !== void 0 && contentfulHighlights[matches[2]]}`
        },
        children: matches[1]
      },
      matches[1]
    ),
    content[1]
  ];
}, contentfulHighlights = {
  blue: "var(--blue)" /* BLUE */,
  yellow: "var(--yellow)" /* YELLOW */,
  green: "var(--green)" /* GREEN */,
  red: "var(--red)" /* RED */,
  orange: "var(--orange)" /* ORANGE */,
  pink: "var(--pink)" /* PINK */,
  purple: "var(--purple)" /* PURPLE */
};

// app/components/Contentful/Illustration/Illustration.tsx
var import_jsx_runtime26 = require("react/jsx-runtime"), Illustration = (props) => {
  let { theme } = useTheme(), lightModeIllustrationImageSrc = "https://" + props.rawData.lightIllustration.fields.file.url.split("//")[1], darkModeIllustrationImageSrc = "https://" + props.rawData.darkIllustration.fields.file.url.split("//")[1], imageSrc = theme === "dark" /* DARK */ ? darkModeIllustrationImageSrc : lightModeIllustrationImageSrc, padding = props.location === "inside sticky" ? "pt-3 pb-2" : "";
  return /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("div", { className: `Illustration__Container rounded-lg ${padding}`, children: /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("a", { href: imageSrc, target: "_blank", children: /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
    "img",
    {
      title: "Illustration for " + props.rawData.illustrationName,
      src: imageSrc,
      alt: "Illustration for " + props.rawData.illustrationName,
      className: "Illustration__Image rounded-lg p-4",
      style: {
        backgroundColor: `${theme === "light" /* LIGHT */ ? "#ffffff" : "#212529"}`
      }
    }
  ) }) });
}, Illustration_default = Illustration;

// app/contentful/richTextMarkdownForStickies.tsx
var import_jsx_runtime27 = require("react/jsx-runtime"), stickyOptions = {
  renderMark: {
    [import_rich_text_types.MARKS.BOLD]: (text) => {
      let { theme } = useTheme();
      return /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
        "span",
        {
          className: `bold font-bold opacity-90 ${theme === "light" /* LIGHT */ ? "text-black" : "text-white"}`,
          children: addColour([text])
        }
      );
    },
    [import_rich_text_types.MARKS.ITALIC]: (text) => /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("span", { className: "italic", children: text }),
    [import_rich_text_types.MARKS.UNDERLINE]: (text) => /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("span", { className: "custom-underline", children: text }),
    [import_rich_text_types.MARKS.CODE]: (children) => /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("code", { className: "BlogPost__Paragraph__Code inline-flex font-medium", children })
  },
  renderNode: {
    [import_rich_text_types.INLINES.HYPERLINK]: (node, children) => {
      let { theme } = useTheme();
      return /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
        "a",
        {
          className: `BlogPost__HyperLink ${theme === "dark" /* DARK */ ? "text-cyan-200 hover:text-white" : "text-cyan-700 hover:text-black"}`,
          href: node.data.uri,
          children
        }
      );
    },
    [import_rich_text_types.INLINES.ENTRY_HYPERLINK]: (node, children) => /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(EntryHyperLink_default, { node, children }),
    [import_rich_text_types.BLOCKS.DOCUMENT]: (node, children) => /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(import_jsx_runtime27.Fragment, { children }),
    [import_rich_text_types.BLOCKS.PARAGRAPH]: (node, children) => (
      // There's an error in the types for @contentful/rich-text-react-renderer, type cast as necessary. $$TODO: File an issue to contentful for this issue, potentially fix it too.
      /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("p", { className: "Sticky__Paragraph", children: addColour(children) })
    ),
    [import_rich_text_types.BLOCKS.HEADING_3]: (node, children) => /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(HeadingThree_default, { children }),
    [import_rich_text_types.BLOCKS.HEADING_4]: (node, children) => /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(HeadingFour_default, { children }),
    [import_rich_text_types.BLOCKS.HEADING_5]: (node, children) => /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(HeadingFive_default, { children }),
    [import_rich_text_types.BLOCKS.HEADING_6]: (node, children) => /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(HeadingSix_default, { children }),
    [import_rich_text_types.BLOCKS.OL_LIST]: (node, children) => /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("ol", { className: "list-decimal", children }),
    [import_rich_text_types.BLOCKS.UL_LIST]: (node, children) => /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("ul", { className: "list-disc", children }),
    [import_rich_text_types.BLOCKS.LIST_ITEM]: (node, children) => /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("li", { className: "list-item text-lg leading-8 ml-10", children }),
    [import_rich_text_types.BLOCKS.HR]: (node) => /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { className: "spacer-div h-7" }),
    [import_rich_text_types.BLOCKS.EMBEDDED_ENTRY]: (node, children) => {
      switch (node.data.target.sys.contentType.sys.id) {
        case "illustration":
          let illustrationData = node.data.target.fields;
          return /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(Illustration_default, { rawData: illustrationData, location: "inside sticky" });
        default:
          return /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("p", { className: "text-rose-500", children: "Error loading asset entry" });
      }
    },
    [import_rich_text_types.BLOCKS.EMBEDDED_ASSET]: (node, children) => {
      let assetType = node.data.target.fields.file.contentType, maybeDescription = node.data.target.fields.description;
      return /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
        ImageMedia_default2,
        {
          src: node.data.target.fields.file.url,
          alt: node.data.target.fields.description,
          description: maybeDescription || void 0
        }
      );
    },
    // TODO: Add table styling
    [import_rich_text_types.BLOCKS.TABLE]: (node, children) => /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { children }),
    [import_rich_text_types.BLOCKS.TABLE_ROW]: (node, children) => /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { children }),
    [import_rich_text_types.BLOCKS.TABLE_CELL]: (node, children) => /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { children }),
    [import_rich_text_types.BLOCKS.TABLE_HEADER_CELL]: (node, children) => /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { children })
  }
};

// app/components/Contentful/StickyNote/StickyNote.tsx
var import_jsx_runtime28 = require("react/jsx-runtime"), StickyNote = (props) => {
  let stickyColorCode = props.stickyData.stickyColor, stickyBgColor = contentfulStickyBackgrounds[stickyColorCode], stickyBorderColor = contentfulStickyBorders[stickyColorCode], body = (0, import_rich_text_react_renderer.documentToReactComponents)(
    props.stickyData.stickyBodyRichText,
    stickyOptions
  );
  return /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)(
    "div",
    {
      className: "Sticky__Container mt-4 px-5 pt-2 pb-3 rounded-r-xl",
      style: {
        borderLeft: `solid 6px ${stickyBorderColor}`,
        backgroundColor: `${stickyBgColor}`,
        color: `${stickyBorderColor}`
      },
      children: [
        props.stickyData.shouldDisplayTitle ? /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("p", { className: "Sticky__Title font-extrabold tracking-wide mb-1", children: props.stickyData.stickyTitle }) : null,
        /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("div", { className: "Sticky__Body font-medium", children: body })
      ]
    }
  );
}, StickyNote_default = StickyNote, contentfulStickyBackgrounds = {
  yellow: "var(--sticky-yellow-bg)" /* YELLOW */,
  blue: "rgba(75, 150, 255, 0.1)" /* BLUE */,
  pink: "rgb(255, 69, 140, 0.1)" /* PINK */,
  green: "var(--sticky-green-bg)" /* GREEN */,
  orange: "var(--sticky-orange-bg)" /* ORANGE */,
  purple: "rgb(196, 69, 255, 0.1)" /* PURPLE */,
  red: "rgba(255, 69, 69, 0.1)" /* RED */
}, contentfulStickyBorders = {
  yellow: "var(--sticky-yellow-border)" /* YELLOW */,
  blue: "rgba(75, 150, 255, 1)" /* BLUE */,
  pink: "rgb(255, 81, 148)" /* PINK */,
  green: "var(--sticky-green-border)" /* GREEN */,
  orange: "var(--sticky-orange-border)" /* ORANGE */,
  purple: "rgb(203, 89, 255)" /* PURPLE */,
  red: "rgb(255, 69, 69)" /* RED */
};

// app/contentful/defaultRichTextMarkdown.tsx
var import_jsx_runtime29 = require("react/jsx-runtime"), options = {
  renderMark: {
    [import_rich_text_types2.MARKS.BOLD]: (text) => /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("span", { className: "bold font-bold text-post-bodyTextLg", children: addColour([text]) }),
    [import_rich_text_types2.MARKS.ITALIC]: (text) => /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("span", { className: "italic text-post-bodyTextLg", children: text }),
    [import_rich_text_types2.MARKS.UNDERLINE]: (text) => {
      let [className, setClassName] = import_react6.default.useState("");
      function randomUnderlinedColor() {
        let underlinedColorClassNames = [
          "custom-underline--yellow",
          "custom-underline--green",
          "custom-underline--red"
        ], randomColor = underlinedColorClassNames[Math.floor(Math.random() * underlinedColorClassNames.length)];
        setClassName(
          randomColor !== void 0 ? randomColor : "custom-underline--yellow"
        );
      }
      return import_react6.default.useEffect(() => randomUnderlinedColor(), [className]), /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("span", { className: `custom-underline text-post-bodyTextLg ${className}`, children: text });
    },
    [import_rich_text_types2.MARKS.CODE]: (children) => /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("code", { className: "BlogPost__Paragraph__Code inline-flex font-medium", children })
  },
  renderNode: {
    [import_rich_text_types2.INLINES.HYPERLINK]: (node, children) => /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(HyperLink_default, { url: node.data.uri, children }),
    [import_rich_text_types2.INLINES.ENTRY_HYPERLINK]: (node, children) => /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(EntryHyperLink_default, { node, children }),
    [import_rich_text_types2.BLOCKS.DOCUMENT]: (node, children) => /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(import_jsx_runtime29.Fragment, { children }),
    [import_rich_text_types2.BLOCKS.PARAGRAPH]: (node, children) => (
      // There's an error in the types for @contentful/rich-text-react-renderer, type cast as necessary. $$TODO: File an issue to contentful for this issue, potentially fix it too.
      /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("p", { className: "BlogPost__Paragraph text-lg relative z-10", children: addColour(children) })
    ),
    [import_rich_text_types2.BLOCKS.HEADING_1]: (node, children) => /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(HeadingOne_default, { children }),
    [import_rich_text_types2.BLOCKS.HEADING_2]: (node, children) => /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(HeadingTwo_default, { children }),
    [import_rich_text_types2.BLOCKS.HEADING_3]: (node, children) => /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(HeadingThree_default, { children }),
    [import_rich_text_types2.BLOCKS.HEADING_4]: (node, children) => /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(HeadingFour_default, { children }),
    [import_rich_text_types2.BLOCKS.HEADING_5]: (node, children) => /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(HeadingFive_default, { children }),
    [import_rich_text_types2.BLOCKS.HEADING_6]: (node, children) => /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(HeadingSix_default, { children }),
    [import_rich_text_types2.BLOCKS.OL_LIST]: (node, children) => /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("ol", { className: "ml-12 mb-8 list-decimal", children }),
    [import_rich_text_types2.BLOCKS.UL_LIST]: (node, children) => /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("ul", { className: "list-disc ml-10", children }),
    [import_rich_text_types2.BLOCKS.LIST_ITEM]: (node, children) => /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("li", { className: "List__Item text-xl list-item leading-8", children }),
    [import_rich_text_types2.BLOCKS.HR]: (node) => /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("div", { className: "spacer-div h-7" }),
    [import_rich_text_types2.BLOCKS.QUOTE]: (node, children) => /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("blockquote", { children }),
    [import_rich_text_types2.BLOCKS.EMBEDDED_ENTRY]: (node, children) => {
      switch (node.data.target.sys.contentType.sys.id) {
        case "quote":
          let quoteData = node.data.target.fields;
          return /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(BlockQuote_default2, { quoteData });
        case "table":
          let tableData = node.data.target.fields;
          return /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
            "div",
            {
              className: "table-container text-lg mt-5 mb-10 text-left mx-auto w-full",
              dangerouslySetInnerHTML: { __html: tableData.tableMarkdown }
            }
          );
        case "illustration":
          let illustrationData = node.data.target.fields;
          return /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
            Illustration_default,
            {
              rawData: illustrationData,
              location: "outside sticky"
            }
          );
        case "rawVideoHtml":
          let videoMarkup = node.data.target.fields.rawHtmlMarkup;
          return /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("div", { dangerouslySetInnerHTML: { __html: videoMarkup } });
        case "blogPost":
          let post = node.data.target.fields, tags2 = node.data.target.metadata.tags;
          return /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)(
            "a",
            {
              href: `/blog/${post.blogPostSlug}`,
              className: "flex flex-col custom2:flex-row w-full EmbeddedEntry_BlogPost_Card mt-4 px-5 pt-5 custom2:p-5 rounded-lg",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
                  "img",
                  {
                    src: post.blogPostSplash.fields.file.url,
                    alt: post.blogPostSplash.fields.title,
                    title: post.blogPostSplash.fields.title,
                    className: "object-cover w-full mb-2 custom2:mb-0 custom2:max-w-[240px] custom2:mr-5 rounded-lg"
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("div", { className: "flex flex-col items-baseline justify-between", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("span", { className: "text-xl mb-2 text-blog-lgText font-bold", children: post.blogPostTitle }),
                  /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("p", { className: "text-base text-gray-400", children: post.blogPostExcerpt }),
                  /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(BlogPostTags_default, { tags: tags2 })
                ] })
              ]
            },
            post.blogPostSlug
          );
        case "codeBlock":
          let codeBlockData = node.data.target.fields;
          return /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(CodeBlock_default2, { data: codeBlockData });
        case "stickyNote":
          let noteData = node.data.target.fields;
          return /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(StickyNote_default, { stickyData: noteData });
        case "gif":
          let gifData = node.data.target.fields;
          return /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("div", { dangerouslySetInnerHTML: { __html: gifData.gifMarkup } });
        case "codeSandbox":
          let sandboxData = node.data.target.fields;
          return /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("div", { className: "BlogPost__SandBox__Container mt-5", children: /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
            "div",
            {
              dangerouslySetInnerHTML: { __html: sandboxData.rawMarkup }
            }
          ) });
        default:
          return /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("p", { className: "text-base text-rose-500", children: "Error loading asset entry" });
      }
    },
    [import_rich_text_types2.BLOCKS.EMBEDDED_ASSET]: (node, children) => {
      let assetType = node.data.target.fields.file.contentType, maybeDescription = node.data.target.fields.description;
      switch (assetType) {
        case "video/mp4":
          return /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("video", { width: "100%", height: "100%", controls: !0, children: /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("source", { src: node.data.target.fields.file.url, type: "video/mp4" }) });
        case "image/jpeg":
        case "image/svg+xml":
        case "image/gif":
        case "image/png":
          return /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
            ImageMedia_default2,
            {
              src: node.data.target.fields.file.url,
              alt: node.data.target.fields.title,
              description: maybeDescription || void 0
            }
          );
        default:
          return /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
            ImageMedia_default2,
            {
              src: node.data.target.fields.file.url,
              alt: node.data.target.fields.title,
              description: maybeDescription || void 0
            }
          );
      }
    },
    [import_rich_text_types2.BLOCKS.TABLE]: (node, children) => /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("table", { children: /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("tbody", { children }) }),
    [import_rich_text_types2.BLOCKS.TABLE_ROW]: (node, children) => /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("tr", { children }),
    [import_rich_text_types2.BLOCKS.TABLE_CELL]: (node, children) => /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("td", { children }),
    [import_rich_text_types2.BLOCKS.TABLE_HEADER_CELL]: (node, children) => /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("thead", { children })
  }
};

// app/styles/blogpost.css
var blogpost_default = "/build/_assets/blogpost-WKTKUZLY.css";

// app/components/BlogPost/AuthorSection/AuthorSection.tsx
var import_solid = require("@heroicons/react/solid");
var import_jsx_runtime30 = require("react/jsx-runtime"), AuthorSection = ({}) => {
  let { theme } = useTheme(), borderColor = theme === "light" /* LIGHT */ ? "border-gray-400" : "border-gray-200";
  return /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)(
    "div",
    {
      className: `BlogPost__AuthorSection__Container border-t-2 ${borderColor} flex m-auto flex-col items-center justify-center sm:grid-cols-4 sm:gap-10 py-10`,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
          "img",
          {
            src: "/images/author.jpg",
            alt: "My portrait picture",
            className: "BlogPost__AuthorSection__AuthorAvatar rounded-full mb-7 sm:mb-0 w-56",
            title: "My portrait picture"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)("div", { className: "BlogPost__AuthorSection__Biography flex flex-col items-start justify-start sm:col-span-3", children: [
          /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("p", { className: "font-medium text-2xl mb-4 xs:mb-2 text-post-bodyTextLg", children: "Written by Alissa Nguyen" }),
          /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
            "a",
            {
              href: "https://twitter.com/ai_alissa?ref_src=twsrc%5Etfw",
              className: "twitter-follow-button",
              "data-size": "large",
              "aria-label": "Follow me on Twitter",
              "data-show-screen-name": "false",
              "data-show-count": "false",
              children: "Follow"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("p", { className: "text-lg mt-7", children: "Alissa Nguyen is a software engineer with main focus is on building better software with latest technologies and frameworks such as Remix, React, and TailwindCSS. She is currently working on some side projects, exploring her hobbies, and living with her two kitties." }),
          /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)(
            "a",
            {
              href: "/",
              className: "mt-7 inline-flex items-center justify-start text-post-bodyTextLg",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("p", { className: "text-xl mr-5", children: "Learn more about me" }),
                /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(import_solid.ArrowRightIcon, { className: "h-10 mr-4 rounded-full border-2 p-2 hover:border-gray-700 transition-all duration-120" })
              ]
            }
          )
        ] })
      ]
    }
  );
}, AuthorSection_default = AuthorSection;

// app/api/getPostsAndTags.ts
var getPostsAndTags = async () => {
  let [blogPosts, contentfulTags] = await Promise.all([
    getContentfulBlogPosts(),
    getContentfulTags()
  ]);
  return { blogPosts, contentfulTags };
};

// app/components/BlogPost/RelatedPostsSection/RelatedPostCard.tsx
var import_jsx_runtime31 = require("react/jsx-runtime"), RelatedPostCard = (props) => {
  let rawDateData = new Date(props.post.sys.updatedAt).toDateString(), date = rawDateData.substring(rawDateData.indexOf(" ") + 1), tags2 = props.post.metadata.tags;
  return /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)("div", { className: "RelatedBlogPost__Card__Container", children: [
    /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(
      "a",
      {
        href: `/blog/${props.post.fields.blogPostSlug}`,
        className: "RelatedBlogPost__Link__Container h-full rounded-lg",
        children: /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(
          "img",
          {
            src: props.post.fields.blogPostSplash.fields.file.url,
            alt: props.post.fields.blogPostSplash.fields.title,
            title: props.post.fields.blogPostSplash.fields.title,
            className: "RelatedBlogPost__Image rounded-lg w-full h-80",
            loading: "lazy"
          }
        )
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)("div", { className: "flex flex-col", children: [
      /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)("span", { className: "inline-flex text-xl md:text-2xl text-gray-400 font-bold mt-2 mb-3", children: [
        date,
        " \u2014 5 min read"
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("span", { className: "RelatedBlogPost__Title text-blog-lgText font-bold text-2xl md:text-3xl", children: props.post.fields.blogPostTitle }),
      /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(BlogPostTags_default, { tags: tags2 }) })
    ] })
  ] });
}, RelatedPostCard_default = RelatedPostCard;

// app/components/BlogPost/RelatedPostsSection/RelatedPostsSection.tsx
var import_jsx_runtime32 = require("react/jsx-runtime"), RelatedPostsSection = (props) => /* @__PURE__ */ (0, import_jsx_runtime32.jsxs)(
  "div",
  {
    className: `${fixedWidthLayoutClasses} max-w-[1000px] pt-20 pb-20 sm:pb-32 lg:pb-44`,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime32.jsxs)("div", { className: "flex flex-col items-start justify-center text-3xl mb-10", children: [
        /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("p", { className: "text-post-bodyTextLg text-5xl font-medium mb-5", children: "If you found this article helpful." }),
        /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("p", { className: "text-post-bodyText text-4xl", children: "You will love these ones as well." })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("div", { className: "RelatedBlogPosts__Wrapper grid gap-10 sm:gap-y-20 md:grid-cols-2 lg:grid-cols-3 list-none", children: props.relatedPosts.map((post) => /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(
        "li",
        {
          className: "RelatedBlogPost__Container",
          children: /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(RelatedPostCard_default, { post })
        },
        post.sys.id ? post.sys.id : post.fields.blogPostTitle
      )) })
    ]
  }
), RelatedPostsSection_default = RelatedPostsSection;

// app/components/FloatingHeader/FloatingHeader.css
var FloatingHeader_default = "/build/_assets/FloatingHeader-DCGFU27K.css";

// app/components/FloatingHeader/FloatingHeader.tsx
var React6 = __toESM(require("react"));

// app/components/FloatingHeader/ShareSection.tsx
var import_jsx_runtime33 = require("react/jsx-runtime"), ShareSection = (props) => {
  let twitterShareHref = `https://twitter.com/intent/tweet?hashtags=programming%2Cblog&original_referer=https%3A%2F%2Fwww.alissanguyen.com%2F&related=alissa_nguyen14&text=${`I just read ${props.title} by @alissa_nguyen14

`}%0A%0A&url=https%3A%2F%2Fwww.alissanguyen.com%2Fblog%2F${props.slug}%2F`, facebookShareHref = "https://www.facebook.com/sharer/sharer.php?u=https://www.alissanguyen.com/blog/" + props.slug, linkedinShareHref = "https://www.linkedin.com/shareArticle?mini=true&url=https://www.alissanguyen.com/blog/" + props.slug + "&title=" + props.title;
  return /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("div", { className: "floating-header-share", children: [
    /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("div", { className: "floating-header-share-label hidden custom:flex mr-2 font-medium items-center text-post-bodyTextLg", children: "Share this" }),
    /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        className: "ionicon inline-flex items-center h-6 mr-3 mt-1 text-post-bodyTextLg",
        viewBox: "0 0 512 512",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
            "circle",
            {
              cx: "128",
              cy: "256",
              r: "48",
              fill: "none",
              stroke: "currentColor",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: "32"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
            "circle",
            {
              cx: "384",
              cy: "112",
              r: "48",
              fill: "none",
              stroke: "currentColor",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: "32"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
            "circle",
            {
              cx: "384",
              cy: "400",
              r: "48",
              fill: "none",
              stroke: "currentColor",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: "32"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
            "path",
            {
              fill: "none",
              stroke: "currentColor",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: "32",
              d: "M169.83 279.53l172.34 96.94M342.17 135.53l-172.34 96.94"
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
      "a",
      {
        className: "floating-header-share-tw",
        href: twitterShareHref,
        target: "_blank",
        children: /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 32 32",
            className: "floating-header-share-svg",
            children: /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("path", { d: "M30.063 7.313c-.813 1.125-1.75 2.125-2.875 2.938v.75c0 1.563-.188 3.125-.688 4.625a15.088 15.088 0 0 1-2.063 4.438c-.875 1.438-2 2.688-3.25 3.813a15.015 15.015 0 0 1-4.625 2.563c-1.813.688-3.75 1-5.75 1-3.25 0-6.188-.875-8.875-2.625.438.063.875.125 1.375.125 2.688 0 5.063-.875 7.188-2.5-1.25 0-2.375-.375-3.375-1.125s-1.688-1.688-2.063-2.875c.438.063.813.125 1.125.125.5 0 1-.063 1.5-.25-1.313-.25-2.438-.938-3.313-1.938a5.673 5.673 0 0 1-1.313-3.688v-.063c.813.438 1.688.688 2.625.688a5.228 5.228 0 0 1-1.875-2c-.5-.875-.688-1.813-.688-2.75 0-1.063.25-2.063.75-2.938 1.438 1.75 3.188 3.188 5.25 4.25s4.313 1.688 6.688 1.813a5.579 5.579 0 0 1 1.5-5.438c1.125-1.125 2.5-1.688 4.125-1.688s3.063.625 4.188 1.813a11.48 11.48 0 0 0 3.688-1.375c-.438 1.375-1.313 2.438-2.563 3.188 1.125-.125 2.188-.438 3.313-.875z" })
          }
        )
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
      "a",
      {
        className: "floating-header-share-fb",
        href: facebookShareHref,
        target: "_blank",
        rel: "nofollow",
        "data-size": "large",
        children: /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 32 32",
            className: "floating-header-share-svg",
            children: /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("path", { d: "M19 6h5V0h-5c-3.86 0-7 3.14-7 7v3H8v6h4v16h6V16h5l1-6h-6V7c0-.542.458-1 1-1z" })
          }
        )
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
      "a",
      {
        className: "floating-header-share-linkedin",
        href: linkedinShareHref,
        target: "_blank",
        rel: "noopener noreferrer",
        children: /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            className: "floating-header-share-svg",
            children: /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("path", { d: "M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" })
          }
        )
      }
    )
  ] });
}, ShareSection_default = ShareSection;

// app/components/FloatingHeader/ProgressBar.tsx
var import_jsx_runtime34 = require("react/jsx-runtime"), ProgressBar = ({ progress }) => /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(
  "div",
  {
    className: "scroll-line",
    style: {
      width: `${progress}%`
    },
    id: "scroll-line"
  }
), ProgressBar_default = ProgressBar;

// app/components/FloatingHeader/FloatingHeader.tsx
var import_bs = require("react-icons/bs");
var import_jsx_runtime35 = require("react/jsx-runtime"), links5 = () => [{ rel: "stylesheet", href: FloatingHeader_default }], FloatingHeader = (props) => {
  let [shouldShowFloatingHeader, setShouldShowFloatingHeader] = React6.useState(!1), [progress, setProgress] = React6.useState(0);
  function fillScrollLine() {
    requestAnimationFrame(() => {
      let windowHeight = window.innerHeight, fullHeight = document.body.clientHeight, navBar = document.getElementById(NAVBAR_ID);
      if (navBar) {
        let navbarContainerHeight = navBar.clientHeight, scrolled = window.scrollY, percentScrolled = scrolled / (fullHeight - windowHeight) * 100;
        setProgress(percentScrolled), setShouldShowFloatingHeader(
          calculateShouldShowFloatingHeader(scrolled, navbarContainerHeight)
        );
      }
    });
  }
  return React6.useEffect(() => (fillScrollLine(), window.addEventListener("scroll", fillScrollLine), () => {
    window.removeEventListener("scroll", fillScrollLine);
  }), []), /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)(
    "div",
    {
      className: `floating-header text-xl ${shouldShowFloatingHeader ? "floating-active" : ""}`,
      id: "Floating__Header",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("div", { className: "floating-header-logo font-medium ml-4 text-post-bodyTextLg", children: /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)("a", { href: "https://www.alissanguyen.com/blog", children: [
          /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("span", { className: "hidden xs:flex", children: "Alissa Nguyen's Blog" }),
          /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)("div", { className: "FloatingHeader__GoBackButton inline-flex items-center justify-center xs:hidden font-normal pl-2", children: [
            /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(import_bs.BsFillArrowLeftCircleFill, { className: "FloatingHeader__GoBackArrowSVG w-5 mr-2" }),
            /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("span", { className: "FloatingHeader__GoBackLabel text-lg pb-1", children: "Back" })
          ] })
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("span", { className: "floating-header-divider text-post-bodyTextLg", children: "\u2014" }),
        /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("div", { className: "floating-header-title font-medium", children: props.postTitle }),
        /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(ProgressBar_default, { progress }),
        /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(SimplifiedThemeButton, {}),
        /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(ShareSection_default, { title: props.postTitle, slug: props.postSlug })
      ]
    }
  );
}, calculateShouldShowFloatingHeader = (amountScrolledInPixels, containerHeightInPixels) => amountScrolledInPixels >= containerHeightInPixels, FloatingHeader_default2 = FloatingHeader;

// app/routes/blog/$slug.tsx
var import_jsx_runtime36 = require("react/jsx-runtime"), links6 = () => [
  {
    rel: "stylesheet",
    href: blogpost_default
  },
  ...links2(),
  ...links3(),
  ...links4(),
  ...links5()
], meta = ({ data, location }) => {
  try {
    let dataWithType = data, { blogPost } = dataWithType, imageURl = "https:" + blogPost.fields.blogPostSplash.fields.file.url, webURL = "https://www.alissanguyen.com" + location.pathname, description = blogPost.fields.blogPostExcerpt.slice(0, 160) + "... ", title = blogPost.fields.blogPostTitle, keywords = blogPost.fields.blogPostKeywords + ", Alissa Nguyen, AlissaNguyen, FrontEnd Engineer", publishedDate = blogPost.sys.createdAt, updatedDate = blogPost.sys.updatedAt;
    return {
      title: blogPost.fields.blogPostTitle,
      keywords,
      image: imageURl,
      description,
      "og:url": webURL,
      "og:image": imageURl,
      "og:title": title,
      "og:site_name": "Alissa Nguyen's Blog",
      "og:type": "article",
      "og:description": description,
      "article:published_time": publishedDate,
      "article:modified_time": updatedDate,
      "article:publisher": TWITTER_PUBLISHER,
      "twitter:card": TWITTER_CARD_TYPE,
      "twitter:creator": TWITTER_ACC,
      "twitter:site": TWITTER_ACC,
      "twitter:title": title,
      "twitter:description": description,
      "twitter:image": imageURl,
      "twitter:alt": title,
      "twitter:url": webURL,
      "og:image:width": IMAGE_WIDTH,
      "og:image:height": IMAGE_HEIGHT,
      author: AUTHOR,
      "theme-color": "#212529"
    };
  } catch (e) {
    return console.error(e), {};
  }
}, loader4 = async ({ params }) => {
  if (!params.slug)
    throw new Error("Missing slug in params.");
  try {
    let [blogPost, { blogPosts, contentfulTags }] = await Promise.all(
      [
        getContentfulBlogPostBySlug(params.slug),
        getPostsAndTags()
      ]
    );
    return {
      blogPost,
      blogPosts,
      contentfulTags
    };
  } catch (e) {
    throw console.error(e), new Response(void 0, { status: 404 });
  }
}, Post = ({}) => {
  let { blogPost, blogPosts } = (0, import_react7.useLoaderData)(), { theme } = useTheme(), blogPostBody = (0, import_rich_text_react_renderer2.documentToReactComponents)(
    blogPost.fields.bodyRichText,
    options
  ), blogPostTranslation = blogPost.fields.blogPostTranslations !== void 0 ? blogPost.fields.blogPostTranslations.content : [], updatedDate = new Date(blogPost.sys.updatedAt).toDateString(), subUpdatedDate = updatedDate.substring(updatedDate.indexOf(" ") + 1), subPublishedDate = new Date(blogPost.sys.createdAt).toDateString().substring(
    updatedDate.indexOf(" ") + 1
  ), tagsToFindRelatedPostsFor = blogPost.metadata.tags, blogPostWithAtLeastOneSharedTag = blogPosts.items.filter((post) => post.sys.id !== blogPost.sys.id && tagsToFindRelatedPostsFor.some((selectedTag) => post.metadata.tags.some(
    (tag) => tag.sys.id === selectedTag.sys.id
  ))).slice(0, 3);
  return /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)(import_jsx_runtime36.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
      FloatingHeader_default2,
      {
        postSlug: blogPost.fields.blogPostSlug,
        postTitle: blogPost.fields.blogPostTitle
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)("div", { className: "text-post-bodyText", children: [
      /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)(
        "div",
        {
          className: `${fixedWidthLayoutClasses} flex flex-col mb-5 xl:mb-10`,
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)(
              "a",
              {
                href: "/blog",
                className: "go-back-btn inline-flex border-none items-center justify-start text-xl mb-10 hover:text-post-bodyTextLg duration-100 ease-in w-fit",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
                    "img",
                    {
                      src: theme === "dark" /* DARK */ ? "/svg/arrow.svg" : "/svg/arrowDark.svg",
                      className: "go-back-arrow w-6 rounded-full mr-2 hover:text-post-bodyTextLg",
                      alt: "go back",
                      title: "Back"
                    }
                  ),
                  "Go back"
                ]
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("h1", { className: "BlogPost__Title flex w-full text-4xl text-post-bodyTextLg xs:text-5xl font-bold max-w-[700px] mx-auto", children: blogPost.fields.blogPostTitle }),
            /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)("div", { className: "w-full flex flex-col custom2:flex-row custom2:justify-between custom2:items-center mt-2 mx-auto max-w-[700px]", children: [
              /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)("p", { className: "BlogPost__DatePublish text-xl mb-2 custom2:mb-0", children: [
                "Published on ",
                subPublishedDate
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)("p", { className: "BlogPost__DatePublish text-xl", children: [
                "Last updated on ",
                subUpdatedDate
              ] })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
        "img",
        {
          src: "https://" + blogPost.fields.blogPostSplash.fields.file.url,
          className: "BlogPost__SplashImage max-w-[1200px] mb-5 xl:mb-10 mx-auto rounded-lg w-[83%] custom3:w-[85%] xs:w-[90%] xl:w-full",
          alt: blogPost.fields.blogPostSplash.fields.title,
          title: blogPost.fields.blogPostSplash.fields.title
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)(
        "div",
        {
          className: `BlogPost text-post-bodyText ${fixedWidthLayoutClasses} mb-20`,
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)("div", { className: "Translation__Section flex flex-col sm:flex-row sm:items-center self-baseline text-base sm:text-lg gap-5", children: [
              blogPostTranslation.length > 1 ? /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("div", { className: "flex flex-row items-center gap-3 sm:gap-5", children: blogPostTranslation.map((translation) => {
                if (translation.data.target !== void 0) {
                  let translationData = translation.data.target.fields, language = translationData.language, translationLink = translationData.linkToTranslation;
                  return /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
                    "a",
                    {
                      target: "_blank",
                      href: translationLink,
                      className: `translation-button px-4 pt-2 pb-3 sm:px-5 sm:pt-3 sm:pb-4 ${theme === "light" /* LIGHT */ ? "bg-gray-100 text-black" : "bg-zinc-700 text-white"} rounded-full w-fit`,
                      children: language
                    }
                  );
                }
                return null;
              }) }) : /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("div", { className: "BlogPost__TranslationSection flex flex-col custom3:flex-row justify-start text-post-bodyText", children: /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("span", { className: "italic mr-10", children: "No translation available." }) }),
              /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
                "a",
                {
                  className: "AddTranslation__Button font-medium underlined w-fit text-lg sm:text-xl",
                  href: "https://github.com/alissanguyen/alissanguyen-dot-dev/blob/main/CONTRIBUTING.md",
                  target: "_blank",
                  children: "Add translation"
                }
              )
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("div", { className: "BlogPost__BodyWrapper mt-10 custom3:mt-16", children: blogPostBody }),
            /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("div", { className: "flex flex-col lg:flex-row lg:justify-between my-16", children: /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)("div", { className: "text-base mb-16 lg:mb-0", children: [
              /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("span", { className: "text-lg font-medium", children: "Tags:" }),
              " ",
              blogPost.metadata.tags.map(
                (tag) => /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(TagBadge, { tag, theme })
              )
            ] }) }),
            /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(AuthorSection_default, {})
          ]
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("hr", {}),
      blogPostWithAtLeastOneSharedTag.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(RelatedPostsSection_default, { relatedPosts: blogPostWithAtLeastOneSharedTag }),
      /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("hr", {})
    ] })
  ] });
}, slug_default = Post, TagBadge = (props) => {
  let tagName = tagIdsToDisplayNames[props.tag.sys.id];
  return /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(import_jsx_runtime36.Fragment, { children: props.theme === "light" /* LIGHT */ ? /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("div", { className: "tag-badge bg-gray-600 before:bg-gray-600 hover:bg-gray-900 before:hover:bg-gray-900 text-gray-200 hover:text-white inline-flex items-center", children: tagName }) : /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("div", { className: "tag-badge tag-dark bg-gray-300 before:bg-gray-300 before:hover:bg-white hover:bg-white text-gray-700 hover:text-black inline-flex items-center", children: tagName }) });
};

// app/routes/blog/index.tsx
var blog_exports = {};
__export(blog_exports, {
  default: () => BlogPage,
  links: () => links7,
  loader: () => loader5,
  meta: () => meta2
});
var import_react8 = require("@remix-run/react");
var React8 = __toESM(require("react"));

// app/components/Blog/BlogPostCard.tsx
var React7 = __toESM(require("react"));

// app/components/Blog/CopyURLButton.tsx
var import_fi = require("react-icons/fi"), import_bs2 = require("react-icons/bs"), import_jsx_runtime37 = require("react/jsx-runtime"), CopyURLButton = (props) => {
  let buttonText = props.userRecentlyCopiedText ? "Copied" : "Copy URL";
  return /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(import_jsx_runtime37.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)(
    "button",
    {
      name: buttonText,
      "aria-label": buttonText,
      className: "url-button copy-url-button custom3:px-4",
      onClick: props.handleCopyURL,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("span", { className: "hidden custom3:flex", children: buttonText }),
        /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("span", { className: "flex custom3:hidden", children: props.userRecentlyCopiedText ? /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(import_bs2.BsCheck2, { className: "w-5 h-4 text-gray-600" }) : /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(import_fi.FiCopy, { className: "w-5 h-4 text-gray-600" }) })
      ]
    }
  ) });
}, CopyURLButton_default = CopyURLButton;

// app/components/Blog/BlogPostCard.tsx
var import_md = require("react-icons/md"), import_jsx_runtime38 = require("react/jsx-runtime"), BlogPostCard = (props) => {
  let blogPost = props.blogPost, blogPostTags = blogPost.metadata.tags, rawDate = new Date(blogPost.sys.updatedAt).toDateString(), publishedDate = rawDate.substring(rawDate.indexOf(" ") + 1), postUrl = `https://www.alissanguyen.com/blog/${blogPost.fields.blogPostSlug}`, [userRecentlyCopiedText, setUsetRecentlyCopiedText] = React7.useState(!1), handleCopyURL = (e) => {
    e.preventDefault(), navigator.clipboard.writeText(postUrl), setUsetRecentlyCopiedText(!0);
  };
  return React7.useEffect(() => {
    let timeout;
    return userRecentlyCopiedText && (timeout = window.setTimeout(() => setUsetRecentlyCopiedText(!1), 1500)), () => {
      window.clearTimeout(timeout);
    };
  }, [userRecentlyCopiedText]), /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
    "a",
    {
      href: `/blog/${blogPost.fields.blogPostSlug}`,
      className: "h-full rounded-lg",
      children: /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("div", { className: "h-full", children: /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("div", { className: "Card__Container", children: [
        /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
          CopyURLButton_default,
          {
            userRecentlyCopiedText,
            handleCopyURL
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("div", { className: "Card__TextContent h-full flex rounded-b-lg flex-col pt-5 pb-2 px-5 justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("div", { className: "flex flex-col", children: [
            /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("div", { className: "Card__Date__Wrapper", children: [
              /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(import_md.MdDateRange, { className: "h-5" }),
              /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("p", { className: "Card__Date text-base text-gray-500 font-medium font-sans", children: publishedDate })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)(import_jsx_runtime38.Fragment, { children: [
              /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("div", { className: "font-bold text-textLgColor text-xl mb-2 sm:max-h-16 overflow-hidden", children: blogPost.fields.blogPostTitle }),
              /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("p", { className: "Card__Excerpt text-subText text-base line-clamp-3", children: blogPost.fields.blogPostExcerpt })
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(BlogPostTags_default, { tags: blogPostTags })
        ] })
      ] }) })
    }
  );
}, BlogPostCard_default = BlogPostCard;

// app/components/Blog/SearchBarSection.tsx
var import_outline = require("@heroicons/react/outline");
var import_jsx_runtime39 = require("react/jsx-runtime"), SearchBarSection = (props) => {
  let { theme } = useTheme();
  return /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("div", { className: "BlogPage__Header__Wrapper", children: /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)("div", { className: "", children: [
    /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)("p", { className: "BlogPage__SubHeader Slogan mb-3 xs:mb-5 gradient-text", children: [
      "Find resources for ",
      /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("br", { className: "hidden xs:flex" }),
      "web development and more."
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("p", { className: "text-subText opacity-75 text-lg xs:text-xl md:text-2xl mb-8", children: "Tag along with me as I explore new tech and share my learning along the way!" }),
    /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)("div", { className: "SearchBar__InputWrapper", children: [
      /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(
        "input",
        {
          type: "text",
          name: "Search blog posts",
          id: "blog-post-search-bar",
          value: props.search,
          onChange: (e) => {
            props.setSearch(e.target.value);
          },
          className: "SearchBar__Input",
          placeholder: "Search posts"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)("div", { className: "SearchBar__Icon", children: [
        /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("span", { className: "mr-2", children: /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(import_outline.DocumentTextIcon, { className: "h-5 w-5" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("p", { className: "text-sm opacity-80", children: props.count })
      ] })
    ] })
  ] }) });
}, SearchBarSection_default = SearchBarSection;

// app/components/Blog/TagsSection.tsx
var import_jsx_runtime40 = require("react/jsx-runtime"), TagsSection = (props) => {
  let { theme } = useTheme();
  return /* @__PURE__ */ (0, import_jsx_runtime40.jsxs)("div", { className: "Tags__Wrapper my-16 text-blog-lgText", children: [
    /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("p", { className: "BlogPage__SubHeader text-xl mb-4 font-bold", children: "Search blog by topics" }),
    /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("div", { className: "tags-wrapper flex flex-row flex-wrap", children: props.tags.map((tag) => /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(
      TagBadge2,
      {
        tag: tag.name,
        tagId: tag.sys.id,
        theme,
        selected: props.selectedTags.has(tag.sys.id),
        onClick: () => {
          props.onTagSelect(tag.sys.id);
        },
        disabled: !props.availableTags.has(tag.sys.id)
      },
      tag.sys.id
    )) })
  ] });
}, TagsSection_default = TagsSection, TagBadge2 = (props) => {
  let selectedClassName = props.theme === "dark" /* DARK */ ? "bg-white text-black" : "bg-black text-white", disabledClassName = "opacity-25";
  return /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(
    "button",
    {
      name: "Filter for" + props.tag,
      "aria-label": props.tag,
      className: `mb-4 mr-4 h-auto w-auto cursor-pointer rounded-full px-6 py-3 transition flex ${props.selected ? selectedClassName : "bg-blog-tagBg"} ${props.disabled ? disabledClassName : "focus-ring"}`,
      onClick: () => props.onClick(props.tagId),
      disabled: props.disabled,
      children: /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("span", { className: "text-lg", children: "#" + props.tag })
    }
  );
};

// app/components/Blog/Blog.css
var Blog_default = "/build/_assets/Blog-HZDN6FVL.css";

// app/routes/blog/index.tsx
var import_react_ga = __toESM(require("react-ga")), import_jsx_runtime41 = require("react/jsx-runtime"), loader5 = getPostsAndTags, links7 = () => [
  { rel: "stylesheet", href: Blog_default },
  {
    rel: "canonical",
    href: "https://www.alissanguyen.com/blog"
  }
], meta2 = () => ({
  title: BLOG_WEBSITE_NAME,
  description: BLOG_DESCRIPTION,
  keywords: BLOG_KEYWORDS,
  image: BLOG_IMAGE_URL,
  url: BLOG_URL,
  "twitter:title": BLOG_WEBSITE_NAME,
  "twitter:description": BLOG_DESCRIPTION,
  "twitter:alt": BLOG_WEBSITE_NAME,
  "twitter:image": BLOG_IMAGE_URL,
  "twitter:card": TWITTER_CARD_TYPE,
  "twitter:creator": TWITTER_ACC,
  "twitter:site": TWITTER_ACC,
  "og:url": BLOG_URL,
  "og:image": BLOG_IMAGE_URL,
  "og:title": BLOG_WEBSITE_NAME,
  "og:description": BLOG_DESCRIPTION,
  "og:image:width": IMAGE_WIDTH,
  "og:image:height": IMAGE_HEIGHT,
  author: AUTHOR,
  "theme-color": "#212529"
}), TRACKING_ID = "UA-223958752-2";
import_react_ga.default.initialize(TRACKING_ID);
function BlogPage() {
  let { blogPosts, contentfulTags } = (0, import_react8.useLoaderData)(), [searchInput, setSearchInput] = React8.useState(""), [subscribeEmail, setSubscribeEmail] = React8.useState(""), postCount = Object.keys(blogPosts.items).length, [selectedTagIds, setSelectedTagIds] = React8.useState(
    /* @__PURE__ */ new Set([])
  );
  React8.useEffect(() => {
    import_react_ga.default.pageview(window.location.pathname + window.location.search);
  }, []);
  let updateSelectedTagIds = (tagId) => {
    setSelectedTagIds((prev) => {
      let clone = new Set(prev);
      return clone.has(tagId) ? (clone.delete(tagId), clone) : (clone.add(tagId), clone);
    });
  }, selectedTagIdsAsArray = [...selectedTagIds], filteredBlogPostsByTags = selectedTagIds.size === 0 ? blogPosts.items : blogPosts.items.filter((post) => selectedTagIdsAsArray.every((selectedTag) => post.metadata.tags.some((tag) => tag.sys.id === selectedTag))), availableTagIds = filteredBlogPostsByTags.reduce(
    (acc, cur) => (cur.metadata.tags.forEach((tag) => {
      acc.has(tag.sys.id) || acc.add(tag.sys.id);
    }), acc),
    /* @__PURE__ */ new Set([])
  ), searchInputRegex = new RegExp(
    escapeSearchTermForRegularExpressionConstruction(searchInput),
    "i"
  ), filteredBlogPostsByName = searchInput === "" ? filteredBlogPostsByTags : filteredBlogPostsByTags.filter((post) => searchInputRegex.test(post.fields.blogPostTitle));
  return /* @__PURE__ */ (0, import_jsx_runtime41.jsxs)("div", { className: `${fixedWidthLayoutClasses} mt-[35%] xs:mt-[25%] md:mt-[15%]`, children: [
    /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
      SearchBarSection_default,
      {
        search: searchInput,
        setSearch: setSearchInput,
        email: subscribeEmail,
        setEmail: setSubscribeEmail,
        count: postCount
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
      TagsSection_default,
      {
        tags: contentfulTags.items,
        selectedTags: selectedTagIds,
        onTagSelect: updateSelectedTagIds,
        availableTags: availableTagIds
      }
    ),
    filteredBlogPostsByName.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("ul", { className: "BlogPosts__Wrapper grid gap-6 gap-y-6 md:grid-cols-2 lg:grid-cols-3 list-none", children: filteredBlogPostsByName.map((blogPost) => /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(BlogPostCard_default, { blogPost }) }, blogPost.sys.id)) }) : /* @__PURE__ */ (0, import_jsx_runtime41.jsxs)("div", { className: "flex items-center m-auto flex-row justify-center", children: [
      /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("p", { className: "text-3xl text-blog-lgText mr-10", children: "Oh no.. there is some problems loading blog posts :(" }),
      /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
        "img",
        {
          src: "/images/cry2.png",
          alt: "Crying illustration",
          title: "Crying illustration",
          className: "w-44"
        }
      )
    ] })
  ] });
}
var escapeSearchTermForRegularExpressionConstruction = (str) => str.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  action: () => action2,
  default: () => routes_default,
  links: () => links15,
  meta: () => meta3
});
var import_react10 = require("@remix-run/react"), import_node5 = require("@remix-run/node");

// app/hooks/useWasInViewAtLeastOnce.ts
var React9 = __toESM(require("react")), import_react_intersection_observer = require("react-intersection-observer"), useWasInViewAtLeastOnce = (options2) => {
  let [wasInViewAtLeastOnce, setWasInViewAtLeastOnce] = React9.useState(!1), { ref: setRef, inView } = (0, import_react_intersection_observer.useInView)(options2);
  return React9.useEffect(() => {
    inView && setWasInViewAtLeastOnce(!0);
  }, [inView]), { setRef, wasInViewAtLeastOnce };
};

// app/components/Decoration.tsx
var import_jsx_runtime42 = require("react/jsx-runtime"), EatLearnCode = () => {
  let { setRef, wasInViewAtLeastOnce } = useWasInViewAtLeastOnce(), wrapperClass = wasInViewAtLeastOnce ? "elc-reveal" : void 0, contentClass = wasInViewAtLeastOnce ? "elc-reveal__content" : void 0;
  return /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { className: "elc-container h-screen lg:text-4xl ", ref: setRef, children: [
    /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("div", { className: wrapperClass, children: /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("div", { className: contentClass, children: "Eat." }) }),
    /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("div", { className: wrapperClass, children: /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("div", { className: contentClass, children: "Learn." }) }),
    /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("div", { className: wrapperClass, children: /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("div", { className: contentClass, children: "Code." }) })
  ] });
};
var GradientBackground3 = () => /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)(
  "svg",
  {
    viewBox: "0 0 100 100",
    preserveAspectRatio: "xMidYMid slice",
    className: "gradient-bg gradient-bg-3 absolute mix-blend-screen",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("defs", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)(
          "radialGradient",
          {
            id: "Gradient1",
            cx: "50%",
            cy: "50%",
            fx: "10%",
            fy: "50%",
            r: ".5",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(
                "animate",
                {
                  attributeName: "fx",
                  dur: "34s",
                  values: "0%;10%;0%",
                  repeatCount: "indefinite"
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("stop", { offset: "0%", stopColor: "#00aeef" }),
              /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("stop", { offset: "100%", stopColor: "#00aeef00" })
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)(
          "radialGradient",
          {
            id: "Gradient2",
            cx: "50%",
            cy: "50%",
            fx: "10%",
            fy: "50%",
            r: ".5",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(
                "animate",
                {
                  attributeName: "fx",
                  dur: "23.5s",
                  values: "0%;10%;0%",
                  repeatCount: "indefinite"
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("stop", { offset: "0%", stopColor: "#ec008c" }),
              /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("stop", { offset: "100%", stopColor: "#ec008c00" })
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)(
          "radialGradient",
          {
            id: "Gradient3",
            cx: "50%",
            cy: "50%",
            fx: "50%",
            fy: "50%",
            r: ".5",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(
                "animate",
                {
                  attributeName: "fx",
                  dur: "21.5s",
                  values: "0%;10%;0%",
                  repeatCount: "indefinite"
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("stop", { offset: "0%", stopColor: "#fff200" }),
              /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("stop", { offset: "100%", stopColor: "#fff20000" })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("rect", { x: "0", y: "0", width: "100%", height: "100%", fill: "url(#Gradient1)", children: [
        /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(
          "animate",
          {
            attributeName: "x",
            dur: "20s",
            values: "25%;0%;25%",
            repeatCount: "indefinite"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(
          "animate",
          {
            attributeName: "y",
            dur: "21s",
            values: "0%;25%;0%",
            repeatCount: "indefinite"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(
          "animateTransform",
          {
            attributeName: "transform",
            type: "rotate",
            from: "0 50 50",
            to: "360 50 50",
            dur: "17s",
            repeatCount: "indefinite"
          }
        )
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("rect", { x: "0", y: "0", width: "100%", height: "100%", fill: "url(#Gradient2)", children: [
        /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(
          "animate",
          {
            attributeName: "x",
            dur: "23s",
            values: "-25%;0%;-25%",
            repeatCount: "indefinite"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(
          "animate",
          {
            attributeName: "y",
            dur: "24s",
            values: "0%;50%;0%",
            repeatCount: "indefinite"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(
          "animateTransform",
          {
            attributeName: "transform",
            type: "rotate",
            from: "0 50 50",
            to: "360 50 50",
            dur: "18s",
            repeatCount: "indefinite"
          }
        )
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("rect", { x: "0", y: "0", width: "100%", height: "100%", fill: "url(#Gradient3)", children: [
        /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(
          "animate",
          {
            attributeName: "x",
            dur: "25s",
            values: "0%;25%;0%",
            repeatCount: "indefinite"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(
          "animate",
          {
            attributeName: "y",
            dur: "26s",
            values: "0%;25%;0%",
            repeatCount: "indefinite"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(
          "animateTransform",
          {
            attributeName: "transform",
            type: "rotate",
            from: "360 50 50",
            to: "0 50 50",
            dur: "19s",
            repeatCount: "indefinite"
          }
        )
      ] })
    ]
  }
);

// app/components/ExternalLinkButton/ExternalLinkButton.tsx
var React10 = __toESM(require("react"));

// app/components/ExternalLinkButton/ExternalLinkButton.css
var ExternalLinkButton_default = "/build/_assets/ExternalLinkButton-P4BQXGOP.css";

// app/components/ExternalLinkButton/ExternalLinkButton.tsx
var import_jsx_runtime43 = require("react/jsx-runtime"), links8 = () => [
  {
    rel: "stylesheet",
    href: ExternalLinkButton_default
  }
], ExternalLinkButton = (props) => {
  let children = typeof props.children == "string" ? /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("span", { children: props.children }) : props.children;
  return /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(
    "a",
    {
      ...props.linkProps,
      href: props.to,
      className: "ExternalLinkButton__Wrapper py-2 px-3 text-sm",
      target: "_blank",
      children: /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(
        "button",
        {
          role: "link",
          name: props.accessibilityName,
          "aria-label": props.accessibilityName,
          tabIndex: -1,
          className: "ExternalLinkButton__Button",
          children: React10.cloneElement(children, {
            ...children.props,
            className: "ExternalLinkButton__ButtonContents relative inline-flex",
            children: /* @__PURE__ */ (0, import_jsx_runtime43.jsxs)(import_jsx_runtime43.Fragment, { children: [
              children.props.children,
              /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("div", { className: "relative flex items-center", children: /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(ExternalLinkSvg, {}) })
            ] })
          })
        }
      )
    }
  );
}, ExternalLinkSvg = () => /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(
  "svg",
  {
    fill: "none",
    height: "20",
    stroke: "currentColor",
    strokeLinecap: "square",
    strokeLinejoin: "inherit",
    strokeWidth: "1",
    viewBox: "0 0 24 24",
    width: "20",
    xmlns: "http://www.w3.org/2000/svg",
    className: "ExternalLinkButton__Icon absolute",
    children: /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("path", { d: "M5 12h13M12 5l7 7-7 7" })
  }
), ExternalLinkButton_default2 = ExternalLinkButton;

// app/sections/AboutMe/AboutMe.css
var AboutMe_default = "/build/_assets/AboutMe-JYZQOUL5.css";

// app/sections/AboutMe/Titles.tsx
var import_jsx_runtime44 = require("react/jsx-runtime"), Titles = ({}) => /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("div", { className: "title-content", children: /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)("div", { className: "title-content__container inline-flex overflow-hidden font-semibold items-center", children: [
  /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("h1", { className: "hidden", children: "I'm a software engineer, a freelance artist, an anime lover, and a cat mom." }),
  /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("p", { className: "title-content__container__text m-0  inline-flex", children: "I'm a" }),
  /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("span", { className: "blinker", children: "[" }),
  /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)("ul", { className: "title-content__container__list text-center list-none", children: [
    /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("li", { className: "title-content__container__list__item gradient-text m-0", children: "software engineer" }),
    /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("li", { className: "title-content__container__list__item gradient-text m-0", children: "web developer" }),
    /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("li", { className: "title-content__container__list__item gradient-text m-0", children: "manga/anime lover !" }),
    /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("li", { className: "title-content__container__list__item gradient-text m-0", children: "cat mom \u{1F408}\u200D\u2B1B \u{1F408}" })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("span", { className: "blinker", children: "]" })
] }) }), Titles_default = Titles;

// app/sections/AboutMe/Hi.tsx
var import_use_typewriter_hook = require("use-typewriter-hook"), import_jsx_runtime45 = require("react/jsx-runtime"), Hi = () => {
  let targetText = "I'm Alissa\u{1F44B} ", { textValue: typedText, wrapperClassName } = (0, import_use_typewriter_hook.useTypewriter)({
    targetText,
    autoStartDelay: 400,
    typingDelayMillis: 70
  }), stringToSearch = "Alissa", startIndex = targetText.indexOf(stringToSearch), endIndex = startIndex + stringToSearch.length, fragments = splitTargetText(typedText, startIndex, endIndex);
  return /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(
    "span",
    {
      className: "font-semibold xl:text-8xl lg:text-7xl custom:text-6xl md:text-5xl sm:text-4xl xs:text-5xl xxs:text-4xl text-textSmColor",
      "aria-live": "polite",
      "aria-label": "Hi I'm Alissa",
      children: /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)("span", { className: "welcome inline-flex whitespace-pre leading-none text-center justify-center items-center after:inline-flex after:items-center", children: [
        /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("span", { className: "", children: "Hi," }),
        /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("span", { children: " " }),
        /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("span", { className: `${wrapperClassName}`, children: fragments })
      ] })
    }
  );
}, Hi_default = Hi, splitTargetText = (str, startIndex, endIndex) => {
  let customStyle = {
    backgroundColor: "var(--alissa)"
  };
  return /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)(import_jsx_runtime45.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("span", { className: "inline-block", children: str.slice(0, startIndex) }),
    /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("span", { className: "inline-block", children: /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("span", { className: "custom-typewriter-text gradient-text", style: customStyle, children: str.slice(startIndex, endIndex) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("span", { className: "inline-block", children: str.slice(endIndex, str.length) })
  ] });
};

// app/components/ResumeButton/ResumeButton.css
var ResumeButton_default = "/build/_assets/ResumeButton-H4Y7BL6X.css";

// app/components/ResumeButton/ResumeButton.tsx
var import_jsx_runtime46 = require("react/jsx-runtime"), links9 = () => [{ rel: "stylesheet", href: ResumeButton_default }], ResumeButton = () => /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("a", { href: "/resume.pdf", download: "AlissaNguyen_Resume.pdf", className: "ResumeButton__Wrapper", children: /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(
  "button",
  {
    className: "slide text-lg",
    name: "Download Resume",
    "aria-label": "Resume",
    children: "Download Resume"
  }
) }), ResumeButton_default2 = ResumeButton;

// app/components/SocialMedia/SocialMedia.css
var SocialMedia_default = "/build/_assets/SocialMedia-OU5BM76I.css";

// app/components/SocialMedia/SocialMedia.tsx
var import_jsx_runtime47 = require("react/jsx-runtime"), links10 = () => [{ rel: "stylesheet", href: SocialMedia_default }], SocialMedia = ({}) => {
  let { theme } = useTheme(), styles = getTextStyles(theme);
  return /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("div", { className: "sm-wrapper flex flex-col gap-4", children: sm.map((element) => {
    let IconMarkup = element.icon;
    return /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)(
      "div",
      {
        className: `${element.className} social-media-icon-wrapper relative bg-aboutMe-smIconBg flex flex-col justify-center items-center justify-self-center ${styles}`,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("div", { className: "tooltip absolute top-0 text-sm text-white bg-white", children: element.name }),
          /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("a", { href: element.externalUrl, target: "_blank", children: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("span", { className: "flex justify-center items-center text-lg", children: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(IconMarkup, {}) }) })
        ]
      },
      element.name
    );
  }) });
}, getTextStyles = (theme) => theme === "light" /* LIGHT */ ? "text-black hover:text-white" : "text-white", SocialMedia_default2 = SocialMedia;

// app/sections/Contact/Contact.css
var Contact_default = "/build/_assets/Contact-3VVZD7QJ.css";

// app/components/SparkleSVG.tsx
var import_jsx_runtime48 = require("react/jsx-runtime"), SparkleSVG = () => /* @__PURE__ */ (0, import_jsx_runtime48.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor", className: "w-6 h-6", children: /* @__PURE__ */ (0, import_jsx_runtime48.jsx)("path", { fillRule: "evenodd", d: "M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813A3.75 3.75 0 0 0 7.466 7.89l.813-2.846A.75.75 0 0 1 9 4.5ZM18 1.5a.75.75 0 0 1 .728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 0 1 0 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 0 1-1.456 0l-.258-1.036a2.625 2.625 0 0 0-1.91-1.91l-1.036-.258a.75.75 0 0 1 0-1.456l1.036-.258a2.625 2.625 0 0 0 1.91-1.91l.258-1.036A.75.75 0 0 1 18 1.5ZM16.5 15a.75.75 0 0 1 .712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 0 1 0 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 0 1-1.422 0l-.395-1.183a1.5 1.5 0 0 0-.948-.948l-1.183-.395a.75.75 0 0 1 0-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0 1 16.5 15Z", clipRule: "evenodd" }) }), SparkleSVG_default = SparkleSVG;

// app/assets/aboutme/front-end.png
var front_end_default = "/build/_assets/front-end-EK2JIRO3.png";

// app/assets/aboutme/web-hosting.png
var web_hosting_default = "/build/_assets/web-hosting-3VZLCKQG.png";

// app/assets/aboutme/database-management.png
var database_management_default = "/build/_assets/database-management-BRTTXGPL.png";

// app/assets/aboutme/cms.png
var cms_default = "/build/_assets/cms-W4EEMLVE.png";

// app/assets/aboutme/avatar.jpeg
var avatar_default = "/build/_assets/avatar-OOLTII7A.jpeg";

// app/sections/AboutMe/AboutMe.tsx
var import_jsx_runtime49 = require("react/jsx-runtime"), links11 = () => [
  {
    rel: "stylesheet",
    href: AboutMe_default
  },
  {
    rel: "stylesheet",
    href: Contact_default
  }
], AboutMe = () => /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)("section", { id: "AboutMe", className: "AboutMe__Wrapper", children: [
  /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)("article", { className: "aboutme-wrapper mt-[35%] xs:mt-[25%] md:mt-[15%] flex flex-row gap-5 lg:gap-10 relative", children: [
    /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)("div", { className: "Introduction__Wrapper grid grid-cols-1 custom:grid-cols-7 gap-5", id: "introductionWrapper", children: [
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
        "img",
        {
          src: "/images/background/Eclipse.svg",
          alt: "Decorative background eclipse",
          className: "eclipse absolute left-[-40rem] top-[2rem] z-[-10]"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)("div", { className: "flex flex-col custom:col-span-4", children: [
        /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(Hi_default, {}),
        /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("div", { className: "bio-description md:text-lg leading-10 text-textSmColor", children: /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)("div", { className: "my-10 text-lg xl:text-xl", children: [
          /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("p", { className: "my-4", children: "Welcome to my personal website!" }),
          /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("p", { className: "mb-5 xs:mb-10", children: "I enjoy building software that makes people' lives easier by writing elegant, performant, and maintainable frontend code. I also enjoy petting every cat I see." }),
          /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("div", { className: "spacer-div mt-5 sm:mt-10" }),
          /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(Titles_default, {}),
          /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("div", { className: "mt-5 xs:mt-12" }),
          /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("div", { className: "resume-btn-wrapper w-fit", children: /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(ResumeButton_default2, {}) })
        ] }) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("div", { className: "hidden custom:flex custom:col-span-3 custom:px-5 xl:px-10", children: /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("img", { src: avatar_default, alt: "", className: "Avatar" }) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(SocialMedia_default2, {})
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("div", { className: "visible custom:hidden", children: /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("img", { src: avatar_default, alt: "", className: "Avatar" }) }),
  /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("div", { className: "spacer-div mt-40" }),
  /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(AboutMeStats, {})
] }), AboutMe_default2 = AboutMe, skills = [
  {
    id: "fe",
    title: "Front-end development",
    description: "Responsive and performant web pages with React or Remix, with and SSR for a better user experience. Utilize modern UI libraries like TailwindCSS, Headless UI, Framer Motion, etc. to create beautiful, responsive, and accessible web apps quickly.",
    image: front_end_default
  },
  {
    id: "wbd",
    title: "Web hosting and deployment",
    description: "Deployment to platforms such as Vercel, Netlify, and Cloudflare to leverage caching and firewalls at the edge. Writing easily understood, modular, fast, and type-safe applications with TypeScript and modern JavaScript syntax.",
    image: web_hosting_default
  },
  {
    id: "dm",
    title: "Database management",
    description: "Data management with Firestore, Prisma, or Supabase. Use of classic web security principles and user authorization/authentication with Firebase Auth and automated emails with Sendgrid.",
    image: database_management_default
  },
  {
    id: "cms",
    title: "CMS integration",
    description: "Creating JAM Stack frontend applications that integrate with modern headless content management systems (CMS) like Contentful.",
    image: cms_default
  }
], AboutMeStats = ({}) => /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)("div", { children: [
  /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)("div", { className: "flex flex-row items-center w-fit text-lg custom3:text-2xl gap-3 font-medium rounded-3xl border-2 border-gray-300 text-textSmColor px-8 py-2 mb-5", children: [
    /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(SparkleSVG_default, {}),
    /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("h2", { children: "About Me" })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)("p", { className: "Slogan AboutMe__Slogan gradient-text", children: [
    "Turning complex problems ",
    /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("br", {}),
    " into simple design"
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)("div", { className: "AboutMe__StatsWrapper flex flex-col sm:flex-row items-center w-full gap-5 text-textSmColor Special__Font mb-5 text-center mt-6", children: [
    /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
      "img",
      {
        src: "/images/background/Gradient.svg",
        alt: "Decorative background",
        className: "gradient-blob absolute opacity-60"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)("div", { className: "AboutMe__StatItem", children: [
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("span", { className: "AboutMe__StatNumber gradient-text", children: "4+" }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("span", { className: "AboutMe__StatDescription", children: "Years of experience" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)("div", { className: "AboutMe__StatItem", children: [
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("span", { className: "AboutMe__StatNumber gradient-text", children: "50+" }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("span", { className: "AboutMe__StatDescription", children: "Projects done" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)("div", { className: "AboutMe__StatItem", children: [
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("span", { className: "AboutMe__StatNumber gradient-text", children: "1,250+" }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("span", { className: "AboutMe__StatDescription", children: "GitHub contributions" })
    ] })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)("div", { className: "flex flex-col sm:flex-row gap-10 sm:gap-12 custom:gap-20", children: [
    /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)("div", { className: "flex flex-col items-start gap-3 sm:gap-7", children: [
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("p", { className: "AboutMe__Text text-lg custom:text-xl font-medium text-subText leading-relaxed tracking-wide", children: 'I had my awakening call recently, and it made me wonder who I am. I woke up one morning and everything seems unfamiliar. I noticed that I have never taken a good look at Seattle. I did not notice that pizzaria in the corner near the street where I live. I did not notice how many different varieties of trees there are throughout the city. I did not notice that tall building with floor to ceiling windows near the entrance to I-5. I did not notice how blue the sky was. "Where am I? Who in the world am I?"' }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("p", { className: "AboutMe__Text text-lg custom:text-xl font-medium text-subText leading-relaxed tracking-wide", children: "Life has many great puzzles, but the greatest of them all (in my opinion) is the riddle of figuring out who we are, and why we are here. Life has many struggles, but the greatest of them all is to not lose yourself in the process of finding yourself. At the end of the day, I\u2018m grateful that I\u2018m here, in this moment, and tomorrow I will be a better person than today." }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("p", { className: "AboutMe__Text text-lg custom3:text-xl custom:text-2xl font-normal text-textLgColor italic leading-relaxed tracking-wide", children: "I believe one of the greatest ability of humans is the ability to introspect and reflect." })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)("div", { className: "flex flex-col items-start gap-3 sm:gap-6 text-lg custom:text-xl text-textSmColor", children: [
      /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)("div", { className: "flex flex-col items-start", children: [
        /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("span", { className: "text-subText", children: "Name" }),
        /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("span", { className: "font-semibold", children: "Tam Nguyen" }),
        /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("span", { className: "font-semibold", children: "Nickname: Alissa / Avione" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)("div", { className: "flex flex-col items-start", children: [
        /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("span", { className: "text-subText", children: "Phone" }),
        /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("span", { className: "font-semibold", children: "(425) 728-0312" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)("div", { className: "flex flex-col items-start", children: [
        /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("span", { className: "text-subText", children: "Email" }),
        /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("span", { className: "font-semibold", children: "im.tamnguyen@gmail.com" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)("div", { className: "flex flex-col items-start", children: [
        /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("span", { children: "Location" }),
        /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("span", { className: "font-semibold", children: "Seattle, Washington, USA" })
      ] })
    ] })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("div", { className: "spacer-div mt-12 custom3:mt-24" }),
  /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("ul", { className: "grid grid-cols-1 custom2:grid-cols-2 gap-5 md:gap-10", children: skills.map(
    (skill) => /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)("li", { className: "AboutMe__SkillBubble relative flex flex-col items-start overflow-hidden border-2 rounded-3xl md:rounded-[3rem] pt-7 px-7 md:pt-12 md:px-12 pb-0 max-h-[44rem]", children: [
      /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)("div", { className: "AboutMe__SkillBubble__Content relative z-[1]", children: [
        /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("p", { className: "AboutMe__SkillBubble__Title font-semibold text-2xl md:text-3xl mb-2", children: skill.title }),
        /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("p", { className: "md:font-medium text-lg md:text-xl text-textSmColor", children: skill.description })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("div", { className: "AboutMe__SkillBubble__ImageWrapper w-full overflow-hidden", children: skill.image ? /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
        "img",
        {
          src: skill.image,
          alt: skill.title,
          className: "AboutMe__SkillBubble__Image w-full h-auto block"
        }
      ) : null })
    ] }, skill.id)
  ) })
] });

// app/sections/Projects/FeaturedProjects.tsx
var import_outline2 = require("@heroicons/react/outline");

// app/components/ExternalLinkButton/SmallExternalLinkButton.tsx
var import_im = require("react-icons/im"), import_bi = require("react-icons/bi"), import_bs3 = require("react-icons/bs"), import_jsx_runtime50 = require("react/jsx-runtime"), SmallExternalLinkButton = (props) => /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(
  "a",
  {
    className: "ExternalLinkButton__Wrapper py-2 px-3 text-sm text-textSmColor",
    href: props.href,
    target: "_blank",
    children: /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(
      "button",
      {
        className: "ExternalLinkButton__SmallButton flex items-center justify-center",
        name: props.accessibilityName,
        "aria-label": props.accessibilityName,
        children: props.type === "Github" ? /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(import_bs3.BsGithub, { className: "w-5 h-5 hover:text-blue-400 focus:text-blue-400" }) : props.type === "Website" ? /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(import_bi.BiLinkExternal, { className: "w-5 h-5 hover:text-cyan-200 focus:text-cyan-200" }) : /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("div", { className: "h-5 w-5 flex items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(import_im.ImNpm, { className: "w-4 h-4 hover:text-rose-500 focus:text-rose-500" }) })
      }
    )
  }
), SmallExternalLinkButton_default = SmallExternalLinkButton;

// app/sections/Projects/FeaturedProjects.tsx
var import_jsx_runtime51 = require("react/jsx-runtime"), FeaturedProjects = ({}) => {
  let { theme } = useTheme(), { setRef, wasInViewAtLeastOnce } = useWasInViewAtLeastOnce(), animationClassName = wasInViewAtLeastOnce ? "project-slide-up" : void 0;
  return /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("p", { className: "PublishedSoftware__Text text-4xl Resume__BigText font-semibold mb-8", children: "Publised Software & Writing" }),
    /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("div", { className: "line-break-gradient" }),
    /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
      "div",
      {
        className: "main-projects-wrapper text-textSmColor grid custom:grid-cols-2 gap-10 z-10 mt-8",
        ref: setRef,
        children: mainProjects.map((project, index) => /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
          "div",
          {
            className: `FeaturedProject__Card ${animationClassName} duration-100 ease-in  sm:flex sm:flex-col bg-cover gap-10 p-7 xs:p-10 rounded-2xl`,
            style: {
              backgroundImage: `${theme === "light" /* LIGHT */ ? project.bgLight : project.bgDark}`,
              animationDuration: `${index + 1.25}s`
            },
            children: /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)("div", { className: "main-project-content flex flex-col justify-between", children: [
              /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)("div", { className: "flex flex-col sm:mt-0", children: [
                /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("p", { className: "main-project-title font-semibold text-2xl sm:text-3xl pb-5", children: project.name }),
                /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("p", { className: "main-project-description text-base leading-8 pb-2", children: project.description }),
                /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("p", { className: "main-project-time text-sm text-projects-subText pb-2", children: project.role })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)("div", { className: "main-project-frameworks flex flex-row ", children: [
                /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(import_outline2.ArrowSmRightIcon, { className: "text-projecs-arrow w-5 mr-3" }),
                /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("p", { className: "text-[15px] leading-7", children: project.frameworks })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("div", { className: "spacer-div sm:mt-3" }),
              /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)("div", { className: "main-project-small-buttons flex flex-row items-center justify-between text-sm mt-5", children: [
                project.gitRepo ? /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                  SmallExternalLinkButton_default,
                  {
                    type: "Github",
                    href: project.gitRepo,
                    accessibilityName: "Visit Github repository"
                  }
                ) : null,
                /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                  SmallExternalLinkButton_default,
                  {
                    type: "Website",
                    href: project.website,
                    accessibilityName: "Visit website"
                  }
                ),
                project.npm ? /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                  SmallExternalLinkButton_default,
                  {
                    type: "NPM",
                    href: project.npm,
                    accessibilityName: "Visit NPM page"
                  }
                ) : null
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)("div", { className: "main-project-buttons flex flex-row items-center justify-start text-sm mt-5 sm:mt-0", children: [
                project.gitRepo ? /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                  ExternalLinkButton_default2,
                  {
                    to: project.gitRepo,
                    accessibilityName: "Visit Github repository",
                    children: "View source"
                  }
                ) : null,
                /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("div", { className: "mr-4" }),
                /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                  ExternalLinkButton_default2,
                  {
                    to: project.website,
                    accessibilityName: "Visit Website",
                    children: "Visit Website"
                  }
                ),
                project.npm ? /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)("div", { className: "inline-flex", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("div", { className: "mr-4" }),
                  /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                    ExternalLinkButton_default2,
                    {
                      to: project.npm,
                      accessibilityName: "Visit NPM package",
                      children: "View on NPM"
                    }
                  )
                ] }) : null
              ] })
            ] })
          },
          project.name
        ))
      }
    )
  ] });
}, FeaturedProjects_default = FeaturedProjects;

// app/sections/Projects/OtherProjects.tsx
var import_jsx_runtime52 = require("react/jsx-runtime"), OtherProjects = ({}) => /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)("div", { className: "others-wrapper text-textSmColor", children: [
  /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("p", { className: "OtherProjects__Text text-4xl Resume__BigText font-semibold mb-8", children: "Other Projects" }),
  /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("div", { className: "line-break-gradient" }),
  /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("ul", { className: "other-projects-wrapper m-0 p-0 text-base grid grid-rows-7 list-none gap-5 md:gap-0", children: otherProjects.map((project) => /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)(
    "li",
    {
      className: "other-project-wrapper py-4 flex flex-col items-center justify-between md:flex-row",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)("div", { className: "info inline-flex items-center md:w-48 md:mr-5 custom:mr-0 custom:w-64 mb-5 md:mb-0", children: [
          /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(
            "img",
            {
              src: project.icon,
              alt: project.name,
              loading: "lazy",
              title: `Icon for ${project.name}`,
              className: "md:w-8 mr-4 align-middle"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("p", { className: "font-medium text-lg", children: project.name })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("span", { className: "md:flex-1 text-base text-center w-full xxs:w-4/5 xs:w-2/3 md:w-full md:text-left", children: project.description }),
        /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)("div", { className: "inline-flex items-center mt-5 md:mt-0 md:ml-5 custom:ml-0", children: [
          /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(
            ExternalLinkButton_default2,
            {
              to: project.gitRepo,
              accessibilityName: "Visit GitHub repository",
              children: "View source"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("div", { className: "mr-4" }),
          /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(
            ExternalLinkButton_default2,
            {
              to: project.website,
              accessibilityName: "Visit website",
              children: "Visit Website"
            }
          )
        ] })
      ]
    },
    project.name
  )) })
] }), OtherProjects_default = OtherProjects;

// app/sections/Projects/Projects.css
var Projects_default = "/build/_assets/Projects-3ZU4NRF4.css";

// app/sections/Projects/Projects.tsx
var import_jsx_runtime53 = require("react/jsx-runtime"), links12 = () => [
  {
    rel: "stylesheet",
    href: Projects_default
  }
], Projects = ({}) => /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("div", { className: "projects-wrapper", children: [
  /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(FeaturedProjects_default, {}),
  /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("div", { className: "mt-14 sm:mt-24" }),
  /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(OtherProjects_default, {})
] }), Projects_default2 = Projects;

// app/routes/index.tsx
var React12 = __toESM(require("react"));

// app/utils/functions.tsx
var import_node4 = require("@remix-run/node");
function validateMessage(message) {
  if (typeof message != "string")
    return "Your message is not a string.";
  if (!message.match(/^(?!.*<script>)(?!.*<\/script>)(?!.*<iframe>)(?!.*<\/iframe>)(?!.*<embed>)(?!.*<\/embed>)(?!.*<object>)(?!.*<\/object>)(?!.*<applet>)(?!.*<\/applet>)(?!.*<style>)(?!.*<\/style>)(?!.*<link>)(?!.*<\/link>)(?!.*<meta>)(?!.*<\/meta>).*$/))
    return "Please enter a valid message without any HTML tags.";
  let transformedMsg = message.toLowerCase();
  if (transformedMsg.includes(" bot ") || transformedMsg.includes("bot ") || transformedMsg.includes(" money ") || transformedMsg.includes(" rich ") || transformedMsg.includes("crypto") || transformedMsg.includes("robot ") || transformedMsg.includes(" robot "))
    return "Your activity is unusual, please try again or contact me through Linkedin.";
  if (message.length < 10)
    return "Message must be at least 10 characters.";
}
function validateEmail(email) {
  if (typeof email != "string" || email.split("@").length < 2 || !email.includes("@"))
    return "Please enter a valid email address";
}
function validateName(name) {
  if (typeof name != "string")
    return "Your name is suspicious, is that your real name?";
}
function badRequest(data) {
  return (0, import_node4.json)(data, { status: 400 });
}

// app/routes/index.tsx
var import_react_ga2 = __toESM(require("react-ga"));

// app/assets/portfolio-projects/chess.png
var chess_default = "/build/_assets/chess-BNRFTL7K.png";

// app/assets/portfolio-projects/image.png
var image_default = "/build/_assets/image-JA2NQ24E.png";

// app/assets/portfolio-projects/sign.png
var sign_default = "/build/_assets/sign-LTO26SVU.png";

// app/sections/Resume/Portfolio.tsx
var import_jsx_runtime54 = require("react/jsx-runtime"), portfolioProjects = [
  {
    id: "chess",
    name: "Chess Game with AI",
    techStack: ["Python", "PIP", "Sublime Text"],
    thumb: chess_default
  },
  {
    id: "imageGenerator",
    name: "AI Image Generator",
    techStack: ["JavaScript", "GPT"],
    thumb: image_default
  },
  {
    id: "signLanguage",
    name: "Sign Language Detection with TensorFlow",
    techStack: ["Python", "TensorFlow"],
    thumb: sign_default
  }
], Portfolio = () => /* @__PURE__ */ (0, import_jsx_runtime54.jsxs)("div", { className: "flex flex-col items-start justify-center gap-14 mb-20", id: "portfolio", children: [
  /* @__PURE__ */ (0, import_jsx_runtime54.jsxs)("div", { className: "flex flex-row items-center text-2xl gap-3 font-medium rounded-3xl border-2 border-gray-300 text-textSmColor px-8 py-2", children: [
    /* @__PURE__ */ (0, import_jsx_runtime54.jsx)(SparkleSVG_default, {}),
    /* @__PURE__ */ (0, import_jsx_runtime54.jsx)("h2", { children: "Portfolio" })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime54.jsx)("ul", { className: "FeaturedProjects__Wrapper grid xs:grid-cols-2 md:grid-cols-3 gap-5 md:gap-10", children: portfolioProjects.map((project) => /* @__PURE__ */ (0, import_jsx_runtime54.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime54.jsx)(PortfolioProjectCard, { project }, project.id) }, project.id)) })
] }), Portfolio_default = Portfolio, PortfolioProjectCard = (props) => /* @__PURE__ */ (0, import_jsx_runtime54.jsxs)("div", { className: "ProjectCard__Wrapper flex rounded-2xl relative overflow-hidden", children: [
  /* @__PURE__ */ (0, import_jsx_runtime54.jsx)("img", { src: props.project.thumb, alt: "", className: "ProjectCard__Image z-[2] rounded-2xl filter brightness-50 hover:brightness-70 hover:scale-110 transition-transform duration-500 ease-in-out transform w-full h-full object-cover relative overflow-hidden" }),
  /* @__PURE__ */ (0, import_jsx_runtime54.jsxs)("div", { className: "ProjectCard__Description flex flex-col items-start gap-5 z-[10] absolute text-white bottom-0 p-3 md:p-5 bg-blend-overlay", children: [
    /* @__PURE__ */ (0, import_jsx_runtime54.jsx)("span", { className: "font-medium text-xl drop-shadow-lg", children: props.project.name }),
    /* @__PURE__ */ (0, import_jsx_runtime54.jsx)("div", { className: "ProjectCard__BadgeWrapper relative flex flex-row items-center justify-start gap-1 custom:gap-2", children: props.project.techStack.map((tech2) => /* @__PURE__ */ (0, import_jsx_runtime54.jsx)("span", { className: "ProjectCard__Badge text-sm custom:text-base bg-black px-2 custom:px-3 py-2 leading-none rounded-2xl", children: tech2 }, tech2)) })
  ] })
] }, props.project.id);

// app/sections/Resume/Education.tsx
var import_jsx_runtime55 = require("react/jsx-runtime"), education = [
  {
    id: 0,
    year: "2024 - Current",
    title: "Computer Science Major with focus on AI/ML",
    by: "Western Governors University",
    description: "Focused primarily on artificial intelligence and machine learning frameworks such as PyTorch and TensorFlow, as well as language models like LLMs (Large Language Models)."
  },
  {
    id: 1,
    year: "2021 - Current",
    title: "Front-end Engineer & Web Developer",
    by: "at GitHub OpenSource - Seattle, WA",
    description: "Created multiple software applications with React, NextJS, SSR, and experimental UX patterns. Contributed to several open-source repositories on GitHub including Prisma (a GraphQL ORM) and Apple's password manager repo."
  },
  {
    id: 2,
    year: "2023-2024",
    title: "Financial Consultant/Advisor",
    by: "KeyBank - Seattle, WA",
    description: "Assessed and managed clients financial conditions for credit facilities, top performer in the Seattle area within the first quarter. "
  },
  {
    id: 3,
    year: "2019-2021",
    title: "Computer Science & Economics Major",
    by: "Rhodes College - Tennessee, USA",
    description: "Focused primarily on CS courses and gained skills in Python, Java, and OOP."
  }
], Education = ({}) => /* @__PURE__ */ (0, import_jsx_runtime55.jsxs)("div", { children: [
  /* @__PURE__ */ (0, import_jsx_runtime55.jsx)("p", { className: "MyEducation__Text text-4xl text-textSmColor font-semibold mb-8", children: "My Education" }),
  /* @__PURE__ */ (0, import_jsx_runtime55.jsx)("div", { className: "line-break-gradient" }),
  /* @__PURE__ */ (0, import_jsx_runtime55.jsx)("ul", { className: "Education__ListWrapper flex flex-col gap-6 mt-2 sm:mt-10", children: education.map((each) => /* @__PURE__ */ (0, import_jsx_runtime55.jsxs)("li", { className: "grid sm:grid-cols-6 items-center gap-5 sm:gap-14", children: [
    /* @__PURE__ */ (0, import_jsx_runtime55.jsx)("span", { className: "Education__Year Resume__MediumText text-xl font-medium sm:col-span-1", children: each.year }),
    /* @__PURE__ */ (0, import_jsx_runtime55.jsxs)("div", { className: "flex flex-col sm:col-span-2", children: [
      /* @__PURE__ */ (0, import_jsx_runtime55.jsx)("span", { className: "Education__Title Resume__BigText text-xl font-bold text-textLgColor", children: each.title }),
      /* @__PURE__ */ (0, import_jsx_runtime55.jsx)("span", { className: "Education__Location Resume__MediumText text-lg text-textSmColor", children: each.by })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime55.jsx)("span", { className: "Education__Description Resume__SmallText text-lg sm:col-span-3 text-textSmColor", children: each.description }),
    /* @__PURE__ */ (0, import_jsx_runtime55.jsx)("div", { className: "line-break" })
  ] }, each.id)) })
] }), Education_default = Education;

// app/sections/Resume/Resume.css
var Resume_default = "/build/_assets/Resume-A4VCQKMP.css";

// app/sections/Resume/Skills.tsx
var import_jsx_runtime56 = require("react/jsx-runtime"), Skills = ({}) => {
  let { setRef, wasInViewAtLeastOnce } = useWasInViewAtLeastOnce(), className = wasInViewAtLeastOnce ? "show" : "hide";
  return /* @__PURE__ */ (0, import_jsx_runtime56.jsxs)("section", { className: `h-fit ${className} w-full`, ref: setRef, children: [
    /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("p", { className: "PublishedSoftware__Text text-4xl Resume__BigText font-semibold mb-8", children: "My Tools & Skills" }),
    /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("div", { className: "line-break-gradient" }),
    /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("div", { className: "skills-section-container mt-8", children: /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("ul", { className: "abilities-wrapper mt-5 md:mt-0 grid grid-cols-2 custom3:grid-cols-3 sm:grid-cols-4 custom:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-3 sm:gap-5 w-full justify-center items-center", children: tech.map((tech2, index) => /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime56.jsxs)(
      "div",
      {
        className: `ability-card ${className} flex flex-col items-center text-left p-8`,
        style: {
          animationDelay: `${1 + index}`
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("img", { src: tech2.icon, alt: tech2.name, className: "w-20 h-20" }),
          /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("p", { className: "text-base text-textSmColor leading-8", children: tech2.name })
        ]
      }
    ) }, tech2.id)) }) })
  ] });
}, Skills_default = Skills;

// app/sections/Resume/WorkExperience.tsx
var import_jsx_runtime57 = require("react/jsx-runtime"), WorkExperience = ({}) => /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("div", { children: [
  /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("p", { className: "WorkExperience__Text text-4xl Resume__BigText font-semibold mb-8", children: "Work Experience" }),
  /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("div", { className: "line-break-gradient" }),
  /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("div", { className: "WorkExperience__Item mt-5", children: [
    /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("div", { className: "flex flex-col w-full custom:flex-row gap-4 custom:gap-0 custom:items-center justify-between custom:w-5/6 mb-2", children: [
      /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("span", { className: "text-2xl Resume__BigText font-medium", children: "Front-end Engineer & Web Developer - Seattle, Washington" }),
      /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("span", { className: "text-lg italic gradient-text", children: "August 2020 - Present" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("ul", { className: "list-disc flex flex-col gap-3 Resume__SmallText", children: [
      /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("li", { className: "ml-5 custom3:ml-10 xs:ml-20 text-lg custom3:w-4/5 tracking-wide", children: [
        "Created ",
        " ",
        /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("a", { href: "https://www.alissanguyen.dev", target: "_blank", className: "text-emerald-600 hover:text-emerald-500 relative inline-block", children: [
          "alissanguyen.dev",
          /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("span", { className: "underline-animation" })
        ] }),
        `, a development portfolio and technical blog with ~6,000 unique monthly active readers. Built with React, TypeScript, Remix and uses Contentful as a headless CMS. Supports theme switching between light-mode and dark-mode using session cookies and Tailwind CSS. Received a 100 score on Google Chrome Lighthouse's "Best Practices", "Accessibility" and "SEO" categories and >90 for "Performance". Incorporates continuous deployment via Vercel and is hosted behind Cloudflare for delivery at the edge and DDoS protection`
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("li", { className: "ml-5 custom3:ml-10 xs:ml-20 text-lg custom3:w-4/5 tracking-wide", children: "Designed and implemented a Shopify e-commerce website for Pine Plus Apple LLC utilizing Shopify templates and customization tools. Created a visually appealing and user-friendly website that accurately represents the brand and showcases products effectively. Handled 200-300 monthly order trackings and transactions. Monitored the website's performance and implemented optimizations to improve 5% page load times and overall website speed." }),
      /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("li", { className: "ml-5 custom3:ml-10 xs:ml-20 text-lg custom3:w-4/5 tracking-wide", children: [
        "Created the npm library ",
        " ",
        /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("a", { href: "https://usetypewriter.com/", target: "_blank", className: "text-emerald-600 hover:text-emerald-500 relative inline-block", children: [
          "use-typewriter-hook",
          /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("span", { className: "underline-animation" })
        ] }),
        " ",
        "using modern JavaScript and React hooks. Main-tained the library across 3 major releases, in addition to creating a dedicated documentation website at usetypewriter.com."
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("li", { className: "ml-5 custom3:ml-10 xs:ml-20 text-lg custom3:w-4/5 tracking-wide", children: "Created a variety of frontend projects to showcase advanced animation techniques, server-side rendering (SSR), and experimental UX patterns. Contributor to several open-source repositories on GitHub including Prisma (a GraphQL ORM) and Apple's password manager repo." })
    ] })
  ] })
] }), WorkExperience_default = WorkExperience;

// app/sections/Resume/SkillBar.tsx
var React11 = __toESM(require("react")), import_react_intersection_observer2 = require("react-intersection-observer"), import_jsx_runtime58 = require("react/jsx-runtime"), SkillBar = ({}) => {
  let skillsRef = React11.useRef({
    html: 90,
    css: 75,
    javascript: 90,
    react: 80,
    typescript: 70,
    nodejs: 65,
    nextjs: 85
  }), skillBarRefs = React11.useRef({}), { ref: skillsContainerRef, inView } = (0, import_react_intersection_observer2.useInView)({
    rootMargin: "-50px"
  });
  return React11.useEffect(() => {
    inView && (() => {
      Object.keys(skillsRef.current).forEach((key) => {
        var _a;
        let skillBar = skillBarRefs.current[key], speechBubble = (_a = skillBar == null ? void 0 : skillBar.parentElement) == null ? void 0 : _a.querySelector(".speech-bubble");
        skillBar && (skillBar.style.width = "0%", skillBar.offsetWidth, skillBar.style.width = `${skillsRef.current[key]}%`, skillBar.classList.add("animate"), skillBar.classList.add(`animate-${key}`)), speechBubble instanceof HTMLElement && (speechBubble.textContent = key.toUpperCase().replace(/\b\w/g, (c) => c.toUpperCase()), speechBubble.style.display = "block");
      });
    })();
  }, [inView]), /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { className: "container", ref: skillsContainerRef, children: [
    /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("h1", { className: "title-skills text-2xl uppercase text-center Resume__BigText", children: "Skills" }),
    Object.keys(skillsRef.current).map((key) => /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { className: "bar flex items-center my-[1em] mx-auto text-base sm:text-lg custom:text-xl", children: [
      /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("div", { className: "skill-name text-base sm:text-lg custom:text-xl uppercase mr-6 w-24 Resume__BigText", children: key.toUpperCase().replace(/\b\w/g, (c) => c.toUpperCase()) }),
      /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("div", { className: "bar-outer relative flex-grow", children: /* @__PURE__ */ (0, import_jsx_runtime58.jsx)(
        "div",
        {
          ref: (el) => {
            skillBarRefs.current[key] = el;
          },
          className: `bar-inner w-0 flex justify-end items-center font-semibold ${key} w-${skillsRef.current[key]} animate-${key}`,
          style: { width: `${skillsRef.current[key]}%` },
          children: `${skillsRef.current[key]}%`
        }
      ) })
    ] }, key))
  ] });
}, SkillBar_default = SkillBar;

// app/sections/Resume/Resume.tsx
var import_jsx_runtime59 = require("react/jsx-runtime"), links13 = () => [
  {
    rel: "stylesheet",
    href: Resume_default
  }
], Resume = ({}) => /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)("div", { className: "flex flex-col items-start justify-center gap-14 mb-20", id: "resume", children: [
  /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)("div", { className: "flex flex-row items-center text-2xl gap-3 font-medium rounded-3xl border-2 border-gray-300 text-textSmColor px-8 py-2", children: [
    /* @__PURE__ */ (0, import_jsx_runtime59.jsx)(SparkleSVG_default, {}),
    /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("h2", { children: "Resume" })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime59.jsx)(Education_default, {}),
  /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("div", { className: "spacer-div mt-10" }),
  /* @__PURE__ */ (0, import_jsx_runtime59.jsx)(WorkExperience_default, {}),
  /* @__PURE__ */ (0, import_jsx_runtime59.jsx)(Skills_default, {}),
  /* @__PURE__ */ (0, import_jsx_runtime59.jsx)(SkillBar_default, {})
] }), Resume_default2 = Resume;

// app/sections/Contact/Contact.tsx
var import_react9 = require("@remix-run/react");

// app/components/Alert.tsx
var import_jsx_runtime60 = require("react/jsx-runtime"), Alert = (props) => /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("div", { className: "Alert", children: props.type === "success" /* SUCCESS */ ? /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("div", { className: "bg-green-100 p-5 w-full rounded-lg", children: /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("div", { className: "flex justify-between", children: /* @__PURE__ */ (0, import_jsx_runtime60.jsxs)("div", { className: "flex space-x-3", children: [
  /* @__PURE__ */ (0, import_jsx_runtime60.jsx)(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      className: "flex-none fill-current text-green-500 h-4 w-4",
      children: /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("path", { d: "M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 16.518l-4.5-4.319 1.396-1.435 3.078 2.937 6.105-6.218 1.421 1.409-7.5 7.626z" })
    }
  ),
  /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("div", { className: "flex-1 leading-tight text-sm text-green-700 font-medium", children: props.message })
] }) }) }) : props.type === "error" /* ERROR */ ? /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("div", { className: "bg-red-100 p-5 w-full rounded-lg", children: /* @__PURE__ */ (0, import_jsx_runtime60.jsxs)("div", { className: "flex space-x-3", children: [
  /* @__PURE__ */ (0, import_jsx_runtime60.jsx)(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      className: "flex-none fill-current text-red-500 h-4 w-4",
      children: /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("path", { d: "M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.597 17.954l-4.591-4.55-4.555 4.596-1.405-1.405 4.547-4.592-4.593-4.552 1.405-1.405 4.588 4.543 4.545-4.589 1.416 1.403-4.546 4.587 4.592 4.548-1.403 1.416z" })
    }
  ),
  /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("div", { className: "leading-tight flex flex-col space-y-2", children: /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("div", { className: "flex-1 leading-tight text-sm text-red-600", children: props.message }) })
] }) }) : /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("div", { className: "bg-blue-100 p-5 w-full border-l-4 border-blue-500 rounded-lg", children: /* @__PURE__ */ (0, import_jsx_runtime60.jsxs)("div", { className: "flex space-x-3", children: [
  /* @__PURE__ */ (0, import_jsx_runtime60.jsx)(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      className: "flex-none fill-current text-blue-500 h-4 w-4",
      children: /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("path", { d: "M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-.001 5.75c.69 0 1.251.56 1.251 1.25s-.561 1.25-1.251 1.25-1.249-.56-1.249-1.25.559-1.25 1.249-1.25zm2.001 12.25h-4v-1c.484-.179 1-.201 1-.735v-4.467c0-.534-.516-.618-1-.797v-1h3v6.265c0 .535.517.558 1 .735v.999z" })
    }
  ),
  /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("div", { className: "flex-1 leading-tight text-sm text-blue-700", children: props.message })
] }) }) }), Alert_default = Alert;

// app/sections/Contact/Contact.tsx
var import_jsx_runtime61 = require("react/jsx-runtime"), links14 = () => [
  {
    rel: "stylesheet",
    href: Contact_default
  }
], ContactMeSection = (props) => {
  let { fieldErrors, transition } = props, { theme } = useTheme(), hasError = fieldErrors && Object.keys(fieldErrors).length > 0, hasSuccess = fieldErrors && Object.keys(fieldErrors).length === 0, errorMessageClassname = theme === "dark" /* DARK */ ? "text-[rgb(0, 255, 127)]" : "text-[rgb(255, 0, 0)]", buttonText = hasError ? "Failed to send" : transition.state === "submitting" ? "Sending..." : transition.state === "loading" ? "Sent!" : "Send";
  return /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("div", { className: "", id: "contact", children: [
    /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("div", { className: "flex flex-row items-center text-2xl gap-3 font-medium w-fit rounded-3xl border-2 border-gray-300 text-textSmColor px-8 py-2", children: [
      /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(SparkleSVG_default, {}),
      /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("h2", { children: "Contact Me" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("p", { className: "Slogan ContactMe__Slogan gradient-text my-6", children: [
      "Let's make something",
      /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("br", {}),
      "awesome together!"
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("div", { className: "contact-form-wrapper gap-5 mt-5 text-lg w-full", children: [
      hasError ? /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(
        Alert_default,
        {
          message: "Failed to send message, please try again.",
          type: "error" /* ERROR */
        }
      ) : hasSuccess ? /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(
        Alert_default,
        {
          message: "I've received your message :)",
          type: "success" /* SUCCESS */
        }
      ) : null,
      /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)(
        import_react9.Form,
        {
          id: contactFormHtmlId,
          method: "post",
          action: "/?index",
          className: "contact-form flex flex-col text-contact-label w-full",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("div", { className: "user-box relative", children: [
              /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(
                "input",
                {
                  id: "name" /* name */,
                  name: "name" /* name */,
                  type: "text",
                  required: !0,
                  pattern: "^[a-zA-Z\\s]+$",
                  className: "Form__Input relative block w-full md:w-[1/2] px-3 py-1"
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(
                "label",
                {
                  htmlFor: "name" /* name */,
                  className: "text-base pt-2 pb-1",
                  children: "Your name"
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("div", { className: `error text-sm font-medium italic ${errorMessageClassname}`, children: /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("p", { children: (fieldErrors == null ? void 0 : fieldErrors.name) && (fieldErrors == null ? void 0 : fieldErrors.name) }) })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("div", { className: "user-box relative", children: [
              /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(
                "input",
                {
                  id: "email" /* email */,
                  name: "email" /* email */,
                  type: "email",
                  required: !0,
                  pattern: "^[A-Za-z0-9._\\%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}$)",
                  className: "Form__Input relative block w-full md:w-[1/2] px-3 py-1"
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(
                "label",
                {
                  htmlFor: "email" /* email */,
                  className: "text-base pt-2 pb-1",
                  children: "Your email"
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("div", { className: `error text-sm font-medium italic ${errorMessageClassname}`, children: /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("p", { children: (fieldErrors == null ? void 0 : fieldErrors.email) && (fieldErrors == null ? void 0 : fieldErrors.email) }) })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("div", { className: "user-box relative", children: [
              /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(
                "textarea",
                {
                  id: "message" /* message */,
                  name: "message" /* message */,
                  required: !0,
                  className: "Form__Input relative block w-full md:w-[80%] px-3 py-1"
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(
                "label",
                {
                  htmlFor: "message" /* message */,
                  className: "text-textLgcolor text-base pt-2 pb-1",
                  children: "Your message"
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("div", { className: `error text-sm font-medium italic ${errorMessageClassname}`, children: /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("p", { children: (fieldErrors == null ? void 0 : fieldErrors.message) && (fieldErrors == null ? void 0 : fieldErrors.message) }) })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(
              "button",
              {
                type: "submit",
                name: "Send",
                className: "contact-btn border-2 border-contact-buttonBorder hover:bg-contact-buttonHover rounded-lg text-base mt-7 text-lgColor py-3 w-full",
                children: buttonText
              }
            )
          ]
        }
      )
    ] })
  ] });
}, Contact_default2 = ContactMeSection;

// app/routes/index.tsx
var import_jsx_runtime62 = require("react/jsx-runtime"), meta3 = () => ({
  title: PORTFOLIO_WEBSITE_NAME,
  description: WEBSITE_DESCRIPTION,
  keywords: WEBSITE_KEYWORDS,
  image: PORTFOLIO_IMAGE_URL,
  "twitter:title": PORTFOLIO_WEBSITE_NAME,
  "twitter:description": WEBSITE_DESCRIPTION,
  "twitter:alt": PORTFOLIO_WEBSITE_NAME,
  "twitter:image": PORTFOLIO_IMAGE_URL,
  "twitter:card": TWITTER_CARD_TYPE,
  "twitter:creator": TWITTER_ACC,
  "twitter:site": TWITTER_ACC,
  "og:url": WEBSITE_URL,
  "og:image": PORTFOLIO_IMAGE_URL,
  "og:title": PORTFOLIO_WEBSITE_NAME,
  "og:description": WEBSITE_DESCRIPTION,
  "og:image:width": IMAGE_WIDTH,
  "og:image:height": IMAGE_HEIGHT,
  author: AUTHOR,
  "theme-color": "#16181a"
}), links15 = () => [
  {
    rel: "canonical",
    href: "https://www.alissanguyen.com/"
  },
  ...links8(),
  ...links11(),
  ...links13(),
  ...links12(),
  ...links9(),
  ...links10(),
  ...links14()
], TRACKING_ID2 = "UA-223958752-1";
import_react_ga2.default.initialize(TRACKING_ID2);
var action2 = async ({
  request
}) => {
  let formData = await request.formData(), email = formData.get("email" /* email */), message = formData.get("message" /* message */), name = formData.get("name" /* name */), fields = { email, message }, fieldErrors = {
    email: validateEmail(email),
    message: validateMessage(message),
    name: validateName(name)
  };
  if (Object.values(fieldErrors).some(Boolean))
    return badRequest({ fieldErrors, fields });
  let coercedEmail = email, messageFields = {
    email: coercedEmail,
    message,
    name
  }, sgMail = require("@sendgrid/mail");
  sgMail.setApiKey(process.env.SENDGRID_SECRET_API_KEY);
  function createHtml(fromEmail, body) {
    return `<h3>From email: ${fromEmail}</h3>
    <p>Message: ${body}</p>`;
  }
  let msg = {
    to: "im.tamnguyen@gmail.com",
    // Change to your recipient
    from: "alissa.nguyen1211@gmail.com",
    // Change to your verified sender
    text: messageFields.message,
    subject: "You got an email from " + messageFields.name,
    html: createHtml(
      messageFields.email,
      messageFields.message
    )
  }, returnedMsg = {
    to: messageFields.email,
    from: "alissa.nguyen1211@gmail.com",
    text: "Hi " + messageFields.name + ". Thank you for reaching out, I got your message! I will reply as soon as possible. This is an automated response, please do not respond to this email.",
    subject: "Thank you for reaching out - alissanguyen.com"
  };
  try {
    let jsonResponse = await sgMail.send(msg).then(() => (sgMail.send(returnedMsg), {
      status: 200
    })).catch((error) => (console.error(error), {
      status: error && error.status ? error.status : 500
    }));
    return (0, import_node5.json)(
      {
        status: 200,
        fieldErrors: {}
      },
      jsonResponse
    );
  } catch (error) {
    return console.error("Failed to send confirmation email to: ", coercedEmail), (0, import_node5.json)(
      {
        status: 200,
        fieldErrors: {}
      },
      {
        status: error && error.status ? error.status : 500
      }
    );
  }
}, Index = () => {
  let actionData = (0, import_react10.useActionData)(), transition = (0, import_react10.useNavigation)();
  return React12.useEffect(() => {
    import_react_ga2.default.pageview(window.location.pathname + window.location.search);
  }, []), React12.useEffect(() => {
    let maybeContactForm = document.getElementById(
      contactFormHtmlId
    );
    maybeContactForm && actionData && actionData.status === 200 && maybeContactForm.reset();
  }, [actionData]), /* @__PURE__ */ (0, import_jsx_runtime62.jsx)(import_jsx_runtime62.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime62.jsx)("div", { className: "app tracking-wide text-lg", children: /* @__PURE__ */ (0, import_jsx_runtime62.jsxs)("div", { className: `${fixedWidthLayoutClasses} flex flex-col`, children: [
    /* @__PURE__ */ (0, import_jsx_runtime62.jsx)(AboutMe_default2, {}),
    /* @__PURE__ */ (0, import_jsx_runtime62.jsxs)("div", { style: { zIndex: -10 }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime62.jsx)(GradientBackground3, {}),
      /* @__PURE__ */ (0, import_jsx_runtime62.jsx)("div", { className: "spacer-div" }),
      /* @__PURE__ */ (0, import_jsx_runtime62.jsx)(EatLearnCode, {})
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime62.jsx)("div", { className: "spacer-div mt-24 custom2:mt-24" }),
    /* @__PURE__ */ (0, import_jsx_runtime62.jsx)(Portfolio_default, {}),
    /* @__PURE__ */ (0, import_jsx_runtime62.jsx)(Resume_default2, {}),
    /* @__PURE__ */ (0, import_jsx_runtime62.jsx)("div", { className: "spacer-div mt-24 custom2:mt-24" }),
    /* @__PURE__ */ (0, import_jsx_runtime62.jsxs)("section", { id: "projects", children: [
      /* @__PURE__ */ (0, import_jsx_runtime62.jsx)("div", { className: "spacer-div sm:mt-0" }),
      /* @__PURE__ */ (0, import_jsx_runtime62.jsx)(Projects_default2, {})
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime62.jsx)("div", { className: "spacer-div mt-24" }),
    /* @__PURE__ */ (0, import_jsx_runtime62.jsx)("div", { className: "spacer-div mt-10" }),
    /* @__PURE__ */ (0, import_jsx_runtime62.jsx)(Contact_default2, { fieldErrors: actionData == null ? void 0 : actionData.fieldErrors, transition }),
    /* @__PURE__ */ (0, import_jsx_runtime62.jsx)("div", { className: "spacer-div mt-40" })
  ] }) }) });
}, routes_default = Index;

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-ZQMZOO6V.js", imports: ["/build/_shared/chunk-QTOISSCT.js", "/build/_shared/chunk-N2FB77O6.js", "/build/_shared/chunk-G5WX4PPA.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-QMPEJRGA.js", imports: ["/build/_shared/chunk-WM4R2D5A.js", "/build/_shared/chunk-PWJ6RDIJ.js", "/build/_shared/chunk-TSCNWABW.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !0, hasErrorBoundary: !0 }, "routes/blog/$slug": { id: "routes/blog/$slug", parentId: "root", path: "blog/:slug", index: void 0, caseSensitive: void 0, module: "/build/routes/blog/$slug-CL6YI2VB.js", imports: ["/build/_shared/chunk-DBNUPW5F.js", "/build/_shared/chunk-ED3W36GT.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/blog/index": { id: "routes/blog/index", parentId: "root", path: "blog", index: !0, caseSensitive: void 0, module: "/build/routes/blog/index-MWIM77HU.js", imports: ["/build/_shared/chunk-DBNUPW5F.js", "/build/_shared/chunk-JIEKIH64.js", "/build/_shared/chunk-ED3W36GT.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-6XPFSMKY.js", imports: ["/build/_shared/chunk-JIEKIH64.js", "/build/_shared/chunk-ED3W36GT.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/resume/index": { id: "routes/resume/index", parentId: "root", path: "resume", index: !0, caseSensitive: void 0, module: "/build/routes/resume/index-7AMS43LA.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/setTheme/index": { id: "routes/setTheme/index", parentId: "root", path: "setTheme", index: !0, caseSensitive: void 0, module: "/build/routes/setTheme/index-CDRSYI2A.js", imports: void 0, hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, version: "0057beaa", hmr: void 0, url: "/build/manifest-0057BEAA.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", future = { v2_dev: !1, unstable_postcss: !1, unstable_tailwind: !1, v2_errorBoundary: !1, v2_headers: !1, v2_meta: !1, v2_normalizeFormMethod: !1, v2_routeConvention: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/setTheme/index": {
    id: "routes/setTheme/index",
    parentId: "root",
    path: "setTheme",
    index: !0,
    caseSensitive: void 0,
    module: setTheme_exports
  },
  "routes/resume/index": {
    id: "routes/resume/index",
    parentId: "root",
    path: "resume",
    index: !0,
    caseSensitive: void 0,
    module: resume_exports
  },
  "routes/blog/$slug": {
    id: "routes/blog/$slug",
    parentId: "root",
    path: "blog/:slug",
    index: void 0,
    caseSensitive: void 0,
    module: slug_exports
  },
  "routes/blog/index": {
    id: "routes/blog/index",
    parentId: "root",
    path: "blog",
    index: !0,
    caseSensitive: void 0,
    module: blog_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
