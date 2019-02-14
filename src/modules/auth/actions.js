export const AUTH_SUCCESS = "@auth/AUTH_SUCCESS";
export const AUTH_DELETE = "@auth/AUTH_DELETE";

export const authSuccess = token => ({
  type: AUTH_SUCCESS,
  payload: token
});
