import * as React from "react";
import { FiCopy } from "react-icons/fi";
import { BsCheck2 } from "react-icons/bs";

interface Props {
  handleCopyURL: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userRecentlyCopiedText: boolean;
}

const CopyURLButton: React.FC<Props> = (props) => {
  const buttonText = props.userRecentlyCopiedText ? "Copied" : "Copy URL";

  return (
    <>
      <button
        name={buttonText}
        aria-label={buttonText}
        className="url-button copy-url-button custom3:px-4"
        onClick={props.handleCopyURL}
      >
        <span className="hidden custom3:flex">{buttonText}</span>
        <span className="flex custom3:hidden">
          {props.userRecentlyCopiedText ? (
            <BsCheck2 className="w-5 h-4 text-gray-600" />
          ) : (
            <FiCopy className="w-5 h-4 text-gray-600" />
          )}
        </span>
      </button>
    </>
  );
};

export default CopyURLButton;
