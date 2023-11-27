import baseurl from "@/config/host";
import Router from "next/router";
import React, { useEffect, useState } from "react";

function AllClients(props) {
  const clients = props.clients || 0;
  const [clientsNumber, setClientsNumber] = useState(clients.length);

  function OpenClient(event) {
    Router.push({
      pathname: `/admin/clients/${event}`
    });
  }
  return (
    <div className="mx-auto lg:w-11/12 flex flex-col gap-4">
      <h1 className="text-xl font-poppins-semibold">
        Customers ({clientsNumber})
      </h1>
      {/* Commenting till i can access server */}
      {clients > 0 ? (
        clients.map((client) => (
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
