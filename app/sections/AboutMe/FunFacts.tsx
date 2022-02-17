import * as React from "react";
import { facts } from "~/constants";

const FunFacts: React.FC = ({}) => {
  const [hover, setHover] = React.useState<boolean>(false);
  const handleHover = () => {
    setHover((prev) => !prev);
  };
  return (
    <div className="FunFacts__Wrapper ">
      <div className="FunFacts__Title__Wrapper inline-flex items-center">
        <span className="md:text-4xl sm:text-3xl font-medium mb-5 text-textLgColor">
          Random fun facts about me
        </span>
      </div>

      <div className="wrapper">
        <div className="cols flex flex-wrap justify-between">
          {facts.map((fact) => (
            <div
              key={fact.index}
              className={`col ${
                hover ? "hover" : ""
              } justify-between items-center cursor-auto my-5`}
              onTouchStart={handleHover}
            >
              <div className="container">
                <div
                  className="front flex justify-center items-center bg-cover text-center bg-center h-auto after:absolute after:top-0 after:left-0 after:w-full after:rounded-lg after:h-full after:block rounded-lg after:opacity-50 z-10"
                  style={{
                    backgroundImage: `url(${fact.background})`
                  }}
                >
                  <div className="inner w-full box-border outline outline-1 outline-transparent px-4">
                    <p className="text-white relative after:absolute after:block after:left-0 after:right-0 text-4xl">
                      {fact.index}
                    </p>
                    <span className="text-white text-lg">{fact.title}</span>
                  </div>
                </div>
                <div className="back absolute top-0 flex left-0 w-full justify-center items-center bg-cover text-center bg-center h-auto rounded-lg">
                  <div className="inner w-full box-border outline outline-1 outline-transparent opacity-90 px-4">
                    <p className="p text-subText opacity-100 text-lg">
                      {fact.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FunFacts;