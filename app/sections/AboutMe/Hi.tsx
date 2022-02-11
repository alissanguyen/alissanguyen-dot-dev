import * as React from "react";
import { useTypewriter } from "use-typewriter-hook";

const Hi: React.FC = ({}) => {
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
    <div className="font-semibold text-8xl sm:text-7xl xs:text-6xl xxs:text-4xl text-aboutMe-aboutMeText">
      <div className="welcome flex whitespace-pre inline-flex leading-none text-center justify-center items-center after:inline-flex after:items-center">
        <p className="">Hi,</p>
        <p> </p>

        <span className={`${wrapperClassName}`}>{fragments}</span>
      </div>
    </div>
  );
};

export default Hi;

const splitTargetText = (
  str: string,
  startIndex: number,
  endIndex: number
): React.ReactNode[] => {
  const customStyle = {
    color: "var(--alissa)"
  };
  return [
    <span key={0} className="inline-block">
      {str.slice(0, startIndex)}
    </span>,
    <span key={1} className="inline-block">
      <span className={"custom-typewriter-text"} style={customStyle}>
        {str.slice(startIndex, endIndex)}
      </span>
    </span>,
    <span key={2} className="inline-block">
      {str.slice(endIndex, str.length)}
    </span>
  ];
};
