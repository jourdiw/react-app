import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider as ReduxProvider } from "react-redux";

import createReduxStore from "./helpers/createReduxStore";

// see service workers in any doc about PWA's and create-react-app doc
import * as serviceWorker from "./serviceWorker";
let initialState;
if (window) {
  const auth = JSON.parse(localStorage.getItem("auth"));
  if (auth) {
    initialState = { auth };
  }
}
const store = createReduxStore(initialState);

ReactDOM.render(
  <ReduxProvider store={store}>
    <App />
  </ReduxProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
