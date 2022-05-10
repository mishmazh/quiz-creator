import axios from "axios";
import { AUTH_FETCH_ERROR, AUTH_LOGOUT, AUTH_SUCCESS } from "./types";

export const auth = (values, isLogin) => {
  return async (dispatch) => {
    // const authData = {
    //   email,
    //   password,
    //   returnSecureToken: true,
    // };

    let url =
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB1tleQYg-9jKBvmfpGmYNTiFgH0fHhcz0";

    if (isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB1tleQYg-9jKBvmfpGmYNTiFgH0fHhcz0";
    }

    try {
      const response = await axios.post(url, values);
      const data = response.data;

      const expirationDate = new Date(
        new Date().getTime() + data.expiresIn * 1000
      );

      localStorage.setItem("token", data.idToken);
      localStorage.setItem("userId", data.localId);
      localStorage.setItem("expirationDate", expirationDate);

      dispatch(authSuccess(data.idToken));
      dispatch(autoLogout(data.expiresIn));
    } catch (err) {
      dispatch(authFetchError(err));
    }
  };
};

export const authSuccess = (token) => ({
  type: AUTH_SUCCESS,
  token,
});

export const autoLogout = (time) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(logout());
    }, time * 1000);
  };
};

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("userId");
  localStorage.removeItem("expirationDate");

  return {
    type: AUTH_LOGOUT,
  };
};

export const autoLogin = () => {
  return (dispatch) => {
    const token = localStorage.getItem("token");

    if (!token) {
      dispatch(logout());
    } else {
      const expirationDate = new Date(localStorage.getItem("expirationDate"));

      if (expirationDate <= new Date()) {
        dispatch(logout());
      } else {
        dispatch(authSuccess(token));
        dispatch(
          autoLogout((expirationDate.getTime() - new Date().getTime()) / 1000)
        );
      }
    }
  };
};

// ---------- AUTH FETCH ERROR ---------- //
export const authFetchError = (errorMessage) => ({
  type: AUTH_FETCH_ERROR,
  errorMessage,
});
