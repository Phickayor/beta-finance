import { bankCodeData } from "@/config/BankCodes";
import { ErrorFunction } from "@/config/checkerror";
import baseurl from "@/config/host";
import Cookies from "js-cookie";
import Link from "next/link";
import  Router  from "next/router";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
// import "@/styles/global.css"
function WithdrawComp() {

  const [accountName, setAccountName] = useState("")
  const [accountNumber, setAccountNumber] = useState("")
  const [bankCode, setBankCode] = useState("")
  const [amount, setAmount] = useState(0)
  const [loading, setLoading] = useState(false)
  const [allBankCode, setAllBankCode] = useState([])

  const token = Cookies.get("token")? JSON.parse(Cookies.get("token")) : ""

  console.log(token.accesstoken)

  const makeWithdrawl = async () => {
    try {
      setLoading(true)
      const res = await fetch(`${baseurl}/payment/withdrawal`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token.accesstoken}`
        },
        body: JSON.stringify({
          accountName,
          accountNumber: Number(accountNumber),
          bankCode,
          amount: Number(amount)
        })
      })

      const resData = await res.json()

      console.log(resData)

      if(res.ok){
        setLoading(false)
        Swal.fire({
          title: "Transfer Completed",
          timer: "4000",
          showConfirmButton: false,
          icon: 'success'
        }).then(()=>{
          Router.push({
            pathname: "/admin",
          })
        })
      }else{
        Swal.fire({
          title: resData?.message,
          timer: "4000",
          showConfirmButton: false,
          icon: 'error'
        })
      }

      setLoading(false)
    } catch (error) {
      setLoading(false);
      Swal.fire({
        text: ErrorFunction(error),
        timer: 3500,
        icon: "error",
        showConfirmButton: false,
      });
    }
  }

  const getBankCode = async () => {
    try {
      const getBankCode = await fetch(`${baseurl}/payment/bankcode`, {
        method: "GET"
      })

      const response = await getBankCode.json()

      console.log(response?.data)

      setAllBankCode([])
    } catch (error) {
      console.log("error", error)
    }
  }

  // useEffect(()=>{
  //   getBankCode()
  // },[])

  return (
    <div style={{
      width: "100%",
      display:"flex",
      flexDirection:"column",
      justifyContent:"center",
      alignItems:"center"
    }}>
      <div
      style={{
        fontSize: "23px",
        fontWeight: "bold",
        marginBottom:"30px"
      }}
      >Withdraw From Wallet</div>
      <div
      style={{
        width: "50%",
        backgroundColor:"white",
        height:"auto",
        padding:"15px",
        borderRadius:"5px"
      }}
      >
        <div
        style={{
          display:"flex",
          flexDirection:"column",
          gap: "35px"
        }}
        >
          <input placeholder="Account Number"
          type="number"
          style={{
            padding:"10px",
            border:"2px solid black",
            borderRadius:"3px"
          }}
          value={accountNumber}
          onChange={(e)=>{
            setAccountNumber(e.target.value)
          }}
          />
          <input placeholder="Account Name"
          style={{
            padding:"10px",
            border:"2px solid black",
            borderRadius:"3px"
          }}
          value={accountName}
          onChange={(e)=>{
            setAccountName(e.target.value)
          }}
          />
          <select
          style={{
            padding:"10px",
            border:"2px solid black",
            borderRadius:"3px"
          }}
          value={bankCode}
          onChange={(e)=>{
            setBankCode(e.target.value)
          }}
          >
            {
              bankCodeData?.map((props)=>(
                <option value={props?.code}>{props?.name}</option>
              ))
            }
            
          </select>
          <input placeholder="Amount to Withdraw"
          type="number"
          style={{
            padding:"10px",
            border:"2px solid black",
            borderRadius:"3px"
          }}
          value={amount}
          onChange={(e)=>{
            setAmount(e.target.value)
          }}
          />
          <div
          style={{
            backgroundColor: "#37053C",
            fontSize:"15px",
            // padding:"9px",
            color:"white",
            borderRadius:"5px",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            height:"50px",
            marginBottom:"20px",
            cursor:"pointer"
          }}
          onClick={makeWithdrawl}
          >{loading? "Loading..." : "Withdraw"}</div>
        </div>
      </div>
    </div>
  );
}

export default WithdrawComp;
