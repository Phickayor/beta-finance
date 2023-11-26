import React from "react";

function ActivityBar() {
  return (
    <div className="mx-auto lg:w-11/12 flex flex-col gap-4">
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
      <div className="bg-white px-3 md:px-6 p-6 rounded-lg flex justify-between gap-2">
        <div className="self-center">
          <h1 className="text-md md:text-xl  font-poppins-semibold">
            Withdrew from wallet
          </h1>
          <p className="text-[10px] md:text-sm">11:50 PM, Nov 19, 2022</p>
        </div>
        <div className="self-center">
          <h3 className="md:text-lg font-poppins-semibold text-yellow-500">
            Pending😐
          </h3>
        </div>
      </div>
      <div className="bg-white px-3 md:px-6 p-6 rounded-lg flex justify-between gap-2">
        <div className="self-center">
          <h1 className="text-md md:text-xl  font-poppins-semibold">
            Created Client <q>Fikayo</q>
          </h1>
          <p className="text-[10px] md:text-sm">11:50 PM, Nov 19, 2022</p>
        </div>
        <div className="self-center">
          <h3 className="md:text-lg font-poppins-semibold text-red-500">
            Failed😞
          </h3>
        </div>
      </div>
    </div>
  );
}

export default ActivityBar;
