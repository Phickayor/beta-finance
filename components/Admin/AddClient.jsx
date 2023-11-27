import clientReducer from "@/reducers/clientReducer";
import React, { useReducer } from "react";
import { toast } from "react-toastify";

function AddClient() {
  const initialClientState = {
    email: "",
    phoneNumber: "",
    fullName: "",
    businessName: ""
  };
  const [clientState, dispatch] = useReducer(clientReducer, initialClientState);
  const HandleContentChange = (e) => {
    dispatch({
      field: e.target.name,
      value: e.target.value
    });
  };
  const AddCustomer = async () => {
    try {
      const res = await fetch(`${baseurl}/client/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ ...clientState })
      });
      const data = await res.json();
      res.ok ? toast.success(data.message) : toast.error(data.message);
    } catch (error) {
      console.log(error);
      toast.error(`Error: ${error}`);
    }
  };
  return (
    <div className="space-y-4 mx-auto lg:w-11/12">
      <h1 className="text-xl font-poppins-semibold">Add Clients</h1>
      <form
        onSubmit={AddCustomer}
        className="bg-white md:text-xl font-poppins-light flex flex-col gap-5 p-5 rounded-lg"
      >
        <input
          type="text"
          name="businessName"
          required
          placeholder="Business name"
          value={clientState.businessName}
          onChange={(e) => HandleContentChange(e)}
          className="border-b py-2 focus:outline-none focus:border-purple"
        />
        <input
          type="text"
          placeholder="Full name"
          name="fullName"
          required
          value={clientState.fullName}
          onChange={(e) => HandleContentChange(e)}
          className="border-b py-2 focus:outline-none focus:border-purple"
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          required
          value={clientState.email}
          onChange={(e) => HandleContentChange(e)}
          className="border-b py-2 focus:outline-none focus:border-purple"
        />
        <input
          type="tel"
          placeholder="Phone Number"
          name="phoneNumber"
          required
          value={clientState.phoneNumber}
          onChange={(e) => HandleContentChange(e)}
          className="border-b py-2 focus:outline-none focus:border-purple"
        />
        <input
          type="Submit"
          value="Add"
          className="rounded-md hover:scale-105 duration-300 py-2 px-10 w-fit text-lg md:text-xl lg:text-2xl cursor-pointer bg-purple text-white"
        />
      </form>
    </div>
  );
}

export default AddClient;
