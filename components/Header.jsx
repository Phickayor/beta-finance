import Link from "next/link";
import React from "react";

function Header() {
  return (
    <div className="relative font-poppins z-30 px-5 py-2 md:py-5 md:px-12 md:text-2xl lg:text-[32px] backdrop-blur flex justify-between">
      <h1 className="text-white self-center">Beta finance</h1>
      <Link href="/auth/" className="bg-white/50 rounded-[10px] self-center font-poppins-light py-2 px-5 md:py-2 md:px-10 lg:py-4 lg:px-12">
        sign in &gt;
      </Link>
    </div>
  );
}

export default Header;
