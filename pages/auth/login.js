import baseurl from "@/config/host";
import Cookies from "js-cookie";
import Link from "next/link";
import Router from "next/router";
import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const HandleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${baseurl}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
      });
      const data = await res.json();
      if (res.ok) {
        console.log("Logged in Sucessfully");
        Cookies.set("token", token);
        Router.push({
          pathname: "/auth/login"
        });
      } else {
        console.log(data.mesage);
      }
    } catch (error) {
      console.log(error);
      alert("An error occured. Check your internet connection and try again");
    }
  };
  return (
    <div className="h-screen flex flex-col justify-center">
      <form
        onSubmit={HandleSubmit}
        className="mx-auto md:w-9/12 px-5 py-10 space-y-5 text-xl text-center"
      >
        <div className=" mx-auto w-10/12 [&>*]:block [&>*]:my-4">
          <label>Email</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="mx-auto w-10/12 px-5 focus:outline-none text-black"
          />
        </div>
        <div className=" mx-auto w-10/12 [&>*]:block [&>*]:my-4">
          <label>Password</label>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="mx-auto w-10/12 px-5 focus:outline-none text-black"
          />
        </div>
        <input
          type="Submit"
          className="py-2 px-10 font-semibold cursor-pointer bg-white text-black"
        />
        <p>
          Don&apos;t have an account?
          <Link href="/auth/register" className="text-blue-500 underline">
            &nbsp;Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
