import React from "react";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

function Header() {
  return (
    <div className={`${inter.className} py-10 text-[32px] flex justify-between`}>
      <h1 className="text-white">Beta finance</h1>
      <button className="bg-background rounded-[10px] text-black font-poppins-light py-3 px-14">
        sign in &gt;
      </button>
    </div>
  );
}

export default Header;
