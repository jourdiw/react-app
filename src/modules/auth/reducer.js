import { AUTH_SUCCESS, AUTH_DELETE, GREET_USER } from "./actions";

const initialState = {
  token: null,
  authenticated: false,
  username: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_SUCCESS:
      return { ...state, token: action.payload, authenticated: true };
    case AUTH_DELETE:
      return { ...initialState };
    case GREET_USER:
      return { ...state, username: action.payload}
    default:
      return state;
  }
};

export default reducer;
