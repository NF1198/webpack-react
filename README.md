# Webpack + React + sass Seed

The master branch just contains a very simple seed for 
building a website with webpack, react and sass.

## Scripts in package.json

* `start`: Start the webpack-dev-server
* `copy:lib`: Copies 3rd party libraries into source tree.
* `build:dist`: Build a complete distribution
* `clean:dist`: Clean the distribution
* `server:production`: start a web server in the `dist` folder

## Initial setup

Run `npm install` to install dependencies. 

You'll also need __typescript__ and __webpack__ (`npm install -g typescript webpack`).

Before running `npm start` for the first time, execute `npm run copy:lib` to copy 3rd party libraries into the source tree. 

The `copy:lib` task simplifies the process of managing 3rd party libraries when
switching between development and release builds. By default, libraries are copied from node_modules.

