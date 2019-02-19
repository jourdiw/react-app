import { combineReducers } from "redux";

import configReducer from "config/reducer";
import showsReducer from "shows/reducer";
<<<<<<< HEAD
import authReducer from "./modules/auth/reducer"
=======
import authReducer from "auth/reducer";
>>>>>>> 16686876cfb1e83a1b98d4def6fe461a156d8781

const appReducer = combineReducers({
  shows: showsReducer,
  config: configReducer,
  auth: authReducer
});

export default appReducer;
