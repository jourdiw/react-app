import { UPDATE_TITLE, DISPLAY_CLOCK } from "./actions";

const appReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_TITLE:
      return { ...state, appTitle: action.payload };
    case DISPLAY_CLOCK:
      return { ...state, displayClock: action.payload };
    default:
      return state;
  }
};

export default appReducer;
