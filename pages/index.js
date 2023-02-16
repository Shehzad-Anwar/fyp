import Head from "next/head";
import React, { useEffect } from "react";

import Header from "../components/home/Header";
import NewCollections from "../components/home/NewCollections";
import BestSeller from "../components/home/BestSeller";
import OurProducts from "../components/home/OurProducts";
import Reviews from "../components/home/Reviews";
import Policies from "../components/home/Policies";
import Newsletter from "../components/home/Newsletter";
import ProductTab from "../components/our_products/ProductTab";

export default function Home({ getUser }) {
  useEffect(() => {
    return () => {
      let subscribe = true;
      if (subscribe) {
        getUser(subscribe);
      }

      return () => {
        subscribe = true;
      };
    };
  }, []);

  return (
    <>
      <Head>
        <title>E-Store</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Satisfy&display=swap"
          rel="stylesheet"
        />
        <script src="./TW-ELEMENTS-PATH/dist/js/index.min.js"></script>
      </Head>

      <main className="">
        {/* <Navbar /> */}
        <Header />
        <NewCollections />
        <BestSeller />
        <ProductTab />
        <Reviews />
        <Policies />
        <Newsletter />
        <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
      </main>
    </>
  );
}
