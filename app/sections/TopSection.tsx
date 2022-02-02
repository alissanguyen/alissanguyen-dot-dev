import * as React from "react";
import { useTypewriter } from "use-typewriter-hook";

interface Props {}

const TopSection: React.FC<Props> = ({}) => {
  const targetText = "I'm Alissa";

  const { textValue: typedText, wrapperClassName } = useTypewriter({
    targetText: targetText,
    autoStartDelay: 400,
    typingDelayMillis: 70,
  });

  const stringToSearch = "Alissa";

  const startIndex = targetText.indexOf(stringToSearch);
  const endIndex = startIndex + stringToSearch.length;

  const fragments = splitTargetText(typedText, startIndex, endIndex);

  return (
    <>
      <header className="top-section flex flex-col justify-end items-center font-bold">
        <div className="welcome flex whitespace-pre inline-flex leading-none text-center justify-center items-center after:inline-flex after:items-center text-9xl md:text-8xl sm:text-7xl xs:text-6xl xxs:text-4xl">
          <p className="rainbow-text">Hi,</p>
          <p> </p>
          <span className={`rainbow-text ${wrapperClassName}`}>
            {fragments}
          </span>
        </div>
        {/* TODO: Make this fade out when users scroll away from the top and reappear when they scroll back up */}
        <div className="scroll-animation-wrapper absolute flex flex-col items-center justify-center items-end min-w-full">
          <div className="mouse before:absolute before:top-0 before:right-0 before:bottom-0 before:left-0 after:absolute after:top-0 after:right-0 after:bottom-0 after:left-0 before:m-auto after:m-auto"></div>
          <div className="mt-2" />
          <p className="tracking-wide text-lg font-light">Scroll</p>
        </div>
      </header>
    </>
  );
};

const splitTargetText = (
  str: string,
  startIndex: number,
  endIndex: number
): React.ReactNode[] => {
  /**
   * Return everything from 0...startIndex of str as a string,
   * return evevertying from startindex to endindex as a highlighted text
   * return everything from endindex to str.length as a string
   */
  const customStyle = {
    color: "rgb(49, 255, 152)",
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
    </span>,
  ];
};

export default TopSection;
