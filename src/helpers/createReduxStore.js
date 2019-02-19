import { createStore, applyMiddleware } from "redux";

import reducer from "../reducer";

import { composeWithDevTools } from "redux-devtools-extension";

import actionLogger from "../middlewares/actionLogger";
import persistAuth from "../middlewares/persistAuth";

const middlewares = applyMiddleware(persistAuth, actionLogger);
const devToolsMiddelwares = composeWithDevTools(middlewares);

export default initialState =>
  createStore(reducer, initialState, devToolsMiddelwares);
