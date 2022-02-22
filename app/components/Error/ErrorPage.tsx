import * as React from "react";
import { RedBox } from "./RedBox";

interface Props {
  error?: Error;
  pathname: string;
  heroMsg: string;
  subMsg?: string;
}

const ErrorPage: React.FC<Props> = (props) => {
  const error = props.error;

  return (
    <div className="light-theme">
      <noscript>
        <div
          style={{
            backgroundColor: "black",
            color: "white",
            padding: 30
          }}
        >
          <h1 style={{ fontSize: "3em" }}>{props.heroMsg}</h1>
          <p style={{ fontSize: "2em" }}>
            {props.pathname} {" " + props.subMsg}
          </p>
          <p style={{ fontSize: "1.5em" }}>
            Also, this site works much better with JavaScript enabled...
          </p>
        </div>
      </noscript>
      <main className="relative">
        {/* Display error stacks if in development mode */}
        {error && process.env.NODE_ENV === "development" ? (
          <RedBox error={error} />
        ) : null}
        {/* Display error page for users (in production) */}
        <div
          id="sky"
          className="fixed h-screen w-screen flex justify-center items-center"
        >
          <div className="flex-col items-center justify-center w-screen flex">
            <div id="stars" className="star self-start z-30"></div>
            <div id="stars2" className="star self-start z-40"></div>
            <div id="stars3" className="star self-start z-20"></div>
            <div className="flex flex-col items-center text-center">
              <h1 className="font-mono font-bold text-white z-50 text-8xl hover:text-aboutMe-alissa mb-5">
                404
              </h1>
              <p className="font-mono font-bold text-white z-50 text-4xl mb-10">
                UH OH! You're lost.
              </p>
              <p className="inline-flex font-mono text-white z-50 text-2xl w-1/2 mb-14">
                <p style={{ color: "#0CECDD" }}>"{props.pathname}"</p> is not a page on alissanguyen.dev. How you
                got here is a mystery. But you can click the button below to go
                back to homepage or visit my blog.
              </p>
            </div>
            <div className="astronaut cursor-pointer justify-center items-center flex transform duration-150 ease-in z-50 hover:scale-105 mb-14">
              <img
                className="astronaut-img w-48 lg:w-full"
                src="https://pngimg.com/uploads/astronaut/astronaut_PNG13.png"
                alt=""
              />
            </div>
            <div className="404-btn-wrapper flex flex-row z-50 text-2xl uppercase text-white">
              <button className="404-home-btn uppercase font-medium hover:font-bold rounded-full px-10 py-3 border-2 border-white bg-transparent hover:bg-white hover:text-black ease-in duration-100">
                <a href="/">Home</a>
              </button>
              <div className="spacer-div mr-10"></div>
              <button className="404-blog-btn uppercase font-medium hover:font-bold rounded-full px-10 py-3 border-2 border-white bg-transparent hover:bg-white hover:text-black ease-in duration-100">
                <a href="/blog">Go to my blog</a>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ErrorPage;
