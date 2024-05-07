import tailwind from "./tailwind.css";
import globalStyles from "./styles/global.css";
import navbarStyleSheet from "./components/NavBar/NavBar.css";
import errorPageStyles from "./components/Error/ErrorPage.css";
import themeBtnStyles from "./components/ThemeButton/ThemeButton.css";
import {
  LinksFunction,
  LoaderFunction,
} from "@remix-run/node";
import {
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useLocation,
  Links,
  useRouteError,
  isRouteErrorResponse
} from "@remix-run/react"
import { SupportedTheme } from "./types";
import * as React from "react";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import { ThemeContextProvider, useTheme } from "./providers/ThemeProvider";
import {
  ModalContextProvider,
} from "./providers/ModalProvider";
import { getThemeSession } from "./utils/theme.server";
import ErrorPage from "./components/Error/ErrorPage";

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: tailwind },
    { rel: "stylesheet", href: themeBtnStyles },
    { rel: "stylesheet", href: navbarStyleSheet },
    { rel: "stylesheet", href: globalStyles },
    { rel: "stylesheet", href: errorPageStyles },
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

const App: React.FC<React.PropsWithChildren> = () => {
  const { theme } = useLoaderData<{ theme: SupportedTheme }>();

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

const Document: React.FC<React.PropsWithChildren> = (props) => {
  const { theme } = useTheme();
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
        {process.env.NODE_ENV === "production" ? (
          <base href="https://www.alissanguyen.com"></base>
        ) : null}
        <Meta />
        <Links />
      </head>
      <body id="root">
        <script
          async
          src="https://platform.twitter.com/widgets.js"
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
        <ScrollRestoration getKey={(location, matches) => { return location.key }} />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload port={Number(process.env.REMIX_DEV_SERVER_WS_PORT)} />}
      </body>
    </html>
  );
};

const Layout: React.FC<React.PropsWithChildren> = (props) => {
  const [navbarOpacity, setNavbarOpacity] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      const newOpacity = Math.min(scrollPosition / 200, 0.2);

      setNavbarOpacity(newOpacity);

      // Save the scroll position to localStorage
      localStorage.setItem("scrollPosition", scrollPosition.toString());
    };

    // Check if there is a stored scroll position in localStorage
    const savedScrollPosition = localStorage.getItem("scrollPosition");
    if (savedScrollPosition) {
      const scrollPosition = parseInt(savedScrollPosition);
      window.scrollTo(0, scrollPosition);

      // Calculate the initial opacity based on the stored scroll position
      const initialOpacity = Math.min(scrollPosition / 200, 0.2);
      setNavbarOpacity(initialOpacity);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <NavBar navbarOpacity={navbarOpacity} />
      <ScrollRestoration getKey={(location, matches) => { console.log(location.key); return location.key }} />
      <div className="Document__Content screen-body">{props.children}</div>
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

export const CatchBoundary: React.FC<React.PropsWithChildren> = (props) => {
  const error = useRouteError();

  // when true, this is what used to go to `CatchBoundary`
  if (isRouteErrorResponse(error)) {
    return (
      <div>
        <h1>Oops</h1>
        <p>Status: {error.status}</p>
        <p>{error.data.message}</p>
      </div>
    );
  }

  // Don't forget to typecheck with your own logic.
  // Any value can be thrown, not just errors!
  let errorMessage = "Unknown error";

  return (
    <div>
      <h1>Uh oh ...</h1>
      <p>Something went wrong.</p>
      <pre>{errorMessage}</pre>
    </div>
  );
};

export default App;
