import Header from "@/components/Header";
import Otp from "@/components/Otp";
import { ResendOtp } from "@/components/ResendOtp";
import RedirectToLogin from "@/components/authUtils";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";

function Verify() {
  var email = Cookies.get("email");
  const [otpValues, setOtpValues] = useState({ email });

  useEffect(() => {
    const fetchData = async () => {
      try {
        let { data } = await ResendOtp(email);
        setOtpValues(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [email]); // Only depend on email in the dependency array

  // Log otpValues after it's updated (useEffect runs after each render)
  useEffect(() => {
    console.log(otpValues);
  }, [otpValues]);

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
        {email ? (
          <Otp
            email={otpValues.email}
            verificationKey={otpValues.verificationKey}
          />
        ) : (
          RedirectToLogin()
        )}
      </div>
    </>
  );
}

export default Verify;
