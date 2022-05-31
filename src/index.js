import React from "react";
import ReactDom from "react-dom/client";
import App from "./App";
import "./css/normalize.module.scss";
import "./css/index.module.scss";

ReactDom
    .createRoot(document.querySelector("#root"))
    .render(<App/>);
