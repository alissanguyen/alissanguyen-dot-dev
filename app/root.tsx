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
import tailwind from "../app/tailwind.css";
import globalStyles from "./styles/global.css";
import { SupportedTheme } from "./types";
import * as React from "react";
import NavBar from "./components/NavBar/NavBar";
import navbarStyleSheet from "./components/NavBar/NavBar.css";
import errorPageStyles from "./components/Error/ErrorPage.css";
import themeBtnStyles from "./components/ThemeButton/ThemeButton.css";

import Footer from "./components/Footer/Footer";
import { ThemeContextProvider, useTheme } from "./providers/ThemeProvider";
import {
  ModalContextProvider,
  useModalContext
} from "./providers/ModalProvider";
import { getThemeSession } from "./utils/theme.server";
import ErrorPage from "./components/Error/ErrorPage";
import { injectGA } from "~/utils/ga.jsx";

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: tailwind },
    { rel: "stylesheet", href: themeBtnStyles },
    { rel: "stylesheet", href: navbarStyleSheet },
    { rel: "stylesheet", href: globalStyles },
    { rel: "stylesheet", href: errorPageStyles },
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com"
    },
    {
      rel: "stylesheet",
      href: "/fonts/zen_kaku_gothic_antique.css"
    },
    {
      rel: "stylesheet",
      href: "/fonts/pacifico.css"
    },
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
  ];
};
export const loader: LoaderFunction = async ({ request, params }) => {
  const themeValue = await getThemeSession(request);
  return {
    theme: themeValue.getTheme()
  };
};

const App: React.FC = () => {
  const { theme } = useLoaderData();

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
  React.useEffect(() => {
    /**
     * We want to add this class that makes background color transitions smooth
     * only after the initial render. If the initial markup has this rule applied
     * then users on dark-mode see a flash of unthemed content which then
     * transitions to dark mode.
     *
     * By doing this after the initial paint, only further theme switches will
     * have the background-color transition animation
     */
    document.body.classList.add("Background__ColorTransition--short");
  }, []);
  return (
    <html
      lang="en"
      className={`${convertSupportedThemeToClassName(theme, onBlogRoute)}`}
    >
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="googlebot" content="notranslate" />
        {process.env.NODE_ENV === "production" ? (
          <base href="https://www.alissanguyen.dev"></base>
        ) : null}
        <Meta />
        <Links />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-4J0L3BTY29"
        ></script>
        <script>{injectGA()}</script>
      </head>
      <body id="root" className={`${modalIsOpen ? "overflow-hidden" : ""}`}>
        <script
          async
          src="https://platform.twitter.com/widgets.js"
          charSet="utf-8"
        ></script>
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
      <div className="Document__Content">{props.children}</div>
      <Footer />
    </>
  );
};

export function ErrorBoundary({ error }: { error: Error }) {
  const location = useLocation();
  return (
    <html lang="en" className="dark">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <title>Oh no...</title>
        <Links />
      </head>
      <body id="root">
        <div className="app tracking-wide text-lg overflow-hidden">
          <ErrorPage
            error={error}
            heroMsg="500 - Oh no, something did not go well."
            pathname={location.pathname}
            subMsg="is currently not working. So sorry."
          />
        </div>
        <Scripts />
        <Footer />
      </body>
    </html>
  );
}

export const CatchBoundary: React.FC = (props) => {
  const caught = useCatch();
  const location = useLocation();
  if (caught.status === 404) {
    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <Meta />
          <title>404 - Oh no...</title>
          <Links />
        </head>
        <body id="root">
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
          <div className="app tracking-wide overflow-hidden">
            <ErrorPage
              heroMsg="404 - Oh no, you found a page that's missing stuff."
              pathname={location.pathname}
              subMsg="is not a page on alissanguyen.dev. So sorry."
            />
          </div>
          {props.children}
        </body>
      </html>
    );
  }
  throw new Error(`Unhandled error: ${caught.status}`);
};

export default App;
