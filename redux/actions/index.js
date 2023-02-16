import { ActionTypes } from "../action-types";

export const addToCart = (itemCode, qty, price, name, size, varient, img) => {
  return (dispatch) => {
    dispatch({
      type: ActionTypes.ADD_TO_CART,
      payload: { itemCode, qty, price, name, size, varient, img },
    });
  };
};
export const initialCart = (cart) => {
  return (dispatch) => {
    dispatch({
      type: ActionTypes.INITIAL_CART,
      payload: { cart },
    });
  };
};

export const buyNow = (itemCode, qty, price, name, size, varient, img) => {
  return (dispatch) => {
    dispatch({
      type: ActionTypes.BUY_NOW,
      payload: { itemCode, qty, price, name, size, varient, img },
    });
  };
};

export const updateCart = (itemCode, qty) => {
  return (dispatch) => {
    dispatch({
      type: ActionTypes.UPDATE_CART,
      payload: { itemCode, qty },
    });
  };
};

export const removeFromCart = (itemCode) => {
  return (dispatch) => {
    dispatch({
      type: ActionTypes.REMOVE_FORM_CART,
      payload: { itemCode },
    });
  };
};

export const clearCart = () => {
  return (dispatch) => {
    localStorage.setItem("cart", {});
    dispatch({
      type: ActionTypes.CLEAR_CART,
    });
  };
};
