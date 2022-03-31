import * as React from "react";
import { LinksFunction } from "remix";
import styles from "./ImageMedia.css";

interface Props {
  src: string;
  description?: string;
  alt?: string;
}

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
};

const ImageMedia: React.FC<Props> = (props) => {
  return (
    <div className="BlogPost__ImageMedia__Container">
      <img
        src={"https:" + props.src}
        alt={props.alt}
        title={props.alt}
        className="BlogPost__ImageMedia m-auto flex"
        loading="lazy"
      />
      {props.description !== undefined && (
        <em className="BlogPost__ImageMedia__Description mx-8 my-2 italic flex text-center items-center justify-center text-base">
          {props.description}
        </em>
      )}
    </div>
  );
};

export default ImageMedia;
