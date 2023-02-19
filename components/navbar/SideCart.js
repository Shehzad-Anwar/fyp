import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { ShoppingBagIcon, TrashIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../redux/actions";

const SideCart = () => {
  const dispatch = useDispatch();
  let { cart, subtotal } = useSelector((state) => state.CartReducer);

  return (
    <>
      <div className="flex flex-1 items-center justify-end ">
        {/* Cart */}
        <Popover className="ml-4 flow-root text-sm lg:relative lg:ml-3">
          <Popover.Button className="group -m-2 flex items-center p-2">
            <ShoppingBagIcon
              className="h-6 w-6 flex-shrink-0 text-gray-700 group-hover:text-gray-500"
              aria-hidden="true"
            />
            <span className="ml-1 text-sm font-medium text-gray-700 group-hover:text-gray-800">
              {Object.keys(cart).length > 0 && (
                <span className="ml-1 text-sm font-medium">
                  {Object.keys(cart).length}
                </span>
              )}
            </span>
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
            <Popover.Panel className="absolute inset-x-0 left-auto right-0 mt-5 -mr-1.5 w-80 rounded-lg bg-white px-2 pb-6 shadow-lg ring-1 ring-black ring-opacity-5 ">
              <h2 className="sr-only">Shopping Cart</h2>

              <form className="mx-auto max-h-screen px-4">
                <ul
                  role="list"
                  className="divide-y divide-gray-200 max-h-72 example overflow-y-scroll  "
                >
                  {Object.keys(cart).map((item) => (
                    <li key={item} className="flex items-center py-6">
                      <Link href={`product/${item}`}>
                        <img
                          src={
                            cart[item].img.length < 40
                              ? "../Products/" + cart[item].img
                              : cart[item].img
                          }
                          alt={cart[item].name}
                          className="h-16 w-16 flex-none rounded-md border border-gray-200 object-contain"
                        />
                      </Link>
                      <div className="ml-4 flex-auto">
                        <h3 className="font-medium text-gray-900">
                          <Link href={`product/${item}`}>
                            <p>{cart[item].name}</p>
                          </Link>
                        </h3>
                        <div className="mt-2 flex justify-between">
                          <p className="text-gray-600">Qty: {cart[item].qty}</p>
                          <p className="text-black">Rs {cart[item].price}</p>
                          <p className="text-gray-600">
                            <TrashIcon
                              onClick={() => dispatch(removeFromCart(item))}
                              className="h-5 w-5 flex-shrink-0 text-red-500 cursor-pointer"
                              aria-hidden="true"
                            />
                          </p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>

                <hr className="divide-gray-200" />
                {/* Total Section */}
                <dl className="mt-3 space-y-4">
                  <div className="flex items-center justify-between ">
                    <dt className="divide-y divide-gray-200 text-base font-medium text-gray-900">
                      Subtotal
                    </dt>
                    <dd className="text-base font-medium text-gray-900">
                      Rs {subtotal}
                    </dd>
                  </div>
                </dl>
                <p className="mt-1 text-sm text-gray-500">
                  Shipping and taxes will be calculated at checkout.
                </p>

                {/* Button Section */}
                <p className="mt-5 flex items-center justify-center text-center">
                  <Link
                    href="/checkout"
                    class="group relative flex w-full items-center justify-center overflow-hidden rounded-md border border-indigo-600 px-4 py-2 text-sm font-medium text-indigo-600 hover:bg-gray-50 hover:text-white"
                  >
                    <span class="ease absolute inset-0 flex h-full w-full -translate-x-full items-center justify-center bg-indigo-600 text-white duration-300 group-hover:translate-x-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                        fill="none"
                        strokeWidth={25}
                        stroke="currentColor"
                        className="h-6 w-6"
                      >
                        <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
                      </svg>
                    </span>
                    <span class="ease absolute flex h-full w-full transform items-center justify-center text-indigo-600 transition-all duration-300 group-hover:translate-x-full">
                      Checkout
                    </span>
                    <span class="invisible relative">Checkout</span>
                  </Link>
                </p>
                <p className="mt-3 text-center">
                  <Link
                    href="/cart"
                    className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    View Shopping Bag
                  </Link>
                </p>
              </form>
            </Popover.Panel>
          </Transition>
        </Popover>
      </div>
    </>
  );
};

export default SideCart;
