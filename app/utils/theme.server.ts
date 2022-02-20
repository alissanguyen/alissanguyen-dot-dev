import { createCookieSessionStorage } from "remix";
import { THEME_COOKIE_KEY } from "~/constants";
import { SupportedTheme } from "~/types";

const sessionSecret = process.env.SESSION_SECRET;
if (!sessionSecret) {
  throw new Error("SESSION_SECRET must be set");
}



const themeStorage = createCookieSessionStorage({
  cookie: {
    name: "alissa_nguyen_dev_theme",
    secure: true,
    secrets: [sessionSecret],
    sameSite: "lax",
    path: "/",
    httpOnly: true
  }
});

export async function getThemeSession(request: Request) {
  const session = await themeStorage.getSession(request.headers.get("Cookie"));
  return {
    getTheme: () => {
      const themeValue = session.get(THEME_COOKIE_KEY);
      return isTheme(themeValue) ? themeValue : SupportedTheme.LIGHT;
    },
    setTheme: (theme: SupportedTheme) => session.set(THEME_COOKIE_KEY, theme),
    commit: () => themeStorage.commitSession(session)
  };
}

export const isTheme = (maybeTheme: unknown): maybeTheme is SupportedTheme => {
  return (
    maybeTheme === SupportedTheme.DARK || maybeTheme === SupportedTheme.LIGHT
  );
};
