import * as React from "react";
import { Link, useLocation } from "remix";
import ThemeButton from "../ThemeButton/ThemeButton";
import { useModalContext } from "~/providers/ModalProvider";
import { fixedWidthLayoutClasses, topLevelLinks } from "~/constants";
import NavLink from "./NavLink";
import MobileMenu from "./MobileMenu";

const Navbar: React.FC = () => {
  const location = useLocation();
  const hasStripeBackground = !location.pathname.startsWith("/blog");
  const { modalIsOpen } = useModalContext();
  return (
    <>
      <div className={fixedWidthLayoutClasses}>
        <nav className="px-5vw py-9 lg:py-12 nav-bar-wrapper w-full flex mx-auto flex max-w-8xl items-center justify-between">
          <div>
            <Link
              prefetch="intent"
              to="/"
              className="underlined focus:outline-none block whitespace-nowrap text-2xl font-medium transition uppercase"
            >
              <h1>Alissa Nguyen</h1>
            </Link>
          </div>

          <ul className="hidden lg:flex">
            {topLevelLinks.map((link) => (
              <NavLink key={link.href} to={link.href}>
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

export default Navbar;
