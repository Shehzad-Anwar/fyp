import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, updateCart, removeFromCart } from "../redux/actions";

const CheckoutFrom = () => {
  const dispatch = useDispatch();
  let { cart } = useSelector((state) => state.CartReducer);
  // const { rows, cart } = useSelector((state) => state.calculator);

  const add = (e) => {
    e.preventDefault();
    let Cart = {
      itemCode: "jHjREd",
      qty: 1,
      price: 49,
      name: "HSD Shirt",
      size: "XXL",
      varient: "white",
      img: "https://m.media-amazon.com/images/I/61iqPK1B50L._AC_SX679_.jpg",
    };
    dispatch(addToCart(Cart));
    console.log(cart);
  };

  const update = (e) => {
    e.preventDefault();
    let upCart = {
      itemCode: "jHjREd",
      qty: 10,
    };
    dispatch(updateCart(upCart));
    console.log(cart);
  };

  const remove = (e) => {
    e.preventDefault();
    dispatch(removeFromCart({itemCode: "jHjREd"}));
    console.log(cart);
  };
  return (
    <>
      <div className="max-w-2xl lg:max-w-none mx-20 my-20">
        <h1 className="sr-only">Checkout</h1>

        <form>
          <div>
            <div className="mt-10 border-t border-gray-200 pt-10">
              <h2 className="text-lg font-medium text-gray-900">
                Product information
              </h2>

              <div className="border-t w-[400px] border-gray-200 py-6 px-2 sm:px-6">
                <button
                  type="submit"
                  onClick={add}
                  className="w-full rounded-md border border-transparent bg-indigo-600 py-3 px-4 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                >
                  Add Product
                </button>
              </div>
              <div className="border-t w-[400px] border-gray-200 py-6 px-2 sm:px-6">
                <button
                  type="submit"
                  onClick={update}
                  className="w-full rounded-md border border-transparent bg-indigo-600 py-3 px-4 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                >
                  Add Update qty by 10
                </button>
              </div>

              <div className="border-t w-[400px] border-gray-200 py-6 px-2 sm:px-6">
                <button
                  type="submit"
                  onClick={remove}
                  className="w-full rounded-md border border-transparent bg-indigo-600 py-3 px-4 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                >
                 Remove itemCode: "jHjREd"
                </button>
              </div>
            </div>
          </div>
        </form>
        <div>
          <h1>Cart:</h1>
          <ul>
            {Object.keys(cart).map((item) => (
              <li key={item}>
                {cart[item].name} ({cart[item].qty} x ${cart[item].price})
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default CheckoutFrom;

// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { addToCart } from "../redux/actions";

// const CheckoutFrom = () => {
//   const dispatch = useDispatch();
//   let { cart } = useSelector((state) => state.CartReducer);
//   // const { rows, cart } = useSelector((state) => state.calculator);

//   const Checkout = (e) => {
//     e.preventDefault();
//     let Cart = {
//       itemCode: "jHjREd",
//       qty: 1,
//       price: 49,
//       name: "HSD Shirt",
//       size: "XXL",
//       varient: "white",
//       img: "https://m.media-amazon.com/images/I/61iqPK1B50L._AC_SX679_.jpg",
//     };
//     dispatch(addToCart(Cart));
//     console.log(cart);
//   };
