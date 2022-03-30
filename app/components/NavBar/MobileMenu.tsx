import { Menu, MenuButton } from "@reach/menu-button";
import { useModalContext } from "~/providers/ModalProvider";
import MobileMenuList from "./MobileMenuList";
import * as React from "react";
import { SupportedTheme } from "~/types";

interface NavbarProps {
  hasStripeHeader: boolean;
  theme: SupportedTheme;
}

const getClassName = (
  theme: SupportedTheme,
  hasStripeHeader: boolean,
  modalIsOpen: boolean
) => {
  if (modalIsOpen) {
    return theme === SupportedTheme.LIGHT
      ? "text-gray-400 hover:text-black border-gray-400 hover:border-black focus:border-black"
      : "text-gray-500 hover:text-white border-gray-500 hover:border-white focus:border-white";
  }
  if (theme === SupportedTheme.LIGHT) {
    return hasStripeHeader
      ? "text-blue-800 hover:text-white border-blue-800 hover:border-white focus:border-white"
      : "text-gray-400 hover:text-black border-gray-400 hover:border-black focus:border-black";
  }
  if (theme === SupportedTheme.DARK) {
    return hasStripeHeader
      ? "text-blue-200 hover:text-white border-blue-200 hover:border-white focus:border-white"
      : "text-gray-500 hover:text-white border-gray-500 hover:border-white focus:border-white";
  }
};
const MobileMenu: React.FC<NavbarProps> = (props) => {
  const { modalIsOpen, updateModalStatus } = useModalContext();

  const className = getClassName(
    props.theme,
    props.hasStripeHeader,
    modalIsOpen
  );
  return (
    <Menu>
      {({ isExpanded }) => {
        React.useEffect(() => {
          updateModalStatus(isExpanded);
        }, [isExpanded]);

        return (
          <>
            <MenuButton
              id="menu--1"
              aria-label={isExpanded ? "Close menu" : "Open menu"}
              name={isExpanded ? "Close menu" : "Open menu"}
              className={
                "focus:outline-none inline-flex h-12 w-12 items-center justify-center rounded-full border-2 p-1 transition " +
                className
              }
            >
              <svg
                className={`ham hamRotate ham8 ${modalIsOpen ? "active" : ""}`}
                viewBox="0 0 100 100"
                width="80"
                id="ham-button"
                fill="currentColor"
              >
                <path
                  className="line top"
                  d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20"
                  fill="currentColor"
                />
                <path
                  className="line middle"
                  d="m 30,50 h 40"
                  fill="currentColor"
                />
                <path
                  className="line bottom"
                  d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20"
                  fill="currentColor"
                />
              </svg>
            </MenuButton>
            <MobileMenuList {...props} isExpanded={isExpanded} />
          </>
        );
      }}
    </Menu>
  );
};

export default MobileMenu;
