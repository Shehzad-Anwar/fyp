import React, { useState } from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";
import theme from "../../src/theme/theme";
import createEmotionCache from "../../src/createEmotionCache";
import FullLayout from "../../src/layouts/FullLayout";
import BaseCard from "../../src/components/baseCard/BaseCard";
import Preview from "../../components/product/Preview";
import { ToastContainer, toast } from "react-toastify";
import { Grid } from "@mui/material";
import cookies from "next-cookies";
import Admin from "../../models/Admin";
import SuperAdmin from "../../models/SuperAdmin";
import Error from "next/error";
import mongoose from "mongoose";

const clientSideEmotionCache = createEmotionCache();

const Products = ({ Check, ...props }) => {
  if (Check == false) {
    console.log(Check);
    return <Error statusCode={404} />;
  } else {
    const { emotionCache = clientSideEmotionCache, pageProps } = props;
    const [Focus, setFocus] = useState("false");
    const [image, setImage] = useState("");
    const [createObjectURL, setCreateObjectURL] = useState(null);
    const [Product, setProduct] = useState({
      title: "",
      brand: "",
      addedBy: "",
      slug: "",
      img: "",
      desc: "",
      category: "",
      price: "",
      color: "",
      size: "",
      availableQty: "",
      rating: 3,
      sale: 0,
      tax: 0,
      bestSeller: false,
      top: false,
      newCollection: false,
    });

    const onChange = (e) => {
      setProduct({ ...Product, [e.target.name]: e.target.value });
      console.log(Product);
    };
    const handleChecked = (e) => {
      setProduct({ ...Product, [e.target.name]: e.target.checked });
      console.log(Product);
    };

    const onFocus = (e) => {
      setFocus("true");
    };

    const textInputs = [
      {
        id: 15912,
        name: "price",
        type: "tel",
        placeholder: "Price",
        errorMessage: "It should be a valid price!",
        label: "Price",
        required: true,
      },
      {
        key: 8191,
        name: "color",
        type: "text",
        placeholder: "Color",
        errorMessage: "Please Enter a valid color",
        label: "Color",
        required: true,
      },
      {
        key: 91191,
        name: "availableQty",
        type: "tel",
        placeholder: "Available Qunatity",
        errorMessage: "Enter Quanitiy of the product",
        label: "Available Quantity",
        required: true,
      },
      {
        id: 12191,
        name: "tax",
        type: "text",
        placeholder: "Tax",
        label: "Tax",
        required: true,
      },
    ];

    const selectInputs = [
      {
        id: 2221,
        name: "size",
        errorMessage: "Please, Select the, product size!",
        label: "Size",
        required: true,
        options: ["Select Size", "SM", "MD", "LG", "XL", "2XL", "3XL", "4Xl"],
      },
      {
        id: 21122,
        name: "category",
        errorMessage: "Please, Select the, category size!",
        label: "Category",
        required: true,
        options: [
          "Select Category",
          "T-shirt",
          "Hoodies",
          "Mugs",
          "Sticker",
          "Packwool",
          "Showl",
        ],
      },
      {
        id: 222212,
        name: "sale",
        label: "Sale",
        required: false,
        options: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90],
      },
      {
        id: 21212212,
        name: "rating",
        label: "Rating",
        required: false,
        options: [0, 1, 1.5, 2.5, 3, 3.5, 4, 4.5, 5],
      },
    ];

    const checkInputs = [
      {
        id: 23234,
        name: "bestSeller",
        type: "checkbox",
        errorMessage: "It should be a valid price!",
        message: "The product will be added as best seller.",
        label: "Add to Best Seller",
        required: true,
      },
      {
        id: 2549,
        name: "top",
        type: "checkbox",
        errorMessage: "It should be a valid price!",
        message: "The product will be added in top product",
        label: "Add to Top Product",
        required: true,
      },
      {
        id: 23934,
        name: "newCollection",
        type: "checkbox",
        errorMessage: "It should be a valid price!",
        message: "The product will be added in the new collections.",
        label: "Add to New Collections",
        required: true,
      },
    ];
    const uploadToClient = (event) => {
      if (event.target.files && event.target.files[0]) {
        const i = event.target.files[0];

        setImage(i);
        setCreateObjectURL(URL.createObjectURL(i));
      }
    };

    const uploadToServer = async (event) => {
      event.preventDefault();
      // await uploadToClient(event)
      let token = localStorage.getItem("token");
      if (createObjectURL && Image) {
        const form = new FormData();
        console.log("file", image);
        form.append("file", image);
        let response = await fetch(
          `${process.env.NEXT_PUBLIC_HOST}/api/Product/upload`,
          {
            method: "POST",
            headers: {
              authorization: token,
            },
            body: form,
            "content-type": "multipart/form-data",
          }
        );
        response = await response.json();
        console.log(response);
        setProduct({ ...Product, ["img"]: response.filename });
      } else {
        toast.error("Please, Select a Picture.", {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    };

    const onSubmit = async (e) => {
      e.preventDefault();

      if (
        Product.img.length !== 0 &&
        Product.title &&
        Product.brand &&
        Product.desc &&
        Product.category &&
        Product.price &&
        Product.color &&
        Product.size &&
        Product.availableQty
      ) {
        let res = await fetch(
          `${process.env.NEXT_PUBLIC_HOST}/api/Product/add`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              authorization: localStorage.getItem("token"),
            },
            body: JSON.stringify(Product),
          }
        );
        let response = await res.json();
        console.log(response);
        if (response.status == true) {
          toast.success(`${Product.title}, successfully added.`, {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          // setProduct(Product.forEach((item) => delete Product[item]));
          setImage("");
          setCreateObjectURL(null);
          // setProduct({
          //   title: "",
          //   brand: "",
          //   addedBy: "",
          //   slug: "",
          //   img: image,
          //   desc: "",
          //   category: "",
          //   price: "",
          //   color: "",
          //   size: "",
          //   availableQty: "",
          //   rating: 3,
          //   sale: 0,
          //   tax: 0,
          //   bestSeller: false,
          //   top: false,
          //   newCollection: false,
          // });
        } else {
          toast.error(`Fail to add, ${Product.title}.`, {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      } else {
        toast.error("Please, Provide Product info.", {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        console.log(Product);
      }
    };

    return (
      <CacheProvider value={emotionCache}>
        <Head>
          <title>Add Products</title>
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
        <ThemeProvider theme={theme}>
          <CssBaseline>
            <FullLayout>
              <Grid container spacing={0}>
                <Grid item xs={12} lg={12}>
                  <BaseCard title="Add Product">
                    <div className="max-w-2xl lg:max-w-none mx-10 my-1">
                      <h1 className="sr-only">Checkout</h1>

                      <form>
                        <div>
                          <div className="mt-5 border-t border-gray-200 pt-10">
                            <h2 className="text-lg font-medium text-gray-900">
                              Product information
                            </h2>

                            <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                              <div>
                                <label
                                  htmlFor="first-name"
                                  className="block text-sm font-medium text-gray-700"
                                >
                                  Title
                                </label>
                                <div className="mt-1">
                                  <input
                                    onBlur={onFocus}
                                    focused={Focus}
                                    onChange={onChange}
                                    pattern="^[A-Za-z0-9 ]{3,30}$"
                                    name="title"
                                    type="text"
                                    id="title"
                                    autoComplete="given-title"
                                    className=" infoInputs block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                  />
                                  <span className="errMsg hidden  text-red-500 text-sm text-left  ">
                                    Product title sholud be 3-30 characters and
                                    shoud`t include any special character!
                                  </span>
                                </div>
                              </div>

                              <div>
                                <label
                                  htmlFor="brand"
                                  className="block text-sm font-medium text-gray-700"
                                >
                                  Brand
                                </label>
                                <div className="mt-1">
                                  <input
                                    onBlur={onFocus}
                                    focused={Focus}
                                    onChange={onChange}
                                    pattern="^[A-Za-z0-9 ]{3,30}$"
                                    type="text"
                                    id="brand"
                                    name="brand"
                                    autoComplete="give-brand"
                                    className=" infoInputs block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                  />
                                  <span className="errMsg hidden  text-red-500 text-sm text-left  ">
                                    Brand Name sholud be 3-30 characters and
                                    shoud`t include any special character!
                                  </span>
                                </div>
                              </div>

                              <div className="sm:col-span-2">
                                <label
                                  htmlFor="address"
                                  className="block text-sm font-medium text-gray-700"
                                >
                                  Description
                                </label>
                                <div className="mt-1">
                                  <textarea
                                    rows="5"
                                    cols=""
                                    onBlur={onFocus}
                                    focused={Focus}
                                    onChange={onChange}
                                    // pattern="^[a-zA-Z0-9, ]{3,}$"
                                    type="text"
                                    name="desc"
                                    id="description"
                                    autoComplete="street-description"
                                    className=" infoInputs block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                  ></textarea>
                                  <span className="errMsg hidden  text-red-500 text-sm text-left  ">
                                    Please, Write description of the product.
                                  </span>
                                </div>
                              </div>

                              {textInputs.map((input) => (
                                <div>
                                  <label
                                    htmlFor="city"
                                    className="block text-sm font-medium text-gray-700"
                                  >
                                    {input.label}
                                  </label>
                                  <div className="mt-1">
                                    <input
                                      onBlur={onFocus}
                                      focused={Focus}
                                      onChange={onChange}
                                      pattern="^[1-0]$"
                                      type={input.type}
                                      name={input.name}
                                      id={input.id}
                                      autoComplete="give-price"
                                      className="infoInputs block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    />
                                    <span className="errMsg hidden  text-red-500 text-sm text-left  ">
                                      {input.errorMessage}
                                    </span>
                                  </div>
                                </div>
                              ))}

                              {selectInputs.map((select) => (
                                <div>
                                  <label
                                    htmlFor="size"
                                    className="block text-sm font-medium text-gray-700"
                                  >
                                    {select.label}
                                  </label>
                                  <div className="mt-1">
                                    <select
                                      onBlur={onFocus}
                                      focused={Focus}
                                      onChange={onChange}
                                      id={select.id}
                                      name={select.name}
                                      autoComplete="check"
                                      // pattern="^[A-Za-z]{3,30}$"
                                      className=" infoInputs block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    >
                                      {select.options.map((option) => (
                                        <option>{option}</option>
                                      ))}
                                    </select>
                                    <span
                                      className={`errMsg hidden text-red-500 text-sm text-left `}
                                    >
                                      {select.errorMessage}
                                    </span>
                                  </div>
                                </div>
                              ))}

                              <fieldset className="border-t border-b border-gray-200">
                                <legend className="sr-only">Addional</legend>
                                <div className="divide-y divide-gray-200">
                                  {checkInputs.map((check) => (
                                    <div className="relative flex items-start py-4">
                                      <div className="min-w-0 flex-1 text-sm">
                                        <label
                                          htmlFor="comments"
                                          className="font-medium text-gray-700"
                                        >
                                          {check.label}
                                        </label>
                                        <p
                                          id="comments-description"
                                          className="text-gray-500"
                                        >
                                          {check.message}
                                        </p>
                                      </div>
                                      <div className="ml-3 flex h-5 items-center">
                                        <input
                                          id={check.id}
                                          onChange={(e) => handleChecked(e)}
                                          name={check.name}
                                          aria-describedby="comments-description"
                                          type={check.type}
                                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                        />
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </fieldset>

                              {/* Picture Uploader */}
                              <div className=" ml-20  sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                                <div className="mt-1 sm:col-span-2 sm:mt-0">
                                  <div className="flex max-w-lg justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                                    <div className="space-y-1 text-center">
                                      <svg
                                        className="mx-auto h-12 w-12 text-gray-400"
                                        stroke="currentColor"
                                        fill="none"
                                        viewBox="0 0 48 48"
                                        aria-hidden="true"
                                      >
                                        <path
                                          d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                          strokeWidth={2}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                      </svg>
                                      <div className="flex text-sm text-gray-600">
                                        <label
                                          htmlFor="file-upload"
                                          className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                                        >
                                          <span>Upload a file</span>
                                          <input
                                            id="file-upload"
                                            name="file-upload"
                                            type="file"
                                            className="sr-only"
                                            onChange={uploadToClient}
                                          />
                                        </label>
                                        <p className="pl-1">or drag and drop</p>
                                      </div>
                                      <p className="text-xs text-gray-500">
                                        PNG, JPG, GIF up to 10MB
                                      </p>
                                    </div>
                                  </div>
                                  <button
                                    onClick={uploadToServer}
                                    className="w-full rounded-md border border-transparent bg-indigo-600 py-3 mt-10 px-4 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                                  >
                                    Upload picture
                                  </button>
                                </div>
                              </div>
                            </div>

                            <div className="border-t w-[400px] border-gray-200 py-6 px-2 sm:px-6">
                              <button
                                type="submit"
                                onClick={onSubmit}
                                className="w-full rounded-md border border-transparent bg-indigo-600 py-3 px-4 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                              >
                                Add Product
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </BaseCard>
                </Grid>
                <Grid item>
                  <BaseCard title="Preview of product">
                    <Preview Product={Product} />
                  </BaseCard>
                </Grid>
              </Grid>
            </FullLayout>
          </CssBaseline>
        </ThemeProvider>
      </CacheProvider>
    );
  }
};

export default Products;

Products.propTypes = {
  // Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  //   pageProps: PropTypes.object.isRequired,
};

export async function getServerSideProps(context) {
  if (!mongoose.connection.readyState) {
    mongoose.connect(process.env.MONGO_URI);
  }
  const { user } = cookies(context);
  let Check = false;
  if (user) {
    try {
      const PromiseAdmin = Admin.findOne(
        {
          _id: user.userId,
          email: user.email,
        },
        { password: 0, resetToken: 0 }
      );
      const PromiseSuperAdmin = SuperAdmin.findOne(
        {
          _id: user.userId,
          email: user.email,
        },
        { password: 0, resetToken: 0 }
      );
      const isAdmin = await PromiseAdmin;
      const isSuperAdmin = await PromiseSuperAdmin;
      console.log(isAdmin);
      console.log(isSuperAdmin);
      if (isAdmin || isSuperAdmin) Check = true;
    } catch (error) {
      console.log(error);
    }
  }
  return {
    props: { Check },
  };
}
