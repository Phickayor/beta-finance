import baseurl from "@/config/host";
import formReducer from "@/reducers/formReducer";
import Link from "next/link";
import Router from "next/router";
import React, { useReducer } from "react";

function SignUp(props) {
  const initialFormState = {
    email: "",
    password: "",
    businessName: ""
  };
  const [formState, dispatch] = useReducer(formReducer, initialFormState);
  const HandleContentChange = (e) => {
    dispatch({
      field: e.target.name,
      value: e.target.value
    });
  };
  const HandleSubmit = async (e) => {
    e.preventDefault();
    props.handleComponent("registered", {
      user: {},
      email: "jetawof@gmail.com",
      verificationKey: "dddddddddddddddddd"
    });

    // try {
    //   const res = await fetch(`${baseurl}/signup`, {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json"
    //     },
    //     body: JSON.stringify({ ...formState })
    //   });
    //   const data = await res.json();
    //   if (res.ok) {
    //     console.log(data.message);
    //     props.handleComponent("registered",data.data)
    //   } else {
    //     console.log(data.mesage);
    //   }
    // } catch (error) {
    //   console.log(error);
    //   alert("An error occured. Check your internet connection and try again");
    // }
  };
  return (
    <div className="relative bg-white mx-auto w-11/12 md:w-10/12 space-y-8 px-5 py-10 text-xl text-center">
      <h1 className="text-2xl font-poppins-semibold ">Create an account 📑</h1>
      <form
        onSubmit={HandleSubmit}
        className=" mx-auto w-10/12 [&>*]:block space-y-8 font-poppins-light"
      >
        <input
          type="text"
          name="business_name"
          required
          placeholder="Business name"
          value={formState.business_name}
          onChange={(e) => HandleContentChange(e)}
          className="py-2 px-5 w-full text-xl focus:outline-none border border-black placeholder:text-black black text-black"
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          required
          value={formState.email}
          onChange={(e) => HandleContentChange(e)}
          className="w-full border border-black py-2 px-5 text-xl focus:outline-none placeholder:text-black text-black"
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          required
          value={formState.pswd}
          onChange={(e) => HandleContentChange(e)}
          className="w-full border border-black py-2 px-5 text-xl focus:outline-none placeholder:text-black text-black"
        />{" "}
        <input
          type="Submit"
          value="SIGN UP"
          className="hover:scale-105 rounded-md mx-auto py-2 px-20 text-xl cursor-pointer bg-purple text-white"
        />
      </form>
      <p>
        Don&apos;t have an account?
        <Link href="/auth/" className="text-purple font-poppins-semibold">
          &nbsp;LOGIN
        </Link>
      </p>
    </div>
  );
}

export default SignUp;
