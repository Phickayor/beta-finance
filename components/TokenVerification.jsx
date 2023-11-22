import baseurl from "@/config/host";
import authReducer from "@/reducers/AuthReducer";
import Cookies from "js-cookie";
import React, { useReducer } from "react";

const token = Cookies.get("token");

export const VerifyToken = async () => {
  const [state, dispatch] = useReducer(authReducer);
  try {
    const res = await fetch(`${baseurl}/auth/verify`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ token })
    });
    const data = await res.json();
    if (res.ok) {
      console.log("authorized");
      dispatch({ type: "SET_AUTHORIZED" });
    } else {
      console.log("unauthorized");
      alert(data.message);
      dispatch({ type: "SET_UNAUTHORIZED" });
    }
  } catch (error) {
    console.error("Error verifying token:", error);
  }
};
