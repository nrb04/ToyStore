import React, { useEffect } from "react";
import { Button } from "@material-tailwind/react";
import AOS from "aos";
import "aos/dist/aos.css";

const Banner = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <section className="dark:text-gray-100">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-20 lg:flex-row lg:justify-between">
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img
              data-aos="fade-zoom-in"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="600"
              src="/public/banner1.png"
              alt=""
              className="object-fill"
            />
          </div>
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="text-5xl font-bold leading-none sm:text-6xl">
              <span className="text-red-600">Toys</span>
              <br /> will be
              <span className="text-tahiti"> friends</span>
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12">
              AND tell us who is you <span className="text-red-500">Want</span>
              <br className="hidden md:inline lg:hidden" />
              turpis pulvinar, est scelerisque ligula sem
            </p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <Button className="px-8 py-3 text-lg font-semibold rounded bg-red-700">
                gradient
              </Button>
              <Button className="px-8 py-3 text-lg font-semibold rounded bg-green-700">
                gradient
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
