import {
  Links,
  LinksFunction,
  LiveReload,
  LoaderFunction,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
  useLoaderData,
  useLocation
} from "remix";
import type { MetaFunction } from "remix";
import tailwind from "../app/tailwind.css";
import globalStyles from "./styles/global.css";
import { SupportedTheme } from "./types";
import * as React from "react";
import NavBar from "./components/NavBar/NavBar";
import navbarStyleSheet from "./components/NavBar/NavBar.css";
import errorPageStyles from "./components/Error/ErrorPage.css";
import themeBtnStyles from "./components/ThemeButton/ThemeButton.css";
import socialMediaStyles from "./components/SocialMedia/SocialMedia.css";
import resumeBtnStyles from "~/components/ResumeButton/ResumeButton.css";
import Footer from "./components/Footer/Footer";

import { ThemeContextProvider, useTheme } from "./providers/ThemeProvider";
import {
  ModalContextProvider,
  useModalContext
} from "./providers/ModalProvider";
import { getThemeSession } from "./utils/theme.server";
import ErrorPage from "./components/Error/ErrorPage";
import { handleWebTitle } from "./utils/functions";

export const meta: MetaFunction = ({ data, location }) => {
  const description = "Alissa Nguyen / Tam Nguyen website";
  const keywords =
    "remix, react, javascript, typescript, personal blog, blog, alissa nguyen, alissa, tam nguyen, developer website, tech, software engineer, programming, programmer, web developer";
  return {
    title: handleWebTitle(location),
    description: description,
    keywords: keywords,
    "twitter:image":
      "https://www.alissanguyen.dev/build/_assets/avatar-GMY7Q2BH.png",
    "twitter:card": "summary_large_image",
    "twitter:creator": "@alissa_nguyen14",
    "twitter:site": "@alissa_nguyen14",

    author: "Tam Nguyen"
  };
};

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: tailwind },
    { rel: "stylesheet", href: themeBtnStyles },
    { rel: "stylesheet", href: navbarStyleSheet },
    { rel: "stylesheet", href: socialMediaStyles },
    { rel: "stylesheet", href: globalStyles },
    { rel: "stylesheet", href: resumeBtnStyles },
    { rel: "stylesheet", href: errorPageStyles }
  ];
};

export const loader: LoaderFunction = async ({ request, params }) => {
  const themeValue = await getThemeSession(request);
  return {
    theme: themeValue.getTheme()
  };
};

const App: React.FC = () => {
  const { theme, title } = useLoaderData();

  return (
    <ThemeContextProvider initialTheme={theme}>
      <ModalContextProvider>
        <Document>
          <Layout>
            <Outlet />
          </Layout>
        </Document>
      </ModalContextProvider>
    </ThemeContextProvider>
  );
};
export default App;

const convertSupportedThemeToClassName = (
  theme: SupportedTheme,
  onBlogRoute: boolean
): string => {
  if (theme === SupportedTheme.LIGHT) {
    if (onBlogRoute) {
      return "light-theme light-theme-blog";
    }
    return "light-theme";
  } else {
    if (onBlogRoute) {
      return "dark-theme dark-theme-blog";
    }
    return "dark-theme";
  }
};

const Document: React.FC = (props) => {
  const { theme } = useTheme();
  const { modalIsOpen } = useModalContext();
  const location = useLocation();
  const onBlogRoute = location.pathname.startsWith("/blog");
  return (
    <html
      lang="en"
      className={`${convertSupportedThemeToClassName(theme, onBlogRoute)}`}
    >
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#A9ADC1"></meta>
        <Meta />
        <Links />
        <script
          async
          defer
          crossOrigin="anonymous"
          src="https://connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v13.0"
          nonce="qjEaQMdu"
        ></script>
        <script
          async
          src="https://platform.twitter.com/widgets.js"
          charSet="utf-8"
        ></script>
        <script
          src="https://kit.fontawesome.com/aa319776fa.js"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body id="root" className={`${modalIsOpen ? "overflow-hidden" : ""}`}>
        <noscript>
          <div
            style={{
              backgroundColor: "black",
              color: "white",
              padding: 30
            }}
          >
            <p style={{ fontSize: "1.5em" }}>
              This site works much better with JavaScript enabled...
            </p>
          </div>
        </noscript>
        {props.children}
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
};

const Layout: React.FC = (props) => {
  return (
    <>
      <NavBar />
      <div>{props.children}</div>
      <Footer />
    </>
  );
};

export function ErrorBoundary({ error }: { error: Error }) {
  const location = useLocation();
  return (
    <html lang="en" className="dark">
      <head>
        <title>Oh no...</title>
        <Links />
      </head>
      <body id="root" className="">
        <ErrorPage
          error={error}
          heroMsg="500 - Oh no, something did not go well."
          pathname={location.pathname}
          subMsg="is currently not working. So sorry."
        />
        <Scripts />
        <Footer />
      </body>
    </html>
  );
}

export function CatchBoundary() {
  const caught = useCatch();
  const location = useLocation();

  if (caught.status === 404) {
    return (
      <html lang="en" className="">
        <head>
          <title>Oh no...</title>
          <Links />
        </head>
        <body id="root" className="">
          <ErrorPage
            heroMsg="404 - Oh no, you found a page that's missing stuff."
            pathname={location.pathname}
            subMsg="is not a page on alissanguyen.dev. So sorry."
          />
          <Scripts />
          <Footer />
        </body>
      </html>
    );
  }
  throw new Error(`Unhandled error: ${caught.status}`);
}
