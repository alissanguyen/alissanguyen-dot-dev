import * as React from "react";
import { LinksFunction } from "remix";
import { ContentfulQuote } from "~/contentful/types";
import styles from "./BlockQuote.css";

interface Props {
  quoteData: ContentfulQuote;
}

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
};

const BlockQuote: React.FC<Props> = (props) => {
  return (
    <blockquote className="BlogPostBlockQuote__Container p-8 mt-8 mb-12 mx-0 border-t-[1px] border-t-gray-300 flex flex-col">
      <p className="BlogPostBlockQuote__Description font-medium m-auto flex items-center justify-center text-post-quote w-2/3">
        {props.quoteData.quoteDescription}
      </p>
      <p className="BlogPostBlockQuote__Author italic text-xl text-post-quoteAuthor text-right mt-5">
        {props.quoteData.author}
      </p>
    </blockquote>
  );
};

export default BlockQuote;
