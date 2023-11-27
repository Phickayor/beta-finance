import { bankCodeData } from "@/config/BankCodes";
import { ErrorFunction } from "@/config/checkerror";
import baseurl from "@/config/host";
import Cookies from "js-cookie";
import Link from "next/link";
import Router from "next/router";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import moment from "moment/moment";
// import "@/styles/global.css"
function InvoiceComp({props}) {

    console.log("propsid", props)

  const [loading, setLoading] = useState(false);
  const [copy, setCopy] = useState(false);
  const [data, setData] = useState()

  let id = "i"

  const token = Cookies.get("token") ? JSON.parse(Cookies.get("token")) : "";

  console.log(token.accesstoken);

  
 
  useEffect(() => {
    
    const fetchClient = async () => {
      try {
        const res = await fetch(`${baseurl}/invoice/${"65620004da035f6166989b82"}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token.accesstoken}`
          },
        });
        const myData = await res.json();
        setData(myData)

        console.log(data, "data")
        set
        res.ok
          ? (console.log(data.data) )
          : console.log(data.message);
      } catch (error) {
        console.log(error);
      }
    };
    fetchClient();
  }, []);

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap:"30px"
      }}
    >
      <div
      style={{
        width:"100%",
        fontSize:"20px",
        display:"flex",
        alignItems:"flex-start",
        // marginBottom:"20px",
        fontWeight:"bold"
      }}
      >One Invoice</div>
      <div
        style={{
          width: "100%",
          background: "white",
          borderRadius: "10px",
          padding: "20px",
          height: "auto",
          display: "flex",
          justifyContent: "center",
          marginBottom:"20px"
        }}
      >
        <div
          style={{
            width: "90%",
            display: "flex",
            flexDirection: "column",
            gap:"20px"
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
                fontWeight:"semi-bold",
                width:"200px"
            }}
            >
                Product Name:
            </div>
            <div
            style={{
                fontWeight:"bold",
                fontSize:"18px"
            }}
            >{data?.productName}</div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <div
            style={{
                fontWeight:"semi-bold",
                width:"200px"
            }}
            >
                Product Description:
            </div>
            <div
            style={{
                fontWeight:"bold",
                fontSize:"18px"
            }}
            >{data?.productDescription}</div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <div
            style={{
                fontWeight:"semi-bold",
                width:"200px"
            }}
            >
               Payment Link
            </div>
            <div
            style={{
                fontWeight:"bold",
                fontSize:"18px"
            }}
            >{data?.paymentLink}</div>
          </div>
        
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <div
            style={{
                fontWeight:"semi-bold",
                width:"200px"
            }}
            >
              Amount
            </div>
            <div
            style={{
                fontWeight:"bold",
                fontSize:"18px"
            }}
            >{data?.amount}</div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <div
            style={{
                fontWeight:"semi-bold",
                width:"200px"
            }}
            >
              Currency
            </div>
            <div
            style={{
                fontWeight:"bold",
                fontSize:"18px"
            }}
            >{data?.currency}</div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <div
            style={{
                fontWeight:"semi-bold",
                width:"200px"
            }}
            >
              Is Payment Completed?
            </div>
            <div
            style={{
                fontWeight:"bold",
                fontSize:"18px"
            }}
            >{data?.isPaid? "Completed" : "InComplete"}</div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <div
            style={{
                fontWeight:"semi-bold",
                width:"200px"
            }}
            >
              Date
            </div>
            <div
            style={{
                fontWeight:"bold",
                fontSize:"18px"
            }}
            >{moment(data?.createdAt).format("dddd DD MMM YYY ")}</div>
          </div>
        
          
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
        alignItems: "center",
      }}
      >
        <div>{`https://beta-finance.netlify.app/payinvoice/${data?._id}`}</div>
        <div>
            <div>
                <CopyToClipboard
                text={`https://beta-finance.netlify.app/payinvoice/${data?._id}`}
                onCopy={()=>{
                    setCopy(true)
                }}
                >
                    <div style={{
                        cursor:"pointer"
                    }}>
                         {
                        copy? "Copied" : "Copy Url"
                    }
                    </div>
                   
                   
                </CopyToClipboard>
                
            </div>
        </div>
      </div>
    </div>
  );
}

export default InvoiceComp;
