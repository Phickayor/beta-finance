import baseurl from "@/config/host";
import React, { useState } from "react";

function Otp(props) {
  const [values, setValues] = useState({
    email: props.email,
    verificationKey: props.verificationKey
  });
  const [otp, setOtp] = useState(null);
  const ResendOtp = async () => {
    try {
      const res = await fetch(`${baseurl}/resend-otp`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(values.email)
      });
      const data = await res.json();
      alert(data.message);
      if (data.success) {
        setValues(...values, data.data);
      }
    } catch (error) {
      alert(
        "An error occured while verifying mail. check your internet connection and try again."
      );
    }
  };
  const HandleVerification = async () => {
    try {
      const res = await fetch(`${baseurl}/verify-email`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ ...values, otp })
      });
      const data = await res.json();
      alert(data.message);
      if (data.success) {
        Router.push({
          pathname: "/auth/login"
        });
      }
    } catch (error) {
      alert(
        "An error occured while verifying mail. check your internet connection and try again."
      );
    }
  };
  return (
    <div className="text-center space-y-4">
      <p>
        Your Verification code has been sent to:&nbsp;
        <span className="font-semibold">{values.email}</span>
      </p>
      <form
        onSubmit={HandleVerification}
        className="mx-auto md:w-9/12 p-5 space-y-5 text-xl text-center"
      >
        <input
          type="number"
          placeholder="Type Code"
          onChange={(e) => {
            setOtp(e.target.value);
          }}
          required
          className="px-5 w-full text-center focus:outline-none text-black"
        />
        <button
          type="submit"
          className="py-2 px-10 font-semibold cursor-pointer bg-white text-black"
        >
          Verify
        </button>
        <p className="underline cursor-pointer" onClick={ResendOtp}>
          Resend Otp
        </p>
      </form>
    </div>
  );
}

export default Otp;
