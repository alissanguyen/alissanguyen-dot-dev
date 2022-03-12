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
        {/* <div
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
              <div className="inline-flex font-mono text-white z-50 text-2xl w-1/2 mb-14">
                <p style={{ color: "#0CECDD" }}>
                  "{props.pathname}" is not a page on alissanguyen.dev. How you
                  got here is a mystery. But you can click the button below to
                  go back to homepage or visit my blog.
                </p>
              </div>
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
        </div> */}
        <Flowers pathname={props.pathname} heroMsg={props.heroMsg} />
      </main>
    </div>
  );
};

export default ErrorPage;

const Flowers: React.FC<Props> = (props) => {
  React.useEffect(() => {
    onload = () => {
      const c = setTimeout(() => {
        const flowers = document.getElementById("flowers-container");
        if (flowers) {
          flowers.classList.remove("not-loaded");
        }
        clearTimeout(c);
      }, 1000);
    };
  }, []);
  return (
    <div
      className="flowers-container not-loaded relative"
      id="flowers-container"
    >
      <div className="night"></div>
      <div className="absolute font-mono flex flex-col w-full h-full justify-start pt-16 px-10 sm:px-0 max-w-[800px] text-white z-50">
        <p className=" text-4xl mb-10">
          UH OH! You're lost.
        </p>
        <div className="inline-flex text-base mb-14">
          <p className="">
            <span style={{ color: "#0CECDD" }}>"www.alissanguyen.dev{props.pathname}"</span> is not
            a page on alissanguyen.dev. How you got here is a mystery. But you
            can click <a href="/" className="underline font-bold text-pink-400 hover:text-fuchsia-500">here</a> to go back to homepage or click <a href="/blog" className="font-bold text-yellow-300 hover:text-rose-400 underline">here</a> to visit my blog.
          </p>
        </div>
      </div>
      <div className="flowers">
        <div className="flower flower--1">
          <div className="flower__leafs flower__leafs--1">
            <div className="flower__leaf flower__leaf--1"></div>
            <div className="flower__leaf flower__leaf--2"></div>
            <div className="flower__leaf flower__leaf--3"></div>
            <div className="flower__leaf flower__leaf--4"></div>
            <div className="flower__white-circle"></div>

            <div className="flower__light flower__light--1"></div>
            <div className="flower__light flower__light--2"></div>
            <div className="flower__light flower__light--3"></div>
            <div className="flower__light flower__light--4"></div>
            <div className="flower__light flower__light--5"></div>
            <div className="flower__light flower__light--6"></div>
            <div className="flower__light flower__light--7"></div>
            <div className="flower__light flower__light--8"></div>
          </div>
          <div className="flower__line">
            <div className="flower__line__leaf flower__line__leaf--1"></div>
            <div className="flower__line__leaf flower__line__leaf--2"></div>
            <div className="flower__line__leaf flower__line__leaf--3"></div>
            <div className="flower__line__leaf flower__line__leaf--4"></div>
            <div className="flower__line__leaf flower__line__leaf--5"></div>
            <div className="flower__line__leaf flower__line__leaf--6"></div>
          </div>
        </div>

        <div className="flower flower--2">
          <div className="flower__leafs flower__leafs--2">
            <div className="flower__leaf flower__leaf--1"></div>
            <div className="flower__leaf flower__leaf--2"></div>
            <div className="flower__leaf flower__leaf--3"></div>
            <div className="flower__leaf flower__leaf--4"></div>
            <div className="flower__white-circle"></div>

            <div className="flower__light flower__light--1"></div>
            <div className="flower__light flower__light--2"></div>
            <div className="flower__light flower__light--3"></div>
            <div className="flower__light flower__light--4"></div>
            <div className="flower__light flower__light--5"></div>
            <div className="flower__light flower__light--6"></div>
            <div className="flower__light flower__light--7"></div>
            <div className="flower__light flower__light--8"></div>
          </div>
          <div className="flower__line">
            <div className="flower__line__leaf flower__line__leaf--1"></div>
            <div className="flower__line__leaf flower__line__leaf--2"></div>
            <div className="flower__line__leaf flower__line__leaf--3"></div>
            <div className="flower__line__leaf flower__line__leaf--4"></div>
          </div>
        </div>

        <div className="flower flower--3">
          <div className="flower__leafs flower__leafs--3">
            <div className="flower__leaf flower__leaf--1"></div>
            <div className="flower__leaf flower__leaf--2"></div>
            <div className="flower__leaf flower__leaf--3"></div>
            <div className="flower__leaf flower__leaf--4"></div>
            <div className="flower__white-circle"></div>

            <div className="flower__light flower__light--1"></div>
            <div className="flower__light flower__light--2"></div>
            <div className="flower__light flower__light--3"></div>
            <div className="flower__light flower__light--4"></div>
            <div className="flower__light flower__light--5"></div>
            <div className="flower__light flower__light--6"></div>
            <div className="flower__light flower__light--7"></div>
            <div className="flower__light flower__light--8"></div>
          </div>
          <div className="flower__line">
            <div className="flower__line__leaf flower__line__leaf--1"></div>
            <div className="flower__line__leaf flower__line__leaf--2"></div>
            <div className="flower__line__leaf flower__line__leaf--3"></div>
            <div className="flower__line__leaf flower__line__leaf--4"></div>
          </div>
        </div>

        <div className="grow-ans" style={{ animationDelay: "1.2s" }}>
          <div className="flower__g-long">
            <div className="flower__g-long__top"></div>
            <div className="flower__g-long__bottom"></div>
          </div>
        </div>

        <div className="growing-grass">
          <div className="flower__grass flower__grass--1">
            <div className="flower__grass--top"></div>
            <div className="flower__grass--bottom"></div>
            <div className="flower__grass__leaf flower__grass__leaf--1"></div>
            <div className="flower__grass__leaf flower__grass__leaf--2"></div>
            <div className="flower__grass__leaf flower__grass__leaf--3"></div>
            <div className="flower__grass__leaf flower__grass__leaf--4"></div>
            <div className="flower__grass__leaf flower__grass__leaf--5"></div>
            <div className="flower__grass__leaf flower__grass__leaf--6"></div>
            <div className="flower__grass__leaf flower__grass__leaf--7"></div>
            <div className="flower__grass__leaf flower__grass__leaf--8"></div>
            <div className="flower__grass__overlay"></div>
          </div>
        </div>

        <div className="growing-grass">
          <div className="flower__grass flower__grass--2">
            <div className="flower__grass--top"></div>
            <div className="flower__grass--bottom"></div>
            <div className="flower__grass__leaf flower__grass__leaf--1"></div>
            <div className="flower__grass__leaf flower__grass__leaf--2"></div>
            <div className="flower__grass__leaf flower__grass__leaf--3"></div>
            <div className="flower__grass__leaf flower__grass__leaf--4"></div>
            <div className="flower__grass__leaf flower__grass__leaf--5"></div>
            <div className="flower__grass__leaf flower__grass__leaf--6"></div>
            <div className="flower__grass__leaf flower__grass__leaf--7"></div>
            <div className="flower__grass__leaf flower__grass__leaf--8"></div>
            <div className="flower__grass__overlay"></div>
          </div>
        </div>

        <div className="grow-ans" style={{ animationDelay: "2.4s" }}>
          <div className="flower__g-right flower__g-right--1">
            <div className="leaf"></div>
          </div>
        </div>

        <div className="grow-ans" style={{ animationDelay: "2.8s" }}>
          <div className="flower__g-right flower__g-right--2">
            <div className="leaf"></div>
          </div>
        </div>

        <div className="grow-ans" style={{ animationDelay: "2.8s" }}>
          <div className="flower__g-front">
            <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--1">
              <div className="flower__g-front__leaf"></div>
            </div>
            <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--2">
              <div className="flower__g-front__leaf"></div>
            </div>
            <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--3">
              <div className="flower__g-front__leaf"></div>
            </div>
            <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--4">
              <div className="flower__g-front__leaf"></div>
            </div>
            <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--5">
              <div className="flower__g-front__leaf"></div>
            </div>
            <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--6">
              <div className="flower__g-front__leaf"></div>
            </div>
            <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--7">
              <div className="flower__g-front__leaf"></div>
            </div>
            <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--8">
              <div className="flower__g-front__leaf"></div>
            </div>
            <div className="flower__g-front__line"></div>
          </div>
        </div>

        <div className="grow-ans" style={{ animationDelay: "3.2s" }}>
          <div className="flower__g-fr">
            <div className="leaf"></div>
            <div className="flower__g-fr__leaf flower__g-fr__leaf--1"></div>
            <div className="flower__g-fr__leaf flower__g-fr__leaf--2"></div>
            <div className="flower__g-fr__leaf flower__g-fr__leaf--3"></div>
            <div className="flower__g-fr__leaf flower__g-fr__leaf--4"></div>
            <div className="flower__g-fr__leaf flower__g-fr__leaf--5"></div>
            <div className="flower__g-fr__leaf flower__g-fr__leaf--6"></div>
            <div className="flower__g-fr__leaf flower__g-fr__leaf--7"></div>
            <div className="flower__g-fr__leaf flower__g-fr__leaf--8"></div>
          </div>
        </div>

        <div className="long-g long-g--0">
          <div className="grow-ans" style={{ animationDelay: "3s" }}>
            <div className="leaf leaf--0"></div>
          </div>
          <div className="grow-ans" style={{ animationDelay: "2.2s" }}>
            <div className="leaf leaf--1"></div>
          </div>
          <div className="grow-ans" style={{ animationDelay: "3.4s" }}>
            <div className="leaf leaf--2"></div>
          </div>
          <div className="grow-ans" style={{ animationDelay: "3.6s" }}>
            <div className="leaf leaf--3"></div>
          </div>
        </div>

        <div className="long-g long-g--1">
          <div className="grow-ans" style={{ animationDelay: "3.6s" }}>
            <div className="leaf leaf--0"></div>
          </div>
          <div className="grow-ans" style={{ animationDelay: "3.8s" }}>
            <div className="leaf leaf--1"></div>
          </div>
          <div className="grow-ans" style={{ animationDelay: "4s" }}>
            <div className="leaf leaf--2"></div>
          </div>
          <div className="grow-ans" style={{ animationDelay: "4.2s" }}>
            <div className="leaf leaf--3"></div>
          </div>
        </div>

        <div className="long-g long-g--2">
          <div className="grow-ans" style={{ animationDelay: "4s" }}>
            <div className="leaf leaf--0"></div>
          </div>
          <div className="grow-ans" style={{ animationDelay: "4.2s" }}>
            <div className="leaf leaf--1"></div>
          </div>
          <div className="grow-ans" style={{ animationDelay: "4.4s" }}>
            <div className="leaf leaf--2"></div>
          </div>
          <div className="grow-ans" style={{ animationDelay: "4.6s" }}>
            <div className="leaf leaf--3"></div>
          </div>
        </div>

        <div className="long-g long-g--3">
          <div className="grow-ans" style={{ animationDelay: "4s" }}>
            <div className="leaf leaf--0"></div>
          </div>
          <div className="grow-ans" style={{ animationDelay: "4.2s" }}>
            <div className="leaf leaf--1"></div>
          </div>
          <div className="grow-ans" style={{ animationDelay: "3s" }}>
            <div className="leaf leaf--2"></div>
          </div>
          <div className="grow-ans" style={{ animationDelay: "3.6s" }}>
            <div className="leaf leaf--3"></div>
          </div>
        </div>

        <div className="long-g long-g--4">
          <div className="grow-ans" style={{ animationDelay: "4s" }}>
            <div className="leaf leaf--0"></div>
          </div>
          <div className="grow-ans" style={{ animationDelay: "4.2s" }}>
            <div className="leaf leaf--1"></div>
          </div>
          <div className="grow-ans" style={{ animationDelay: "3s" }}>
            <div className="leaf leaf--2"></div>
          </div>
          <div className="grow-ans" style={{ animationDelay: "3.6s" }}>
            <div className="leaf leaf--3"></div>
          </div>
        </div>

        <div className="long-g long-g--5">
          <div className="grow-ans" style={{ animationDelay: "4s" }}>
            <div className="leaf leaf--0"></div>
          </div>
          <div className="grow-ans" style={{ animationDelay: "4.2s" }}>
            <div className="leaf leaf--1"></div>
          </div>
          <div className="grow-ans" style={{ animationDelay: "3s" }}>
            <div className="leaf leaf--2"></div>
          </div>
          <div className="grow-ans" style={{ animationDelay: "3.6s" }}>
            <div className="leaf leaf--3"></div>
          </div>
        </div>

        <div className="long-g long-g--6">
          <div className="grow-ans" style={{ animationDelay: "4.2s" }}>
            <div className="leaf leaf--0"></div>
          </div>
          <div className="grow-ans" style={{ animationDelay: "4.4s" }}>
            <div className="leaf leaf--1"></div>
          </div>
          <div className="grow-ans" style={{ animationDelay: "4.6s" }}>
            <div className="leaf leaf--2"></div>
          </div>
          <div className="grow-ans" style={{ animationDelay: "4.8s" }}>
            <div className="leaf leaf--3"></div>
          </div>
        </div>

        <div className="long-g long-g--7">
          <div className="grow-ans" style={{ animationDelay: "3s" }}>
            <div className="leaf leaf--0"></div>
          </div>
          <div className="grow-ans" style={{ animationDelay: "3.2s" }}>
            <div className="leaf leaf--1"></div>
          </div>
          <div className="grow-ans" style={{ animationDelay: "3.5s" }}>
            <div className="leaf leaf--2"></div>
          </div>
          <div className="grow-ans" style={{ animationDelay: "3.6s" }}>
            <div className="leaf leaf--3"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
