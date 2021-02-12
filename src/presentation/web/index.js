import React from "react";
import { render } from "react-dom";
import App from "./App";

const root = document.getElementById("root");

render(<App />, root);

if (module.hot) {
    module.hot.accept("./App", (App) => {
        console.clear();

        const UpdatedAppModule = require("./App").default;
        render(<UpdatedAppModule />, root);
    });
} else {
    console.error("NOT HOT");
}
