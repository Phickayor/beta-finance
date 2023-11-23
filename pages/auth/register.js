import SignUp from "@/components/SignUp";
import React, { useState } from "react";
import Otp from "./otp";
function Register() {
  const [otpValues, setOtpValues] = useState();
  const [IsRegistered, setIsRegistered] = useState(false);
  const ComponentHandler = (state, values) => {
    state === "registered" ? setIsRegistered(true) : setIsRegistered(false);
    setOtpValues(values);
  };
  return (
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
  );
}

export default Register;
