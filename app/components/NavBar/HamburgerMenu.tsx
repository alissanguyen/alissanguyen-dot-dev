import * as React from "react";

interface Props {}

const HamburgerMenu: React.FC<Props> = ({}) => {
  const handleOpenBurgerMenu = () => {
    const menu = document.getElementById("burger-toggle");
    const overlay = document.getElementById("burger-overlay");
    if (!menu || !overlay) {
      return;
    }
    menu.classList.toggle("active");
    overlay.classList.toggle("open");
  };

  return (
    <div>
      {" "}
      <div
        className="burger-button_container"
        id="burger-toggle"
        onClick={handleOpenBurgerMenu}
      >
        <span className="burger-top"></span>
        <span className="burger-middle"></span>
        <span className="burger-bottom"></span>
      </div>
      <div className="burger-overlay" id="burger-overlay">
        <nav className="burger-overlay-menu">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Work</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default HamburgerMenu;
