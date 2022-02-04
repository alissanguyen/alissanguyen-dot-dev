import gsap from "gsap";
import * as React from "react";

interface Props {}

const Contact: React.FC<Props> = ({}) => {
  return (
    <div>
      <ContactTitle />
      <Letter />
    </div>
  );
};

export default Contact;

const ContactTitle = () => {
  return (
    <svg viewBox="0 0 1280 720" className="contact-svg">
      <text textAnchor="middle" x="50%" y="50%" className="text-9xl">
        Get in touch.
      </text>
    </svg>
  );
};

const Letter = () => {
  React.useEffect(() => {
    let select = (s: any) => document.querySelector(s);

    let selectAll = (s: any) => document.querySelectorAll(s),
      mainSVG = select("#mainSVG");

    gsap.set("svg", {
      visibility: "visible",
    });

    let pt = mainSVG.createSVGPoint();
    // Get point in global SVG space
    function cursorPoint(evt: PointerEvent) {
      pt.x = evt.clientX;
      pt.y = evt.clientY;
      return pt.matrixTransform(mainSVG.getScreenCTM().inverse());
    }

    mainSVG.onpointermove = (e: any) => {
      const loc: MouseEvent = cursorPoint(e);

      gsap.set("#buttonPoke", {
        x: loc.x,
        y: loc.y,
      });
    };
    mainSVG.onpointerdown = (e: Event) => {
      gsap.killTweensOf(".redHeart");
      gsap.set("#buttonPoke", {
        opacity: 1,
      });
      gsap.fromTo(
        "#buttonPoke",
        {
          scale: 0.25,
          transformOrigin: "50% 50%",
        },
        {
          transformOrigin: "50% 50%",
          scale: 1,
          duration: 0.5,
          ease: "elastic(0.63, 0.83)",
        }
      );
      gsap.to(".redHeart", {
        scaleX: 1.15,
        scaleY: 0.85,
        duration: 0.521,
        transformOrigin: "50% 50%",
        ease: "elastic(0.42, 0.47)",
      });
    };

    mainSVG.onpointerup = (e: Event) => {
      gsap.set("#buttonPoke", {
        opacity: 0,
      });
      gsap.to(".redHeart", {
        scaleX: 1,
        duration: 1.81,
        ease: "elastic(1.5, 0.25)",
      });
      gsap.to(".redHeart", {
        scaleY: 1,
        duration: 1.5,
        ease: "elastic(1.3, 0.35)",
      });
    };
    let tl = gsap.timeline();
    tl.from("#wholePanel", {
      svgOrigin: "400 300",
      scaleX: 0,
      scaleY: 0,
      duration: 0.67,
      delay: 1,
      ease: "elastic(0.3, 0.25)",
    })
      .from(
        ".redHeart",
        {
          svgOrigin: "400 300",
          scaleX: 0,
          scaleY: 0,
          duration: 0.7,
          //delay: 1,
          ease: "elastic(0.3, 0.25)",
        },
        "-=0.6"
      )
      .timeScale(0.5);
  });
  return (
    <div id="letter-container">
      <svg id="bgSVG" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient
            id="bgGrad"
            x1="400"
            y1="300"
            x2="400"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#fff" />
            <stop offset="0.75" stopColor="#F8ADB1" stopOpacity={0.8} />
            <stop offset="1" stopColor="#FC7272" stopOpacity={0.8} />
          </linearGradient>
        </defs>
      </svg>

      <svg
        id="mainSVG"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 800 600"
      >
        <defs>
          <filter
            id="panelDropShadow"
            x="-100%"
            y="-100%"
            width="350%"
            height="350%"
          >
            <feGaussianBlur stdDeviation="24" result="coloredBlur" />
            <feOffset dx="12" dy="24" result="offsetblur"></feOffset>
            <feFlood
              id="glowAlpha"
              floodColor="#B50606"
              floodOpacity="0.26"
            ></feFlood>
            <feComposite in2="offsetblur" operator="in"></feComposite>
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic"></feMergeNode>
            </feMerge>
          </filter>
          <filter
            id="buttonDropShadow"
            x="-100%"
            y="-100%"
            width="350%"
            height="350%"
          >
            <feGaussianBlur stdDeviation="12" result="coloredBlur" />
            <feOffset dx="0" dy="6" result="offsetblur"></feOffset>
            <feFlood
              id="glowAlpha"
              floodColor="#B50606"
              floodOpacity="0.6"
            ></feFlood>
            <feComposite in2="offsetblur" operator="in"></feComposite>
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic"></feMergeNode>
            </feMerge>
          </filter>
          <filter
            id="panelInnerShadow2"
            x="-100%"
            y="-100%"
            width="250%"
            height="250%"
          >
            <feGaussianBlur in="SourceAlpha" stdDeviation="16" result="blur" />
            <feOffset dx="-12" dy="-8" />
            <feComposite
              in2="SourceAlpha"
              operator="arithmetic"
              k2="-1"
              k3="1"
              result="shadowDiff"
            />
            <feFlood
              floodColor="#E54E4E"
              className="buttonFlood"
              floodOpacity="0.21"
            />
            <feComposite in2="shadowDiff" operator="in" />
            <feComposite in2="SourceGraphic" operator="over" />
          </filter>
          <filter
            id="panelInnerShadow"
            x="-100%"
            y="-100%"
            width="250%"
            height="250%"
          >
            <feGaussianBlur in="SourceAlpha" stdDeviation="16" result="blur" />
            <feOffset dx="12" dy="8" />
            <feComposite
              in2="SourceAlpha"
              operator="arithmetic"
              k2="-1"
              k3="1"
              result="shadowDiff"
            />
            <feFlood
              floodColor="#FC7272"
              className="buttonFlood_a"
              floodOpacity="0.21"
            />
            <feComposite in2="shadowDiff" operator="in" />
            <feComposite in2="SourceGraphic" operator="over" />
          </filter>

          <filter
            id="buttonInnerShadow"
            x="-100%"
            y="-100%"
            width="250%"
            height="250%"
          >
            <feGaussianBlur in="SourceAlpha" stdDeviation="8" result="blur" />
            <feOffset dx="4" dy="4" />
            <feComposite
              in2="SourceAlpha"
              operator="arithmetic"
              k2="-1"
              k3="1"
              result="shadowDiff"
            />
            <feFlood
              floodColor="#FC7272"
              className="buttonFlood_a"
              floodOpacity="0.63"
            />
            <feComposite in2="shadowDiff" operator="in" />
            <feComposite in2="SourceGraphic" operator="over" />
          </filter>
          <filter
            id="buttonInnerShadow2"
            x="-100%"
            y="-100%"
            width="250%"
            height="250%"
          >
            <feGaussianBlur in="SourceAlpha" stdDeviation="6" result="blur" />
            <feOffset dx="-6" dy="-6" />
            <feComposite
              in2="SourceAlpha"
              operator="arithmetic"
              k2="-1"
              k3="1"
              result="shadowDiff"
            />
            <feFlood
              floodColor="#B50606"
              className="buttonFlood"
              floodOpacity="1"
            />
            <feComposite in2="shadowDiff" operator="in" />
            <feComposite in2="SourceGraphic" operator="over" />
          </filter>

          <clipPath id="buttonMask">
            <path
              className="redHeart"
              d="M433.16,243.89c-10,0-24.18,6.56-33.16,13.47-9-6.91-23.14-13.47-33.16-13.47S334,249.42,334,276.36c0,33.21,40.3,64.93,57.91,77.21a14.08,14.08,0,0,0,16.14,0c17.61-12.28,57.91-44,57.91-77.21C466,249.42,443.18,243.89,433.16,243.89Z"
              fill="#ea3434"
            />
          </clipPath>
          <radialGradient
            id="pokeGrad"
            cx="0"
            cy="0"
            r="26"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#B50606" />

            <stop offset="1" stopColor="#EA3434" stopOpacity="0" />
          </radialGradient>
        </defs>

        <g id="wholePanel">
          <g id="panelBg" stroke="none" filter="url(#panelDropShadow)">
            <g stroke="none" filter="url(#panelInnerShadow)">
              <g stroke="none" filter="url(#panelInnerShadow2)">
                <path
                  fill="#FFF"
                  d="M521.29,423.51a2320.15,2320.15,0,0,1-242.58,0c-33.47-2-60.56-31.39-60.56-64.59V252.68c0-33.2,27.09-62.61,60.56-64.58a2314.68,2314.68,0,0,1,242.58,0c33.47,2,60.56,31.38,60.56,64.58V358.92C581.85,392.12,554.76,421.53,521.29,423.51Z"
                />
              </g>
            </g>
          </g>
          <g className="redHeart" stroke="none" filter="url(#buttonDropShadow)">
            <g stroke="none" filter="url(#buttonInnerShadow)">
              <g stroke="none" filter="url(#buttonInnerShadow2)">
                <path
                  d="M433.16,243.89c-10,0-24.18,6.56-33.16,13.47-9-6.91-23.14-13.47-33.16-13.47S334,249.42,334,276.36c0,33.21,40.3,64.93,57.91,77.21a14.08,14.08,0,0,0,16.14,0c17.61-12.28,57.91-44,57.91-77.21C466,249.42,443.18,243.89,433.16,243.89Z"
                  fill="#ea3434"
                />
              </g>
            </g>
          </g>
          <g clipPath="url(#buttonMask)">
            <circle
              id="buttonPoke"
              cx="0"
              cy="0"
              r="26"
              fill="url(#pokeGrad)"
              opacity="0"
            />
          </g>
        </g>
      </svg>
    </div>
  );
};
