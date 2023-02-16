import React, { useState, useEffect } from "react";
import Link from "next/link";
import Product from "../../models/Product";
import mongoose from "mongoose";
import Head from "next/head";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const newarrival = ({ products }) => {
  const sortOptions = [
    { name: "Most Popular", href: "#" },
    { name: "Best Rating", href: "#" },
    { name: "Newest", href: "#" },
  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <>
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="py-10">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">
            New Arrivals
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-base text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum!
          </p>
        </div>

        <section
          aria-labelledby="filter-heading"
          className="border-t border-gray-200 py-6"
        >
          <h2 id="filter-heading" className="sr-only">
            Product filters
          </h2>

          <div className="flex items-center justify-between">
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                  Sort
                  <ChevronDownIcon
                    className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                    aria-hidden="true"
                  />
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
                <Menu.Items className="absolute left-0 z-10 mt-2 w-40 origin-top-left rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    {sortOptions.map((option) => (
                      <Menu.Item key={option}>
                        {({ active }) => (
                          <a
                            href={option.href}
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm font-medium text-gray-900"
                            )}
                          >
                            {option.name}
                          </a>
                        )}
                      </Menu.Item>
                    ))}
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </section>
      </div>

      {/* Products */}
      <div className="bg-white">
        <div className="mx-auto max-w-2xl py-8 px-4 sm:py-8 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>

          <div className="grid grid-cols-1 gap-y-4  sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-8">
            {products &&
              Object.keys(products).map((item) => (
                <Link key={item} href={`/product/${products[item].slug}`}>
                  <div
                    key={products[item].slug}
                    className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white"
                  >
                    <div className="aspect-w-3 aspect-h-4  group-hover:opacity-75 sm:aspect-none sm:h-96">
                      <img
                        src={products[item].img}
                        className="h-full w-full object-contain object-center sm:h-full sm:w-full"
                      />
                    </div>
                    <div className="flex flex-1 flex-col space-y-2 p-4">
                      <h3 className="text-base font-medium text-gray-900">
                        <p>
                          <span
                            aria-hidden="true"
                            className="absolute inset-0"
                          />
                          {products[item].title}
                        </p>
                      </h3>
                      <div className="flex flex-1 flex-col justify-end">
                        <p className="text-sm italic text-gray-500">
                          {products[item].category}
                        </p>
                        <p className="text-base font-medium text-gray-900">
                          {products[item].price}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps(context) {
  if (!mongoose.connection.readyState) {
    await mongoose.connect(process.env.MONGO_URI);
  }
  let products = await Product.find(
    { newCollection: true },
    { _id: 0, sellQty: 0, adminId: 0, createdAt: 0, updatedAt: 0 }
  ).sort({ _id: -1 });
  // let products = await Product.find({'availableQty': {$ne : 0}, category:"T-shirt"})
  let newCollection = {};
  // Loop though all products {T-shirt},
  // if item in tshirt object, update its color and size array.
  //To findout which are avilable in what verients.
  for (let item of products) {
    if (item.title in newCollection) {
      if (
        !newCollection[item.title].color.includes(item.color) &&
        item.availableQty > 0
      ) {
        newCollection[item.title].color.push(item.color);
      }
      if (
        !newCollection[item.title].size.includes(item.size) &&
        item.availableQty > 0
      ) {
        newCollection[item.title].size.push(item.size);
      }
    } else {
      newCollection[item.title] = JSON.parse(JSON.stringify(item));
      if (item.availableQty > 0) {
        newCollection[item.title].color = [item.color];
        newCollection[item.title].size = [item.size];
      } else {
        newCollection[item.title].color = [];
        newCollection[item.title].size = [];
      }
    }
  }
  // console.log(newCollection)

  return {
    props: { products: JSON.parse(JSON.stringify(newCollection)) }, // will be passed to the page component as props
  };
}

export default newarrival;
