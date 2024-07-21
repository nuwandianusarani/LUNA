import React from "react";
import MountainPng from "../img/moon-surface-hd.png";

const Hero = () => {
  return (
    // Hero Section
    <div className=" bg-black/20 h-full ">
      <div className="h-full flex justify-center items-center p-4">
        <div className="container grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Hero Text Content */}
          <div className="text-white space-y-4 lg:pr-36">
            {/* Hero Title */}
            <h1 data-aos="fade-up" className="text-5xl font-bold">
              LUNA
            </h1>
            {/* Hero Description */}
            <p data-aos="fade-up" data-aos-delay="300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ea
              dolorem eius accusamus beatae. Nulla quis beatae quo, possimus
              tempora similique dignissimos repellat aperiam veniam culpa
              consequatur repudiandae asperiores saepe.
            </p>
            {/* Button */}
            <button
              data-aos="fade-up"
              data-aos-delay="500"
              className="bg-blue-400 text-white hover:bg-blue-500 px-4 py-1 rounded-md duration-200"
            >
              LEARN MORE
            </button>
          </div>
          {/* Empty Placeholder */}
          <div></div>
        </div>
      </div>
      {/* Background Image */}
      <img
        src={MountainPng}
        alt=""
        className="absolute right-0 bottom-0 w-full brightness-50 z-10"
      />

      {/* Gradient Overlay */}
      <div className="absolute bottom-0 z-30 right-0 w-full bg-gradient-to-b from-transparent from-10% to-primary to-90% h-[20px] sm:h-[50px] md:[60px]"></div>
    </div>
  );
};

export default Hero;
