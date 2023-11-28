import baseurl from "@/config/host";
import Router from "next/router";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

function AllInvoices(props) {
  const [invoices, setInvoices] = useState([]);
  const [invoicesNumber, setInvoicesNumber] = useState(0);

  console.log(props);

  function OpenInvoice(event) {
    Router.push({
      pathname: `/admin/invoice/${event}`
    });
  }
  useEffect(() => {
    const fetchInvoices = async () => {
      try {
        const res = await fetch(`${baseurl}/client/${props.clientId}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${props.accesstoken}`
          }
        });
        const data = await res.json();
        res.ok
          ? (console.log(data.data),
            setInvoices(data.data),
            setInvoicesNumber(invoices.length))
          : console.log(data.message);
      } catch (error) {
        console.log(error);
        toast.error(`Error: ${error.message}`);
      }
    };
    fetchInvoices();
  }, [props.accesstoken, props.userId, props.clientId,invoices.length]);
  return (
    <div className="mx-auto lg:w-11/12 flex flex-col gap-4">
      <h1 className="text-xl font-poppins-semibold">
        INVOICES({invoicesNumber})
      </h1>
      {/* Commenting till i can access server */}
      {invoices > 0 ? (
        invoices.map((invoice, index) => (
          <div
            key={index}
            className="bg-white px-3 md:px-6 p-6 rounded-lg flex justify-between gap-2"
          >
            <div className="self-center">
              <h1 className="md:text-lg font-poppins-semibold">
                {invoice.productName}
              </h1>
            </div>
            <div className="self-center">
              <h3
                className="md:text-lg font-poppins-semibold"
                onClick={() => {
                  OpenInvoice(invoice?._id);
                }}
              >
                View Invoice
              </h3>
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

export default AllInvoices;
