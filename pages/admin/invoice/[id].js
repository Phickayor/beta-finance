import Header from "@/components/Admin/Header";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import InvoiceComp from "@/components/Admin/InvoiceComp";
import { useRouter } from "next/router";

function Invoice() {
  const router = useRouter();

  const [AuthState, SetAuthState] = useState({});
  const [InvoiceState, SetInvoiceState] = useState({});
  const token = Cookies.get("token");
  const invoice = Cookies.get("invoice");

  useEffect(() => {
    if (token) {
      SetAuthState(JSON.parse(token));
    }
    if (invoice) {
      SetInvoiceState(JSON.parse(invoice));
    }
  }, [token, invoice]);
  return (
    <div className="py-5 mx-auto w-11/12 space-y-8">
      <Header navText="Add Client" navLink="/admin/clients" />
      <InvoiceComp InvoiceState={InvoiceState} />
    </div>
  );
}

Invoice.protected = false;
export default Invoice;
