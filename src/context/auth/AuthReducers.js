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

        case USER_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                user: action.payload.user
            };

        case LOGIN_USER:
            localStorage.setItem("token", action.payload.token);
            return {
                ...state,
                isAuthenticated: true,
                loading: false
            };
        case AUTH_FAIL:


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

        default:
            return state;
    }

}