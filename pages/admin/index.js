import Header from "@/components/Header";
import baseurl from "@/config/host";
import userReducer from "@/reducers/userReducer";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import React, { useEffect, useReducer, useState } from "react";

function Home() {
  var initialUserDetails = {
    business_name: "",
    email: "",
    pswd: "",
    clients: null
  };
  const [userDetails, dispatch] = useReducer(userReducer, initialUserDetails);
  const [isAuthorized, setAuthorization] = useState(false);
  const router = useRouter();
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
      setAuthorization(true);
    } else {
      console.log("unauthorized");
      alert(data.message);
      setAuthorization(false);
    }
  };
  useEffect(() => {
    verifyToken();
  });
  if (!isAuthorized) {
    if (typeof window !== "undefined") {
      router.push({
        pathname: "/auth"
      });
    }
  } else {
    return (
      <>
        <Header />
      </>
    );
  }
}

export default Home;
