import React from "react";

const OurProducts = () => {
  const Hotproducts = [
    {
      id: 1,
      name: "Multiple Colors Scarves",
      price: "$149",
      imageSrc: "/Pictures/pic9.jpg",
      imageAlt: "TODO",
      href: "#",
    },
    {
      id: 2,
      name: "Wool Shawls",
      price: "$15",
      imageSrc: "/Pictures/pic1.jpg",
      imageAlt: "TODO",
      href: "#",
    },
    {
      id: 3,
      name: "Women Shawls",
      price: "$15",
      imageSrc: "/Pictures/pic10.jpg",
      imageAlt: "TODO",
      href: "#",
    },
    {
      id: 4,
      name: "Apple Watch",
      price: "$15",
      imageSrc: "/Pictures/pic2.jpg",
      imageAlt: "TODO",
      href: "#",
    },
    {
      id: 5,
      name: "Wool Shawls",
      price: "$15",
      imageSrc: "/Pictures/pic1.jpg",
      imageAlt: "TODO",
      href: "#",
    },
    //Add More products here
  ];

  return (
    <>
      {/* Hot Products Tab*/}
      <div className="my-10 bg-white">
        <div className="mx-auto max-w-7xl overflow-hidden sm:px-6 lg:px-8">
          <h2 className="sr-only">Products</h2>

          <div className="-mx-px grid grid-cols-2 border-l border-gray-200 sm:mx-0 md:grid-cols-3 lg:grid-cols-4">
            {Hotproducts.map((product) => (
              <div
                key={product.id}
                className="group relative border-r border-b border-gray-200 p-4 sm:p-6"
              >
                <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-200 group-hover:opacity-75">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="pt-10 pb-4 text-center">
                  <h3 className="text-sm font-medium text-gray-900">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-4 text-base font-medium text-gray-900">
                    {product.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default OurProducts;
