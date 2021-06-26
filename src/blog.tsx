import * as React from "react";
import { Blog } from "./js/components/blog";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Blog />
  </BrowserRouter>,
  document.getElementById("header")
);
