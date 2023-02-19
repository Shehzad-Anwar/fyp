import { UserIcon } from "@heroicons/react/24/outline";
import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import Search from "../twe/Search";
import DropDown from "./DropDown";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { signOut } from "../../redux/actions/Auth";
import { useCookies } from "react-cookie";
import SideCart from "./SideCart";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const [cookie, setCookie, removeCookie] = useCookies(["user", "token"]);
  const [sideCart, setSideCart] = useState(false);

  const ref = useRef();

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
      console.log("Logout");
      Object.keys(cookie).forEach((cookieName) => {
        removeCookie(cookieName);
      });
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
        className="cart items-center flex absolute right-4 top-auto "
      >
        {cookie.user && cookie.token && (
          <div div className="cursor-pointer">
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
                            {cookie.user.firstName + " " + cookie.user.lastName}
                          </p>
                          <p className="truncate text-sm">
                            {cookie.user.email}
                          </p>
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
                        <Link
                          href={"/ordersHistory"}
                          className={classNames(
                            active
                              ? "bg-violet-500 text-white"
                              : "text-gray-900",
                            "block px-4 py-2 text-sm rounded-md"
                          )}
                        >
                          My Orders
                        </Link>
                      )}
                    </Menu.Item>
                    {cookie.userType == "admin" ||
                    cookie.userType == "superAdmin" ? (
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            href={"/Admin"}
                            className={classNames(
                              active
                                ? "bg-violet-500 text-white"
                                : "text-gray-900",
                              "block px-4 py-2 text-sm rounded-md"
                            )}
                          >
                            Settings
                          </Link>
                        )}
                      </Menu.Item>
                    ) : (
                      ""
                    )}
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
          </div>
        )}

        {!cookie.user || !cookie.token ? (
          <Link href={"/login"}>
            <button className="cursor-pointer text-lg  text-[#34251F] rounded-md font-bold mx-2 transition ease-in-out hover:-translate-y-0.2 hover:scale-110 duration-150">
              Login
            </button>
          </Link>
        ) : (
          " "
        )}

        {/* Shopping Cart */}
        <SideCart />
      </div>
    </div>
  );
};

export default Navbar;
