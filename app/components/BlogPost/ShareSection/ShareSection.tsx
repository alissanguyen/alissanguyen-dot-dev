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
      className="twitter-share-button"
      target="_blank"
      rel="noopener noreferrer"
      data-size="large"
      href={`https://twitter.com/intent/tweet?${new URLSearchParams({
        url: url,
        text: tweetMsg
      })}`}
    >
      Tweet
    </a>
  );
};

const LinkedinShareBtn: React.FC<ShareBtnProps> = (props) => {
  const url: string =
    "https://www.linkedin.com/sharing/share-offsite/?url=" + props.href;

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
    "https://www.facebook.com/sharer/sharer.php?u=" + props.href;

  return (
    <a
      className="facebook-share-button"
      target="_blank"
      rel="noopener noreferrer"
      href={url}
    >
      Share on Facebook
    </a>
  );
};
