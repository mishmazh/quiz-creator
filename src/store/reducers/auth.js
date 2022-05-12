import { AUTH_FETCH_ERROR, AUTH_LOGOUT, AUTH_SUCCESS } from "../actions/types";

const initialState = {
  token: null,
  errorMessage: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_SUCCESS:
      return { ...state, token: action.token };
    case AUTH_LOGOUT:
      return { ...state, token: null };
    case AUTH_FETCH_ERROR:
      return { ...state, errorMessage: action.errorMessage };
    default:
      return state;
  }
};

export default authReducer;
