import React from "react";

function Hero() {
  return (
    <div className="flex justify-between py-6">
      <div className="md:w-2/3 w-full">
        <h1 className="heading">
          Simplifying <br className="hidden lg:block" />
          Small Business Payments
        </h1>
      </div>
      <div className="w-1/3 relative ">
        <img
          src="/images/globe.png"
          className="absolute md:relative md:opacity-100 opacity-80 md:scale-100 scale-110"
          alt="globe"
        />
      </div>
    </div>
  );
}

export default Hero;
