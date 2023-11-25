import SignUp from "@/components/SignUp";
import React, { useState } from "react";
import Otp from "../../components/Otp";
import Header from "@/components/Header";
function Register() {
  const [otpValues, setOtpValues] = useState();
  const [IsRegistered, setIsRegistered] = useState(false);
  const ComponentHandler = (state, values) => {
    state === "registered" ? setIsRegistered(true) : setIsRegistered(false);
    setOtpValues(values);
  };
  return (
    <div>
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
        {IsRegistered ? (
          <Otp
            email={otpValues.email}
            verificationKey={otpValues.verificationKey}
          />
        ) : (
          <SignUp handleComponent={ComponentHandler} />
        )}
      </div>
    </div>
  );
}

export default Register;
