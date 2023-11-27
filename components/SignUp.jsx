import { ErrorFunction } from "@/config/checkerror";
import baseurl from "@/config/host";
import formReducer from "@/reducers/formReducer";
import Link from "next/link";
import React, { useReducer, useState } from "react";
import Swal from "sweetalert2";

function SignUp(props) {

  const [loading, setLoading] = useState(false)

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
      setLoading(true)
      const res = await fetch(`${baseurl}/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ ...formState })
      });
      const data = await res.json();
      if (res.ok) {
        setLoading(false)
        // success message
        Swal.fire({
          text:data?.message,
        timer: 3000,
        icon: "success",
        showConfirmButton: false
        }).then(()=>{
          props.handleComponent("registered", data.data);
        })
        alert(data.message);
        props.handleComponent("registered", data.data);
      } else {
        setLoading(false)
        console.log(data?.message)
        Swal.fire({
          text:data?.message,
          timer: 3500,
          icon: "error",
          showConfirmButton: false
        })
        alert(data.mesage);
      }
    } catch (error) {
      setLoading(false)
      console.log(error);
      // error message
      Swal.fire({
        text: ErrorFunction(error),
        timer: 3500,
        icon: "error",
        showConfirmButton: false
      })
      alert(error.message, "error");
    }
  };
  return (
    <div className="rounded-md relative bg-white mx-auto w-11/12 md:w-10/12 lg:w-6/12 space-y-8 px-5 py-10 text-center">
      <h1 className="text-xl text-[18px] md:text-2xl font-poppins-semibold ">
        Create an account 📑
      </h1>
      <form
        onSubmit={HandleSubmit}
        className=" mx-auto w-11/12 md:w-10/12 [&>*]:block space-y-6 md:space-y-8 lg:space-y-8 font-poppins-light"
      >
        <input
          type="text"
          name="businessName"
          autoComplete="business-name"
          required
          placeholder="Business name"
          value={formState.businessName}
          onChange={(e) => HandleContentChange(e)}
          className="py-1 md:py-3 py-3 lg:py-3 px-1 md:px-5 lg:px-3 w-full text-[15px] text  rounded-[3px] focus:outline-none border border-black placeholder:text-black black text-black placeholder:text-[16px]"
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          autoComplete="email"
          required
          value={formState.email}
          onChange={(e) => HandleContentChange(e)}
          className="py-1 md:py-3 py-3 lg:py-3 px-1 md:px-5 lg:px-3 w-full text-[15px] text  rounded-[3px] focus:outline-none border border-black placeholder:text-black black text-black placeholder:text-[16px]"
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          autoComplete="password"
          required
          value={formState.pswd}
          onChange={(e) => HandleContentChange(e)}
          className="py-1 md:py-3 py-3 lg:py-3 px-1 md:px-5 lg:px-3 w-full text-[15px] text  rounded-[3px] focus:outline-none border border-black placeholder:text-black black text-black placeholder:text-[16px]"
        />
        <input
          type="Submit"
          defaultValue={
            loading? "Loading...": "SIGN UP"
          }
          className="rounded-md text-[15px] hover:scale-105 duration-300 mx-auto md:py-3 py-3 px-20  cursor-pointer bg-purple text-white  "
        />
      </form>
      <p className="text-[17px]">
        Already have an account?
        <Link href="/auth/" className="text-purple text-[13px] font-poppins-semibold ">
          &nbsp;LOGIN
        </Link>
      </p>
    </div>
  );
}

export default SignUp;
