import * as React from "react";

interface Props {
  targetHref: string;
  title: string;
}

const ShareSection: React.FC<Props> = (props) => {
  return (
    <div>
      <TwitterShareBtn href={props.targetHref} title={props.title} />
      <LinkedinShareBtn href={props.targetHref} title={props.title} />
      <FacebookShareBtn href={props.targetHref} title={props.title} />
    </div>
  );
};

export default ShareSection;

interface ShareBtnProps {
  href: string;
  title: string;
}
const TwitterShareBtn: React.FC<ShareBtnProps> = (props) => {
  const tweetMsg = `I just read ${props.title} by @alissa_nguyen14\n\n`;
  const url = "https://www.alissanguyen.dev/blog/" + props.href;
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
    "https://www.linkedin.com/sharing/share-offsite/?url=https://www.alissanguyen.dev/blog/" +
    props.href;

  return (
    <a
      className="linkedin-share-button"
      target="_blank"
      rel="noopener noreferrer"
      href={url}
    >
      Share on Linkedin
    </a>
  );
};

const FacebookShareBtn: React.FC<ShareBtnProps> = (props) => {
  const url: string =
    "https://www.facebook.com/sharer/sharer.php?u=https://www.alissanguyen.dev/blog/" +
    props.href;

  const webUrl = "https://www.alissanguyen.dev/blog/" + props.href;
  return (
    <div
      className="fb-share-button"
      data-href={webUrl}
      data-layout="button_count"
      data-size="large"
    >
      <a target="_blank" href={webUrl} className="fb-xfbml-parse-ignore">
        Share
      </a>
    </div>
  );
};
