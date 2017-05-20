import * as React from "react";
import * as ReactDOM from "react-dom";
import * as ES6Shim from "es6-promise";
ES6Shim.polyfill();

import { Hello } from "./components/Hello";

ReactDOM.render(
    <Hello compiler="TypeScript" framework="React" />,
    document.getElementById("example")
);