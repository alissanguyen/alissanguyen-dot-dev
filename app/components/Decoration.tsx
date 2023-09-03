import * as React from "react";
import { useWasInViewAtLeastOnce } from "~/hooks/useWasInViewAtLeastOnce";

export const EatLearnCode: React.FC = () => {
  const { setRef, wasInViewAtLeastOnce } = useWasInViewAtLeastOnce();
  const wrapperClass = wasInViewAtLeastOnce ? "elc-reveal" : undefined;
  const contentClass = wasInViewAtLeastOnce ? "elc-reveal__content" : undefined;

  return (
    <div className={`elc-container h-full lg:text-4xl `} ref={setRef}>
      <div className={wrapperClass}>
        <div className={contentClass}>Eat.</div>
      </div>
      <div className={wrapperClass}>
        <div className={contentClass}>Learn.</div>
      </div>
      <div className={wrapperClass}>
        <div className={contentClass}>Code.</div>
      </div>
    </div>
  );
};

export const Portfolio: React.FC = () => {
  const word = "Portfolio";
  return (
    <section
      aria-label="Floating Logo"
      className="portfolio-text font-extrabold w-full text-5xl xxs:text-6xl xs:text-7xl sm:text-8xl md:text-9xl lg:text-[9rem] text-textSmColor xs:mt-44 sm:mt-96"
    >
      <div className="tilt flex-center uppercase">
        {word.split("").map((letter, index) => {
          return <span key={index}>{letter}</span>;
        })}
      </div>
    </section>
  );
};

export const GradientBackground1 = () => {
  return (
    <svg
      viewBox="0 0 50 50"
      preserveAspectRatio="xMidYMid slice"
      className="gradient-bg absolute mix-blend-screen"
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
      <rect x="0" y="0" width="50%" height="50%" fill="url(#Gradient1)">
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
      <rect x="0" y="0" width="50%" height="50%" fill="url(#Gradient2)">
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
      <rect x="0" y="0" width="50%" height="50%" fill="url(#Gradient3)">
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
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid slice"
      className="select-none gradient-bg absolute mix-blend-screen"
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
        width="50%"
        height="50%"
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
        width="70%"
        height="70%"
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
        width="60%"
        height="60%"
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
  );
};

export const GradientBackground3 = () => {
  return (
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid slice"
      className="gradient-bg gradient-bg-3 absolute mix-blend-screen"
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
            values="0%;10%;0%"
            repeatCount="indefinite"
          />
          <stop offset="0%" stopColor="#00aeef" />
          <stop offset="100%" stopColor="#00aeef00" />
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
            values="0%;10%;0%"
            repeatCount="indefinite"
          />
          <stop offset="0%" stopColor="#ec008c" />
          <stop offset="100%" stopColor="#ec008c00" />
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
            values="0%;10%;0%"
            repeatCount="indefinite"
          />
          <stop offset="0%" stopColor="#fff200" />
          <stop offset="100%" stopColor="#fff20000" />
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


export const GlowingClouds = () => {
  return (
    <div className="spots">
      <span className="spot spot-1">&nbsp;</span>
      <span className="spot spot-2">&nbsp;</span>
      <span className="spot spot-3">&nbsp;</span>
    </div>
  );
};
