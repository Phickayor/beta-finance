import baseurl from "@/config/host";
import formReducer from "@/reducers/formReducer";
import Router from "next/router";
import React, { useReducer } from "react";

function Register() {
  const initialFormState = {
    business_name: "",
    email: "",
    pswd: ""
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
      const res = await fetch(`${baseurl}/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ ...formState })
      });
      const data = await res.json();
      if (res.ok) {
        console.log("Logged in Sucessfully");
        Router.push({
          pathname: "/"
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
        className="mx-auto w-1/2 border-2 py-20 space-y-5 text-xl text-center"
      >
        <div className=" mx-auto w-10/12 [&>*]:block [&>*]:my-4">
          <label>Your Business Name</label>
          <input
            type="text"
            name="business_name"
            required
            value={formState.business_name}
            onChange={(e) => HandleContentChange(e)}
            className="mx-auto w-10/12 px-5 focus:outline-none text-black"
          />
        </div>
        <div className=" mx-auto w-10/12 [&>*]:block [&>*]:my-4">
          <label>Email</label>
          <input
            type="email"
            name="email"
            required
            value={formState.email}
            onChange={(e) => HandleContentChange(e)}
            className="mx-auto w-10/12 px-5 focus:outline-none text-black"
          />
        </div>
        <div className=" mx-auto w-10/12 [&>*]:block [&>*]:my-4">
          <label>Password</label>
          <input
            type="password"
            name="pswd"
            required
            value={formState.pswd}
            onChange={(e) => HandleContentChange(e)}
            className="mx-auto w-10/12 px-5 focus:outline-none text-black"
          />
        </div>
        <input
          type="Submit"
          className="py-2 px-10 font-semibold cursor-pointer bg-white text-black"
        />
      </form>
    </div>
  );
}

export default Register;
