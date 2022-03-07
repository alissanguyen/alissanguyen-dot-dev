import * as React from "react";
import { Link, useLocation } from "remix";
import ThemeButton from "../ThemeButton/ThemeButton";
import { useModalContext } from "~/providers/ModalProvider";
import { fixedWidthLayoutClasses, topLevelLinks } from "~/constants";
import NavLink from "./NavLink";
import MobileMenu from "./MobileMenu";
import { useTheme } from "~/providers/ThemeProvider";
import { SupportedTheme } from "~/types";

const Navbar: React.FC = () => {
  const location = useLocation();
  const hasStripeBackground = !location.pathname.startsWith("/blog");
  const { modalIsOpen } = useModalContext();

  const currentTopLevelRoute = location.pathname.split("/")[1];

  return (
    <>
      <div className={fixedWidthLayoutClasses}>
        <nav className="px-5vw nav-bar-wrapper xl:py-10 xl:pb-15 w-full flex mx-auto flex max-w-8xl items-center justify-between">
          <div>
            <NavLogo hasStripeBackground={hasStripeBackground} />
          </div>

          <ul className="hidden lg:flex">
            {topLevelLinks.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                hasStripeBackground={hasStripeBackground}
                isCurrentRoute={getIsActiveRoute(
                  link.href,
                  currentTopLevelRoute
                )}
              >
                {link.displayName}
              </NavLink>
            ))}
          </ul>

          <div className="flex items-center justify-center">
            <div className="block lg:hidden">
              <MobileMenu hasStripeHeader={hasStripeBackground} />
            </div>
            <div className="noscript-hidden hidden lg:block">
              <ThemeButton hasStripeHeader={hasStripeBackground} />
            </div>
          </div>
        </nav>
      </div>
      {hasStripeBackground && !modalIsOpen && (
        <div id="stripes">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      )}
    </>
  );
};

const getIsActiveRoute = (href: string, currentTopLevelRoute: string) => {
  if (href.startsWith("/#")) {
    return false;
  }

  return "/" + currentTopLevelRoute === href;
};

export default Navbar;

interface Props {
  hasStripeBackground: boolean;
}
const NavLogo: React.FC<Props> = (props) => {
  const { theme } = useTheme();

  const logoText = props.hasStripeBackground
    ? "text-white hover:text-cyan-200"
    : !props.hasStripeBackground && theme === SupportedTheme.DARK
    ? "text-white hover:text-gray-300"
    : "text-black hover:text-gray-600";
  return (
    <Link
      prefetch="intent"
      to="/"
      className={`logo underlined focus:outline-none block whitespace-nowrap text-2xl font-medium transition uppercase ${logoText}`}
    >
      <h1 className={logoText}>Alissa Nguyen</h1>
    </Link>
  );
};
