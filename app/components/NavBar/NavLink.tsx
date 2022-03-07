import clsx from "clsx";
import { Link, useLocation } from "remix";
import { useTheme } from "~/providers/ThemeProvider";
import { SupportedTheme } from "~/types";

/**
 * 1. Stripe Header & Light Mode = text-gray-200 hover:text-white
 * 2. Stripe Header & Dark Mode = text-white hover:text-cyan-300
 * 3. Light Mode = text-gray-600 hover:text-black;
 * 4. Dark Mode = text-gray-300 hover:text-white
 */

const getTextColorClassNameForNavLink = (
  hasStripeHeader: boolean,
  currentTheme: SupportedTheme
) => {
  if (currentTheme === SupportedTheme.DARK) {
    return hasStripeHeader
      ? "text-white hover:text-cyan-300"
      : "text-gray-300 hover:text-white";
  }

  if (currentTheme === SupportedTheme.LIGHT) {
    return hasStripeHeader
      ? "text-gray-200 hover:text-white"
      : "text-gray-600 hover:text-black";
  }
};

type NavLinkProps = Omit<Parameters<typeof Link>["0"], "to"> & {
  to: string;
} & {
  hasStripeBackground: boolean;
  isCurrentRoute: boolean;
};

const IS_CURRENT_ROUTE_CLASSNAME = "NavLink--is-active-route";

const NavLink: React.FC<NavLinkProps> = ({
  to,
  hasStripeBackground,
  isCurrentRoute,
  ...rest
}) => {
  const { theme } = useTheme();

  const textColorClassName = getTextColorClassNameForNavLink(
    hasStripeBackground,
    theme
  );

  return (
    <li className="px-5 py-2">
      <Link
        prefetch="intent"
        className={clsx(
          textColorClassName,
          isCurrentRoute ? IS_CURRENT_ROUTE_CLASSNAME : null,
          "underlined focus:outline-none block whitespace-nowrap text-lg font-medium"
        )}
        to={to}
        {...rest}
      />
    </li>
  );
};

export default NavLink;
