import React from "react";
import * as ReactDOM from "react-dom";
import "@babel/polyfill";

import configureFortAwesome from "./utils/configureFortAwesome";
import App from "./components/App";

configureFortAwesome();

if (process.env.NODE_ENV !== "production") {
  // eslint-disable-next-line import/no-extraneous-dependencies, global-require
  // const { whyDidYouUpdate } = require("why-did-you-update");
  // whyDidYouUpdate(React);
}

/* eslint-disable no-undef */
ReactDOM.render(<App />, document.getElementById("root"));
