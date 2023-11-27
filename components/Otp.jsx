import baseurl from "@/config/host";
import React, { useRef, useState } from "react";
import { ResendOtp } from "./ResendOtp";
import Swal from "sweetalert2";

function Otp(props) {

 

  const [values, setValues] = useState({
    email: props.email,
    verificationKey: props.verificationKey
  });
  const [otp, setOtp] = useState(null);
  const [otpValues, setOtpValues] = useState(["", "", "", ""]);
  const inputRefs = useRef([]);

  const handleInputChange = (index, event) => {
    let value = event.target.value;

    // Ensure the input is a single digit
    value = value.replace(/\D/g, "");

    const newOtpValues = [...otpValues];
    newOtpValues[index] = value;

    setOtpValues(newOtpValues);

    // Move to the next input
    if (value && index < otpValues.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };
  const HandleNewOtp = async () => {
    const { message, data, success } = await ResendOtp(values.email);
    success
      ? (setValues(data), alert(message))
      : alert("Couldn't resend Verification code. Try again");
  };
  const HandleVerification = async () => {
    let convertOtpToString = otpValues.join("")

    console.log("convert otp to string", convertOtpToString)

    setOtp(convertOtpToString);
    try {

      console.log("otp values",otp)

      console.log("verifydata", ...values, convertOtpToString )

      const res = await fetch(`${baseurl}/verify-email`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ ...values, otp:convertOtpToString  })
      });
      const data = await res.json();

      console.log(res)
      console.log(data)
      // alert(data?.message);
      if (data?.success) {

        Swal.fire({
          title: "Email Verification Completed",
          timer: 3500,
          icon: "success",
          showConfirmButton: false,
        }).then(()=>{
          Router.push({
          pathname: "/auth/login"
        });
        Cookies.remove("email")
        Cookies.remove("verificationKey")
        })

        
      }
    } catch (error) {
      console.log("error",error)
      alert(
        "An error occured while verifying mail. check your internet connection and try again."
      );
    }
  };
  return (
    <div className="rounded-md relative bg-white mx-auto w-11/12 md:w-10/12 space-y-5 px-5 py-10 text-xl text-center">
      <h1 className="text-2xl font-poppins-semibold ">Verify</h1>
      <p className="font-poppins-light">
        Your Verification code has been sent to
        <br />
        <span className="font-semibold">{values.email}</span>
      </p>
      <form
        onSubmit={HandleVerification}
        className="mx-auto md:w-9/12 p-5 font-poppins-light space-y-5 md:space-y-10 text-xl text-center"
      >
        <div className="grid grid-cols-4 gap-4 ">
          {otpValues.map((value, index) => (
            <input
              key={index}
              ref={(input) => (inputRefs.current[index] = input)}
              type="text"
              required
              value={value}
              onChange={(event) => handleInputChange(index, event)}
              // onPaste={handlePaste}
              className="border-2 py-6 text-center focus:outline-none"
              maxLength="1"
            />
          ))}
        </div>

        <input
          type="submit"
          value="Verify"
          className="hover:scale-105 rounded-md mx-auto py-2 px-20 text-xl cursor-pointer bg-purple text-white"
        />
      </form>
      <p
        className="font-poppins-semibold text-purple cursor-pointer"
        onClick={HandleNewOtp}
      >
        Resend OTP
      </p>
    </div>
  );
}

export default Otp;
