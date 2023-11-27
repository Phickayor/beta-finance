import Header from "@/components/Header";
import Otp from "@/components/Otp";
import { ResendOtp } from "@/components/ResendOtp";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

function Verify() {
  var router = useRouter();

  var email = Cookies.get("email");
  var verificationKey = Cookies.get("verificationKey");

  return (
    <>
      <img
        src="/images/auth-bg.png"
        className="hidden md:block w-screen object-cover absolute "
        alt="Header Background"
      />
      <img
        src="/images/mobile-auth-bg.png"
        className="md:hidden w-screen object-cover absolute "
        alt="Header Background"
      />
      <Header navLink="/auth/" navText="Login" />
      <div className="h-screen flex flex-col justify-center">
        <Otp email={email} verificationKey={verificationKey} />
      </div>
    </>
  );
}

export default Verify;
