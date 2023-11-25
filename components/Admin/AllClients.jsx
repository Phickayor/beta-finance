import baseurl from "@/config/host";
import Router from "next/router";
import React, { useEffect, useState } from "react";

function AllClients(props) {
  const [clients, setClients] = useState([]);
  const [clientsNumber, setClientsNumber] = useState(3);

  function OpenClient(event) {
    Router.push({
      pathname: `/clients/${event}`
    });
  }

  useEffect(() => {
    async () => {
      try {
        const res = await fetch(`${baseurl}/client/`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ ...props.email })
        });
        const data = await res.json();
        alert(data.message);
        var clientsInfo = data.data;
        data.success
          ? (setClients(...clients, clientsInfo),
            setClientsNumber(clientsInfo.length))
          : alert("Unable to fetch Clients");
      } catch (error) {
        console.log(error);
        alert(error);
      }
    };
  }, [props, clients]);
  return (
    <div className="mx-auto lg:w-11/12 flex flex-col gap-4">
      <h1 className="text-xl font-poppins-semibold">
        Customers ({clientsNumber})
      </h1>
      {/* Commenting till i can access server */}
      {/* {clients.map((client) => (
        <div
          key={client.userId}
          onClick={() => OpenClient(client.userId)}
          className="bg-white cursor-pointer px-3 md:px-6 p-6 rounded-lg flex justify-between gap-2"
        >
          <div className="self-center">
            <h1 className="md:text-lg font-poppins-semibold">Alpha Empire</h1>
          </div>
          <div className="self-center">
            <h3 className="md:text-lg font-poppins-semibold">Invoice 📑</h3>
          </div>
        </div>
      ))} */}
      <div className="bg-white px-3 md:px-6 p-6 rounded-lg flex justify-between gap-2">
        <div className="self-center">
          <h1 className="md:text-lg font-poppins-semibold">Alpha Empire</h1>
        </div>
        <div className="self-center">
          <h3 className="md:text-lg font-poppins-semibold">Invoice 📑</h3>
        </div>
      </div>
      <div className="bg-white px-3 md:px-6 p-6 rounded-lg flex justify-between gap-2">
        <div className="self-center">
          <h1 className="md:text-lg font-poppins-semibold">John Doe</h1>
        </div>
        <div className="self-center">
          <h3 className="md:text-lg font-poppins-semibold">Invoices 📑</h3>
        </div>
      </div>
      <div className="bg-white px-3 md:px-6 p-6 rounded-lg flex justify-between gap-2">
        <div className="self-center">
          <h1 className="md:text-lg font-poppins-semibold">Garri Buyer</h1>
        </div>
        <div className="self-center">
          <h3 className="md:text-lg font-poppins-semibold">Invoices 📑</h3>
        </div>
      </div>
    </div>
  );
}

export default AllClients;
