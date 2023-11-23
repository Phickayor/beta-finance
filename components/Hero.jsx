import React from "react";

function Hero() {
  return (
    <div className="flex justify-between py-6">
      <div className="w-2/3">
        <h1 className="heading">
          Simplifying <br/>Small Business Payments
        </h1>
      </div>
      <div className="w-1/3">
        <img src="/images/globe.png" alt="globe" />
      </div>
    </div>
  );
}

export default Hero;
