import * as React from "react";
import { redirect } from "remix";
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
    <div
      className={`mobile-nav w-full h-full m-0 p-0 ${
        modalIsOpen ? "open" : ""
      }`}
    >
      <button
        className="mobile-nav-menu-opener bg-transparent fixed b-0 before:absolute before:top-0 before:right-0 before:m-auto before:bottom-0 before:w-full opacity-70 hover:opacity-100 focus:opacity-100 after:opacity-0 after:absolute"
        onClick={handleClick}
      ></button>
      <nav className="fixed z-10 left-0 w-full h-full overflow-hidden before:absolute before:top-0 before:right-0 before:bottom-0 before:left-0 before:m-auto before:w-full before:h-0 before:overflow-hidden">
        <ul className="mobile-nav-menu m-0 list-none p-0 h-max fixed">
          {props.links.map((link) => (
            <a href={link.href} onClick={handleClick}>
              <li className="mobile-nav-link opacity-0 h-full w-full flex items-center justify-center before:absolute before:top-0 before:right-0 before:bottom-0 before:left-auto before:m-auto before:h-full before:w-0 before:overflow-hidden after:absolute after:flex after:items-center after:justify-center after:top-0 after:right-0 after:bottom-0 after:left-0 after:m-auto after:overflow-hidden text-4xl">
                {link.displayName}
              </li>
            </a>
          ))}
          <li className="w-full h-full flex items-center justify-center">
            <ThemeButton />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default ResponsiveNavMenu;
