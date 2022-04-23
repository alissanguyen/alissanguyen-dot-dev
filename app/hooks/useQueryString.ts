import React from "react";

// TODO: implement this
// A function that take an argument of any Type <T> and persists the query string in the URL
export const useQueryString = <T extends {}>(arg: T): void => {
  React.useEffect(() => {
    /**
     * Construct a URL from the existing URL and append `arg` to the query string of the URL
     */
    const newURL = new URL(window.location.href);

    newURL.search = JSON.stringify(arg);

    window.history.pushState(undefined, window.document.title, newURL);
  }, [arg]);
};
