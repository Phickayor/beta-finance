import Header from "@/components/Header";
import baseurl from "@/config/host";
import authReducer from "@/reducers/AuthReducer";
import userReducer from "@/reducers/userReducer";
import Cookies from "js-cookie";
import React, { useEffect, useReducer } from "react";
import { RedirectToLogin } from "../auth/authUtils";

function Home() {
  var initialAuth = {
    isAuthorized: false
  };
  var initialUserDetails = {
    business_name: "",
    email: "",
    pswd: "",
    clients: null
  };
  const [userDetails, dispatch] = useReducer(userReducer, initialUserDetails);
  const [AuthorizationState, authDispatch] = useReducer(
    authReducer,
    initialAuth
  );
  const token = Cookies.get("token");

  const verifyToken = async () => {
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
      dispatch(data.user);
      authDispatch();
    } else {
      console.log("unauthorized");
      alert(data.message);
      setAuthorization(false);
    }
  };
  useEffect(() => {
    verifyToken();
  });
  if (!AuthorizationState.isAuthorized) {
    RedirectToLogin();
  } else {
    return (
      <>
        <Header />
      </>
    );
  }
}

export default Home;
