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
    <>
      <main>
        {error && process.env.NODE_ENV === "development" ? (
          <RedBox error={error} />
        ) : null}
        <div className="font-mono text-white flex flex-col w-full h-full justify-start pt-20 px-10 sm:px-0 max-w-[800px] m-auto z-50 ">
          <p className="text-4xl custom2:text-5xl mb-5 xs:mb-10 font-bold z-50">
            UH OH! You're lost.
          </p>
          <div className="text-lg inline-flex mb-10 xs:mb-14 z-50 leading-9">
            <p>
              <span style={{ color: "#0CECDD" }}>
                "www.alissanguyen.dev{props.pathname}"
              </span>{" "}
              is not a page on alissanguyen.dev. How you got here is a mystery.
              But you can click the{" "}
              <span className="font-bold text-sky-500">blue</span> button below
              to go back to homepage, or the{" "}
              <span className="font-bold text-rose-500">red</span> one to
              explore my blog :)
            </p>
          </div>
          <div className="z-50 mb-10 text-lg tracking-wide xs:tracking-normal">
            <a
              href="/"
              className="rounded-full px-5 py-3 bg-blue-500 hover:bg-blue-600 text-white mr-5"
            >
              Home
            </a>
            <a
              href="/blog"
              className="rounded-full px-5 py-3 bg-rose-500 hover:bg-rose-600 text-white mr-5"
            >
              Blog
            </a>
          </div>
        </div>
        <Flowers />
      </main>
    </>
  );
};

export default ErrorPage;

const Flowers: React.FC = () => {
  return (
    <div className="FlowersContainer relative">
      <div className="night">
        <div className="Flowers absolute ">
          <div className="Flower Flower--1">
            <div className="Flower__Leafs Flower__Leafs--1">
              <div className="Flower__Leaf Flower__Leaf--1"></div>
              <div className="Flower__Leaf Flower__Leaf--2"></div>
              <div className="Flower__Leaf Flower__Leaf--3"></div>
              <div className="Flower__Leaf Flower__Leaf--4"></div>
              <div className="Flower__WhiteCircle"></div>

              <div className="Flower__Light Flower__Light--1"></div>
              <div className="Flower__Light Flower__Light--2"></div>
              <div className="Flower__Light Flower__Light--3"></div>
              <div className="Flower__Light Flower__Light--4"></div>
              <div className="Flower__Light Flower__Light--5"></div>
              <div className="Flower__Light Flower__Light--6"></div>
              <div className="Flower__Light Flower__Light--7"></div>
              <div className="Flower__Light Flower__Light--8"></div>
            </div>
            <div className="Flower__Line">
              <div className="Flower__LineLeaf Flower__LineLeaf--1"></div>
              <div className="Flower__LineLeaf Flower__LineLeaf--2"></div>
              <div className="Flower__LineLeaf Flower__LineLeaf--3"></div>
              <div className="Flower__LineLeaf Flower__LineLeaf--4"></div>
              <div className="Flower__LineLeaf Flower__LineLeaf--5"></div>
              <div className="Flower__LineLeaf Flower__LineLeaf--6"></div>
            </div>
          </div>

          <div className="Flower Flower--2">
            <div className="Flower__Leafs Flower__Leafs--2">
              <div className="Flower__Leaf Flower__Leaf--1"></div>
              <div className="Flower__Leaf Flower__Leaf--2"></div>
              <div className="Flower__Leaf Flower__Leaf--3"></div>
              <div className="Flower__Leaf Flower__Leaf--4"></div>
              <div className="Flower__WhiteCircle"></div>

              <div className="Flower__Light Flower__Light--1"></div>
              <div className="Flower__Light Flower__Light--2"></div>
              <div className="Flower__Light Flower__Light--3"></div>
              <div className="Flower__Light Flower__Light--4"></div>
              <div className="Flower__Light Flower__Light--5"></div>
              <div className="Flower__Light Flower__Light--6"></div>
              <div className="Flower__Light Flower__Light--7"></div>
              <div className="Flower__Light Flower__Light--8"></div>
            </div>
            <div className="Flower__Line">
              <div className="Flower__LineLeaf Flower__LineLeaf--1"></div>
              <div className="Flower__LineLeaf Flower__LineLeaf--2"></div>
              <div className="Flower__LineLeaf Flower__LineLeaf--3"></div>
              <div className="Flower__LineLeaf Flower__LineLeaf--4"></div>
            </div>
          </div>

          <div className="Flower Flower--3">
            <div className="Flower__Leafs Flower__Leafs--3">
              <div className="Flower__Leaf Flower__Leaf--1"></div>
              <div className="Flower__Leaf Flower__Leaf--2"></div>
              <div className="Flower__Leaf Flower__Leaf--3"></div>
              <div className="Flower__Leaf Flower__Leaf--4"></div>
              <div className="Flower__WhiteCircle"></div>

              <div className="Flower__Light Flower__Light--1"></div>
              <div className="Flower__Light Flower__Light--2"></div>
              <div className="Flower__Light Flower__Light--3"></div>
              <div className="Flower__Light Flower__Light--4"></div>
              <div className="Flower__Light Flower__Light--5"></div>
              <div className="Flower__Light Flower__Light--6"></div>
              <div className="Flower__Light Flower__Light--7"></div>
              <div className="Flower__Light Flower__Light--8"></div>
            </div>
            <div className="Flower__Line">
              <div className="Flower__LineLeaf Flower__LineLeaf--1"></div>
              <div className="Flower__LineLeaf Flower__LineLeaf--2"></div>
              <div className="Flower__LineLeaf Flower__LineLeaf--3"></div>
              <div className="Flower__LineLeaf Flower__LineLeaf--4"></div>
            </div>
          </div>

          <div className="grow-ans" style={{ animationDelay: "1.2s" }}>
            <div className="Flower__g-long">
              <div className="Flower__g-long__top"></div>
              <div className="Flower__g-long__bottom"></div>
            </div>
          </div>

          <div className="growing-grass">
            <div className="Flower__Grass Flower__Grass--1">
              <div className="Flower__Grass--top"></div>
              <div className="Flower__Grass--bottom"></div>
              <div className="Flower__GrassLeaf Flower__GrassLeaf--1"></div>
              <div className="Flower__GrassLeaf Flower__GrassLeaf--2"></div>
              <div className="Flower__GrassLeaf Flower__GrassLeaf--3"></div>
              <div className="Flower__GrassLeaf Flower__GrassLeaf--4"></div>
              <div className="Flower__GrassLeaf Flower__GrassLeaf--5"></div>
              <div className="Flower__GrassLeaf Flower__GrassLeaf--6"></div>
              <div className="Flower__GrassLeaf Flower__GrassLeaf--7"></div>
              <div className="Flower__GrassLeaf Flower__GrassLeaf--8"></div>
              <div className="Flower__GrassOverlay"></div>
            </div>
          </div>

          <div className="growing-grass">
            <div className="Flower__Grass Flower__Grass--2">
              <div className="Flower__Grass--top"></div>
              <div className="Flower__Grass--bottom"></div>
              <div className="Flower__GrassLeaf Flower__GrassLeaf--1"></div>
              <div className="Flower__GrassLeaf Flower__GrassLeaf--2"></div>
              <div className="Flower__GrassLeaf Flower__GrassLeaf--3"></div>
              <div className="Flower__GrassLeaf Flower__GrassLeaf--4"></div>
              <div className="Flower__GrassLeaf Flower__GrassLeaf--5"></div>
              <div className="Flower__GrassLeaf Flower__GrassLeaf--6"></div>
              <div className="Flower__GrassLeaf Flower__GrassLeaf--7"></div>
              <div className="Flower__GrassLeaf Flower__GrassLeaf--8"></div>
              <div className="Flower__GrassOverlay"></div>
            </div>
          </div>

          <div className="grow-ans" style={{ animationDelay: "2.4s" }}>
            <div className="Flower__g-right Flower__g-right--1">
              <div className="Leaf"></div>
            </div>
          </div>

          <div className="grow-ans" style={{ animationDelay: "2.8s" }}>
            <div className="Flower__g-right Flower__g-right--2">
              <div className="Leaf"></div>
            </div>
          </div>

          <div className="grow-ans" style={{ animationDelay: "2.8s" }}>
            <div className="Flower__g-front">
              <div className="Flower__g-front__Leaf-wrapper Flower__g-front__Leaf-wrapper--1">
                <div className="Flower__g-front__Leaf"></div>
              </div>
              <div className="Flower__g-front__Leaf-wrapper Flower__g-front__Leaf-wrapper--2">
                <div className="Flower__g-front__Leaf"></div>
              </div>
              <div className="Flower__g-front__Leaf-wrapper Flower__g-front__Leaf-wrapper--3">
                <div className="Flower__g-front__Leaf"></div>
              </div>
              <div className="Flower__g-front__Leaf-wrapper Flower__g-front__Leaf-wrapper--4">
                <div className="Flower__g-front__Leaf"></div>
              </div>
              <div className="Flower__g-front__Leaf-wrapper Flower__g-front__Leaf-wrapper--5">
                <div className="Flower__g-front__Leaf"></div>
              </div>
              <div className="Flower__g-front__Leaf-wrapper Flower__g-front__Leaf-wrapper--6">
                <div className="Flower__g-front__Leaf"></div>
              </div>
              <div className="Flower__g-front__Leaf-wrapper Flower__g-front__Leaf-wrapper--7">
                <div className="Flower__g-front__Leaf"></div>
              </div>
              <div className="Flower__g-front__Leaf-wrapper Flower__g-front__Leaf-wrapper--8">
                <div className="Flower__g-front__Leaf"></div>
              </div>
              <div className="Flower__g-front__Line"></div>
            </div>
          </div>

          <div className="grow-ans" style={{ animationDelay: "3.2s" }}>
            <div className="Flower__g-fr">
              <div className="Leaf"></div>
              <div className="Flower__g-fr__Leaf Flower__g-fr__Leaf--1"></div>
              <div className="Flower__g-fr__Leaf Flower__g-fr__Leaf--2"></div>
              <div className="Flower__g-fr__Leaf Flower__g-fr__Leaf--3"></div>
              <div className="Flower__g-fr__Leaf Flower__g-fr__Leaf--4"></div>
              <div className="Flower__g-fr__Leaf Flower__g-fr__Leaf--5"></div>
              <div className="Flower__g-fr__Leaf Flower__g-fr__Leaf--6"></div>
              <div className="Flower__g-fr__Leaf Flower__g-fr__Leaf--7"></div>
              <div className="Flower__g-fr__Leaf Flower__g-fr__Leaf--8"></div>
            </div>
          </div>

          <div className="long-g long-g--0">
            <div className="grow-ans" style={{ animationDelay: "3s" }}>
              <div className="Leaf Leaf--0"></div>
            </div>
            <div className="grow-ans" style={{ animationDelay: "2.2s" }}>
              <div className="Leaf Leaf--1"></div>
            </div>
            <div className="grow-ans" style={{ animationDelay: "3.4s" }}>
              <div className="Leaf Leaf--2"></div>
            </div>
            <div className="grow-ans" style={{ animationDelay: "3.6s" }}>
              <div className="Leaf Leaf--3"></div>
            </div>
          </div>

          <div className="long-g long-g--1">
            <div className="grow-ans" style={{ animationDelay: "3.6s" }}>
              <div className="Leaf Leaf--0"></div>
            </div>
            <div className="grow-ans" style={{ animationDelay: "3.8s" }}>
              <div className="Leaf Leaf--1"></div>
            </div>
            <div className="grow-ans" style={{ animationDelay: "4s" }}>
              <div className="Leaf Leaf--2"></div>
            </div>
            <div className="grow-ans" style={{ animationDelay: "4.2s" }}>
              <div className="Leaf Leaf--3"></div>
            </div>
          </div>

          <div className="long-g long-g--2">
            <div className="grow-ans" style={{ animationDelay: "4s" }}>
              <div className="Leaf Leaf--0"></div>
            </div>
            <div className="grow-ans" style={{ animationDelay: "4.2s" }}>
              <div className="Leaf Leaf--1"></div>
            </div>
            <div className="grow-ans" style={{ animationDelay: "4.4s" }}>
              <div className="Leaf Leaf--2"></div>
            </div>
            <div className="grow-ans" style={{ animationDelay: "4.6s" }}>
              <div className="Leaf Leaf--3"></div>
            </div>
          </div>

          <div className="long-g long-g--3">
            <div className="grow-ans" style={{ animationDelay: "4s" }}>
              <div className="Leaf Leaf--0"></div>
            </div>
            <div className="grow-ans" style={{ animationDelay: "4.2s" }}>
              <div className="Leaf Leaf--1"></div>
            </div>
            <div className="grow-ans" style={{ animationDelay: "3s" }}>
              <div className="Leaf Leaf--2"></div>
            </div>
            <div className="grow-ans" style={{ animationDelay: "3.6s" }}>
              <div className="Leaf Leaf--3"></div>
            </div>
          </div>

          <div className="long-g long-g--4">
            <div className="grow-ans" style={{ animationDelay: "4s" }}>
              <div className="Leaf Leaf--0"></div>
            </div>
            <div className="grow-ans" style={{ animationDelay: "4.2s" }}>
              <div className="Leaf Leaf--1"></div>
            </div>
            <div className="grow-ans" style={{ animationDelay: "3s" }}>
              <div className="Leaf Leaf--2"></div>
            </div>
            <div className="grow-ans" style={{ animationDelay: "3.6s" }}>
              <div className="Leaf Leaf--3"></div>
            </div>
          </div>

          <div className="long-g long-g--5">
            <div className="grow-ans" style={{ animationDelay: "4s" }}>
              <div className="Leaf Leaf--0"></div>
            </div>
            <div className="grow-ans" style={{ animationDelay: "4.2s" }}>
              <div className="Leaf Leaf--1"></div>
            </div>
            <div className="grow-ans" style={{ animationDelay: "3s" }}>
              <div className="Leaf Leaf--2"></div>
            </div>
            <div className="grow-ans" style={{ animationDelay: "3.6s" }}>
              <div className="Leaf Leaf--3"></div>
            </div>
          </div>

          <div className="long-g long-g--6">
            <div className="grow-ans" style={{ animationDelay: "4.2s" }}>
              <div className="Leaf Leaf--0"></div>
            </div>
            <div className="grow-ans" style={{ animationDelay: "4.4s" }}>
              <div className="Leaf Leaf--1"></div>
            </div>
            <div className="grow-ans" style={{ animationDelay: "4.6s" }}>
              <div className="Leaf Leaf--2"></div>
            </div>
            <div className="grow-ans" style={{ animationDelay: "4.8s" }}>
              <div className="Leaf Leaf--3"></div>
            </div>
          </div>

          <div className="long-g long-g--7">
            <div className="grow-ans" style={{ animationDelay: "3s" }}>
              <div className="Leaf Leaf--0"></div>
            </div>
            <div className="grow-ans" style={{ animationDelay: "3.2s" }}>
              <div className="Leaf Leaf--1"></div>
            </div>
            <div className="grow-ans" style={{ animationDelay: "3.5s" }}>
              <div className="Leaf Leaf--2"></div>
            </div>
            <div className="grow-ans" style={{ animationDelay: "3.6s" }}>
              <div className="Leaf Leaf--3"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
