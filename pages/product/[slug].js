import React from "react";
import { useState, useEffect, useRef } from "react";
import Product from "../../models/Product";
import mongoose from "mongoose";
import Error from "next/error";
import { ToastContainer, toast } from "react-toastify";
import { RadioGroup } from "@headlessui/react";
import { StarIcon } from "@heroicons/react/20/solid";
import { HeartIcon } from "@heroicons/react/24/outline";
import BestSeller from "/components/home/BestSeller";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, buyNow } from "../../redux/actions";
import ReviewModel from "../../components/models/ReviewModel";

const SingleProduct = ({ product, varients, error }) => {
  const dispatch = useDispatch();
  let { cart, subtotal } = useSelector((state) => state.CartReducer);
  const router = useRouter();
  const heart = useRef();
  const [color, setcolor] = useState();
  const [size, setsize] = useState();

  useEffect(() => {
    if (!error) {
      setcolor(product.color);
      setsize(product.size);
      console.log(product.tax);
    }
  }, [router.query]);

  useEffect(() => {
    console.log(cart);
    console.log(subtotal);
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const like = () => {
    if (heart.current.classList.contains("text-gray-500")) {
      heart.current.classList.remove("text-gray-500");
      heart.current.classList.add("text-green-500");
    } else if (heart.current.classList.contains("text-green-500")) {
      heart.current.classList.remove("text-green-500");
      heart.current.classList.add("text-gray-500");
    }
  };

  const refVarient = (newColor, newSize, e) => {
    e.preventDefault();
    // console.log(newSize, newColor);
    // console.log(varients);
    // console.log(varients[newSize]);
    // console.log(varients[newSize][newColor])
    // console.log(varients[newSize][newColor[0]]['slug'])
    // console.log(typeof newColor);
    if (typeof newColor == "object") {
      console.log("first");
      let url = `${process.env.NEXT_PUBLIC_HOST}/product/${
        varients[newSize][newColor[0]]["slug"]
      }`;
      router.push(url);
    } else {
      let url = `${process.env.NEXT_PUBLIC_HOST}/product/${varients[newSize][newColor]["slug"]}`;
      router.push(url);
    }
  };

  if (error == 404) {
    return <Error statusCode={404} />;
  }

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl py-10 px-4 sm:py-20 sm:px-6 lg:max-w-7xl lg:px-32">
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            <div>
              {/* Product image */}
              <div className="lg:col-span-4 lg:row-end-1">
                <div className="aspect-w-4 aspect-h-3 overflow-hidden rounded-lg">
                  <img
                    src={
                      product.img.length < 40
                        ? "../Products/" + product.img
                        : product.img
                    }
                    alt={product.name}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
            {/* product info */}
            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                {product.title} ( {product.color} / {product.size} )
              </h1>

              <div className="mt-3">
                <h2 className="sr-only">product information</h2>
                <p className="text-3xl tracking-tight text-gray-900">
                  Rs{" "}
                  <span className="font-bold text-green-500">
                    {product.price}
                  </span>
                </p>
              </div>

              {/* Reviews */}
              <ReviewModel />

              <div className="mt-6">
                <h3 className="sr-only">Description</h3>

                <div className="space-y-6 text-base text-gray-700">
                  {product.desc}
                </div>
              </div>

              {/* Color and Size picker */}
              <form>
                <div className="flex justify-start space-x-20">
                  {/* Color picker */}
                  <div className="mt-6">
                    <h2 className="text-sm font-medium text-gray-900">Color</h2>

                    <RadioGroup className="mt-2">
                      <RadioGroup.Label className="sr-only">
                        {" "}
                        Choose a color{" "}
                      </RadioGroup.Label>
                      <div className="flex">
                        {size &&
                          Object.keys(varients[size]).map((itemColor) => {
                            return (
                              <>
                                <RadioGroup.Option
                                  onClick={(e) =>
                                    refVarient(itemColor, size, e)
                                  }
                                  style={{ backgroundColor: itemColor }}
                                  className={`relative m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none
                                  ${
                                    itemColor == color
                                      ? "ring ring-offset-1"
                                      : ""
                                  }
                              `}
                                >
                                  <RadioGroup.Label
                                    as="span"
                                    className="sr-only"
                                  >
                                    {itemColor}
                                  </RadioGroup.Label>
                                  <span
                                    aria-hidden="true"
                                    className={`
                                h-8 w-8 rounded-full 
                              `}
                                  />
                                </RadioGroup.Option>
                              </>
                            );
                          })}
                      </div>
                    </RadioGroup>
                  </div>

                  {/* Size picker */}
                  <div className="mt-6">
                    <h2 className="text-sm font-medium text-gray-900">Size</h2>

                    <RadioGroup className="mt-2">
                      <RadioGroup.Label className="sr-only">
                        {" "}
                        Choose a size{" "}
                      </RadioGroup.Label>
                      <div className="flex items-center space-x-3">
                        {Object.keys(varients).map((itemSize) => (
                          <RadioGroup.Option
                            onClick={(e) =>
                              refVarient(
                                Object.keys(varients[itemSize]),
                                itemSize,
                                e
                              )
                            }
                            className={`border-gray-200 cursor-pointer bg-white text-gray-900 hover:bg-gray-50 
                              flex items-center justify-center rounded-md border py-2 px-3 text-sm font-medium uppercase sm:flex-1  ${
                                itemSize == size
                                  ? "ring-2 ring-indigo-500 ring-offset-2"
                                  : ""
                              }`}
                          >
                            <RadioGroup.Label as="span">
                              {itemSize}
                            </RadioGroup.Label>
                          </RadioGroup.Option>
                        ))}
                      </div>
                    </RadioGroup>
                  </div>
                </div>

                {product.availableQty > 0 ? (
                  <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-3">
                    <button
                      onClick={() => {
                        dispatch(
                          buyNow(
                            product.slug,
                            1,
                            product.price,
                            product.title,
                            product.size,
                            product.color,
                            product.img,
                            product.tax
                          )
                        );
                        router.push("/checkout");
                      }}
                      type="button"
                      className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                    >
                      Buy Now
                    </button>
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
                      className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-50 py-3 text-base font-medium text-indigo-700 hover:bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                    >
                      Add to cart
                    </button>
                    <button
                      type="button"
                      className="flex w-1/4 items-center justify-center rounded-md border border-transparent bg-indigo-50 py-3 px-6 text-base font-medium text-indigo-700 hover:bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                    >
                      <HeartIcon
                        className="h-6 w-6 flex-shrink-0"
                        aria-hidden="true"
                      />
                      <span className="sr-only">Add to favorites</span>
                    </button>
                  </div>
                ) : (
                  <p className="leading-relaxed text-2xl font-bold">
                    Item Out of Stock!
                  </p>
                )}
              </form>

              {/* Sharing Icons */}
              <div className="pt-6">
                <h3 className="text-sm font-medium text-gray-900">Share</h3>
                <ul role="list" className="mt-2 flex items-center space-x-6">
                  <li>
                    <a
                      href="#"
                      className="flex h-6 w-6 items-center justify-center text-gray-400 hover:text-gray-500"
                    >
                      <span className="sr-only">Share on Facebook</span>
                      <svg
                        className="h-7 w-7"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex h-6 w-6 items-center justify-center text-gray-400 hover:text-gray-500"
                    >
                      <span className="sr-only">Share on Twitter</span>
                      <svg
                        className="h-7 w-7"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex h-6 w-6 items-center justify-center text-gray-400 hover:text-gray-500"
                    >
                      <span className="sr-only">Share on Instagram</span>
                      <svg
                        className="h-8 w-8"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <BestSeller />
      </div>
    </>
  );
};

export async function getServerSideProps(context) {
  if (!mongoose.connection.readyState) {
    mongoose.connect(process.env.MONGO_URI);
  }
  let product = await Product.findOne({ slug: context.query.slug });

  let error = null;
  if (product == null) {
    return {
      props: { error: 404 },
    };
  }

  let varients = await Product.find({ title: product.title });
  let sizeColorSlug = {}; // { size: { color: { slug: "Programer T-shirt" } } }

  for (let item of varients) {
    if (Object.keys(sizeColorSlug).includes(item.size)) {
      sizeColorSlug[item.size][item.color] = { slug: item.slug };
    } else {
      sizeColorSlug[item.size] = {};
      sizeColorSlug[item.size][item.color] = { slug: item.slug };
      // { size :  }
      // { size : { color : { slug: "Programer T-shirt" } } }
    }
  }
  //   console.log(product)

  return {
    props: {
      error,
      product: JSON.parse(JSON.stringify(product)),
      varients: JSON.parse(JSON.stringify(sizeColorSlug)),
    },
  };
}

export default SingleProduct;
