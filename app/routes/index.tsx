import AboutMe from "~/sections/AboutMe";
import TopSection from "~/sections/TopSection";
import Cursor from "~/components/Cursor";
import MySkills from "~/sections/MySkills";
import NavBar from "~/components/NavBar";
import { GradientBackground2, Portfolio, Quote } from "~/components/Decoration";
import Footer from "~/components/Footer";
import Projects from "~/sections/Projects";
import Contact from "~/sections/Contact";

export default function Index() {
  return (
    <div className="app">
      <NavBar />
      <Cursor />
      <GradientBackground2 />
      <TopSection />
      <div className="h-96"></div>

      <AboutMe />
      <div className="h-80"></div>
      <div>
        <Quote />
        <div className="h-44"></div>
        <section className="portfolio-section-wrapper">
          <Portfolio />
        </section>
        <div className="h-96"></div>
        <MySkills />
      </div>
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

{
  /* {cursorState === CursorState.ACTIVE ? (
        <div className="explore-button-wrapper flex">
          <button
            className="explore-button absolute w-full z-50 transition translate-y-[-1rem] duration-1000 flex bottom-0 flex-col mb-8 justify-center items-center"
            onMouseLeave={() => setCursorState(CursorState.DEFAULT)}
          >
            <p className="text-sm text-white">Explore</p>
            <ArrowDownIcon className="text-white h-10" />
          </button>
        </div>
      ) : (
        <button
          className="explore-button absolute w-full z-50 flex bottom-0 mb-8 justify-center"
          onMouseEnter={() => setCursorState(CursorState.ACTIVE)}
        >
          <ArrowDownIcon className="text-white h-10" />
        </button>
      )} */
}
