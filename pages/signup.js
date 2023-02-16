import React, { useState, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/router";

const Inputs = ({
  key,
  errorMessage,
  onChange,
  label,
  handelPinCode,
  ...inputProps
}) => {
  const [Focus, setFocus] = useState("false");
  const onFocus = (e) => {
    setFocus("true");
  };
  return (
    <div className="flex flex-col mx-4">
      <label className="lab leading-7 text-sm text-left dark:text-gray-200 text-gray-400 font-semibold">
        {label}
      </label>
      {inputProps.name === "address" ? (
        <textarea
          {...inputProps}
          onChange={onChange}
          onBlur={onFocus}
          focused={Focus}
          className="infoInputs bg-gray-800 valid:border-green-500 valid:border-2 rounded-md text-base outline-none text-gray-300 py-1 my-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      ) : inputProps.name === "areaPinCode" ? (
        <input
          {...inputProps}
          onChange={handelPinCode}
          onBlur={onFocus}
          focused={Focus}
          className="infoInputs bg-gray-800 valid:border-green-500 valid:border-2 rounded-md text-base outline-none text-gray-300 py-1 my-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      ) : (
        <input
          {...inputProps}
          onChange={onChange}
          onBlur={onFocus}
          focused={Focus}
          className="infoInputs bg-gray-800 valid:border-green-500 valid:border-2 rounded-md text-base outline-none text-gray-300 py-1 my-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      )}
      <span className="errMsg hidden  text-red-500 text-sm text-left  ">
        {errorMessage}
      </span>
    </div>
  );
};

const Signup = () => {
  const [Values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    cpassword: "",
  });
  const [Focus, setFocus] = useState("false");

  const router = useRouter();

  const onFocus = (e) => {
    setFocus("true");
  };

  const name = [
    {
      id: 1,
      name: "firstName",
      type: "text",
      placeholder: "First Name",
      errorMessage:
        "User Name sholud be 3-16 characters and shoud`t include any special character!",
      label: "First Name",
      pattern: "^[A-Za-z0-9 ]{3,16}$",
      required: true,
    },
    {
      id: 3,
      name: "lastName",
      type: "text",
      placeholder: "last Name",
      errorMessage:
        "User Name sholud be 3-16 characters and shoud`t include any special character!",
      label: "Last Name",
      pattern: "^[A-Za-z0-9 ]{3,16}$",
      required: true,
    },
  ];

  const inputs = [
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email address",
      errorMessage: "It should be a valid email address!",
      label: "Email address",
      required: true,
    },
    {
      key: 8,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password sholud be 3-16 characters and shoud include any 2 special character!",
      label: "Password",
      // pattern: "^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$",
      required: true,
    },
    {
      key: 9,
      name: "cpassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Password dose`t matched!",
      label: "Confirm Password",
      pattern: Values.cpassword["password"],
      required: true,
    },
  ];

  useEffect(() => {
    if (localStorage.getItem("token")) {
      router.push("/");
    }
  }, []);

  const onChange = (e) => {
    setValues({ ...Values, [e.target.name]: e.target.value });
    console.log(Values);
  };

  const signup = async (event) => {
    event.preventDefault();
    try {
      console.log(Values);
      let response = await fetch(
        `${process.env.NEXT_PUBLIC_HOST}/api/Account/signup`,
        {
          method: "POST", // or 'PUT'
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(Values),
        }
      );
      response = await response.json();
      if (response.status == true) {
        toast.success("Your account has been created!", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setValues({
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          cpassword: "",
        });
        setTimeout(() => {
          router.push("/login");
          // console.log(Values)
        }, 2000);
      } else if (response.status == false) {
        toast.error("Please try Again, With a valid email address", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } catch (error) {
      console.log("Internal Server Error");
      toast.error("Please try Again", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <>
      <Head>
        <title>Signup E-Store</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo.ico" />
      </Head>
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
      <div className="flex min-h-full">
        <div className="flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div className="text-center">
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900">
                Create New Account
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                Or{" "}
                <Link
                  href="/login"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Already have an account
                </Link>
              </p>
            </div>

            <div className="mt-4">
              <div>
                <div className="relative mt-6">
                  <div
                    className="absolute inset-0 flex items-center"
                    aria-hidden="true"
                  >
                    <div className="w-full border-t border-gray-300" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="bg-white px-2 text-gray-500">
                      Or continue with
                    </span>
                  </div>
                </div>
                {/* Icons */}
                <div>
                  <div className="mt-5 grid grid-cols-3 gap-3">
                    <div>
                      <a
                        href="#"
                        className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50"
                      >
                        <span className="sr-only">Sign in with Facebook</span>
                        <svg
                          className="h-5 w-5"
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
                    </div>

                    <div>
                      <a
                        href="#"
                        className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50"
                      >
                        <span className="sr-only">Sign in with Twitter</span>
                        <svg
                          className="h-5 w-5"
                          aria-hidden="true"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                      </a>
                    </div>

                    <div>
                      <a
                        href="#"
                        className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50"
                      >
                        <span className="sr-only">Sign in with GitHub</span>
                        <svg
                          className="h-5 w-5"
                          aria-hidden="true"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <form
                  className="space-y-6"
                  action="#"
                  method="POST"
                  onSubmit={signup}
                >
                  <div className="grid grid-cols-2 gap-6">
                    {name.map((input) => (
                      <div className="relative rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600">
                        <label
                          htmlFor="name"
                          className="absolute -top-2 left-2 -mt-px inline-block bg-white px-1 text-xs font-medium text-gray-900"
                        >
                          {input.label}
                        </label>
                        <input
                          id={input.id}
                          name={input.name}
                          type={input.type}
                          autoComplete={input.placeholder}
                          required={input.required}
                          pattern={input.pattern}
                          onChange={onChange}
                          onBlur={onFocus}
                          focused={Focus}
                          className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
                        />
                      </div>
                    ))}
                  </div>
                  {inputs.map((input) => (
                    <div className="relative rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600">
                      <label
                        htmlFor="email"
                        className="absolute -top-2 left-2 -mt-px inline-block bg-white px-1 text-xs font-medium text-gray-900"
                      >
                        {input.label}
                      </label>
                      <div className="mt-1">
                        <input
                          id={input.id}
                          name={input.name}
                          type={input.type}
                          autoComplete="email"
                          required={input.required}
                          pattern={input.pattern}
                          onChange={onChange}
                          onBlur={onFocus}
                          focused={Focus}
                          className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
                        />
                        <span className="errMsg hidden  text-red-500 text-sm text-left  ">
                          {input.errorMessage}
                        </span>
                      </div>
                    </div>
                  ))}

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                      <label
                        htmlFor="remember-me"
                        className="ml-2 block text-sm text-gray-900"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="group relative flex w-full items-center justify-center overflow-hidden rounded-md border border-indigo-600 px-4 py-2 text-sm font-medium text-indigo-600 hover:bg-gray-50 hover:text-white"
                    >
                      <span className="ease absolute inset-0 flex h-full w-full -translate-x-full items-center justify-center bg-indigo-600 text-white duration-300 group-hover:translate-x-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="h-6 w-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                          />
                        </svg>
                      </span>
                      <span className="ease absolute flex h-full w-full transform items-center justify-center text-indigo-600 transition-all duration-300 group-hover:translate-x-full">
                        Sign Up
                      </span>
                      <span className="invisible relative">Log in</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="relative hidden w-0 flex-1 md:block">
          <img
            className="absolute inset-0 m-auto h-auto w-auto object-contain"
            src="../icons/signup.svg"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Signup