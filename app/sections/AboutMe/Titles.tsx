import * as React from "react";

const Titles: React.FC<React.PropsWithChildren> = ({ }) => {
  return (
    <div className="title-content">
      <div className="title-content__container inline-flex overflow-hidden font-semibold items-center">
        <h1 className="hidden">
          I'm a software engineer, a freelance artist, an anime lover, and a cat
          mom.
        </h1>
        <p className="title-content__container__text m-0  inline-flex">I'm a</p>
        <span className="blinker">[</span>
        <ul className="title-content__container__list text-center list-none">
          <li className="title-content__container__list__item gradient-text m-0">
            software engineer
          </li>
          <li className="title-content__container__list__item gradient-text m-0">
            web developer
          </li>
          <li className="title-content__container__list__item gradient-text m-0">
            manga/anime lover !
          </li>
          <li className="title-content__container__list__item gradient-text m-0">
            cat mom 🐈‍⬛ 🐈
          </li>
        </ul>
        <span className="blinker">]</span>
      </div>
    </div>
  );
};

export default Titles;
