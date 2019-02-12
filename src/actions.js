export const UPDATE_TITLE = "UPDATE_TITLE";
export const DISPLAY_CLOCK = "DISPLAY_CLOCK";

export const updateTitle = newTitle => ({
  type: UPDATE_TITLE,
  payload: newTitle
});

export const updateClockDisplay = isDisplayed => ({
  type: DISPLAY_CLOCK,
  payload: isDisplayed
});
