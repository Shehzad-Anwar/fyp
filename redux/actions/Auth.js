import { ActionTypes } from "../action-types";


export const signin = (user) => {
    return (dispatch) => {
      dispatch({
        type: ActionTypes.SIGNIN,
        payload: { user },
      });
    };
  };
  
  export const signOut = () => {
    return (dispatch) => {
      localStorage.removeItem('token')
      dispatch({
        type: ActionTypes.SIGNOUT,
        payload: { user: null },
      });
    };
  };
  