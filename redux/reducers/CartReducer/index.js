import { ActionTypes } from "../../action-types";

export const CartReducer = (
  state = { cart: {}, subtotal: 0 },
  { type, payload }
) => {
  const total = (newCart) => {
    let totalAmount = 0;
    for (let item in newCart) {
      totalAmount += Number(newCart[item].price) * Number(newCart[item].qty);
    }
    return totalAmount;
  };
  switch (type) {
    case ActionTypes.ADD_TO_CART:
      console.log("ADD_TO_CART");
      const { itemCode, qty, price, name, size, varient, img } = payload;
      if (itemCode in state.cart) {
        return {
          ...state,
          cart: {
            ...state.cart,
            [itemCode]: {
              ...state.cart[itemCode],
              qty: state.cart[itemCode].qty + 1,
            },
          },
          subtotal:
            Number(state.cart[itemCode].qty) *
              Number(state.cart[itemCode].price) +
            state.subtotal,
        };
      } else {
        return {
          ...state,
          cart: {
            ...state.cart,
            [itemCode]: { qty, price, name, size, varient, img },
          },
          subtotal: Number(qty) * Number(price) + state.subtotal,
        };
      }
    case ActionTypes.UPDATE_CART:
      console.log("UPDATE_CART");
      if (state.cart[payload.itemCode]) {
        let newCart = {
          ...state.cart,
          [payload.itemCode]: {
            ...state.cart[payload.itemCode],
            qty: payload.qty,
          },
        };
        return {
          ...state,
          cart: newCart,
          subtotal: total(newCart),
        };
      } else {
        return state;
      }
    case ActionTypes.REMOVE_FORM_CART:
      console.log("REMOVE_FROM_CART");
      const newCart = { ...state.cart };
      delete newCart[payload.itemCode];
      return {
        ...state,
        cart: newCart,
        subtotal: total(newCart),
      };
    case ActionTypes.BUY_NOW:
      console.log("BUY_NOW");
      return {
        cart: {
          [payload.itemCode]: {
            qty: payload.qty,
            price: payload.price,
            name: payload.name,
            size: payload.size,
            varient: payload.varient,
            img: payload.img,
          },
        },
        subtotal: payload.price,
      };

    case ActionTypes.CLEAR_CART:
      console.log("CLEAR_CART");
      return { cart: {}, subtotal: 0 };
    case ActionTypes.INITIAL_CART:
      console.log("INITIAL_CART");
      return { cart: payload.cart, subtotal: total(payload.cart) };
    default:
      return state;
  }
};
