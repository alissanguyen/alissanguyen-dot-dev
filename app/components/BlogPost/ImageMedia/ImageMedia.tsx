import * as React from "react";

interface Props {
  src: string;
  description?: string;
  alt?: string;
}



const ImageMedia: React.FC<Props> = (props) => {
  return (
    <div className="BlogPost__ImageMedia__Container my-14 mx-auto w-min">
      <img src={props.src} alt={props.alt} className="BlogPost__ImageMedia m-auto max-w-[600px] max-h-[400px]" />
      {props.description !== undefined && (
        <em className="BlogPost__ImageMedia__Description mx-8 my-2 italic flex text-center items-center justify-center text-base">
          {props.description}
        </em>
      )}
    </div>
  );
};

export default ImageMedia;
