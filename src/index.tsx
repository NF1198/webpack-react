import * as React from "react";
import * as ReactDOM from "react-dom";
import * as ES6PromiseShim from "es6-promise";
ES6PromiseShim.polyfill();

import { Hello } from "./components/Hello";

ReactDOM.render(
    <Hello compiler="TypeScript" framework="React" />,
    document.getElementById("example")
);