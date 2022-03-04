import * as React from "react";
import avatar from "~/assets/author/avatar.jpeg";
import { ArrowRightIcon } from "@heroicons/react/solid";
import { useTheme } from "~/providers/ThemeProvider";
import { SupportedTheme } from "~/types";

interface Props {}

const AuthorSection: React.FC<Props> = ({}) => {
  const { theme } = useTheme();
  const borderColor =
    theme === SupportedTheme.LIGHT ? "border-gray-400" : "border-gray-200";
  return (
    <div
      className={`BlogPost__AuthorSection__Container border-t-2 ${borderColor} flex m-auto flex-row items-center justify-center grid-cols-4 gap-10 py-10`}
    >
      <img
        src={avatar}
        alt="AN"
        className="BlogPost__AuthorSection__AuthorAvatar rounded-full w-56"
      />
      <div className="BlogPost__AuthorSection__Biography flex flex-col items-start justify-start col-span-3">
        <p className="font-medium text-2xl mb-2 text-post-bodyTextLg">
          Written by Tam Nguyen (Alissa Nguyen)
        </p>
        <a
          href="https://twitter.com/alissa_nguyen14?ref_src=twsrc%5Etfw"
          className="twitter-follow-button"
          data-size="large"
          data-show-screen-name="false"
          data-show-count="false"
        >
          Follow @alissa_nguyen14
        </a>
        <p className="text-lg mt-7">
          Tam Nguyen is a software engineer with main focus is on building better software with latest
          technologies and frameworks such as Remix, React, and TailwindCSS. She is
          currently working on some side projects, exploring her hobbies, and
          living with her two kitties.
        </p>
        <a
          href="/"
          className="mt-12 inline-flex items-center justify-start text-post-bodyTextLg"
        >
          <p className="text-xl mr-5">Learn more about Tam</p>
          <ArrowRightIcon className="h-10 mr-4 rounded-full border-2 p-2 hover:border-gray-700 transition-all duration-120" />
        </a>
      </div>
    </div>
  );
};

export default AuthorSection;
