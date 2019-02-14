import { AUTH_SUCCESS } from './actions'

const initialConfig = {
    token: null,
    authenticated: false
}

const authReducer = (state = initialConfig, action) => {
    switch (action.type) {
        case AUTH_SUCCESS:
            return { ...state, token: action.payload, authenticated: true}
        default:
            return state
    }
}

export default authReducer