import * as React from "react";
import styles from "./SocialMedia.css";
import { LinksFunction } from "remix";

export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: styles
  }
];
const SocialMedia: React.FC = ({}) => {
  const sm = [
    {
      name: "Facebook",
      class: "icon facebook relative bg-white",
      icon: "fab fa-facebook-f",
      link: "https://www.facebook.com/alissa.1404"
    },
    {
      name: "Twitter",
      class: "icon twitter",
      icon: "fab fa-twitter",
      link: "https://twitter.com/alissa_nguyen14"
    },
    {
      name: "Instagram",
      class: "icon instagram",
      icon: "fab fa-instagram",
      link: "https://www.instagram.com/alissang1211/"
    },
    {
      name: "Github",
      class: "icon github",
      icon: "fab fa-github",
      link: "https://github.com/alissanguyen"
    },
    {
      name: "Linkedin",
      class: "icon linkedin",
      icon: "fab fa-linkedin",
      link: "https://www.linkedin.com/in/tam-pmnguyen/"
    },

  ];
  return (
    <div className="sm-wrapper grid grid-cols-5 text-sm mt-10">
      {sm.map((element) => (
        <div className={`${element.class} relative bg-white flex flex-col justify-center items-center justify-self-center`} key={element.name}>
          <div className="tooltip absolute top-0 text-sm text-white bg-white">{element.name}</div>
          <a href={element.link} target="_blank">
            <span>
              <i className={element.icon}></i>
            </span>
          </a>
        </div>
      ))}
    </div>
  );
};

export default SocialMedia;
