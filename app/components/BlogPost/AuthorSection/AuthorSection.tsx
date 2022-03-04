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
        <p className="font-medium text-2xl mb-6 text-post-bodyTextLg">
          Written by Tam Nguyen (Alissa Nguyen)
        </p>
        <p className="text-lg">
          Tam Nguyen is a Javascript software engineer based in Seattle,
          Washington. Her main focus is to build better software with latest
          technologies such as Remix, TailwindCSS, and many more. She is
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
