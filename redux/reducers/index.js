import { combineReducers } from "redux";
import { AuthReducer } from "./Auth";
import { CartReducer } from "./CartReducer";

export default combineReducers({
  AuthReducer,
  CartReducer,
});
