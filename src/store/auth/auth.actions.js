// Auth Actions here
import axios from "axios"
import { AUTH_SIGN_IN_ERROR, AUTH_SIGN_IN_LOADING, AUTH_SIGN_IN_SUCCESS, AUTH_SIGN_OUT } from "./auth.types";




export const loginAPI = (data) => (dispatch) => {
    dispatch({ type: AUTH_SIGN_IN_LOADING });
    axios
      .post("https://reqres.in/api/login", {
        email: data.email,
        password: data.password,
      })
      .then((r) => {
        dispatch({ type: AUTH_SIGN_IN_SUCCESS, payload: r.data });
        localStorage.setItem("token",r.data.token)
      })
      .catch(() => {
        dispatch({ type: AUTH_SIGN_IN_ERROR });
      });
  };

  export const logoutAPI = () => ({ type: AUTH_SIGN_OUT });