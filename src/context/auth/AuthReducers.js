import {
    REGISTER_USER,
    LOGIN_USER,
    USER_LOADED,
    AUTH_FAIL,
    LOGOUT


} from "../types"


export default (state, action) => {

    switch (action.type) {

        case REGISTER_USER:
            localStorage.setItem("token", action.payload.token);
            return {
                ...state,
                isAuthenticated: true,
                loading: false
            };
            break;

        case USER_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                user: action.payload.user
            };
            break;

        case LOGIN_USER:
            localStorage.setItem("token", action.payload.userToken);
            return {
                ...state,
                isAuthenticated: true,
                loading: false
            };
            break;
        case AUTH_FAIL:
            break;

        case LOGOUT:
            localStorage.removeItem("token");
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                user: null,
                loading: true,
                error: action.payload
            };
            break;

        default:
            return state;
    }

}