import React from "react";
import { Carousel } from "flowbite-react";

const Header = () => {
  return (
    <>
      <div className="h-auto sm:h-auto xl:h-auto 2xl:h-96">
        <Carousel
          slideInterval={2000}
          leftControl={<img className="" src="/icons/back.png" />}
          rightControl={<img className="" src="/icons/forward.png" />}
        >
          {/* Slide 1 */}

          <div className="relative bg-white py-10">
            <div
              className="absolute inset-x-0 top-0 hidden h-1/2 bg-gray-50 lg:block"
              aria-hidden="true"
            />
            <div className="mx-auto max-w-5xl bg-emerald-600 lg:bg-transparent lg:px-8">
              <div className="lg:grid lg:grid-cols-12">
                <div className="relative z-10 lg:col-span-4 lg:col-start-1 lg:row-start-1 lg:bg-transparent lg:py-12">
                  <div
                    className="absolute inset-x-0 h-1/2 bg-gray-50 lg:hidden"
                    aria-hidden="true"
                  />
                  <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-none lg:p-0">
                    <div className="aspect-w-10 aspect-h-6 sm:aspect-w-2 sm:aspect-h-1 lg:aspect-w-1">
                      <img
                        className="rounded-3xl object-cover object-center shadow-2xl"
                        src="/apple-watch.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>

                <div className="relative bg-emerald-600 lg:col-span-10 lg:col-start-3 lg:row-start-1 lg:grid lg:grid-cols-10 lg:items-center lg:rounded-3xl">
                  {/* This is the Dotted Background */}
                  <div
                    className="absolute inset-0 hidden overflow-hidden rounded-3xl lg:block"
                    aria-hidden="true"
                  >
                    <svg
                      className="absolute bottom-full left-full translate-y-1/3 -translate-x-2/3 transform xl:bottom-auto xl:top-0 xl:translate-y-0"
                      width={404}
                      height={384}
                      fill="none"
                      viewBox="0 0 404 384"
                      aria-hidden="true"
                    >
                      <defs>
                        <pattern
                          id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                          x={0}
                          y={0}
                          width={20}
                          height={20}
                          patternUnits="userSpaceOnUse"
                        >
                          <rect
                            x={0}
                            y={0}
                            width={4}
                            height={4}
                            className="text-emerald-500"
                            fill="currentColor"
                          />
                        </pattern>
                      </defs>
                      <rect
                        width={404}
                        height={384}
                        fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
                      />
                    </svg>
                    <svg
                      className="absolute top-full -translate-y-1/3 -translate-x-1/3 transform xl:-translate-y-1/2"
                      width={404}
                      height={384}
                      fill="none"
                      viewBox="0 0 404 384"
                      aria-hidden="true"
                    >
                      <defs>
                        <pattern
                          id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                          x={0}
                          y={0}
                          width={20}
                          height={20}
                          patternUnits="userSpaceOnUse"
                        >
                          <rect
                            x={0}
                            y={0}
                            width={4}
                            height={4}
                            className="text-emerald-500"
                            fill="currentColor"
                          />
                        </pattern>
                      </defs>
                      <rect
                        width={404}
                        height={384}
                        fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
                      />
                    </svg>
                  </div>

                  {/* This is the Text Area */}
                  <div className="relative mx-auto max-w-md space-y-6 py-12 px-4 sm:max-w-3xl sm:py-16 sm:px-6 lg:col-span-6 lg:col-start-4 lg:max-w-none lg:p-0">
                    <h2
                      className="text-3xl font-bold tracking-tight text-white"
                      id="join-heading"
                    >
                      Men's Woolen Shawl
                    </h2>
                    <p className="text-lg text-white">
                      This wood shawl is made in blended wool perfect for colder
                      days. Style this shawl with your outfit to look more
                      trendy and classy.
                    </p>
                    <a
                      className="block w-full rounded-md border border-transparent bg-white py-2 px-6 text-center text-base font-medium tracking-wider text-emerald-700 shadow-md hover:bg-gray-50 sm:inline-block sm:w-auto"
                      href="#"
                    >
                      Buy Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="relative bg-white py-10">
            <div
              className="absolute inset-x-0 top-0 hidden h-1/2 bg-gray-50 lg:block"
              aria-hidden="true"
            />
            <div className="mx-auto max-w-5xl bg-emerald-600 lg:bg-transparent lg:px-8">
              <div className="lg:grid lg:grid-cols-12">
                <div className="relative z-10 lg:col-span-4 lg:col-start-1 lg:row-start-1 lg:bg-transparent lg:py-12">
                  <div
                    className="absolute inset-x-0 h-1/2 bg-gray-50 lg:hidden"
                    aria-hidden="true"
                  />
                  <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-none lg:p-0">
                    <div className="aspect-w-10 aspect-h-6 sm:aspect-w-2 sm:aspect-h-1 lg:aspect-w-1">
                      <img
                        className="rounded-3xl object-cover object-center shadow-2xl"
                        src="/Mens_Shawl.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>

                <div className="relative bg-emerald-600 lg:col-span-10 lg:col-start-3 lg:row-start-1 lg:grid lg:grid-cols-10 lg:items-center lg:rounded-3xl">
                  {/* This is the Dotted Background */}
                  <div
                    className="absolute inset-0 hidden overflow-hidden rounded-3xl lg:block"
                    aria-hidden="true"
                  >
                    <svg
                      className="absolute bottom-full left-full translate-y-1/3 -translate-x-2/3 transform xl:bottom-auto xl:top-0 xl:translate-y-0"
                      width={404}
                      height={384}
                      fill="none"
                      viewBox="0 0 404 384"
                      aria-hidden="true"
                    >
                      <defs>
                        <pattern
                          id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                          x={0}
                          y={0}
                          width={20}
                          height={20}
                          patternUnits="userSpaceOnUse"
                        >
                          <rect
                            x={0}
                            y={0}
                            width={4}
                            height={4}
                            className="text-emerald-500"
                            fill="currentColor"
                          />
                        </pattern>
                      </defs>
                      <rect
                        width={404}
                        height={384}
                        fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
                      />
                    </svg>
                    <svg
                      className="absolute top-full -translate-y-1/3 -translate-x-1/3 transform xl:-translate-y-1/2"
                      width={404}
                      height={384}
                      fill="none"
                      viewBox="0 0 404 384"
                      aria-hidden="true"
                    >
                      <defs>
                        <pattern
                          id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                          x={0}
                          y={0}
                          width={20}
                          height={20}
                          patternUnits="userSpaceOnUse"
                        >
                          <rect
                            x={0}
                            y={0}
                            width={4}
                            height={4}
                            className="text-emerald-500"
                            fill="currentColor"
                          />
                        </pattern>
                      </defs>
                      <rect
                        width={404}
                        height={384}
                        fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
                      />
                    </svg>
                  </div>

                  {/* This is the Text Area */}
                  <div className="relative mx-auto max-w-md space-y-6 py-12 px-4 sm:max-w-3xl sm:py-16 sm:px-6 lg:col-span-6 lg:col-start-4 lg:max-w-none lg:p-0">
                    <h2
                      className="text-3xl font-bold tracking-tight text-white"
                      id="join-heading"
                    >
                      Men's Woolen Shawl
                    </h2>
                    <p className="text-lg text-white">
                      This wood shawl is made in blended wool perfect for colder
                      days. Style this shawl with your outfit to look more
                      trendy and classy.
                    </p>
                    <a
                      className="block w-full rounded-md border border-transparent bg-white py-2 px-6 text-center text-base font-medium tracking-wider text-emerald-700 shadow-md hover:bg-gray-50 sm:inline-block sm:w-auto"
                      href="#"
                    >
                      Buy Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Slide 3 */}
          <div className="relative bg-white py-10">
            <div
              className="absolute inset-x-0 top-0 hidden h-1/2 bg-gray-50 lg:block"
              aria-hidden="true"
            />
            <div className="mx-auto max-w-5xl bg-emerald-600 lg:bg-transparent lg:px-8">
              <div className="lg:grid lg:grid-cols-12">
                <div className="relative z-10 lg:col-span-4 lg:col-start-1 lg:row-start-1 lg:bg-transparent lg:py-12">
                  <div
                    className="absolute inset-x-0 h-1/2 bg-gray-50 lg:hidden"
                    aria-hidden="true"
                  />
                  <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-none lg:p-0">
                    <div className="aspect-w-10 aspect-h-6 sm:aspect-w-2 sm:aspect-h-1 lg:aspect-w-1">
                      <img
                        className="rounded-3xl object-cover object-center shadow-2xl"
                        src="/pexels-madison-inouye-1937336.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>

                <div className="relative bg-emerald-600 lg:col-span-10 lg:col-start-3 lg:row-start-1 lg:grid lg:grid-cols-10 lg:items-center lg:rounded-3xl">
                  {/* This is the Dotted Background */}
                  <div
                    className="absolute inset-0 hidden overflow-hidden rounded-3xl lg:block"
                    aria-hidden="true"
                  >
                    <svg
                      className="absolute bottom-full left-full translate-y-1/3 -translate-x-2/3 transform xl:bottom-auto xl:top-0 xl:translate-y-0"
                      width={404}
                      height={384}
                      fill="none"
                      viewBox="0 0 404 384"
                      aria-hidden="true"
                    >
                      <defs>
                        <pattern
                          id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                          x={0}
                          y={0}
                          width={20}
                          height={20}
                          patternUnits="userSpaceOnUse"
                        >
                          <rect
                            x={0}
                            y={0}
                            width={4}
                            height={4}
                            className="text-emerald-500"
                            fill="currentColor"
                          />
                        </pattern>
                      </defs>
                      <rect
                        width={404}
                        height={384}
                        fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
                      />
                    </svg>
                    <svg
                      className="absolute top-full -translate-y-1/3 -translate-x-1/3 transform xl:-translate-y-1/2"
                      width={404}
                      height={384}
                      fill="none"
                      viewBox="0 0 404 384"
                      aria-hidden="true"
                    >
                      <defs>
                        <pattern
                          id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                          x={0}
                          y={0}
                          width={20}
                          height={20}
                          patternUnits="userSpaceOnUse"
                        >
                          <rect
                            x={0}
                            y={0}
                            width={4}
                            height={4}
                            className="text-emerald-500"
                            fill="currentColor"
                          />
                        </pattern>
                      </defs>
                      <rect
                        width={404}
                        height={384}
                        fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
                      />
                    </svg>
                  </div>

                  {/* This is the Text Area */}
                  <div className="relative mx-auto max-w-md space-y-6 py-12 px-4 sm:max-w-3xl sm:py-16 sm:px-6 lg:col-span-6 lg:col-start-4 lg:max-w-none lg:p-0">
                    <h2
                      className="text-3xl font-bold tracking-tight text-white"
                      id="join-heading"
                    >
                      Men's Woolen Shawl
                    </h2>
                    <p className="text-lg text-white">
                      This wood shawl is made in blended wool perfect for colder
                      days. Style this shawl with your outfit to look more
                      trendy and classy.
                    </p>
                    <a
                      className="block w-full rounded-md border border-transparent bg-white py-2 px-6 text-center text-base font-medium tracking-wider text-emerald-700 shadow-md hover:bg-gray-50 sm:inline-block sm:w-auto"
                      href="#"
                    >
                      Buy Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </>
  );
};

export default Header;
