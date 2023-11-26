import baseurl from "@/config/host";
import formReducer from "@/reducers/formReducer";
import Link from "next/link";
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
    try {
      const res = await fetch(`${baseurl}/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ ...formState })
      });
      const data = await res.json();
      if (res.ok) {
        alert(data.message);
        props.handleComponent("registered", data.data);
      } else {
        alert(data.mesage);
      }
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  };
  return (
    <div className="rounded-md relative bg-white mx-auto w-11/12 md:w-10/12 lg:w-9/12 space-y-8 px-5 py-10 text-center">
      <h1 className="text-xl md:text-2xl lg:text-3xl font-poppins-semibold ">
        Create an account 📑
      </h1>
      <form
        onSubmit={HandleSubmit}
        className=" mx-auto w-11/12 md:w-10/12 [&>*]:block space-y-6 md:space-y-8 lg:space-y-10 font-poppins-light"
      >
        <input
          type="text"
          name="businessName"
          autoComplete="business-name"
          required
          placeholder="Business name"
          value={formState.businessName}
          onChange={(e) => HandleContentChange(e)}
          className="py-1 md:py-2 lg:py-5 px-2 md:px-5 lg:px-8 w-full text-lg md:text-xl lg:text-2xl focus:outline-none border border-black placeholder:text-black black text-black"
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          autoComplete="email"
          required
          value={formState.email}
          onChange={(e) => HandleContentChange(e)}
          className="py-1 md:py-2 lg:py-5 px-2 md:px-5 lg:px-8 w-full text-lg md:text-xl lg:text-2xl focus:outline-none border border-black placeholder:text-black black text-black"
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          autoComplete="password"
          required
          value={formState.pswd}
          onChange={(e) => HandleContentChange(e)}
          className="py-1 md:py-2 lg:py-5 px-2 md:px-5 lg:px-8 w-full text-lg md:text-xl lg:text-2xl focus:outline-none border border-black placeholder:text-black black text-black"
        />
        <input
          type="Submit"
          defaultValue="SIGN UP"
          className="rounded-md hover:scale-105 duration-300 mx-auto md:py-4 py-2 px-20 text-lg md:text-xl lg:text-2xl cursor-pointer bg-purple text-white"
        />
      </form>
      <p className="text-lg md:text-xl lg:text-2xl ">
        Already have an account?
        <Link href="/auth/" className="text-purple font-poppins-semibold">
          &nbsp;LOGIN
        </Link>
      </p>
    </div>
  );
}

export default SignUp;
