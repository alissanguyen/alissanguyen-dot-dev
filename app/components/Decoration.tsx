import gsap from "gsap";
import * as React from "react";

export const EatLearnCode: React.FC = () => {
  return (
    <div className="elc-container">
      <div className="elc-reveal">
        <div className="elc-reveal__content">Eat.</div>
      </div>
      <div className="elc-reveal">
        <div className="elc-reveal__content">Learn.</div>
      </div>
      <div className="elc-reveal">
        <div className="elc-reveal__content">Code.</div>
      </div>
    </div>
  );
};

export const Quote: React.FC = () => {
  return (
    <div className="quote-wrapper ml-20 text-xl">
      <span className="quote-text">
        If you set your goal ridiculously high and it's a failure,
        <span className="quote-text">
          you will fail above everyone eles's success.
          <span className="quote-text">—James Cameron</span>{" "}
        </span>
      </span>
    </div>
  );
};

export const MyProjectsTitle = () => {
  return (
    <svg
      viewBox="0 0 1280 720"
      className="my-projects-title absolute w-full h-full"
    >
      <text textAnchor="middle" x="50%" y="50%">
        My projects
      </text>
    </svg>
  );
};

export const Portfolio: React.FC = () => {
  const word = "Portfolio";

  return (
    <section aria-label="Floating Logo" className="portfolio-section">
      <div className="tilt">
        {word.split("").map((letter, index) => {
          return (
            <span key={index} style={{ animationDelay: String(index + 1) }}>
              {letter}
            </span>
          );
        })}
      </div>
    </section>
  );
};

export const TitlesSplitText = () => {
  var tl = gsap.timeline(),
    mySplitText = new SplitText("titles-splittext-h1", { type: "lines" }),
    lines = mySplitText.lines; //an array of all the divs that wrap each character

  gsap.set("h1", { perspective: 400 });

  tl.from(
    lines,
    {
      duration: 1.5,
      opacity: 0,
      y: 60,
      rotationX: -90,
      transformOrigin: "0% 50% -50",
      ease: "power3.out",
      stagger: 0.15,
    },
    "+=0"
  );
  return (
    <div className="titles-splittext-hero">
      <h1 className="titles-splittext-h1">
        Freelance<br>Web Designer &</br>
        <span>Developer</span>
      </h1>
    </div>
  );
};
export const GradientBackground1 = () => {
  return (
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid slice"
      className="gradient-bg absolute mix-blend-screen overflow-visible"
    >
      <defs>
        <radialGradient
          id="Gradient1"
          cx="50%"
          cy="50%"
          fx="10%"
          fy="50%"
          r=".5"
        >
          <animate
            attributeName="fx"
            dur="34s"
            values="0%;3%;0%"
            repeatCount="indefinite"
          />
          <stop offset="0%" stopColor="#ff0" />
          <stop offset="100%" stopColor="#ff00" />
        </radialGradient>
        <radialGradient
          id="Gradient2"
          cx="50%"
          cy="50%"
          fx="10%"
          fy="50%"
          r=".5"
        >
          <animate
            attributeName="fx"
            dur="23.5s"
            values="0%;3%;0%"
            repeatCount="indefinite"
          />
          <stop offset="0%" stopColor="#0ff" />
          <stop offset="100%" stopColor="#0ff0" />
        </radialGradient>
        <radialGradient
          id="Gradient3"
          cx="50%"
          cy="50%"
          fx="50%"
          fy="50%"
          r=".5"
        >
          <animate
            attributeName="fx"
            dur="21.5s"
            values="0%;3%;0%"
            repeatCount="indefinite"
          />
          <stop offset="0%" stopColor="#f0f" />
          <stop offset="100%" stopColor="#f0f0" />
        </radialGradient>
      </defs>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#Gradient1)">
        <animate
          attributeName="x"
          dur="20s"
          values="25%;0%;25%"
          repeatCount="indefinite"
        />
        <animate
          attributeName="y"
          dur="21s"
          values="0%;25%;0%"
          repeatCount="indefinite"
        />
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 50 50"
          to="360 50 50"
          dur="17s"
          repeatCount="indefinite"
        />
      </rect>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#Gradient2)">
        <animate
          attributeName="x"
          dur="23s"
          values="-25%;0%;-25%"
          repeatCount="indefinite"
        />
        <animate
          attributeName="y"
          dur="24s"
          values="0%;50%;0%"
          repeatCount="indefinite"
        />
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 50 50"
          to="360 50 50"
          dur="18s"
          repeatCount="indefinite"
        />
      </rect>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#Gradient3)">
        <animate
          attributeName="x"
          dur="25s"
          values="0%;25%;0%"
          repeatCount="indefinite"
        />
        <animate
          attributeName="y"
          dur="26s"
          values="0%;25%;0%"
          repeatCount="indefinite"
        />
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="360 50 50"
          to="0 50 50"
          dur="19s"
          repeatCount="indefinite"
        />
      </rect>
    </svg>
  );
};
export const GradientBackground2 = () => {
  return (
    <div id="bg-wrap" className="gradient-bg">
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
        className="gradient-bg absolute mix-blend-screen overflow-visible"
      >
        <defs>
          <radialGradient
            id="Gradient1"
            cx="50%"
            cy="50%"
            fx="0.441602%"
            fy="50%"
            r=".5"
          >
            <animate
              attributeName="fx"
              dur="34s"
              values="0%;3%;0%"
              repeatCount="indefinite"
            ></animate>
            <stop offset="0%" stopColor="rgba(255, 0, 255, 1)"></stop>
            <stop offset="100%" stopColor="rgba(255, 0, 255, 0)"></stop>
          </radialGradient>
          <radialGradient
            id="Gradient2"
            cx="50%"
            cy="50%"
            fx="2.68147%"
            fy="50%"
            r=".5"
          >
            <animate
              attributeName="fx"
              dur="23.5s"
              values="0%;3%;0%"
              repeatCount="indefinite"
            ></animate>
            <stop offset="0%" stopColor="rgba(255, 255, 0, 1)"></stop>
            <stop offset="100%" stopColor="rgba(255, 255, 0, 0)"></stop>
          </radialGradient>
          <radialGradient
            id="Gradient3"
            cx="50%"
            cy="50%"
            fx="0.836536%"
            fy="50%"
            r=".5"
          >
            <animate
              attributeName="fx"
              dur="21.5s"
              values="0%;3%;0%"
              repeatCount="indefinite"
            ></animate>
            <stop offset="0%" stopColor="rgba(0, 255, 255, 1)"></stop>
            <stop offset="100%" stopColor="rgba(0, 255, 255, 0)"></stop>
          </radialGradient>
          <radialGradient
            id="Gradient4"
            cx="50%"
            cy="50%"
            fx="4.56417%"
            fy="50%"
            r=".5"
          >
            <animate
              attributeName="fx"
              dur="23s"
              values="0%;5%;0%"
              repeatCount="indefinite"
            ></animate>
            <stop offset="0%" stopColor="rgba(0, 255, 0, 1)"></stop>
            <stop offset="100%" stopColor="rgba(0, 255, 0, 0)"></stop>
          </radialGradient>
          <radialGradient
            id="Gradient5"
            cx="50%"
            cy="50%"
            fx="2.65405%"
            fy="50%"
            r=".5"
          >
            <animate
              attributeName="fx"
              dur="24.5s"
              values="0%;5%;0%"
              repeatCount="indefinite"
            ></animate>
            <stop offset="0%" stopColor="rgba(0,0,255, 1)"></stop>
            <stop offset="100%" stopColor="rgba(0,0,255, 0)"></stop>
          </radialGradient>
          <radialGradient
            id="Gradient6"
            cx="50%"
            cy="50%"
            fx="0.981338%"
            fy="50%"
            r=".5"
          >
            <animate
              attributeName="fx"
              dur="25.5s"
              values="0%;5%;0%"
              repeatCount="indefinite"
            ></animate>
            <stop offset="0%" stopColor="rgba(255,0,0, 1)"></stop>
            <stop offset="100%" stopColor="rgba(255,0,0, 0)"></stop>
          </radialGradient>
        </defs>

        <rect
          x="13.744%"
          y="1.18473%"
          width="100%"
          height="100%"
          fill="url(#Gradient1)"
          transform="rotate(334.41 50 50)"
        >
          <animate
            attributeName="x"
            dur="20s"
            values="25%;0%;25%"
            repeatCount="indefinite"
          ></animate>
          <animate
            attributeName="y"
            dur="21s"
            values="0%;25%;0%"
            repeatCount="indefinite"
          ></animate>
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 50 50"
            to="360 50 50"
            dur="7s"
            repeatCount="indefinite"
          ></animateTransform>
        </rect>
        <rect
          x="-2.17916%"
          y="35.4267%"
          width="100%"
          height="100%"
          fill="url(#Gradient2)"
          transform="rotate(255.072 50 50)"
        >
          <animate
            attributeName="x"
            dur="23s"
            values="-25%;0%;-25%"
            repeatCount="indefinite"
          ></animate>
          <animate
            attributeName="y"
            dur="24s"
            values="0%;50%;0%"
            repeatCount="indefinite"
          ></animate>
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 50 50"
            to="360 50 50"
            dur="12s"
            repeatCount="indefinite"
          ></animateTransform>
        </rect>
        <rect
          x="9.00483%"
          y="14.5733%"
          width="100%"
          height="100%"
          fill="url(#Gradient3)"
          transform="rotate(139.903 50 50)"
        >
          <animate
            attributeName="x"
            dur="25s"
            values="0%;25%;0%"
            repeatCount="indefinite"
          ></animate>
          <animate
            attributeName="y"
            dur="12s"
            values="0%;25%;0%"
            repeatCount="indefinite"
          ></animate>
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="360 50 50"
            to="0 50 50"
            dur="9s"
            repeatCount="indefinite"
          ></animateTransform>
        </rect>
      </svg>
    </div>
  );
};

export const ContactTitle = () => {
  return (
    <svg viewBox="0 0 1280 720">
      <text textAnchor="middle" x="50%" y="50%" className="text-9xl">
        Get in touch.
      </text>
    </svg>
  );
};

export const AboutMeTitles = () => {
  return (
    <div className="title-content">
      <div className="title-content__container inline-flex overflow-hidden font-semibold items-center">
        <p className="title-content__container__text m-0 float-left inline-flex">
          I'm a
        </p>
        <span className="blinker">[</span>
        <ul className="title-content__container__list text-left list-none">
          <li key={0} className="title-content__container__list__item m-0">
            software engineer
          </li>
          <li key={1} className="title-content__container__list__item m-0">
            freelance artist
          </li>
          <li key={2} className="title-content__container__list__item m-0">
            manga/anime lover !
          </li>
          <li key={3} className="title-content__container__list__item m-0">
            cat mom 🐈‍⬛ 🐈
          </li>
        </ul>
        <span className="blinker">]</span>
      </div>
    </div>
  );
};
