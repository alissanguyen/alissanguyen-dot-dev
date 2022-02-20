import * as React from "react";
import { useInView, IntersectionOptions } from "react-intersection-observer";

export const useWasInViewAtLeastOnce = (options?: IntersectionOptions) => {
  const [wasInViewAtLeastOnce, setWasInViewAtLeastOnce] = React.useState(false);

  const { ref: setRef, inView } = useInView(options);

  React.useEffect(() => {
    if (inView) {
      setWasInViewAtLeastOnce(true);
    }
  }, [inView]);

  return { setRef, wasInViewAtLeastOnce };
};
