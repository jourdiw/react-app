import { combineReducers } from "redux";

import configReducer from "config/reducer";
import showsReducer from "shows/reducer";

const appReducer = combineReducers({
  shows: showsReducer,
  config: configReducer
});

export default appReducer;
