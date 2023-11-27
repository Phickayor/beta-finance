import baseurl from "@/config/host";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";

function ActivityBar() {

  const token = Cookies.get("token")? JSON.parse(Cookies.get("token")) : ""

  const [Clients, setClients] = useState([]);



useEffect(() => {
    const fetchClients = async () => {
      try {
        const res = await fetch(`${baseurl}/withdraw/current-user`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token.accesstoken}`
          },
        });
        const data = await res.json();
        res.ok
          ? (console.log(data.data), setClients(data.data))
          : console.log(data.message);
      } catch (error) {
        console.log(error);
      }
    };
    fetchClients();
  }, [token?.accesstoken]);
  return (
    <div className="mx-auto lg:w-11/12 flex flex-col gap-4">
      <div
      style={{
        width: "100%",
        marginBottom:"30px"
      }}
      >
        <div
        style={{
          fontSize: "18px",
          fontWeight:"bold",
          marginBottom:"20px"
        }}
        >Withdrawal Transactions(5)</div>
        <div
        style={{
          width:"100%",
          display:"flex",
          flexDirection:"column"
        }}
        >
<div className="bg-white px-3 md:px-6 p-6 rounded-lg flex justify-between gap-2">
        <div className="self-center">
          <h1 className="text-md md:text-xl font-poppins-semibold">
            Created an Account
          </h1>
          <p className="text-[10px] md:text-sm">11:50 PM, Nov 19, 2022</p>
        </div>
        <div className="self-center">
          <h3 className="md:text-lg font-poppins-semibold text-green-500">
            Successful🤗
          </h3>
        </div>
      </div>
        </div>
      </div>
      
      <div
      style={{
        width: "100%",
        marginBottom:"30px"
      }}
      >
        <div
        style={{
          fontSize: "18px",
          fontWeight:"bold",
          marginBottom:"20px"
        }}
        >Invoice Transactions(5)</div>
        <div
        style={{
          width:"100%",
          display:"flex",
          flexDirection:"column"
        }}
        >
<div className="bg-white px-3 md:px-6 p-6 rounded-lg flex justify-between gap-2">
        <div className="self-center">
          <h1 className="text-md md:text-xl font-poppins-semibold">
            Created an Account
          </h1>
          <p className="text-[10px] md:text-sm">11:50 PM, Nov 19, 2022</p>
        </div>
        <div className="self-center">
          <h3 className="md:text-lg font-poppins-semibold text-green-500">
            Successful🤗
          </h3>
        </div>
      </div>
        </div>
      </div>
      
      
    </div>
  );
}

export default ActivityBar;
