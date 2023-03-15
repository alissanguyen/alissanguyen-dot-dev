import { hydrate } from "react-dom";
import { RemixBrowser } from "@remix-run/react";

import { hijackEffects } from "stop-runaway-react-effects";



if (process.env.NODE_ENV === "development") {
  hijackEffects({
    callCount: 500,
    timeLimit: 1000
  });
}

hydrate(<RemixBrowser />, document);
