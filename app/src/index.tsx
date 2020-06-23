import React from "react";
import { render } from "react-dom";

if (module.hot) {
  module.hot.accept();
}

const Hello = () => <div>hello!</div>;
const app = document.getElementById("app");
render(<Hello />, app);
