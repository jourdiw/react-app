import { AUTH_SUCCESS, AUTH_DELETE } from "./actions";

const initialState = {
  token: null,
  authenticated: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_SUCCESS:
      return { ...state, token: action.payload, authenticated: true };
    case AUTH_DELETE:
      return { ...initialState };
    default:
      return state;
  }
};

export default reducer;
