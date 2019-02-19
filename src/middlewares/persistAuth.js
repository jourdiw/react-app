import { AUTH_SUCCESS } from "auth/actions";
import { AUTH_DELETE } from "../modules/auth/actions";

const persistAuth = store => next => action => {
  if ([AUTH_SUCCESS, AUTH_DELETE].includes(action.type) && window) {
    next(action);
    const authState = store.getState().auth;
    localStorage.setItem("auth", JSON.stringify(authState));
  }
};

export default persistAuth;
