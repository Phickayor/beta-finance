import baseurl from "@/config/host";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

function AddInvoice(props) {
  const [productName, setproductName] = useState("");
  const [total, settotal] = useState("");
  const [purchasedDate, setpurchasedDate] = useState("");

  const CreateInvoice = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${baseurl}/invoice/create/${props.clientId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${props.accesstoken}`
        },
        body: JSON.stringify({ productName, purchasedDate, total })
      });
      const data = await res.json();
      res.ok
        ? toast.success("Invoice created Successfully")
        : toast.error("We encountered an issue, Try again ");
    } catch (error) {
      console.log(error);
      toast.error("Check your internet connection and try again");
    }
    setproductName("");
    setpurchasedDate("");
    settotal("");
  };

  return (
    <div className="space-y-4 mx-auto lg:w-11/12">
      <h1 className="text-xl font-poppins-semibold">{props.clientName}</h1>
      <form
        onSubmit={CreateInvoice}
        className="bg-white md:text-xl font-poppins-light flex flex-col gap-6 p-5 lg:p-10 rounded-lg"
      >
        <input
          type="text"
          name="productName"
          onChange={(e) => setproductName(e.target.value)}
          required
          placeholder="Product name"
          value={productName}
          className="border-b col-span-2 py-2 focus:outline-none focus:border-purple"
        />
        <input
          type="number"
          placeholder="Total (₦)"
          name="total"
          value={total}
          onChange={(e) => settotal(e.target.value)}
          required
          className="border-b p-2 md:p-4 focus:outline-none focus:border-purple"
        />
        <input
          type="date"
          name="date purchased"
          placeholder="Date Purchased"
          value={purchasedDate}
          onChange={(e) => setpurchasedDate(e.target.value)}
          required
          className="border-b py-2 focus:outline-none focus:border-purple"
        />
        <div className=" md:p-5 flex justify-between gap-5">
          <button
            type="submit"
            className="bg-purple font-poppins-light text-white rounded-md self-center py-2 md:py-3 px-5"
          >
            Create Invoice
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddInvoice;
