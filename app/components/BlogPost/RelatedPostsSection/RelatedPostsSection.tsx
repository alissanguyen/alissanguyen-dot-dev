import * as React from "react";

interface Props {}

const RelatedPostsSection: React.FC<Props> = ({}) => {
  return (
    <div>
      <div className="flex flex-col items-start justify-center text-3xl">
        <p className="text-post-bodyTextLg">
          If you found this article helpful.
        </p>
        <p className="text-post-bodyText">You will love these ones as well.</p>
      </div>
      {/* TODO: Add list of related articles here and render beneath author section in $slug.tsx */}
    </div>
  );
};

export default RelatedPostsSection;
