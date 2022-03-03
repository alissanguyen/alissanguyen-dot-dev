import * as React from "react";

interface Props {
  src: string;
  description?: string;
  alt?: string;
}

const ImageMedia: React.FC<Props> = (props) => {
  return (
    <div className="BlogPost__ImageMedia__Container">
      <img src={props.src} alt={props.alt} className="BlogPost__ImageMedia"/>
      {props.description !== undefined && <em>{props.description}</em>}
    </div>
  );
};

export default ImageMedia;
