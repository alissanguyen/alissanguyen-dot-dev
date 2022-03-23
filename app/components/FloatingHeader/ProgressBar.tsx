import * as React from "react";

const ProgressBar: React.FC<{ progress: number }> = ({ progress }) => {
  return (
    <div
      className={`scroll-line`}
      style={{
        width: `${progress}%`
      }}
      id="scroll-line"
    ></div>
  );
};

export default ProgressBar;
