import Link from "next/link";
import React from "react";

function Header(props) {
  return (
    <div className="relative sticky top-0 backdrop-blur-md py-2 md:py-5 md:text-xl flex justify-between">
      <h1 className="text-purple self-center">Beta finance</h1>
      <Link
        href={props.navLink}
        className="bg-purple font-poppins-light text-white rounded-md self-center py-2 px-5"
      >
        {props.navText}
      </Link>
    </div>
  );
}

export default Header;
