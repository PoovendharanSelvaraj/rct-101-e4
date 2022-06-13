import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk"
import { authReducer } from "./auth/auth.reducer";

// TODO: use this store variable to create a store.

const rootReducer = combineReducers({
  auth:authReducer,
})
export const store = (legacy_createStore(rootReducer,applyMiddleware(thunk)));

// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
if (window.Cypress) {
  window.store = store;
}
