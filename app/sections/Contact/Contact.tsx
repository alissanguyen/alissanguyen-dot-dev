import gsap from "gsap";
import * as React from "react";
import { Form, LinksFunction } from "remix";
import { ContactFormFields } from "~/types";

import styles from "./Contact.css";

interface Props {
  data: any;
}

export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: styles
  }
];

const Contact: React.FC<Props> = (props) => {
  const actionData = props.data;
  return (
    <div className="contact-wrapper">
      <ContactTitle />
      <div className="mt-20"></div>
      <div className="grid grid-cols-2">
        <div className="flex flex-col flex-start">
          <YoutubeLogoWithHeart />
        </div>
        <ContactForm data={actionData} />
      </div>
    </div>
  );
};

export default Contact;

const ContactTitle = () => {
  return (
    <svg viewBox="0 0 1000 110" className="contact-title">
      <text textAnchor="middle" x="50%" y="90%" className="text-9xl">
        Get in touch
      </text>
    </svg>
  );
};

const ContactForm: React.FC<Props> = (props) => {
  const data = props.data;
  return (
    <Form
      method="post"
      action="/?index"
      className="contact-form flex flex-col text-textLgColor"
    >
      <label
        htmlFor={ContactFormFields.name}
        className="text-sm text-base pt-2"
      >
        Your name
      </label>
      <input
        id={ContactFormFields.name}
        name={ContactFormFields.name}
        type="text"
        className="appearance-none rounded-lg relative block w-full px-3 py-1"
      />
      <div className="error">
        <p>{data?.fieldErrors?.name && data?.fieldErrors?.name}</p>
      </div>
      <label
        htmlFor={ContactFormFields.email}
        className="text-sm text-base pt-2"
      >
        Your email
      </label>
      <input
        id={ContactFormFields.email}
        name={ContactFormFields.email}
        type="email"
        className="appearance-none rounded-lg relative block w-full px-3 py-1"
      />
      <div className="error">
        <p>{data?.fieldErrors?.email && data?.fieldErrors?.email}</p>
      </div>
      <label
        htmlFor={ContactFormFields.subject}
        className="text-textLgcolor  text-sm text-base pt-2"
      >
        Your email subject
      </label>
      <input
        id={ContactFormFields.subject}
        name={ContactFormFields.subject}
        type="text"
        className="appearance-none rounded-lg relative block w-full px-3 py-2"
      />
      <div className="error">
        <p>{data?.fieldErrors?.subject && data?.fieldErrors?.subject}</p>
      </div>
      <label
        htmlFor={ContactFormFields.message}
        className="text-textLgcolor text-sm text-base py-2"
      >
        Your message
      </label>
      <textarea
        id={ContactFormFields.message}
        name={ContactFormFields.message}
        className="appearance-none rounded-lg relative block w-full px-3 py-1 mb-7"
      />
      <div className="error">
        <p>{data?.fieldErrors?.message && data?.fieldErrors?.message}</p>
      </div>
      <ContactFormSendButton />
      {/* <button
        type="submit"
        className="mt-6 relative w-full flex justify-center py-2 px-4 text-sm font-medium rounded-md"
      >
        Send
      </button> */}
    </Form>
  );
};
export const YoutubeLogoWithHeart = () => {
  React.useEffect(() => {
    let select = (s: any) => document.querySelector(s);

    const mainSVG = select("#mainSVG");

    gsap.set("svg", {
      visibility: "visible"
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
        y: loc.y
      });
    };
    mainSVG.onpointerdown = (e: Event) => {
      gsap.killTweensOf(".redHeart");
      gsap.set("#buttonPoke", {
        opacity: 1
      });
      gsap.fromTo(
        "#buttonPoke",
        {
          scale: 0.25,
          transformOrigin: "50% 50%"
        },
        {
          transformOrigin: "50% 50%",
          scale: 1,
          duration: 0.5,
          ease: "elastic(0.63, 0.83)"
        }
      );
      gsap.to(".redHeart", {
        scaleX: 1.15,
        scaleY: 0.85,
        duration: 0.521,
        transformOrigin: "50% 50%",
        ease: "elastic(0.42, 0.47)"
      });
    };

    mainSVG.onpointerup = (e: Event) => {
      gsap.set("#buttonPoke", {
        opacity: 0
      });
      gsap.to(".redHeart", {
        scaleX: 1,
        duration: 1.81,
        ease: "elastic(1.5, 0.25)"
      });
      gsap.to(".redHeart", {
        scaleY: 1,
        duration: 1.5,
        ease: "elastic(1.3, 0.35)"
      });
    };
    let tl = gsap.timeline();
    tl.from("#wholePanel", {
      svgOrigin: "400 300", // 400 300
      scaleX: 0,
      scaleY: 0,
      duration: 0.67,
      delay: 1,
      ease: "elastic(0.3, 0.25)"
    })
      .from(
        ".redHeart",
        {
          svgOrigin: "400 300",
          scaleX: 0,
          scaleY: 0,
          duration: 0.7,
          //delay: 1,
          ease: "elastic(0.3, 0.25)"
        },
        "-=0.6"
      )
      .timeScale(0.5);
  }, []);
  return (
    <div id="letter-container">
      <svg
        id="mainSVG"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 800 500" // two first numbers control where the letter goes
      >
        <rect width="100%" height="100%" fill="url(#bgGrad)" />
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

export const ContactFormSendButton = () => {
  React.useEffect(() => {
    const buttons = document.querySelectorAll(".contact-button");

    if (buttons) {
      buttons.forEach((button) => {
        let getVar = (variable: any) =>
          getComputedStyle(button).getPropertyValue(variable);

        button.addEventListener("click", (e) => {
          if (!button.classList.contains("active")) {
            button.classList.add("active");

            gsap.to(button, {
              keyframes: [
                {
                  "--left-wing-first-x": 50,
                  "--left-wing-first-y": 100,
                  "--right-wing-second-x": 50,
                  "--right-wing-second-y": 100,
                  duration: 0.2,
                  onComplete() {
                    gsap.set(button, {
                      "--left-wing-first-y": 0,
                      "--left-wing-second-x": 40,
                      "--left-wing-second-y": 100,
                      "--left-wing-third-x": 0,
                      "--left-wing-third-y": 100,
                      "--left-body-third-x": 40,
                      "--right-wing-first-x": 50,
                      "--right-wing-first-y": 0,
                      "--right-wing-second-x": 60,
                      "--right-wing-second-y": 100,
                      "--right-wing-third-x": 100,
                      "--right-wing-third-y": 100,
                      "--right-body-third-x": 60
                    });
                  }
                },
                {
                  "--left-wing-third-x": 20,
                  "--left-wing-third-y": 90,
                  "--left-wing-second-y": 90,
                  "--left-body-third-y": 90,
                  "--right-wing-third-x": 80,
                  "--right-wing-third-y": 90,
                  "--right-body-third-y": 90,
                  "--right-wing-second-y": 90,
                  duration: 0.2
                },
                {
                  "--rotate": 50,
                  "--left-wing-third-y": 95,
                  "--left-wing-third-x": 27,
                  "--right-body-third-x": 45,
                  "--right-wing-second-x": 45,
                  "--right-wing-third-x": 60,
                  "--right-wing-third-y": 83,
                  duration: 0.25
                },
                {
                  "--rotate": 55,
                  "--plane-x": -8,
                  "--plane-y": 24,
                  duration: 0.2
                },
                {
                  "--rotate": 40,
                  "--plane-x": 45,
                  "--plane-y": -180,
                  "--plane-opacity": 0,
                  duration: 0.3,
                  onComplete() {
                    setTimeout(() => {
                      button.removeAttribute("style");
                      gsap.fromTo(
                        button,
                        {
                          opacity: 0,
                          y: -8
                        },
                        {
                          opacity: 1,
                          y: 0,
                          clearProps: true,
                          duration: 0.3,
                          onComplete() {
                            button.classList.remove("active");
                          }
                        }
                      );
                    }, 2000);
                  }
                }
              ]
            }); //line 434

            gsap.to(button, {
              keyframes: [
                {
                  "--text-opacity": 0,
                  "--border-radius": 0,
                  "--left-wing-background": getVar("--primary-darkest"),
                  "--right-wing-background": getVar("--primary-darkest"),
                  duration: 0.1
                },
                {
                  "--left-wing-background": getVar("--primary"),
                  "--right-wing-background": getVar("--primary"),
                  duration: 0.1
                },
                {
                  "--left-body-background": getVar("--primary-dark"),
                  "--right-body-background": getVar("--primary-darkest"),
                  duration: 0.4
                },
                {
                  "--success-opacity": 1,
                  "--success-scale": 1,
                  duration: 0.25,
                  delay: 0.25
                }
              ]
            });
          } // line 430
        }); //line 428
      }); //line 424
    } //423
  }, []);

  return (
    <button type="submit" className="contact-button">
      <span className="default">Send</span>
      <span className="success">Sent</span>
      <div className="left"></div>
      <div className="right"></div>
    </button>
  );
};
