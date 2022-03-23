import * as React from "react";

interface Props {
  title: string;
  slug: string;
}

const ShareSection: React.FC<Props> = (props) => {
  const tweetMsg = `I just read ${props.title} by @alissa_nguyen14\n\n`;
  const twitterShareHref = `https://twitter.com/intent/tweet?hashtags=programming%2Cblog&original_referer=https%3A%2F%2Fwww.alissanguyen.dev%2F&related=alissa_nguyen14&text=${tweetMsg}%0A%0A&url=https%3A%2F%2Fwww.alissanguyen.dev%2Fblog%2F${props.slug}%2F`;
  const facebookShareHref =
    "https://www.facebook.com/sharer/sharer.php?u=https://www.alissanguyen.dev/blog/" +
    props.slug;
  const linkedinShareHref =
    "https://www.linkedin.com/shareArticle?mini=true&url=https://www.alissanguyen.dev/blog/" +
    props.slug +
    "&title=" +
    props.title;
  return (
    <div className="floating-header-share">
      <div className="floating-header-share-label hidden custom:flex mr-2 font-medium items-center text-post-bodyTextLg">
        Share this
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="ionicon inline-flex items-center h-6 mr-3 mt-1 text-post-bodyTextLg"
        viewBox="0 0 512 512"
      >
        <circle
          cx="128"
          cy="256"
          r="48"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
        />
        <circle
          cx="384"
          cy="112"
          r="48"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
        />
        <circle
          cx="384"
          cy="400"
          r="48"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
        />
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
          d="M169.83 279.53l172.34 96.94M342.17 135.53l-172.34 96.94"
        />
      </svg>
      <a
        className="floating-header-share-tw"
        href={twitterShareHref}
        target="_blank"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          className="floating-header-share-svg"
        >
          <path d="M30.063 7.313c-.813 1.125-1.75 2.125-2.875 2.938v.75c0 1.563-.188 3.125-.688 4.625a15.088 15.088 0 0 1-2.063 4.438c-.875 1.438-2 2.688-3.25 3.813a15.015 15.015 0 0 1-4.625 2.563c-1.813.688-3.75 1-5.75 1-3.25 0-6.188-.875-8.875-2.625.438.063.875.125 1.375.125 2.688 0 5.063-.875 7.188-2.5-1.25 0-2.375-.375-3.375-1.125s-1.688-1.688-2.063-2.875c.438.063.813.125 1.125.125.5 0 1-.063 1.5-.25-1.313-.25-2.438-.938-3.313-1.938a5.673 5.673 0 0 1-1.313-3.688v-.063c.813.438 1.688.688 2.625.688a5.228 5.228 0 0 1-1.875-2c-.5-.875-.688-1.813-.688-2.75 0-1.063.25-2.063.75-2.938 1.438 1.75 3.188 3.188 5.25 4.25s4.313 1.688 6.688 1.813a5.579 5.579 0 0 1 1.5-5.438c1.125-1.125 2.5-1.688 4.125-1.688s3.063.625 4.188 1.813a11.48 11.48 0 0 0 3.688-1.375c-.438 1.375-1.313 2.438-2.563 3.188 1.125-.125 2.188-.438 3.313-.875z"></path>
        </svg>
      </a>
      <a
        className="floating-header-share-fb"
        href={facebookShareHref}
        target="_blank"
        rel="nofollow"
        data-size="large"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          className="floating-header-share-svg"
        >
          <path d="M19 6h5V0h-5c-3.86 0-7 3.14-7 7v3H8v6h4v16h6V16h5l1-6h-6V7c0-.542.458-1 1-1z"></path>
        </svg>
      </a>
      <a
        className="floating-header-share-linkedin"
        href={linkedinShareHref}
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="floating-header-share-svg"
        >
          <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
        </svg>
      </a>
    </div>
  );
};

export default ShareSection;
