import {
    REGISTER_USER,
    LOGIN_USER,
    USER_LOADED,
    AUTH_FAIL,
    LOGOUT

} from "../types";
import axios from "axios";
import React, { useReducer } from "react";
// import cookieParser from 


import AuthContext from "./AuthContext";
import AuthReducers from "./AuthReducers";
import setAuthToken from "../../utils/setAuthToken"

let token;
const getAllCookies = (props) => {
    // userToken
    var cookies = document.cookie;
    return cookies;
}


const AuthState = (props) => {

    const initialState = {
        token: localStorage.getItem("token"),
        user: null,
        loading: true,
        isAuthenticated: null,
        error: null

    }

    const [state, dispatch] = useReducer(AuthReducers, initialState);



    //REGISTER
    const register = async user => {
        try {
            
            const res = await axios.post("http://localhost:5000/api/auth/register", user);

            // console.log(res.data);

            dispatch({
                type: REGISTER_USER,
                payload: res.data
            });
            loadUser();

        } catch (err) {
            console.log(err);
            dispatch({
                type: AUTH_FAIL,
                payload: err.response.data.msg
            });
        }
    };


    //LOGIN
    const login = async user => {
        try {
            const config = {
                headers: {
                    "Content-Type": "application/json"
                }
            };
            const res = await axios.post("/api/auth/login", user, config);
            dispatch({
                type: LOGIN_USER,
                payload: res.data
            });
            // loadUser();
        } catch (err) {
            console.log(err.response.data.msg);
            dispatch({
                type: AUTH_FAIL,
                payload: err.response.data.msg
            });
        }
    };


    // Set token and load user
    const loadUser = async () => {

        if (localStorage.token) {
            setAuthToken(localStorage.token);
        }

        try {
            const res = await axios.get("http://localhost:5000/api/auth");
            dispatch({
                type: USER_LOADED,
                payload: res.data
            });
        } catch (err) {
            dispatch({ type: AUTH_FAIL });
        }

        
    };

    // Logout
    const logout = () => {
        setAuthToken();
        dispatch({ type: LOGOUT });
    };



    return (
        <AuthContext.Provider
            value={{
                user: state.user,
                loading: state.loading,
                isAuthenticated: state.isAuthenticated,
                error: state.error,
                register,


            }}
        >
            {props.children}

        </AuthContext.Provider>
    );
};


export default AuthState;















