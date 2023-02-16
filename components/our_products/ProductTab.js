import React from "react";
import Hot from "./Hot";
import Trending from "./Trending";
import NewArrivals from "./NewArrivals";
import { useState } from "react";
import { Tab } from "@headlessui/react";

const ProductTab = () => {
  return (
    <>
      <h1 className="my-6 text-center text-3xl font-bold capitalize text-gray-800  lg:text-4xl">
        Our Products
      </h1>

      <Tab.Group>
        <Tab.List className="flex space-x-10 rounded-xl justify-center bg-white p-1">
          {/* Tab 1 */}
          <Tab className="relative px-5 py-2 font-medium text-white group">
            <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-purple-500 group-hover:bg-purple-700 group-hover:skew-x-12" />
            <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-purple-700 group-hover:bg-purple-500 group-hover:-skew-x-12" />
            <span className="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-purple-600 -rotate-12" />
            <span className="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-purple-400 -rotate-12" />
            <span className="relative">Hot</span>
          </Tab>
          {/* Tab 2 */}
          <Tab className="relative px-5 py-2 font-medium text-white group">
            <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-purple-500 group-hover:bg-purple-700 group-hover:skew-x-12" />
            <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-purple-700 group-hover:bg-purple-500 group-hover:-skew-x-12" />
            <span className="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-purple-600 -rotate-12" />
            <span className="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-purple-400 -rotate-12" />
            <span className="relative">Trending</span>
          </Tab>{" "}
          {/* Tab 3 */}
          <Tab className="relative px-5 py-2 font-medium text-white group">
            <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-purple-500 group-hover:bg-purple-700 group-hover:skew-x-12" />
            <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-purple-700 group-hover:bg-purple-500 group-hover:-skew-x-12" />
            <span className="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-purple-600 -rotate-12" />
            <span className="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-purple-400 -rotate-12" />
            <span className="relative">New Arrivals</span>
          </Tab>{" "}
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>
            <Hot />
          </Tab.Panel>
          <Tab.Panel>
            <Trending />
          </Tab.Panel>
          <Tab.Panel>
            <NewArrivals />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </>
  );
};

export default ProductTab;
