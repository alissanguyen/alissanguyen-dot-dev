import * as React from "react";
import { FiCopy } from "react-icons/fi";
import { BsCheck2 } from "react-icons/bs";

interface Props {
    handleCopyURL: (e: React.MouseEvent<HTMLButtonElement>) => void
    userRecentlyCopiedText: boolean
}

const CopyURLButton: React.FC<Props> = (props) => {
  return (
    <>
      <button
        className="big-url-button bg-white rounded-lg text-sm absolute px-4 hover:outline-2 outline-none hover:outline-amber-300 py-2 z-40"
        onClick={props.handleCopyURL}
      >
        {props.userRecentlyCopiedText ? "Copied" : "Copy URL"}
      </button>
      <button
        className="sm-url-button bg-white rounded-lg text-sm absolute focus:outline-2 focus:outline-amber-300 p-2 outline-none z-40"
        onClick={props.handleCopyURL}
      >
        {props.userRecentlyCopiedText ? (
          <BsCheck2 className="w-5 h-4 text-gray-600" />
        ) : (
          <FiCopy className="w-5 h-4 text-gray-600" />
        )}
      </button>
    </>
  );
};

export default CopyURLButton;
