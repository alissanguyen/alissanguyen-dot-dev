import gsap from "gsap";
import * as React from "react";

interface Props {}

const OtherProjects: React.FC<Props> = ({}) => {
  // TODO: Double check this information
  const others = [
    {
      name: "Glass Gaming",
      description:
        "A demo weather forecast website that provide international and local 5-day weather forcast every 3 hours.",
      technologies: "React.js, Javascript, HTML / CSS",
      gitRepo: "https://github.com/alissanguyen/weatherly",
      website: "https://weatherly.alissanguyen.dev/",
    },
    {
      name: "Invoice App Demo",
      description: "A demo for a bulletin board, with stickies to track tasks",
      technologies: "React.js, Typescript, HTML / CSS, Javascript",
      gitRepo: "https://github.com/alissanguyen/bulletin-board-demo",
      website: "https://bulletin-board-demo.alissanguyen.dev/",
    },
    {
      name: "Bookmark Page Demo",
      description:
        "A task tracking website with DND (drag-and-drop) feature for prioritizing",
      technologies: "React.js, Next.js, Javascript",
      gitRepo: "https://github.com/alissanguyen/priority-task-tracker",
      website: "",
    },
    {
      name: "BMI Calculator",
      description:
        "An online timer that you can set the hour, minute, and second, and start it. Simple and easy!",
      technologies: "React.js, Javascript, HTML / CSS",
      gitRepo: "https://github.com/alissanguyen/countdown-timer",
      website: "https://countdown-timer.alissanguyen.dev/",
    },
    {
      name: "Weatherly",
      description:
        "A website that let people find GitHub users by their usernames. You can type in a random name and you might surprisingly find a Git user with that same username!",
      technologies: "React.js, Javascript, HTML / CSS",
      gitRepo: "https://github.com/alissanguyen/github-user-finder",
      website: "https://githubspotter.alissanguyen.dev",
    },
    {
      name: "Bulletin Board Demo",
      description:
        "An online timer that you can set the hour, minute, and second, and start it. Simple and easy!",
      technologies: "React.js, Javascript, HTML / CSS",
      gitRepo: "https://github.com/alissanguyen/countdown-timer",
      website: "https://countdown-timer.alissanguyen.dev/",
    },
  ];

  React.useEffect(() => {
    const s: HTMLElement | null = document.getElementById(".slider");
    if (s) {
      const sWrapper: HTMLElement | null = s.querySelector(".slider-wrapper");
      const sItem: HTMLElement | null = s.querySelector(".slide");
      const btn: HTMLElement | null = s.querySelector(".slider-link");

      if (!sItem) {
        return;
      }
      const sWidth = sItem.clientWidth;
      const sCount: number = s.querySelectorAll(".slide").length;
      const slide_date = s.getElementsByClassName(".slide-date");
      const slide_title = s.getElementsByClassName(".slide-title");
      const slide_text = s.getElementsByClassName(".slide-text");
      const slide_more = s.getElementsByClassName(".slide-more");
      const slide_image = s.getElementsByClassName(".slide-image img");
      const sTotalWidth = sCount * sWidth;

      if (sWrapper) {
        sWrapper.style.width = sTotalWidth.toString();
      }

      var clickCount = 0;

      if (btn) {
        btn.addEventListener("click", function (e) {
          e.preventDefault();
          if (btn.classList.contains("next")) {
            clickCount < sCount - 1 ? clickCount++ : (clickCount = 0);
          } else if (btn.classList.contains("prev")) {
            clickCount > 0 ? clickCount-- : (clickCount = sCount - 1);
          }
          gsap.to(sWrapper, { duration: 0.4, x: "-" + sWidth * clickCount });

          //CONTENT ANIMATIONS

          var fromProperties = { autoAlpha: 0, x: "-50", y: "-10" };

          gsap.fromTo(slide_image, fromProperties, {
            autoAlpha: 0.8,
            x: "0",
            y: "0",
            duration: 1,
          });
          gsap.fromTo(slide_date, fromProperties, {
            autoAlpha: 0.8,
            x: "0",
            y: "0",
            duration: 0.4,
          });
          gsap.fromTo(slide_title, fromProperties, {
            autoAlpha: 0.8,
            x: "0",
            y: "0",
            duration: 0.6,
          });
          gsap.fromTo(slide_text, fromProperties, {
            autoAlpha: 0.8,
            x: "0",
            y: "0",
            duration: 0.8,
          });
          gsap.fromTo(slide_more, fromProperties, {
            autoAlpha: 0.8,
            x: "0",
            y: "0",
            duration: 1,
          });
        });
      }
    }

    document.querySelector(".overlay")?.classList.add("overlay-blue");
  });

  return (
    <div className="others-wrapper">
      <fieldset>
        <legend>Other side projects</legend>
        <div id="slider">
          <div className="slider-wrapper flex flex-row flex-start">
            <div className="slide flex flex-row flex-start">
              <div className="slide-image slider-link prev">
                <img src="https://goranvrban.com/codepen/img2.jpg" />
                <div className="overlay"></div>
              </div>
              <div className="slide-content">
                <div className="slide-date">30.07.2017.</div>
                <div className="slide-title">
                  LOREM IPSUM DOLOR SITE MATE, AD EST ABHORREANT
                </div>
                <div className="slide-text">
                  Lorem ipsum dolor sit amet, ad est abhorreant efficiantur,
                  vero oporteat apeirian in vel. Et appareat electram
                  appellantur est. Ei nec duis invenire. Cu mel ipsum laoreet,
                  per rebum omittam ex.{" "}
                </div>
                <div className="slide-more">READ MORE</div>
              </div>
            </div>
            <div className="slide flex flex-row flex-start">
              <div className="slide-image slider-link next">
                <img src="https://goranvrban.com/codepen/img3.jpg" />
                <div className="overlay"></div>
              </div>
              <div className="slide-content">
                <div className="slide-date">30.08.2017.</div>
                <div className="slide-title">
                  LOREM IPSUM DOLOR SITE MATE, AD EST ABHORREANT
                </div>
                <div className="slide-text">
                  Lorem ipsum dolor sit amet, ad est abhorreant efficiantur,
                  vero oporteat apeirian in vel. Et appareat electram
                  appellantur est. Ei nec duis invenire. Cu mel ipsum laoreet,
                  per rebum omittam ex.{" "}
                </div>
                <div className="slide-more">READ MORE</div>
              </div>
            </div>
            <div className="slide flex flex-row flex-start">
              <div className="slide-image slider-link next">
                <img src="https://goranvrban.com/codepen/img5.jpg" />
                <div className="overlay"></div>
              </div>
              <div className="slide-content">
                <div className="slide-date">30.09.2017.</div>
                <div className="slide-title">
                  LOREM IPSUM DOLOR SITE MATE, AD EST ABHORREANT
                </div>
                <div className="slide-text">
                  Lorem ipsum dolor sit amet, ad est abhorreant efficiantur,
                  vero oporteat apeirian in vel. Et appareat electram
                  appellantur est. Ei nec duis invenire. Cu mel ipsum laoreet,
                  per rebum omittam ex.{" "}
                </div>
                <div className="slide-more">READ MORE</div>
              </div>
            </div>
            <div className="slide flex flex-row flex-start">
              <div className="slide-image slider-link next">
                <img src="https://goranvrban.com/codepen/img6.jpg" />
                <div className="overlay"></div>
              </div>
              <div className="slide-content">
                <div className="slide-date">30.10.2017.</div>
                <div className="slide-title">
                  LOREM IPSUM DOLOR SITE MATE, AD EST ABHORREANT
                </div>
                <div className="slide-text">
                  Lorem ipsum dolor sit amet, ad est abhorreant efficiantur,
                  vero oporteat apeirian in vel. Et appareat electram
                  appellantur est. Ei nec duis invenire. Cu mel ipsum laoreet,
                  per rebum omittam ex.{" "}
                </div>
                <div className="slide-more">READ MORE</div>
              </div>
            </div>
          </div>
          <div className="arrows">
            <a href="#" title="Previous" className="arrow slider-link prev"></a>
            <a href="#" title="Next" className="arrow slider-link next"></a>
          </div>
        </div>
        {others.map((project) => (
          <div></div>
        ))}
      </fieldset>
    </div>
  );
};

export default OtherProjects;
