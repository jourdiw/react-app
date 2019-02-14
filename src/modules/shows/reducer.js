const initialState = {
  shows: []
};

const cases = {};

// cases["actionName"] = (state, action) => state; //

const reducer = (state = initialState, action) => {
  if (cases[action.type]) return cases[action.type](state, action);
  return state;
};

export default reducer;
