import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "remix";
import type { MetaFunction } from "remix";
import styles from "../app/tailwind.css";
import globalStyles from "./styles/global.css";
import { fixedWidthLayoutClasses } from "./constants";
import { SupportedTheme } from "./types";
import React from "react";
import componentsStyles from "./styles/components.css";
import skillsStyles from "./styles/myskills.css";
import contactStyles from "./styles/contact.css";
import decorationStyles from "./styles/decoration.css";

export const meta: MetaFunction = () => {
  const description = "Alissa Nguyen / Tam Nguyen portfolio website";
  const keywords =
    "remix, react, javascript, typescript, personal blog, blog, alissa nguyen, alissa, tam nguyen, developer website, tech, software engineer, programming, programmer, web developer";
  return {
    title: "Alissa's Portfolio",
    description: description,
    keywords: keywords,
  };
};
export function links() {
  return [
    { rel: "stylesheet", href: styles },
    { rel: "stylesheet", href: componentsStyles },
    { rel: "stylesheet", href: globalStyles },
    { rel: "stylesheet", href: skillsStyles },
    { rel: "stylesheet", href: contactStyles },
    { rel: "stylesheet", href: decorationStyles },
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
      <div className={fixedWidthLayoutClasses}>{props.children}</div>
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
