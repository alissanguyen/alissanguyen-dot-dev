import { Menu, MenuButton } from "@reach/menu-button";
import { motion, useReducedMotion } from "framer-motion";
import { useModalContext } from "~/providers/ModalProvider";
import MobileMenuList from "./MobileMenuList";

interface NavbarProps {
  hasStripeHeader: boolean;
}

const MobileMenu: React.FC<NavbarProps> = (props) => {
  const shouldReduceMotion = useReducedMotion();
  const transition = shouldReduceMotion ? { duration: 0 } : {};
  const { updateModalStatus } = useModalContext();

  return (
    <Menu>
      {({ isExpanded }) => {
        const state = isExpanded ? "open" : "closed";

        const handleHideMobileMenuDropDownClick = () => {
          updateModalStatus(isExpanded);
        };

        return (
          <>
            <MenuButton
              onClick={handleHideMobileMenuDropDownClick}
              className="focus:border-primary hover:border-primary border-secondary text-primary focus:outline-none inline-flex h-14 w-14 items-center justify-center rounded-full border-2 p-1 transition"
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
            </MenuButton>
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
