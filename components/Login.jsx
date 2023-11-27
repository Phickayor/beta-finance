import baseurl from "@/config/host";
import Link from "next/link";
import Router from "next/router";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import Swal from "sweetalert2";
import { ErrorFunction } from "@/config/checkerror";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  // let baseurl = "http://localhost:4000";

  
  const HandleSumbit1 = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch(`${baseurl}/signin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email.toLowerCase(), password }),
      });

      const data = await res.json();

      console.log(res, "res response");

      console.log("data response", data);

      if (res?.ok) {
        setLoading(false)
        Swal.fire({
          title: data?.message,
          timer: 3500,
          icon: "success",
          showConfirmButton: false,
        }).then(() => {
          Cookies.set("token", JSON.stringify(data?.data?.token), {expires: 2});
          Cookies.set("user", JSON.stringify(data?.data?.user), {expires:2});
         
          Router.push("/admin");
        });
      } else {
        if (data?.message === "Email not Verified") {
          const resendOtpResponse = await fetch(`${baseurl}/resend-otp`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: email.toLowerCase() }),
          });

          const mainResponse = await resendOtpResponse.json();

          console.log("otp response data", mainResponse);

          if(resendOtpResponse.ok){
            setLoading(false)
            Swal.fire({
              title: "Email not Verified",
              text: "Click Ok to Verify Email",
              icon: "error",
              // timer: 3500,
              showConfirmButton: true,
            }).then(() => {
              Cookies.set("email", mainResponse?.data?.email)
              Cookies.set("verificationKey", mainResponse?.data?.verificationKey)
              Router.push({
                pathname: "/auth/verify",
                query: {
                  email: mainResponse?.data?.email,
                  verificationKey: mainResponse?.data?.verificationKey,
                },
              });
            });
          }else{
            setLoading(false)
            Swal.fire({
              text: "An error occured. Check your internet connection and try again",
              timer: 3500,
              icon: "error",
              showConfirmButton: true,
            }); 
          }
        } else {
          setLoading(false)
          Swal.fire({
            text: "An error occured. Check your internet connection and try again",
            timer: 3500,
            icon: "error",
            showConfirmButton: true,
          });
        }
      }
    } catch (error) {
      setLoading(false);
      Swal.fire({
        text: ErrorFunction(error),
        timer: 3500,
        icon: "error",
        showConfirmButton: false,
      });
    }
  };

  return (
    <div className="rounded-md relative bg-white mx-auto w-11/12 md:w-10/12 lg:w-9/12 space-y-8 px-5 py-10 text-center">
      <h1 className="text-xl md:text-2xl lg:text-3xl font-poppins-semibold ">
        Login to your account 📑
      </h1>
      <form
        onSubmit={HandleSumbit1}
        className=" mx-auto w-11/12 md:w-10/12 [&>*]:block space-y-6 md:space-y-8 lg:space-y-10 font-poppins-light"
      >
        <input
          type="email"
          required
          placeholder="Email"
          autoComplete="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          className="py-1 md:py-2 lg:py-5 px-2 md:px-5 lg:px-8 w-full text-lg md:text-xl lg:text-2xl focus:outline-none border border-black placeholder:text-black black text-black"
        />
        <input
          type="password"
          required
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          className="w-full border border-black py-1 md:py-2 lg:py-5 px-2 md:px-5 lg:px-8 text-lg md:text-xl lg:text-2xl focus:outline-none placeholder:text-black text-black"
        />
        <input
          type="Submit"
          defaultValue={!loading ? "Login" : "Loading..."}
          className="rounded-md hover:scale-105 duration-300 mx-auto md:py-4 py-2 px-20 text-lg md:text-xl lg:text-2xl cursor-pointer bg-purple text-white"
        />
      </form>
      <p className="text-lg md:text-xl lg:text-2xl ">
        Don&apos;t have an account?
        <Link
          href="/auth/register"
          className="text-purple font-poppins-semibold"
        >
          &nbsp;SIGN UP
        </Link>
      </p>
    </div>
  );
}

export default Login;
