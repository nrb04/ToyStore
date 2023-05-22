import React, { useEffect } from "react";
import { Button } from "@material-tailwind/react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./banner.css";

const Banner = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <section className="dark:text-gray-100">
        <div className="container flex flex-col justify-center px-6 mx-auto sm:py-12 lg:py-0 lg:flex-row lg:justify-between">
          <div className="flex items-center justify-center px-6  lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-anchor-placement="center-bottom"
              data-aos-duration="800"
              src="/banner1.png"
              alt=""
              className="object-fill"
            />
          </div>
          <div className="flex flex-col justify-center  text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="text-5xl font-bold leading-none sm:text-6xl">
              <span className="text-red-600">A toy store</span>
              <br /> for the whole
              <span className="text-tahiti"> family</span>
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12">
              store that makes playtime fun{" "}
              <span className="text-red-500"> fun.</span>
              <br className="hidden md:inline lg:hidden" /> One-stop shop for
              all things toys.kids will love our amazing selection of{" "}
              <span className="text-red-500"> toys.</span>
            </p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <div class="b animate-bounce mx-auto h-16 w-64 flex justify-center items-center">
                <div class="i h-16 w-64 bg-gradient-to-br from-red-400 to-red-600 items-center rounded-xl shadow-2xl  cursor-pointer absolute overflow-hidden transform hover:scale-x-110 hover:scale-y-105 transition duration-300 ease-out"></div>
                <a class="text-center text-white font-semibold z-10 pointer-events-none flex justify-content items-center">
                  <span class="">
                    <svg
                      class="w-5 h-5 right-1.5 relative"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </span>
                  Explore All !
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
