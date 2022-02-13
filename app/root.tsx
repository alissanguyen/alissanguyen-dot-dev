import {
  Links,
  LinksFunction,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "remix";
import type { MetaFunction } from "remix";
import tailwind from "../app/tailwind.css";
import globalStyles from "./styles/global.css";
import { SupportedTheme } from "./types";
import React from "react";
import decorationStyles from "./styles/decoration.css";
import NavBar from "./components/NavBar/NavBar";
import navbarStyleSheet from "./components/NavBar/NavBar.css";
import themeBtnStyles from "./components/ThemeButton/ThemeButton.css";
import socialMediaStyles from "./components/SocialMedia/SocialMedia.css";
import resumeBtnStyles from "~/components/ResumeButton/ResumeButton.css";
import blogButtonStyles from "~/components/BlogButton/BlogButton.css";
import Footer from "./components/Footer/Footer";

export const meta: MetaFunction = () => {
  const description = "Alissa Nguyen / Tam Nguyen portfolio website";
  const keywords =
    "remix, react, javascript, typescript, personal blog, blog, alissa nguyen, alissa, tam nguyen, developer website, tech, software engineer, programming, programmer, web developer";
  return {
    title: "Alissa's Portfolio",
    description: description,
    keywords: keywords
  };
};

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: tailwind },
    { rel: "stylesheet", href: themeBtnStyles },
    { rel: "stylesheet", href: navbarStyleSheet },
    { rel: "stylesheet", href: socialMediaStyles },
    { rel: "stylesheet", href: globalStyles },
    { rel: "stylesheet", href: decorationStyles },
    { rel: "stylesheet", href: blogButtonStyles },
    { rel: "stylesheet", href: resumeBtnStyles }
  ];
};


const App: React.FC = () => {
  // Default theme dark
  const [theme, setTheme] = React.useState<SupportedTheme>(SupportedTheme.DARK);

  const toggleTheme = () => {
    theme === SupportedTheme.DARK
      ? setTheme(SupportedTheme.LIGHT)
      : setTheme(SupportedTheme.DARK);
    console.log("Theme set to " + theme);
  };
  return (
    <Document theme={theme}>
      <Layout setTheme={toggleTheme} theme={theme}>
        <Outlet />
      </Layout>
    </Document>
  );
};
export default App;

const convertSupportedThemeToClassName = (theme: SupportedTheme): string => {
  switch (theme) {
    case SupportedTheme.LIGHT:
      return "light-theme";
    case SupportedTheme.DARK:
      return "dark-theme";
  }
};

const Document: React.FC<{ theme: SupportedTheme }> = (props) => {
  return (
    <html
      lang="en"
      className={`${convertSupportedThemeToClassName(props.theme)}`}
    >
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        <script
          src="https://kit.fontawesome.com/aa319776fa.js"
          crossOrigin="anonymous"
        ></script>
        {/* <link
          href="https://www.dafontfree.net/embed/Z3JhcGhpay1yZWd1bGFyJmRhdGEvMjUvZy8xMjc4MzEvR1JBUEhJSy50dGY"
          rel="stylesheet"
          type="text/css"
        /> */}
      </head>
      <body id="root">
        <div>
          {props.children}
          <ScrollRestoration />
          <Scripts />
          {process.env.NODE_ENV === "development" && <LiveReload />}
        </div>
      </body>
    </html>
  );
};

interface LayoutProps {
  theme: SupportedTheme;
  setTheme: () => void;
}

const Layout: React.FC<LayoutProps> = (props) => {
  return (
    <div>
      {/* Navbar contains theme toggle switch */}
      <NavBar toggleTheme={props.setTheme} theme={props.theme} />
      <div>{props.children}</div>
      <Footer />
    </div>
  );
};

export function ErrorBoundary({ error }: { error: any }) {
  return (
    <>
      <h1>Error</h1>
      <p>{error.message}</p>
    </>
  );
}
