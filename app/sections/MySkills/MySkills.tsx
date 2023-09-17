import * as React from "react";
import { abilities } from "~/constants";
import styles from "./MySkills.css";
import { LinksFunction } from "@remix-run/node";
import { useWasInViewAtLeastOnce } from "~/hooks/useWasInViewAtLeastOnce";

export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: styles
  }
];

const MySkills: React.FC = ({}) => {
  const { setRef, wasInViewAtLeastOnce } = useWasInViewAtLeastOnce();
  const className = wasInViewAtLeastOnce ? "show" : "hide";
  return (
    <section className={`h-fit ${className}`} ref={setRef}>
      <div className="skills-section-container">
        <img
          src="/images/background/Eclipse.svg"
          alt="Decorative background eclipse"
          className="eclipse absolute"
        />
          <ul className="abilities-wrapper mt-5 md:mt-0 grid xs:grid-cols-2 md:grid-cols-3 gap-5 justify-start">
            {abilities.map((ability, index) => (
              <li key={ability}>
                <div
                  className={`ability-card ${className} flex items-center text-left p-8`}
                  style={{
                    animationDelay: `${1 + index}`
                  }}
                >
                  <p className="text-base text-textSmColor leading-8">
                    {ability}
                  </p>
                </div>
              </li>
            ))}
          </ul>
      </div>
    </section>
  );
};

export default MySkills;

