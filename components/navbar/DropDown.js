import Link from "next/link";
import React from "react";

const DropDown = () => {
  return (
    <>
      <span className="w-screen h-ful">
        <ul className="navbar-nav mr-auto flex flex-row">
          <li className="nav-item dropdown static">
            <a
              className="nav-link block pr-2 lg:px-2 py-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out dropdown-toggle flex items-center whitespace-nowrap"
              href="#"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
              type="button"
              id="dropdownMenuButtonY"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Shop
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="caret-down"
                className="w-2 ml-2"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path
                  fill="currentColor"
                  d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                />
              </svg>
            </a>
            <div
              className="dropdown-menu w-full mt-0 hidden shadow-lg bg-white absolute left-0 top-full"
              aria-labelledby="dropdownMenuButtonY"
            >
              <div className="px-6 lg:px-8 py-5">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {/* New Collections */}

                  <div className="bg-white text-gray-600">
                    <p className="block px-6 py-2 border-b border-gray-200 w-full uppercase font-semibold text-gray-700">
                      New Collection
                    </p>
                    <a
                      href="#!"
                      aria-current="true"
                      className="block px-6 py-2 border-b border-gray-200 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out"
                    >
                      T-Shirt
                    </a>
                    <a
                      href="#!"
                      aria-current="true"
                      className="block px-6 py-2 border-b border-gray-200 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out"
                    >
                      Amet consectetur
                    </a>
                    <a
                      href="#!"
                      aria-current="true"
                      className="block px-6 py-2 border-b border-gray-200 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out"
                    >
                      Cras justo odio
                    </a>
                    <a
                      href="#!"
                      aria-current="true"
                      className="block px-6 py-2 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out"
                    >
                      Adipisicing elit
                    </a>
                  </div>

                  {/* Trending */}

                  <div className="bg-white text-gray-600">
                    <p className="block px-6 py-2 border-b border-gray-200 w-full uppercase font-semibold text-gray-700">
                      Trending
                    </p>
                    <Link href={"/Products/tshirts"}>
                      <p
                        className="block px-6 py-2 border-b
                      border-gray-200 w-full hover:bg-gray-50
                      hover:text-gray-700 transition duration-150 ease-in-out"
                      >
                        T-Shirt
                      </p>
                    </Link>
                    <Link href={"/Products/hoodies"}>
                      <p
                        className="block px-6 py-2 border-b
                      border-gray-200 w-full hover:bg-gray-50
                      hover:text-gray-700 transition duration-150 ease-in-out"
                      >
                        Hoodies
                      </p>
                    </Link>
                    <Link href={"/Products/mugs"}>
                      <p
                        className="block px-6 py-2 border-b
                      border-gray-200 w-full hover:bg-gray-50
                      hover:text-gray-700 transition duration-150 ease-in-out"
                      >
                        Mugs
                      </p>
                    </Link>
                    <Link href={"/Products/stickers"}>
                      <p
                        className="block px-6 py-2 border-b
                      border-gray-200 w-full hover:bg-gray-50
                      hover:text-gray-700 transition duration-150 ease-in-out"
                      >
                        Stickers
                      </p>
                    </Link>
                  </div>

                  <div className="bg-white text-gray-600">
                    <p className="block px-6 py-2 border-b border-gray-200 w-full uppercase font-semibold text-gray-700">
                      Iste quaerato
                    </p>
                    <a
                      href="#!"
                      aria-current="true"
                      className="block px-6 py-2 border-b border-gray-200 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out"
                    >
                      Cras justo odio
                    </a>
                    <a
                      href="#!"
                      aria-current="true"
                      className="block px-6 py-2 border-b border-gray-200 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out"
                    >
                      Est iure
                    </a>
                    <a
                      href="#!"
                      aria-current="true"
                      className="block px-6 py-2 border-b border-gray-200 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out"
                    >
                      Praesentium
                    </a>
                    <a
                      href="#!"
                      aria-current="true"
                      className="block px-6 py-2 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out"
                    >
                      Laboriosam
                    </a>
                  </div>
                  <div className="bg-white text-gray-600">
                    <p className="block px-6 py-2 border-b border-gray-200 w-full uppercase font-semibold text-gray-700">
                      Cras justo odio
                    </p>
                    <a
                      href="#!"
                      aria-current="true"
                      className="block px-6 py-2 border-b border-gray-200 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out"
                    >
                      Saepe
                    </a>
                    <a
                      href="#!"
                      aria-current="true"
                      className="block px-6 py-2 border-b border-gray-200 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out"
                    >
                      Vel alias
                    </a>
                    <a
                      href="#!"
                      aria-current="true"
                      className="block px-6 py-2 border-b border-gray-200 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out"
                    >
                      Sunt doloribus
                    </a>
                    <a
                      href="#!"
                      aria-current="true"
                      className="block px-6 py-2 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out"
                    >
                      Cum dolores
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </span>
    </>
  );
};

export default DropDown;
