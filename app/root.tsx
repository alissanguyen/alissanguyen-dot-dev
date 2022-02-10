import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "remix";
import type { MetaFunction } from "remix";
import styles from "../app/tailwind.css";
import globalStyles from "./styles/global.css";
import { SupportedTheme } from "./types";
import React from "react";
import decorationStyles from "./styles/decoration.css";
import NavBar from "./components/NavBar/NavBar";
import { links as navStyles } from "./components/NavBar/NavBar";
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
export function links() {
  return [
    ...navStyles(),
    { rel: "stylesheet", href: styles },
    { rel: "stylesheet", href: globalStyles },
    { rel: "stylesheet", href: decorationStyles }
  ];
}
export default function App() {
  const [theme, setTheme] = React.useState<SupportedTheme>(
    SupportedTheme.LIGHT
  );

  function toggleTheme() {
    if (theme === SupportedTheme.DARK) {
      setTheme(SupportedTheme.LIGHT);
    }
    if (theme === SupportedTheme.LIGHT) {
      setTheme(SupportedTheme.DARK);
    }
    console.log("toggle");
  }
  return (
    <Document theme={theme}>
      <Layout setTheme={toggleTheme}>
        <Outlet />
      </Layout>
    </Document>
  );
}

const convertSupportedThemeToClassName = (theme: SupportedTheme): string => {
  switch (theme) {
    case SupportedTheme.LIGHT:
      return "theme-light";
    case SupportedTheme.DARK:
      return "theme-dark";
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
        <link
          href="https://www.dafontfree.net/embed/Z3JhcGhpay1yZWd1bGFyJmRhdGEvMjUvZy8xMjc4MzEvR1JBUEhJSy50dGY"
          rel="stylesheet"
          type="text/css"
        />
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
  setTheme: () => void;
}

const Layout: React.FC<LayoutProps> = (props) => {
  return (
    <div>
      <NavBar />
      <div>{props.children}</div>
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
