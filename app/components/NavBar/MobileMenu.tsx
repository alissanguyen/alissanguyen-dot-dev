import { Menu, MenuButton } from "@reach/menu-button";
import { motion, useReducedMotion } from "framer-motion";
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
      ? "text-blue-700 hover:text-white border-blue-700 hover:border-white focus:border-white"
      : "text-gray-400 hover:text-black border-gray-400 hover:border-black focus:border-black";
  }
  if (theme === SupportedTheme.DARK) {
    return hasStripeHeader
      ? "text-blue-200 hover:text-white border-blue-200 hover:border-white focus:border-white"
      : "text-gray-500 hover:text-white border-gray-500 hover:border-white focus:border-white";
  }
};
const MobileMenu: React.FC<NavbarProps> = (props) => {
  const shouldReduceMotion = useReducedMotion();
  const transition = shouldReduceMotion ? { duration: 0 } : {};
  const { modalIsOpen, updateModalStatus } = useModalContext();

  const className = getClassName(
    props.theme,
    props.hasStripeHeader,
    modalIsOpen
  );
  return (
    <Menu>
      {({ isExpanded }) => {
        const state = isExpanded ? "open" : "closed";

        React.useEffect(() => {
          updateModalStatus(isExpanded);
        }, [isExpanded]);

        return (
          <>
            <MenuButtonTemp />
            {/* <MenuButton
              className={
                "focus:outline-none inline-flex h-14 w-14 items-center justify-center rounded-full border-2 p-1 transition " +
                className
              }
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <motion.rect
                  animate={state}
                  variants={topVariants}
                  transition={transition}
                  x="6"
                  y="9"
                  width="20"
                  height="2"
                  rx="1"
                  fill="currentColor"
                />
                <motion.rect
                  animate={state}
                  variants={centerVariants}
                  transition={transition}
                  x="6"
                  y="15"
                  width="20"
                  height="2"
                  rx="1"
                  fill="currentColor"
                />
                <motion.rect
                  animate={state}
                  variants={bottomVariants}
                  transition={transition}
                  x="6"
                  y="21"
                  width="20"
                  height="2"
                  rx="1"
                  fill="currentColor"
                />
              </svg>
            </MenuButton> */}
            <MobileMenuList {...props} isExpanded={isExpanded} />
          </>
        );
      }}
    </Menu>
  );
};

const topVariants = {
  open: { rotate: 45, y: 7 },
  closed: { rotate: 0, y: 0 }
};

const centerVariants = {
  open: { opacity: 0 },
  closed: { opacity: 1 }
};

const bottomVariants = {
  open: { rotate: -45, y: -5 },
  closed: { rotate: 0, y: 0 }
};

export default MobileMenu;

const MenuButtonTemp: React.FC = () => {
  React.useEffect(() => {
    if (document) {
      const buttonSvg: HTMLElement | null =
        document.getElementById("ham-button");
      buttonSvg &&
        buttonSvg.addEventListener("click", () => {
          buttonSvg.classList.toggle("active");
        });
    }
  }, []);
  return (
    <MenuButton>
      <svg
        className="ham hamRotate ham8"
        viewBox="0 0 100 100"
        width="80"
        id="ham-button"
      >
        <path
          className="line top"
          d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20"
        />
        <path className="line middle" d="m 30,50 h 40" />
        <path
          className="line bottom"
          d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20"
        />
      </svg>
    </MenuButton>
  );
};
