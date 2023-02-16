import { ActionTypes } from "../../action-types";

export const AuthReducer = (state = { User: {} }, { type, payload }) => {
  switch (type) {
    case ActionTypes.SIGNIN:
      console.log("Sign in");
      return { User: payload.user };
    case ActionTypes.SIGNOUT:
      console.log("Sign Out");
      return { state: { payload } };
    default:
      return state;
  }
};
