import React from "react";
import { NoSymbolIcon } from "@heroicons/react/24/outline";

const notfound = () => {
  return (
    <>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 bg-gray-100">
        <div className="mx-auto max-w-3xl">
          <div className="sm:flex py-24 items-center">
            <div className="mb-4 flex-shrink-0 sm:mb-0 sm:mr-4">
              {/* <NoSymbolIcon className="h-32 w-full text-gray-300 sm:w-32" /> */}
              <img
                className="h-32 w-full sm:w-32"
                src="/icons/search.svg"
                alt=""
              />
            </div>
            <div>
              <h4 className="text-2xl text-center font-bold">Not Found</h4>
              <p className="mt-1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
                culpa?
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default notfound;
