import React from "react";
import GlassesSVG from "./GlassesSVG";

const Hero = () => {
  return (
    <section className="bg-yellow-200 flow-root text-white py-20">
      <div className="flex relative -left-8 md:-left-32">
        <GlassesSVG h="52 lg:h-72" />
        <p className="text-5xl lg:text-7xl my-auto font-bold ml-2 lg:ml-12">
          MOBITA
        </p>
      </div>
      <h1 className="relative text-2xl md:text-4xl text-center mt-8 font-semibold">
        Welcome, Doraemonangis
      </h1>
      <div className="flex flex-col lg:flex-row justify-center mt-20 lg:mt-8">
        <button className="mx-auto lg:mx-0 bg-yellow-600 p-2 rounded-xl text-md lg:text-xl hover:bg-yellow-500 transition font-semibold">
          Manage Stores
        </button>
        <span className="mx-4 my-2"></span>
        <button className="mx-auto lg:mx-0 bg-yellow-600 p-2 rounded-xl text-md lg:text-xl hover:bg-yellow-500 transition font-semibold">
          Manage Dorayaki
        </button>
      </div>
    </section>
  );
};

export default Hero;
