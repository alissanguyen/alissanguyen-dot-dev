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
      <img src={props.src} alt={props.alt} className="BlogPost__ImageMedia" />
      {props.description !== undefined && (
        <em className="BlogPost__ImageMedia__Description">
          {props.description}
        </em>
      )}
    </div>
  );
};

export default ImageMedia;
