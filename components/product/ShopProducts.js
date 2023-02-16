import React, { useState, useEffect } from "react";
import Link from "next/link";

const ShopProducts = ({ products }) => {
  const [Products, setProducts] = useState({ products });
  const getProducts = async () => {
    console.log(category);
    let response = await fetch(
      `${process.env.NEXT_PUBLIC_HOST}/api/Product/get?category=${category}`,
      {
        method: "GET", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    response = await response.json();
    setProducts(response.items);
    console.log(response.items);
    if (response.status == true) {
    }
  };

  useEffect(() => {
    // getProducts();
    console.log(products)
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 gap-y-4  sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 md:grid-cols-3 lg:grid-cols-3 lg:gap-x-8">
        {products &&
          Object.keys(products).map((item) => (
            <Link
              key={products[item].slug}
              href={`/product/${products[item].slug}`}
            >
              <div
                key={products[item].slug}
                className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white"
              >
                <div className="aspect-w-3 aspect-h-4 bg-gray-200 group-hover:opacity-75 sm:aspect-none sm:h-96">
                  <img
                    src={
                      products[item].img.length < 35
                        ? `../../Products/${products[item].img}`
                        : products[item].img
                    }
                    alt={products[item].category}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="flex flex-1 flex-col space-y-2 p-4">
                  <h3 className="text-base font-medium text-gray-900">
                    <p>
                      <span aria-hidden="true" className="absolute inset-0" />
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
    </>
  );
};

export default ShopProducts;
