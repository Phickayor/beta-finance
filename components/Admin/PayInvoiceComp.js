import { bankCodeData } from "@/config/BankCodes";
import { ErrorFunction } from "@/config/checkerror";
import baseurl from "@/config/host";
import Cookies from "js-cookie";
import Link from "next/link";
import Router from "next/router";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
// import "@/styles/global.css"
function PayInvoiceComp() {
  const [accountName, setAccountName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [bankCode, setBankCode] = useState("");
  const [amount, setAmount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [allBankCode, setAllBankCode] = useState([]);

  const token = Cookies.get("token") ? JSON.parse(Cookies.get("token")) : "";

  console.log(token.accesstoken);

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "30px",
      }}
    >
      <div
        style={{
          width: "100%",
          fontSize: "20px",
          display: "flex",
          alignItems: "flex-start",
          // marginBottom:"20px",
          fontWeight: "bold",
        }}
      >
        Your Purchase
      </div>
      <div
        style={{
          width: "100%",
          background: "white",
          borderRadius: "10px",
          padding: "20px",
          height: "auto",
          display: "flex",
          justifyContent: "center",
          marginBottom: "20px",
        }}
      >
        <div
          style={{
            width: "90%",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <div
              style={{
                fontWeight: "semi-bold",
                width: "200px",
              }}
            >
              Product Name:
            </div>
            <div
              style={{
                fontWeight: "bold",
                fontSize: "18px",
              }}
            >
              Indomie
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <div
              style={{
                fontWeight: "semi-bold",
                width: "200px",
              }}
            >
              Product Name:
            </div>
            <div
              style={{
                fontWeight: "bold",
                fontSize: "18px",
              }}
            >
              Indomie
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <div
              style={{
                fontWeight: "semi-bold",
                width: "200px",
              }}
            >
              Product Name:
            </div>
            <div
              style={{
                fontWeight: "bold",
                fontSize: "18px",
              }}
            >
              Indomie
            </div>
          </div>
          <a href="paystack url" target="_blank">
            <div
              style={{
                width: "200px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "50px",
                borderRadius: "4px",
                background: "#37053C",
                color: "white",
                cursor: "pointer",
              }}
            >
              pay
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default PayInvoiceComp;
