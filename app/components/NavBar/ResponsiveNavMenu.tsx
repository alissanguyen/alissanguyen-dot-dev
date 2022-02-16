import * as React from "react";

interface Props {
  links: { href: string; displayName: string }[];
}

const ResponsiveNavMenu: React.FC<Props> = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={"menu-button " + (isOpen ? "on" : "")}>
      <div className="menu-button--toggle" onClick={handleClick}>
        <span></span>
      </div>
      <ul className="menu-button--list">
        {props.links.map((el) => (
          <a key={el.href} href={el.href}>
            <li>{el.displayName}</li>
          </a>
        ))}
      </ul>
    </div>
  );
};

export default ResponsiveNavMenu;
