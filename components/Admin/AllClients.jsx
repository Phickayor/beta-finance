import React from "react";

function AllClients() {
  return (
    <div className="mx-auto lg:w-11/12 flex flex-col gap-4">
      <h1 className="text-xl font-poppins-semibold">Customers (3)</h1>
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
