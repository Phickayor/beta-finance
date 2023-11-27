import baseurl from "@/config/host";
import Router from "next/router";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

function AllClients(props) {
  const [Clients, setClients] = useState([]);
  const [ClientsNumber, setClientsNumber] = useState(0);
  function OpenClient(event) {
    Router.push({
      pathname: `/admin/clients/${event}`
    });
  }
  useEffect(() => {
    const fetchClients = async () => {
      try {
        const res = await fetch(`${baseurl}/client/oneUser`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${props.accesstoken}`
          },
          body: JSON.stringify({ ...props.userId })
        });
        const data = await res.json();
        res.ok
          ? (console.log(data.data),
            setClients(data.data),
            setClientsNumber(data.data.length))
          : console.log(data.message);
      } catch (error) {
        console.log(error);
        toast.error(`Error: ${error.message}`);
      }
    };
    fetchClients();
  }, [props.accesstoken, props.userId]);
  return (
    <div className="mx-auto lg:w-11/12 flex flex-col gap-4">
      <h1 className="text-xl font-poppins-semibold">
        Customers ({ClientsNumber})
      </h1>
      {/* Commenting till i can access server */}
      {Clients ? (
        Clients.map((client) => (
          <div
            key={client.userId}
            onClick={() => OpenClient(client.userId)}
            className="bg-white cursor-pointer px-3 md:px-6 p-6 rounded-lg flex justify-between gap-2"
          >
            <div className="self-center">
              <h1 className="md:text-lg font-poppins-semibold">
                {client.fullName}
              </h1>
            </div>
            <div className="self-center">
              <h3 className="md:text-lg font-poppins-semibold">Invoice 📑</h3>
            </div>
          </div>
        ))
      ) : (
        <div>
          <h1 className="font-poppins-semibold text-center py-5 text-xl">
            Your Customers would appear here
          </h1>
        </div>
      )}
    </div>
  );
}

export default AllClients;
