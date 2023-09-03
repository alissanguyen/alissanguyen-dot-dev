import * as React from "react";
import { useTypewriter } from "use-typewriter-hook";

const Hi: React.FC = () => {
  const targetText = "I'm Alissa👋 ";

  const { textValue: typedText, wrapperClassName } = useTypewriter({
    targetText: targetText,
    autoStartDelay: 400,
    typingDelayMillis: 70
  });

  const stringToSearch = "Alissa";

  const startIndex = targetText.indexOf(stringToSearch);
  const endIndex = startIndex + stringToSearch.length;

  const fragments = splitTargetText(typedText, startIndex, endIndex);
  return (
    <span
      className="font-semibold lg:text-7xl custom:text-6xl md:text-5xl sm:text-4xl xs:text-5xl xxs:text-4xl text-textSmColor"
      aria-live="polite"
      aria-label="Hi I'm Alissa"
    >
      <span className="welcome inline-flex whitespace-pre leading-none text-center justify-center items-center after:inline-flex after:items-center">
        <span className="">Hi,</span>
        <span> </span>
        <span className={`${wrapperClassName}`}>{fragments}</span>
      </span>
    </span>
  );
};

export default Hi;

const splitTargetText = (
  str: string,
  startIndex: number,
  endIndex: number
): JSX.Element => {
  const customStyle = {
    color: "var(--alissa)"
  };
  return (
    <>
      <span className="inline-block">{str.slice(0, startIndex)}</span>
      <span className="inline-block">
        <span className={"custom-typewriter-text"} style={customStyle}>
          {str.slice(startIndex, endIndex)}
        </span>
      </span>
      <span className="inline-block">{str.slice(endIndex, str.length)}</span>
    </>
  );
};
