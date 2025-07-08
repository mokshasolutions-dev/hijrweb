import React from "react";
import Image from "next/image";

const Herosection = () => {
  return (
    <div className="relative w-full bg-[url(/home_bg.jpg)] bg-cover bg-center bg-no-repeat ">
      <div className="flex flex-col md:flex-row items-center justify-between p-6 pb-0 md:p-10 md:pb-0 max-w-7xl mx-auto  md:gap-x-20 min-h-[500px]">
        {/* Text Section */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-green text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold pb-6">
            Your job search ends here
          </h1>
          <p className="font-bold text-lg sm:text-xl text-gray-600 pb-2">
            Your Gateway to Global Healthcare Job Opportunities
          </p>
          <p className="text-gray-500 text-base sm:text-lg">
            HIJR is a dedicated recruitment platform connecting healthcare
            professionals with institutions across India and beyond—other
            countries, hospitals, and private practices.
          </p>
        </div>

        {/* Image Section */}
        <div className=" md:w-1/2 pb-0">
          <Image
            src="/gairl2.png"
            alt="hero section img"
            width={300}
            height={300}
            className="object-cover mb-0 pb-0"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Herosection;
