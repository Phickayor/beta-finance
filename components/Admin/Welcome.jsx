import Link from "next/link";
import React from "react";

function Welcome(props) {
  return (
    <div className="mx-auto lg:w-11/12 text-center rounded-md space-y-4 md:space-y-6 bg-purple p-6 md:p-8 lg:p-12 text-white ">
      <h1 className="text-xl md:text-2xl font-poppins-light">
        Welcome {props.name} ✌️
      </h1>
      <p className="text-3xl md:text-5xl font-poppins-semibold">₦{props.balance}.00</p>
      <div className="flex justify-center gap-5 md:gap-8 lg:gap-10 action-btn-parents text-lg md:text-xl lg:text-2xl py-4">
        <Link href="/admin/clients">Customers</Link>
        <Link href="/admin/withdraw">Withdraw</Link>
      </div>
    </div>
  );
}

export default Welcome;
