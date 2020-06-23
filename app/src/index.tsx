import React from "react";
import { render } from "react-dom";
import { MainScreen } from "./components/screens/MainScreen";
import "./index.css";

if (module.hot) {
  module.hot.accept();
}

const app = document.getElementById("app");
render(<MainScreen />, app);
