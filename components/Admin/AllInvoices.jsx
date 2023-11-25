import baseurl from "@/config/host";
import Router from "next/router";
import React, { useEffect, useState } from "react";

function AllInvoices(props) {
  const [invoices, setInvoices] = useState([]);
  const [invoicesNumber, setInvoicesNumber] = useState(4);

  function OpenClient(event) {
    Router.push({
      pathname: `/clients/${props.userId}/${event}`
    });
  }
  return (
    <div className="mx-auto lg:w-11/12 flex flex-col gap-4">
      <h1 className="text-xl font-poppins-semibold">
        INVOICES({invoicesNumber})
      </h1>

      <div className="bg-white px-3 md:px-6 p-6 rounded-lg flex justify-between gap-2">
        <div className="self-center">
          <h1 className="md:text-lg font-poppins-semibold">Garri Purchase</h1>
        </div>
        <div className="self-center">
          <h3 className="md:text-lg font-poppins-semibold">View Invoice</h3>
        </div>
      </div>
      <div className="bg-white px-3 md:px-6 p-6 rounded-lg flex justify-between gap-2">
        <div className="self-center">
          <h1 className="md:text-lg font-poppins-semibold">Stationeries</h1>
        </div>
        <div className="self-center">
          <h3 className="md:text-lg font-poppins-semibold">Food Stuffs</h3>
        </div>
      </div>
      <div className="bg-white px-3 md:px-6 p-6 rounded-lg flex justify-between gap-2">
        <div className="self-center">
          <h1 className="md:text-lg font-poppins-semibold">BTS purchase</h1>
        </div>
        <div className="self-center">
          <h3 className="md:text-lg font-poppins-semibold">View Invoice</h3>
        </div>
      </div>
      <div className="bg-white px-3 md:px-6 p-6 rounded-lg flex justify-between gap-2">
        <div className="self-center">
          <h1 className="md:text-lg font-poppins-semibold">Baby things</h1>
        </div>
        <div className="self-center">
          <h3 className="md:text-lg font-poppins-semibold">View Invoice</h3>
        </div>
      </div>
    </div>
  );
}

export default AllInvoices;
