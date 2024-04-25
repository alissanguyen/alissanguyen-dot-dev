import * as React from "react";
import styles from "./AboutMe.css";
import { LinksFunction } from "@remix-run/node";
import Titles from "./Titles";
import Hi from "./Hi";
import ResumeButton from "~/components/ResumeButton/ResumeButton";
import SocialMedia from "~/components/SocialMedia/SocialMedia";
import contactStyles from "../../sections/Contact/Contact.css"
import { ContactFormFieldErrors } from "~/utils/functions";
import { Transition } from "framer-motion";
import SparkleSVG from "~/components/SparkleSVG";
import FrontEndImage from "~/assets/aboutme/front-end.png"
import WebHostingImage from "~/assets/aboutme/web-hosting.png"
import DatabaseManagementImage from "~/assets/aboutme/database-management.png"
import CMSImage from "~/assets/aboutme/cms.png"
import AvatarImage from "~/assets/aboutme/avatar.jpeg"

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

  return (
    <section id="AboutMe" className="AboutMe__Wrapper">
      <article className="aboutme-wrapper flex flex-row gap-5 lg:gap-10 relative">
        <div className="Introduction__Wrapper grid grid-cols-1 custom:grid-cols-7 gap-5" id="introductionWrapper">
          <img
            src="/images/background/Eclipse.svg"
            alt="Decorative background eclipse"
            className="eclipse absolute left-[-40rem] top-[2rem]"
          />
          <div className="flex flex-col custom:col-span-4">
            <Hi />
            <div className="bio-description md:text-lg leading-10 text-textSmColor">
              <div className="my-10 text-lg xl:text-xl">
                <p className="my-4">
                  Welcome to my personal website!
                </p>
                <p className="mb-5 xs:mb-10">
                  I enjoy building software that makes people' lives easier
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
          <div className="hidden custom:flex custom:col-span-3 custom:px-5 xl:px-10">
            <img src={AvatarImage} alt="" className="Avatar" />
          </div>

        </div>

        <SocialMedia />
      </article>
      <div className="visible custom:hidden">
        <img src={AvatarImage} alt="" className="" />
      </div>

      <div className="spacer-div mt-24 custom2:mt-24"></div>
      <AboutMeStats />
    </section>
  );
};

export default AboutMe;


const skills = [
  {
    id: "fe",
    title: "Front-end development",
    description: "Responsive and performant web pages with React or Remix, with and SSR for a better user experience. Utilize modern UI libraries like TailwindCSS, Headless UI, Framer Motion, etc. to create beautiful, responsive, and accessible web apps quickly.",
    image: FrontEndImage
  },
  {
    id: "wbd",
    title: "Web hosting and deployment",
    description: "Deployment to platforms such as Vercel, Netlify, and Cloudflare to leverage caching and firewalls at the edge. Writing easily understood, modular, fast, and type-safe applications with TypeScript and modern JavaScript syntax.",
    image: WebHostingImage
  },
  {
    id: "dm",
    title: "Database management",
    description: "Data management with Firestore, Prisma, or Supabase. Use of classic web security principles and user authorization/authentication with Firebase Auth and automated emails with Sendgrid.",
    image: DatabaseManagementImage
  },
  {
    id: "cms",
    title: "CMS integration",
    description: "Creating JAM Stack frontend applications that integrate with modern headless content management systems (CMS) like Contentful.",
    image: CMSImage
  }
]

const AboutMeStats: React.FC = ({ }) => {
  return (
    <div>

      <div className='flex flex-row items-center w-fit text-lg custom3:text-2xl gap-3 font-medium rounded-3xl border-2 border-gray-300 text-textSmColor px-8 py-2 mb-5'>
        <SparkleSVG />
        <h2>About Me</h2>

      </div>
      <p className="Slogan AboutMe__Slogan gradient-text">Turning complex problems <br></br> into simple design</p>
      <div className="AboutMe__StatsWrapper flex flex-col sm:flex-row items-center w-full gap-5 text-textSmColor Special__Font mb-5 text-center mt-6">
        <img
          src="/images/background/Gradient.svg"
          alt="Decorative background"
          className="gradient-blob absolute opacity-60"
        />
        <div className="AboutMe__StatItem">
          <span className="AboutMe__StatNumber gradient-text">4+</span>
          <span className="AboutMe__StatDescription">Years of experience</span>
        </div>
        <div className="AboutMe__StatItem">
          <span className="AboutMe__StatNumber gradient-text">50+</span>
          <span className="AboutMe__StatDescription">Projects done</span>
        </div>
        <div className="AboutMe__StatItem">
          <span className="AboutMe__StatNumber gradient-text">1,250+</span>
          <span className="AboutMe__StatDescription">GitHub contributions</span>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-10 sm:gap-12 custom:gap-20">
        <div className='flex flex-col items-start gap-3 sm:gap-7'>
          <p className="AboutMe__Text text-lg custom:text-xl font-medium text-subText leading-relaxed tracking-wide">I had my awakening call recently, and it made me wonder who I am. I woke up one morning and everything seems unfamiliar. I noticed that I have never taken a good look at Seattle. I did not notice that pizzaria in the corner near the street where I live. I did not notice how many different varieties of trees there are throughout the city. I did not notice that tall building with floor to ceiling windows near the entrance to I-5. I did not notice how blue the sky was. &quot;Where am I? Who in the world am I?&quot;</p>

          <p className="AboutMe__Text text-lg custom:text-xl font-medium text-subText leading-relaxed tracking-wide">Life has many great puzzles, but the greatest of them all (in my opinion) is the riddle of figuring out who we are, and why we are here. Life has many struggles, but the greatest of them all is to not lose yourself in the process of finding yourself. At the end of the day, I&lsquo;m grateful that I&lsquo;m here, in this moment, and tomorrow I will be a better person than today.</p>
          <p className="AboutMe__Text text-lg custom3:text-xl custom:text-2xl font-normal text-textLgColor italic leading-relaxed tracking-wide">I believe one of the greatest ability of humans is the ability to introspect and reflect.</p>
        </div>
        <div className='flex flex-col items-start gap-3 sm:gap-6 text-lg custom:text-xl text-textSmColor'>
          <div className="flex flex-col items-start">
            <span className="text-subText">Name</span>
            <span className="font-semibold">Tam Nguyen</span>
            <span className="font-semibold">Nickname: Alissa / Avione</span>
          </div>

          <div className="flex flex-col items-start">
            <span className="text-subText">Phone</span>
            <span className="font-semibold">(425) 728-0312</span>
          </div>

          <div className="flex flex-col items-start">
            <span className="text-subText">Email</span>
            <span className="font-semibold">im.tamnguyen@gmail.com</span>
          </div>

          <div className="flex flex-col items-start">
            <span >Location</span>
            <span className="font-semibold">Seattle, Washington, USA</span>
          </div>
        </div>
      </div>

      <div className="spacer-div mt-12 custom3:mt-24"></div>

      <ul className='grid grid-cols-1 custom2:grid-cols-2 gap-5 md:gap-10'>
        {skills.map((skill) => (
          <li key={skill.id} className="AboutMe__SkillBubble relative flex flex-col items-start overflow-hidden border-2 rounded-3xl md:rounded-[3rem] pt-7 px-7 md:pt-12 md:px-12 pb-0 max-h-[44rem]">

            <div className="AboutMe__SkillBubble__Content relative z-[1]">
              <p className="AboutMe__SkillBubble__Title font-semibold text-2xl md:text-3xl mb-2">{skill.title}</p>
              <p className='md:font-medium text-lg md:text-xl text-textSmColor'>{skill.description}</p>
            </div>
            <div className="AboutMe__SkillBubble__ImageWrapper w-full overflow-hidden">
              {skill.image ? (
                <img
                  src={skill.image}
                  alt={skill.title}
                  className="AboutMe__SkillBubble__Image w-full h-auto block"
                />
              ) : null}
            </div>
          </li>
        ))}
      </ul>

    </div>
  )
}
