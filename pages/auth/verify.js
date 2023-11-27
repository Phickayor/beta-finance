import Header from "@/components/Header";
import Otp from "@/components/Otp";
import { ResendOtp } from "@/components/ResendOtp";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

function Verify() {
  var router = useRouter();
  const [otpValues, SetOtpValues] = useState({
    email: "",
    verificationKey: ""
  });
  var email = router.query.email;
  const HandleResendOtp = async (email) => {
    var { data } = await ResendOtp(email);
    SetOtpValues(data);
  };
  useEffect(() => {
    if (email) {
      HandleResendOtp(email);
    }
  });
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
        <Otp
          email={otpValues.email}
          verificationKey={otpValues.verificationKey}
        />
      </div>
    </>
  );
}

export default Verify;
