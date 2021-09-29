import { applyMiddleware, createStore } from "redux";
import rootReducer from "./reducers";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";

const configureStore = (initialState?: any) => {
  const isProduction = process.env.NODE_ENV === "production";

  return createStore(
    rootReducer,
    initialState,
    isProduction
      ? applyMiddleware(thunk)
      : composeWithDevTools(applyMiddleware(thunk, reduxImmutableStateInvariant()))
  );
};

export default configureStore;