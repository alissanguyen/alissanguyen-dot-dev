import { Link } from "@remix-run/react";
import { useTheme } from "~/providers/ThemeProvider";
import { SupportedTheme } from "~/types";

/**
 * 1. Light Mode = text-gray-500 hover:text-black;
 * 2. Dark Mode = text-gray-400 hover:text-white
 */

const getTextColorClassNameForNavLink = (
  currentTheme: SupportedTheme
) => {
  if (currentTheme === SupportedTheme.DARK) {
    return "text-gray-400 hover:text-white";
  }

  if (currentTheme === SupportedTheme.LIGHT) {
    return "text-gray-400 hover:text-black";
  }
};

type NavLinkProps = Omit<Parameters<typeof Link>["0"], "to"> & {
  to: string;
} & {
  isCurrentRoute: boolean;
};

const NavLink: React.FC<NavLinkProps> = ({
  to,
  isCurrentRoute,
  ...rest
}) => {
  const { theme } = useTheme();

  const textColorClassName = getTextColorClassNameForNavLink(
    theme
  );
  const IS_CURRENT_ROUTE_CLASSNAME = "NavLink--is-active-route text-navBar-linkActive";

  return (
    <li className="px-5 py-2">
      <Link
        prefetch="intent"
        className={`underlined focus:outline-none block whitespace-nowrap text-lg font-medium ${textColorClassName} ${isCurrentRoute ? IS_CURRENT_ROUTE_CLASSNAME : null
          }`}
        to={to}
        {...rest}
      />
    </li>
  );
};

export default NavLink;
