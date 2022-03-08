import { Link } from "remix";
import { useTheme } from "~/providers/ThemeProvider";
import { SupportedTheme } from "~/types";

/**
 * 1. Stripe Header & Light Mode = text-white hover:text-cyan-400
 * 2. Stripe Header & Dark Mode = text-white hover:text-cyan-300
 * 3. Light Mode = text-gray-500 hover:text-black;
 * 4. Dark Mode = text-gray-400 hover:text-white
 */

const getTextColorClassNameForNavLink = (
  hasStripeHeader: boolean,
  currentTheme: SupportedTheme
) => {
  if (currentTheme === SupportedTheme.DARK) {
    return hasStripeHeader
      ? "text-white hover:text-cyan-300"
      : "text-gray-400 hover:text-white";
  }

  if (currentTheme === SupportedTheme.LIGHT) {
    return hasStripeHeader
      ? "text-white hover:text-cyan-400"
      : "text-gray-400 hover:text-black";
  }
};

type NavLinkProps = Omit<Parameters<typeof Link>["0"], "to"> & {
  to: string;
} & {
  hasStripeBackground: boolean;
  isCurrentRoute: boolean;
};

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
  const IS_CURRENT_ROUTE_CLASSNAME = hasStripeBackground
    ? "NavLink--is-active-route text-cyan-300"
    : "NavLink--is-active-route text-navBar-linkActive";


  return (
    <li className="px-5 py-2">
      <Link
        prefetch="intent"
        className={`underlined focus:outline-none block whitespace-nowrap text-lg font-medium ${textColorClassName} ${
          isCurrentRoute ? IS_CURRENT_ROUTE_CLASSNAME : null
        }`}
        to={to}
        {...rest}
      />
    </li>
  );
};

export default NavLink;
