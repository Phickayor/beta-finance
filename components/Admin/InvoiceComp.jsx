import { bankCodeData } from "@/config/BankCodes";
import { ErrorFunction } from "@/config/checkerror";
import Link from "next/link";
import Router from "next/router";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { CopyToClipboard } from "react-copy-to-clipboard";
import moment from "moment/moment";
function InvoiceComp(props) {
  const [loading, setLoading] = useState(false);
  const [copy, setCopy] = useState(false);
  const [data, setData] = useState();
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
            <h3>Payment Link:</h3>
            <h3 className="font-semibold">{props.InvoiceState.paymentLink}</h3>
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
            <h3>Is Payment Completed?:</h3>
            <h3 className="font-semibold">{props.InvoiceState.isPaid}</h3>
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
        <div
          style={{
            width: "100%",
            background: "white",
            borderRadius: "10px",
            padding: "20px",
            height: "auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          <div>{`https://beta-finance.netlify.app/payinvoice/${props.InvoiceState._id}`}</div>

          <div>
            <CopyToClipboard
              text={`https://beta-finance.netlify.app/payinvoice/${props.InvoiceState._id}`}
              onCopy={() => {
                setCopy(true);
              }}
            >
              <div
                style={{
                  cursor: "pointer"
                }}
              >
                {copy ? (
                  "Copied"
                ) : (
                  <div className="flex gap-2">
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
    </div>
  );
}

export default InvoiceComp;
