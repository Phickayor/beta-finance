import baseurl from "@/config/host";
import React, { useRef, useState } from "react";

function AddInvoice(props) {
  const [Items, setItems] = useState([]);
  const [ItemsNumber, setItemsNumber] = useState(0);
  const [InvoiceName, setInvoiceName] = useState("");
  const [Total, setTotal] = useState(0);
  const [DatePurchased, setDatePurchased] = useState("");
  const itemContainer = useRef(null);
  const amountContainer = useRef(null);
  const AddItem = () => {
    var item = {
      name: itemContainer.current.value,
      amount: parseInt(amountContainer.current.value)
    };
    console.log(item);
    if ((item.name || item.amount) === "") {
      alert("Item name and amount is required");
    } else {
      alert("One item added to invoice");
      Items.push(item);
      setItemsNumber(Items.length);
      var newTotal = parseInt(Total + item.amount);
      setTotal(newTotal);
    }
    itemContainer.current.value = "";
    amountContainer.current.value = "";
  };
  const CreateInvoice = async () => {
    try {
      const res = await fetch(`${baseurl}/create/${props.clientId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ InvoiceName, DatePurchased, Items, Total })
      });
      const data = await res.json();
      data.success
        ? alert("Invoice created Successfully")
        : alert("We encountered an issue, Try again ");
    } catch (error) {
      console.log(error);
      alert("Check your internet connection and try again");
    }
    setInvoiceName("");
    setDatePurchased("");
    itemContainer.current.value = "";
    amountContainer.current.value = "";
  };
  return (
    <div className="space-y-4 mx-auto lg:w-11/12">
      <h1 className="text-xl font-poppins-semibold">GARAN ISAAC</h1>
      <form
        onSubmit={CreateInvoice}
        className="bg-white md:text-xl font-poppins-light flex flex-col gap-6 p-5 lg:p-10 rounded-lg"
      >
        <span className="text-right font-semibold">
          {ItemsNumber} item(s) added
        </span>

        <div className="grid grid-cols-2 gap-5">
          <input
            type="text"
            name="invoiceName"
            value={InvoiceName}
            onChange={(e) => setInvoiceName(e.target.value)}
            required
            placeholder="Invoice name"
            className="border-b py-2 focus:outline-none focus:border-purple"
          />
          <input
            type="date"
            placeholder="Date Purchased"
            name="date purchased"
            value={DatePurchased}
            onChange={(e) => setDatePurchased(e.target.value)}
            required
            className="border-b py-2 focus:outline-none focus:border-purple"
          />
        </div>

        <div className="grid grid-cols-2 gap-5">
          <input
            ref={itemContainer}
            type="text"
            placeholder="Item Name"
            name="itemName"
            required
            className="border rounded-lg p-4 focus:outline-none focus:border-purple"
          />
          <input
            ref={amountContainer}
            type="number"
            placeholder="Amount (₦)"
            name="amount"
            required
            className="border p-4 rounded-lg focus:outline-none focus:border-purple"
          />
        </div>
        <div className=" p-5 flex flex-col md:flex-row justify-between gap-5">
          <button
            type="submit"
            className="bg-purple order-2 md:order-1 font-poppins-light text-white rounded-md md:self-center py-2 md:py-3 px-5"
          >
            Create Invoice
          </button>
          <button
            onClick={AddItem}
            className="bg-black order-1 md:order-2 font-poppins-light text-white rounded-md self-center py-2 md:py-3 px-5"
          >
            Add Item
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddInvoice;
