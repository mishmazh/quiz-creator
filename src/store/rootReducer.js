import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import quizReducer from "./reducers/quiz";
import createReducer from "./reducers/create";
import authReducer from "./reducers/auth";
import thunk from "redux-thunk";

export const rootReducer = combineReducers({
  quiz: quizReducer,
  create: createReducer,
  auth: authReducer,
});

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
