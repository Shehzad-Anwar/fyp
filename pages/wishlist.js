import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/actions";
import { CheckIcon, NoSymbolIcon, TrashIcon } from "@heroicons/react/20/solid";

const wishlist = () => {
  const dispatch = useDispatch();
  // let { wishlist } = useSelector((state) => state.WishlistReducer);
  const products = [
    {
      id: 1,
      name: "Artwork Tee",
      href: "#",
      price: "Rs 3200",
      inStock: true,
      imageSrc: "/Pictures/pic5.jpg",
    },
    {
      id: 2,
      name: "Basic Tee",
      href: "#",
      price: "Rs 2300",
      inStock: false,
      imageSrc: "/Pictures/pic6.jpg",
    },
    // More products...
  ];
  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl py-12 px-4 sm:py-12 sm:px-6 lg:px-0">
          <h1 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            My Wishlist
          </h1>

          <form className="mt-12">
            <section aria-labelledby="cart-heading">
              <h2 id="cart-heading" className="sr-only">
                Items in your wishlist
              </h2>

              <ul
                role="list"
                className="divide-y divide-gray-200 border-t border-b border-gray-200"
              >
                {products.map((product) => (
                  <li key={product.id} className="flex py-6">
                    <div className="flex-shrink-0">
                      <img
                        src={product.imageSrc}
                        className="h-24 w-24 rounded-md object-cover object-center sm:h-32 sm:w-32"
                      />
                    </div>

                    <div className="ml-4 flex flex-1 flex-col sm:ml-6">
                      <div>
                        <div className="flex justify-between">
                          <h4 className="text-base">
                            <a
                              href={product.href}
                              className="font-medium text-gray-700 hover:text-gray-800"
                            >
                              {product.name}
                            </a>
                          </h4>
                          <button
                            onClick={() =>
                              dispatch(
                                addToCart(
                                  product.slug,
                                  1,
                                  product.price,
                                  product.title,
                                  product.size,
                                  product.color,
                                  product.img,
                                  product.tax
                                )
                              )
                            }
                            type="button"
                            className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                          >
                            <span>Add To Cart</span>
                          </button>
                        </div>
                        <p className="mt-2 text-sm font-medium text-gray-900">
                          {product.price}
                        </p>
                      </div>

                      <div className="mt-4 flex flex-1 items-end justify-between">
                        <p className="flex items-center space-x-2 text-sm text-gray-700">
                          {product.inStock ? (
                            <CheckIcon
                              className="h-5 w-5 flex-shrink-0 text-green-500"
                              aria-hidden="true"
                            />
                          ) : (
                            <NoSymbolIcon
                              className="h-5 w-5 flex-shrink-0 text-red-500"
                              aria-hidden="true"
                            />
                          )}

                          <span>
                            {product.inStock ? "In stock" : "Out of stock"}
                          </span>
                        </p>
                        <div className="ml-4">
                          <button type="button">
                            <TrashIcon
                              className="h-5 w-5 flex-shrink-0 text-indigo-500 text-sm font-medium  hover:text-red-500"
                              aria-hidden="true"
                            />
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          </form>
        </div>
      </div>
    </>
  );
};

export default wishlist;
