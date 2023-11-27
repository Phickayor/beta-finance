import Header from "@/components/Header";
import Otp from "@/components/Otp";
import { ResendOtp } from "@/components/ResendOtp";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

function Verify() {
  var router = useRouter();
  //   const [otpValues, SetOtpValues] = useState();
  var { email } = router.query;
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
        {async () => {
          const { message, data, success } = await ResendOtp(email);
          SetOtpValues(data);
          return (
            <Otp email={data.email} verificationKey={data.verificationKey} />
          );
        }}
      </div>
    </>
  );
}

export default Verify;
