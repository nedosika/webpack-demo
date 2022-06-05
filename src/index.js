import React from "react";
import ReactDom from "react-dom/client";
import App from "./App";
import "./css/normalize.scss";
import "./css/index.scss";

ReactDom
    .createRoot(document.querySelector("#root"))
    .render(<App/>);
