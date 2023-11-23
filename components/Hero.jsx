import React from "react";

function Hero() {
  return (
    <div className="relative flex justify-between md:py-6 py-14 sm:py-32 overflow-hidden">
      <div className="md:w-2/3 pl-5 md:px-10 z-20 ">
        <h1 className="heading">
          Simplifying <br className="hidden lg:block" />
          Small Business Payments
        </h1>
      </div>
      <div className="md:w-1/3 w-1/2 border p-4 md:mx-10 rounded-full border-black md:relative absolute -right-20 md:right-0  top-0">
        <img
          src="/images/globe.png"
          alt="globe"
          className="opacity-60 md:opacity-100"
        />
      </div>
    </div>
  );
}

export default Hero;
