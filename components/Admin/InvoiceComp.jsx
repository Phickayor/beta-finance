import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import moment from "moment/moment";
function InvoiceComp(props) {
  const [copy, setCopy] = useState(false);
  console.log(props);
  return (
    <div className="space-y-5">
      <div className="space-y-8">
        <div className="flex text-xl font-bold">One Invoice</div>
        <div className="bg-white p-8 rounded-lg flex flex-col gap-5">
          <div className="flex gap-5">
            <h3>Product Name:</h3>
            <h3 className="font-semibold">{props.InvoiceState.productName}</h3>
          </div>
          <div className="flex gap-5">
            <h3>Product Description:</h3>
            <h3 className="font-semibold">
              {props.InvoiceState.productDescription}
            </h3>
          </div>
          <div className="flex gap-5">
            <h3 className="w-full">Payment Link:</h3>
            <h3 className="font-semibold truncate">
              {props.InvoiceState.paymentLink}
            </h3>
          </div>
          <div className="flex gap-5">
            <h3>Amount:</h3>
            <h3 className="font-semibold">{props.InvoiceState.total}</h3>
          </div>
          <div className="flex gap-5">
            <h3>Currency:</h3>
            <h3 className="font-semibold">{props.InvoiceState.currency}</h3>
          </div>
          <div className="flex gap-5">
            <h3 className="self-center">Payment Status:</h3>
            {props.InvoiceState.isPaid ? (
              <h3 className="font-semibold self-center bg-green-500 py-1 px-3 rounded-xl text-white">
                PAID
              </h3>
            ) : (
              <h3 className="font-semibold self-center bg-red-500 py-1 px-3 rounded-xl text-white">
                NOT PAID
              </h3>
            )}
          </div>
          <div className="flex gap-5">
            <h3>Date:</h3>
            <h3 className="font-semibold">
              {moment(props.InvoiceState.purchasedDate).format(
                "dddd DD MMM YYYY "
              )}
            </h3>
          </div>
        </div>
        <div className="flex justify-between gap-5  bg-white p-5 rounded-lg ">
          <div className="self-center text-sm md:text-md truncate">{`https://beta-finance.netlify.app/payinvoice/${props.InvoiceState._id}`}</div>

          <CopyToClipboard
            text={`https://beta-finance.netlify.app/payinvoice/${props.InvoiceState._id}`}
            onCopy={() => {
              setCopy(true);
            }}
          >
            <div className="cursor-pointer self-center w-full ">
              {copy ? (
                <span className="self-center">Copied</span>
              ) : (
                <div className="flex gap-2 self-center">
                  <img
                    src="/images/icons/copyIcon.svg"
                    className="w-6 self-center"
                  />
                  <span className="self-center">Copy</span>
                </div>
              )}
            </div>
          </CopyToClipboard>
        </div>
      </div>
    </div>
  );
}

export default InvoiceComp;
