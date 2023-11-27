import baseurl from "@/config/host";
import Link from "next/link";
import Router from "next/router";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const HandleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${baseurl}/signin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
      });
      const data = await res.json();
      if (res.ok) {
        alert("Logged in Sucessfully");
        Cookies.set("token", JSON.stringify(data.data.token));
        Cookies.set("user", JSON.stringify(data.data.user));
        Router.push("/admin/");
      } else if (data.message === "Email not Verified") {
        alert(data.message);
        Router.push({ pathname: "/auth/verify", query: { email } });
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.log(error);
      alert("An error occured. Check your internet connection and try again");
    }
  };

  return (
    <div className="rounded-md relative bg-white mx-auto w-11/12 md:w-10/12 lg:w-9/12 space-y-8 px-5 py-10 text-center">
      <h1 className="text-xl md:text-2xl lg:text-3xl font-poppins-semibold ">
        Login to your account 📑
      </h1>
      <form
        onSubmit={HandleSubmit}
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
          defaultValue="Login"
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
