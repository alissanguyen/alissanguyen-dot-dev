import * as React from "react";
import styles from "./AboutMe.css";
import { LinksFunction } from "@remix-run/node";
import Titles from "./Titles";
import Hi from "./Hi";
import { useTheme } from "~/providers/ThemeProvider";
import ResumeButton from "~/components/ResumeButton/ResumeButton";
import SocialMedia from "~/components/SocialMedia/SocialMedia";
import contactStyles from "../../sections/Contact/Contact.css"
import ContactMeSection from "~/sections/Contact/Contact";
import { ContactFormFieldErrors } from "~/utils/functions";
import { Transition } from "framer-motion";

export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: styles
  },
  {
    rel: "stylesheet",
    href: contactStyles
  }
];


interface AboutMeProps {
  actionData:
  | { fieldErrors: Partial<ContactFormFieldErrors>; status: number }
  | undefined,
  transition: Transition
}

const AboutMe: React.FC<AboutMeProps> = (props) => {
  const { theme } = useTheme();

  return (
    <section id="AboutMe" className="AboutMe__Wrapper">
      <article className="aboutme-wrapper flex flex-row xs:gap-10">
        <div className="Introduction__Wrapper grid lg:grid-cols-7 gap-5" id="introductionWrapper">
          <div className="flex flex-col lg:col-span-4">
            <Hi />
            <div className="bio-description md:text-lg leading-10 text-textSmColor">
              <div className="my-10 text-lg">
                <p className="my-4">
                  Welcome to my personal website!
                </p>
                <p className="mb-5 xs:mb-10">
                  I enjoy building software that makes peoples' lives easier
                  by writing elegant, performant, and maintainable frontend
                  code. I also enjoy petting every cat I see.
                </p>
                <div className="spacer-div mt-5 sm:mt-10"></div>
                <Titles />
                <div className="mt-5 xs:mt-12"></div>
                <div className="resume-btn-wrapper w-fit">
                  <ResumeButton />
                </div>
              </div>
            </div>
          </div>
          <div className="hidden md:flex mx-auto lg:col-span-3">
            <ContactMeSection
            fieldErrors={props.actionData && props.actionData.fieldErrors}
            transition={props.transition}
          />
          </div>
          </div>
        <SocialMedia />
      </article>
      <div className="flex md:hidden justify-center">
            <ContactMeSection
            fieldErrors={props.actionData && props.actionData.fieldErrors}
            transition={props.transition}
          />
          </div>
    </section>
  );
};

export default AboutMe;
