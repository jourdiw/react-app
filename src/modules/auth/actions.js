export const AUTH_SUCCESS = "@/auth/AUTH_SUCCESS"

export const authSuccess = token => ({
    type: AUTH_SUCCESS,
    payload: token
})