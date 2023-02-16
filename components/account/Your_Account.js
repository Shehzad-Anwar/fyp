import React, { useState, useEffect } from "react";

const Your_Account = () => {
  const [Focus, setFocus] = useState("false");
  const [userInfo, setuserInfo] = useState({
    firstName: "",
    lastName: "",
    country: "",
    streetAdress: "",
    city: "",
    state: "",
    postalCode: "",
  });

  const onFocus = (e) => {
    setFocus("true");
  };

  const onChange = (e) => {
    e.preventDefault();
    setuserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(userInfo);
  };
  return (
    <form action="#" method="POST">
      <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
        <div className="sm:col-span-6">
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            Personal Information
          </h3>
          <p className="mt-1 text-sm text-gray-500">
            Use a permanent address where you can receive mail.
          </p>
          <label
            htmlFor="photo"
            className="mt-4 block text-sm font-medium text-gray-700"
          >
            Photo
          </label>
          <div className="mt-2 flex items-center">
            <span className="h-14 w-14 overflow-hidden rounded-full bg-gray-100">
              <svg
                className="h-full w-full text-gray-300"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </span>
            <button
              type="button"
              className="ml-5 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-1.5 px-3 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Change
            </button>
          </div>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
        <div className="sm:col-span-3">
          <label
            htmlFor="first-name"
            className="block text-sm font-medium text-gray-700"
          >
            First name
          </label>
          <div className="mt-1">
            <input
              onBlur={onFocus}
              focused={Focus}
              onChange={onChange}
              type="text"
              name="firstName"
              id="firstName"
              autoComplete="given-name"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
        </div>

        <div className="sm:col-span-3">
          <label
            htmlFor="last-name"
            className="block text-sm font-medium text-gray-700"
          >
            Last name
          </label>
          <div className="mt-1">
            <input
              onBlur={onFocus}
              focused={Focus}
              onChange={onChange}
              type="text"
              name="lastName"
              id="lastName"
              autoComplete="family-name"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
        </div>

        <div className="sm:col-span-3">
          <label
            htmlFor="country"
            className="block text-sm font-medium text-gray-700"
          >
            Country
          </label>
          <div className="mt-1">
            <select
              onChange={onChange}
              id="country"
              name="country"
              autoComplete="country-name"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            >
              <option>select Country</option>
              <option>Pakistan</option>
              <option>United States</option>
              <option>Canada</option>
              <option>Mexico</option>
            </select>
          </div>
        </div>

        <div className="sm:col-span-6">
          <label
            htmlFor="street-address"
            className="block text-sm font-medium text-gray-700"
          >
            Street address
          </label>
          <div className="mt-1">
            <input
              onBlur={onFocus}
              focused={Focus}
              onChange={onChange}
              type="text"
              name="streetAddress"
              id="streetAddress"
              autoComplete="street-address"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor="city"
            className="block text-sm font-medium text-gray-700"
          >
            City
          </label>
          <div className="mt-1">
            <input
              onBlur={onFocus}
              focused={Focus}
              onChange={onChange}
              type="text"
              name="city"
              id="city"
              autoComplete="address-level2"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor="region"
            className="block text-sm font-medium text-gray-700"
          >
            State / Province
          </label>
          <div className="mt-1">
            <input
              onBlur={onFocus}
              focused={Focus}
              onChange={onChange}
              type="text"
              name="state"
              id="state"
              autoComplete="address-level1"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor="postal-code"
            className="block text-sm font-medium text-gray-700"
          >
            ZIP / Postal code
          </label>
          <div className="mt-1">
            <input
              onBlur={onFocus}
              focused={Focus}
              onChange={onChange}
              type="text"
              name="postalCode"
              id="postalCode"
              autoComplete="postal-code"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
        </div>
      </div>

      <div className="pt-8">
        <div className="flex justify-end">
          <button
            type="button"
            className="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Cancel
          </button>
          <button
            onClick={onSubmit}
            type="submit"
            className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default Your_Account;
