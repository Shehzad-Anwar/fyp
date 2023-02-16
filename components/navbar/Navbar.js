import {
  ShoppingBagIcon,
  UserIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/router";
import Search from "../twe/Search";
import DropDown from "./DropDown";
import { Fragment } from "react";
import { Menu, Transition, Popover } from "@headlessui/react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart, clearCart } from "../../redux/actions";
import { signOut } from "../../redux/actions/Auth";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = ({ user, logOut }) => {
  const dispatch = useDispatch();
  let { cart, subtotal } = useSelector((state) => state.CartReducer);
  // let { user } = useSelector((state) => state.AuthReducer);
  const ref = useRef();
  const [sideCart, setSideCart] = useState(false);
  const router = useRouter();
  const activeCart = () => {
    setSideCart(!sideCart);
  };

  useEffect(() => {
   
  }, []);

  const logout = () => {
    toast.success("Your are Successfully LogOut!", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    setTimeout(() => {
     logOut()
    }, 1000);
  };

  return (
    <div
      className={`prisim  z-30 flex h-14 flex-col items-center justify-center md:flex-row md:justify-start shadow-sm overflow-visible sticky top-0 ${
        !sideCart && "overflow-hidden"
      } `}
    >
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="logo mx-5 ">
        <Link href={"/"}>
          <Image
            className="transition ease-in-out hover:-translate-y-0.5 hover:scale-110 duration-150"
            src={"/logo.ico"}
            alt="logo"
            width={50}
            height={50}
          />
        </Link>
      </div>
      <div className="nav">
        <ul className="flex items-center space-x-6 font-bold md:text-md px-10   text-[#34251F]">
          <div>
            <DropDown />
          </div>
          <Link href={"/contact"}>
            <p className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-800 hover:text-gray-500">
              <li>Contact</li>
            </p>
          </Link>
          <Link href={"/about"}>
            <p className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-800 hover:text-gray-500">
              <li>About</li>
            </p>
          </Link>
        </ul>
      </div>
      <div>
        <Search />
      </div>

      {/* Profile Dropdown */}
      <div
        ref={ref}
        className="cart space-x-2 items-center flex absolute right-4 top-auto mx-5 cursor-pointer"
      >
        {user.status && (
          <>
            {/* User Dropdown */}
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="flex w-full hover:text-gray-500 justify-center ">
                  {/* User Icon */}
                  <UserIcon className="h-6 w-6" aria-hidden="true" />
                </Menu.Button>
              </div>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="px-3 py-2">
                    <Link href={"/account"}>
                      <li className="text-sm flex flex-row">
                        <img
                          className="p-0.5 w-9 h-9 rounded-full ring-1 ring-blue-700 dark:ring-blue-600"
                          src="pro.png"
                          alt="Bordered avatar"
                        />
                        <div className="pl-2">
                          <p className="text-sm font-medium text-gray-900">
                            {user.firstName + " " + user.lastName}
                          </p>
                          <p className="truncate text-sm">{user.email}</p>
                        </div>
                      </li>
                    </Link>
                  </div>
                  <div className="px-1 py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          href={"/account"}
                          className={classNames(
                            active
                              ? "bg-violet-500 text-white"
                              : "text-gray-900",
                            "block px-4 py-2 text-sm rounded-md"
                          )}
                        >
                          My Account
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href={"/ordersHistory"}
                          className={classNames(
                            active
                              ? "bg-violet-500 text-white"
                              : "text-gray-900",
                            "block px-4 py-2 text-sm rounded-md"
                          )}
                        >
                          My Orders
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href={"/Admin"}
                          className={classNames(
                            active
                              ? "bg-violet-500 text-white"
                              : "text-gray-900",
                            "block px-4 py-2 text-sm rounded-md"
                          )}
                        >
                          Settings
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <p
                          onClick={logout}
                          className={classNames(
                            active
                              ? "bg-violet-500 text-white"
                              : "text-gray-900",
                            "block px-4 py-2 text-sm rounded-md"
                          )}
                        >
                          Sign Out
                        </p>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </>
        )}

        {!user.status || localStorage.getItem("token") == {} ? (
          <Link href={"/login"}>
            <button className="cursor-pointer text-lg  text-[#34251F] rounded-md font-bold mx-2 transition ease-in-out hover:-translate-y-0.2 hover:scale-110 duration-150">
              Login
            </button>
          </Link>
        ) : (
          " "
        )}

        {/* Shopping Cart */}
        <Popover className="ml-4 flow-root text-sm lg:relative lg:ml-8">
          <Popover.Button className="group -m-2 flex items-center p-2">
            {/* Bag Icon */}
            <ShoppingBagIcon
              className="h-6 w-6 hover:text-gray-500"
              aria-hidden="true"
            />

            {Object.keys(cart).length > 0 && (
              <span className="ml-2 text-sm font-medium">
                {Object.keys(cart).length}
              </span>
            )}
            <span className="sr-only">items in cart, view bag</span>
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Popover.Panel className="absolute inset-x-0 top-16 mt-px bg-white pb-6 shadow-lg sm:px-2 lg:top-full lg:left-auto lg:right-0 lg:mt-3 lg:-mr-1.5 lg:w-80">
              <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                <div className="flex items-start justify-between">
                  <h2 className="text-lg font-medium text-gray-900">
                    Shopping cart
                  </h2>
                  <div className="ml-3 flex h-7 items-center">
                    <span className="sr-only">Close panel</span>
                    {/* X icon */}
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </div>
                </div>
              </div>

              <div className="">
                <ol className="ml-6 font-semibold list-decimal">
                  {Object.keys(cart).length == 0 && (
                    <div className="my-6 text-base font-medium text-gray-900">
                      Your Cart is Empty
                    </div>
                  )}

                  {Object.keys(cart).map((item) => (
                    <li key={item}>
                      <div className="item flex my-5">
                        <div className="w-2/3 ml-1 font-semibold">
                          {cart[item].name}
                        </div>
                        <div className="icon  flex justify-center items-center w-1/3 text-xl space-x-2">
                          <AiFillMinusCircle
                            className="cursor-pointer"
                            onClick={() => dispatch(removeFromCart(item, 1))}
                          />
                          <span className="font-bold text-2xl">
                            {cart[item].qty}
                          </span>
                          <AiFillPlusCircle
                            className="cursor-pointer"
                            onClick={() =>
                              dispatch(
                                addToCart(
                                  item,
                                  1,
                                  cart[item].prise,
                                  cart[item].name,
                                  cart[item].size,
                                  cart[item].varient,
                                  cart[item].img
                                )
                              )
                            }
                          />
                        </div>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              {/* SubTotal */}

              {Object.keys(cart).length != 0 && (
                <div className="sub-total">
                  <h3 className="font-semibold">
                    Total Price :{" "}
                    <span className="font-bold">Pkr {subtotal} </span>
                  </h3>
                </div>
              )}

              {Object.keys(cart).length != 0 && (
                <div className="flex mt-5">
                  <Link href={user.status ? "/cart" : "/login"}>
                    <button
                      onClick={activeCart}
                      className="flex mr-2 text-[#34251F] font-bold bg-blue-500 border-0 py-2 px-2 focus:outline-none hover:bg-blue-600 rounded text-sm"
                    >
                      View Cart
                    </button>
                  </Link>
                  <button
                    disabled={Object.keys(cart).length == 0 ? true : false}
                    onClick={() => {
                      dispatch(clearCart());
                      setSideCart(false);
                      return;
                    }}
                    className="cursor-pointer flex mr-2   text-[#34251F] font-bold bg-blue-500 border-0 py-2 px-2 focus:outline-none hover:bg-blue-600 rounded text-sm disabled:bg-blue-400"
                  >
                    Clear Cart
                  </button>
                </div>
              )}
            </Popover.Panel>
          </Transition>
        </Popover>
      </div>
    </div>
  );
};

export default Navbar;
