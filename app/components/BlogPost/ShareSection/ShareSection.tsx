import * as React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { LinksFunction } from "remix";
import styles from "./ShareSection.css";

interface Props {
  targetHref: string;
  title: string;
  description: string;
}

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
};

const ShareSection: React.FC<Props> = (props) => {
  return (
    <div className="BlogPost__ShareSection__Wrapper mb-3 flex flex-row items-center justify-end">
      <div className="facebook-btn">
        <FacebookShareBtn
          href={props.targetHref}
          title={props.title}
          description={props.description}
        />
      </div>
      <div className="spacer-div mr-2"></div>
      <LinkedinShareBtn
        href={props.targetHref}
        title={props.title}
        description={props.description}
      />
      <div className="spacer-div mr-2"></div>
      <TwitterShareBtn
        href={props.targetHref}
        title={props.title}
        description={props.description}
      />
    </div>
  );
};

export default ShareSection;

interface ShareBtnProps {
  href: string;
  title: string;
  description: string;
}
const TwitterShareBtn: React.FC<ShareBtnProps> = (props) => {
  const tweetMsg = `I just read ${props.title} by @alissa_nguyen14\n\n`;
  return (
    <a
      href="https://twitter.com/share?ref_src=twsrc%5Etfw"
      className="twitter-share-button"
      data-size="large"
      data-text={tweetMsg}
      data-hashtags="programming,blog"
      data-related="alissa_nguyen14"
      data-show-count="true"
    >
      Tweet
    </a>
  );
};

const LinkedinShareBtn: React.FC<ShareBtnProps> = (props) => {
  const url: string =
    "https://www.linkedin.com/shareArticle?mini=true&url=https://www.alissanguyen.dev/blog/" +
    props.href +
    "&title=" +
    props.title +
    "&summary=" +
    props.description;

  return (
    <a
      className="linkedin-share-button bg-blue-700 inline-flex items-center justify-center text-white text-sm font-medium px-2 py-1 rounded"
      target="_blank"
      rel="noopener noreferrer"
      href={url}
    >
      <FaLinkedinIn className="text-white w-5 mr-1" />
      Share
    </a>
  );
};

const FacebookShareBtn: React.FC<ShareBtnProps> = (props) => {
  const webUrl = "https://www.alissanguyen.dev/blog/" + props.href;
  return (
    <div
      className="fb-share-button specifity-modifier"
      data-href={webUrl}
      data-layout="button"
      data-size="large"
    >
      <a target="_blank" href={webUrl} className="fb-xfbml-parse-ignore">
        Share
      </a>
    </div>
  );
};
