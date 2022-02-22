import { json, LoaderFunction, redirect } from "remix";
import type { ActionFunction } from "remix";
import { getThemeSession, isTheme } from "~/utils/theme.server";

export const action: ActionFunction = async ({ request }) => {
  const themeSession = await getThemeSession(request);
  const formData = await request.formData();

  const theme = formData.get("theme");

  if (!isTheme(theme)) {
    return json({
      success: false,
      message: `theme value of ${theme} is not a valid theme`
    });
  }

  themeSession.setTheme(theme);


  return new Response(undefined, {
    headers: {
      "Set-Cookie": await themeSession.commit()
    }
  });
};

export const loader: LoaderFunction = async () => {
  return redirect("/", { status: 404 });
};
