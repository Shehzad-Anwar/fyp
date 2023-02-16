import { Tab } from "@headlessui/react";
import React from "react";
import Hot from "./Hot";
import Trending from "./Trending";
import NewArrivals from "./NewArrivals";

const Tabs = () => {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <>
      <h1 className="my-6 text-center text-3xl font-bold capitalize text-gray-800  lg:text-4xl">
        Our Products
      </h1>

      <div className=" grid grid-rows-1 py-4">
        <Tab.Group defaultIndex={0}>
          <Tab.List className="sm mx-96 flex w-auto justify-center space-x-8 rounded-xl border border-blue-600 bg-white p-1 dark:border-blue-400">
            <Tab
              className={({ selected }) =>
                classNames(
                  "w-1/3 rounded-lg py-2 text-sm font-medium leading-5 ",
                  "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                  selected
                    ? "bg-blue-600 text-white shadow"
                    : "text-blue-700 hover:bg-blue-600 hover:text-white"
                )
              }
            >
              Hot
            </Tab>
            <Tab
              className={({ selected }) =>
                classNames(
                  "w-1/3 rounded-lg py-2 text-sm font-medium leading-5",
                  "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                  selected
                    ? "bg-blue-600 text-white shadow"
                    : "text-blue-700 hover:bg-blue-600 hover:text-white"
                )
              }
            >
              Trending
            </Tab>
            <Tab
              className={({ selected }) =>
                classNames(
                  "w-1/3 rounded-lg py-2 text-sm font-medium leading-5 ",
                  "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                  selected
                    ? "bg-blue-600 text-white shadow"
                    : "text-blue-700 hover:bg-blue-600 hover:text-white"
                )
              }
            >
              New Arrivals
            </Tab>
          </Tab.List>
          <Tab.Panels className="mt-2">
            {/* Hot Tab */}
            <Tab.Panel>
              <Hot />
            </Tab.Panel>

            {/* Trending Tab */}
            <Tab.Panel>
              <Trending />
            </Tab.Panel>

            {/* New Arrival Tab */}
            <Tab.Panel>
              <NewArrivals />
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </>
  );
};

export default Tabs;
