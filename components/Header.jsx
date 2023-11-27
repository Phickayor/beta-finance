import Link from "next/link";
import React from "react";

function Header(props) {
  return (
    <div className="font-poppins z-30 px-5 py-2 md:py-5 md:px-12 md:text-2xl lg:text-[32px] relative flex justify-between">
      <Link
      href="/"
      >
      <h1 className="text-white self-center text-[21px] ">Beta finance</h1>
      </Link>
      
      <Link
        href={props.navLink}
        className="bg-white/70 rounded-[10px] text-[17px]  self-center font-poppins-light py-2 px-5 md:py-2 md:px-10 lg:py-2 lg:px-12 hover:scale-105 duration-300 hover:bg-white"
      >
        {props.navText} &gt;
      </Link>
    </div>
  );
}

export default Header;
