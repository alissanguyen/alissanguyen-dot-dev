import { MenuItems, MenuLink, MenuPopover } from "@reach/menu-button";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Link } from "remix";
import { topLevelLinksOnMobile } from "~/constants";
import ThemeButton from "../ThemeButton/ThemeButton";

interface NavbarProps {
  hasStripeHeader: boolean;
}

const MobileMenuList: React.FC<NavbarProps & { isExpanded: boolean }> = (
  props
) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <AnimatePresence>
      {props.isExpanded ? (
        <MenuPopover
          position={(mobileMenuExpandButton) => ({
            top: `calc(${
              Number(mobileMenuExpandButton?.top) +
              Number(mobileMenuExpandButton?.height)
            }px + 2.25rem)`, // 2.25 rem = py-9 from navbar
            left: 0,
            bottom: 0,
            right: 0
          })}
          className="block z-50"
        >
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.15,
              ease: "linear"
            }}
            className="MenuLists h-full overflow-y-scroll border-t border-mobileNav-border pb-12 outline-none"
          >
            <MenuItems className="MobileNav__MenuItemsWrapper flex border-none bg-transparent p-0 h-full flex-col">
              {topLevelLinksOnMobile.map((link) => (
                <MenuLink
                  className="MobileNav__MenuItem border-b border-mobileNav-border px-[5vw] text-lg py-9"
                  key={link.href}
                  as={Link}
                  to={link.href}
                >
                  {link.displayName}
                </MenuLink>
              ))}
              <div className="noscript-hidden py-9 text-center flex justify-center">
                <ThemeButton hasStripeHeader={props.hasStripeHeader} />
              </div>
            </MenuItems>
          </motion.div>
        </MenuPopover>
      ) : null}
    </AnimatePresence>
  );
};

export default MobileMenuList;
