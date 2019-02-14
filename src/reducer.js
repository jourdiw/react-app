import { combineReducers } from "redux";

import configReducer from "config/reducer";
import showsReducer from "shows/reducer";
import authReducer from "./modules/auth/reducer"

const appReducer = combineReducers({
  shows: showsReducer,
  config: configReducer,
  auth: authReducer
});

export default appReducer;
