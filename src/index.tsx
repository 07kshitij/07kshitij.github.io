import * as React from "react";
import { App } from "./js/App";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById("root")
);