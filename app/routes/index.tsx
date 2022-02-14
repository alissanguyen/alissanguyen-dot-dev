import {
  EatLearnCode,
  GradientBackground2,
  GradientBackground3,
  Portfolio
} from "~/components/Decoration";
import Contact, { links as contactStyles } from "~/sections/Contact/Contact";
import { LinksFunction, useActionData } from "remix";
import { links as linkButtonStyles } from "~/components/ExternalLinkButton/ExternalLinkButton";
import AboutMe, { links as aboutMeStyles } from "~/sections/AboutMe/AboutMe";
import MySkills, { links as skillsStyles } from "~/sections/MySkills/MySkills";
import Projects, {
  links as projectsStyles
} from "~/sections/Projects/Projects";
import { fixedWidthLayoutClasses } from "~/constants";

export const links: LinksFunction = () => {
  return [
    ...linkButtonStyles(),
    ...aboutMeStyles(),
    ...skillsStyles(),
    ...projectsStyles(),
    ...contactStyles()
  ];
};

const Index: React.FC = () => {
  
  return (
    <div className="app tracking-wide">
      <div className={`${fixedWidthLayoutClasses} flex flex-col`}>
        <section id="AboutMe">
          <AboutMe />
        </section>
        <div
          style={{
            zIndex: -1
          }}
        >
          <GradientBackground3 />
          <div className="spacer-div mt-80"></div>
          <EatLearnCode />
        </div>

        <div className="spacer-div mt-96" id="Portfolio"></div>
        <Portfolio />
        <div className="spacer-div mt-96"></div>
        <section>
          <MySkills />
        </section>
        <div className="spacer-div mt-24"></div>
        <section id="Projects">
          <Projects />
        </section>
        <div className="spacer-div mt-24"></div>

        <div className="spacer-div mt-10"></div>
      </div>
      <div className="blob-bg" id="Contact">
        <div className={`${fixedWidthLayoutClasses} py-20`}>
          <Contact/>
        </div>
      </div>
    </div>
  );
};

export default Index;
