import { AUTH_SUCCESS } from "./actions";

const initialState = {
  token: null,
  authenticated: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_SUCCESS:
      return { ...state, token: action.payload, authenticated: true };
    default:
      return state;
  }
};

export default reducer;
