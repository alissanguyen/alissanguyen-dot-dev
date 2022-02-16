import * as React from "react";

interface SocialMediaIconData {
  name: string;
  className: string;
  iconClassName: string;
  externalUrl: string;
}
const SocialMedia: React.FC = ({}) => {
  const sm: SocialMediaIconData[] = [
    {
      name: "Facebook",
      className: "icon facebook relative bg-white",
      iconClassName: "fa-facebook-f",
      externalUrl: "https://www.facebook.com/alissa.1404"
    },
    {
      name: "Twitter",
      className: "icon twitter",
      iconClassName: "fa-twitter",
      externalUrl: "https://twitter.com/alissa_nguyen14"
    },
    {
      name: "Instagram",
      className: "icon instagram",
      iconClassName: "fa-instagram",
      externalUrl: "https://www.instagram.com/alissang1211/"
    },
    {
      name: "Github",
      className: "icon github",
      iconClassName: "fa-github",
      externalUrl: "https://github.com/alissanguyen"
    },
    {
      name: "Linkedin",
      className: "icon linkedin",
      iconClassName: "fa-linkedin",
      externalUrl: "https://www.linkedin.com/in/tam-pmnguyen/"
    }
  ];
  return (
    <div className="sm-wrapper grid grid-cols-5 gap-4 items-center ">
      {sm.map((element) => (
        <div
          className={`${element.className} social-media-icon-wrapper relative bg-aboutMe-smIconBg flex flex-col justify-center items-center justify-self-center`}
          key={element.name}
        >
          <div className="tooltip absolute top-0 text-sm text-white bg-white">
            {element.name}
          </div>
          <a href={element.externalUrl} target="_blank">
            <span className="text-aboutMe-smIcon flex justify-center items-center text-lg">
              <i className={`fab ${element.iconClassName}`}></i>
            </span>
          </a>
        </div>
      ))}
    </div>
  );
};

export default SocialMedia;
