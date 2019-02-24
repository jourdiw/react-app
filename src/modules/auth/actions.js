export const AUTH_SUCCESS = "@auth/AUTH_SUCCESS";
export const AUTH_DELETE = "@auth/AUTH_DELETE";
export const GREET_USER = "GREET_USER"

export const authSuccess = token => ({
  type: AUTH_SUCCESS,
  payload: token
});

export const authDelete = token => ({
  type: AUTH_DELETE
});

export const updateUserGreeting = username => ({
  type: GREET_USER,
  payload: username
})