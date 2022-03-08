import * as React from "react";
import errorStack from "error-stack-parser";

export function RedBox({ error }: { error: Error }) {
  const [isVisible, setIsVisible] = React.useState(true);
  const frames = errorStack.parse(error);
  const className = !isVisible ? " pointer-events-none opacity-0" : "";
  return (
    <div
      className={`fixed inset-0 z-10 flex items-center justify-center transition ${className}`}
    >
      <button
        className="absolute inset-0 block h-full w-full bg-black opacity-75"
        onClick={() => setIsVisible(false)}
      />
      <div className="border-lg text-textLgColor relative mx-5vw my-16 max-h-75vh overflow-y-auto rounded-lg bg-red-500 p-12 text-xl">
        <h2>{error.message}</h2>
        <div>
          {frames.map((frame) => (
            <div
              key={[frame.fileName, frame.lineNumber, frame.columnNumber].join(
                "-"
              )}
              className="pt-4"
            >
              <h6 className="pt-2">{frame.functionName}</h6>
              <div className="font-light opacity-75">
                {frame.fileName}:{frame.lineNumber}:{frame.columnNumber}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
