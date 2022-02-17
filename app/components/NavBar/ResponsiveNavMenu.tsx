import * as React from "react";
import { useModalContext } from "~/providers/ModalProvider";
import ThemeButton from "../ThemeButton/ThemeButton";

interface Props {
  links: { href: string; displayName: string }[];
}

const ResponsiveNavMenu: React.FC<Props> = (props) => {
  const { modalIsOpen, updateModalStatus } = useModalContext();

  const handleClick = () => {
    updateModalStatus();
  };

  return (
    <div className={`mobile-nav ${modalIsOpen ? "open" : ""}`}>
      <button className="mobile-nav-menu-toggle" onClick={handleClick}></button>
      <nav>
        <ul className="mobile-nav-menu">
          <li data-text="Home">Home</li>
          <li data-text="Projects">Projects</li>
          <li data-text="About">About</li>
          <li data-text="Contact">Contact</li>
        </ul>
      </nav>
    </div>
  );
};

export default ResponsiveNavMenu;
