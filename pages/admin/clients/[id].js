import { useEffect, useState } from "react";
import Header from "@/components/Admin/Header";
import AddInvoice from "@/components/Admin/AddInvoice";
import AllInvoices from "@/components/Admin/AllInvoices";
import Cookies from "js-cookie";
import Link from "next/link";

function Client() {
  const [AuthState, SetAuthState] = useState({});
  const [ClientState, SetClientState] = useState({});
  const token = Cookies.get("token");
  const client = Cookies.get("client");

  useEffect(() => {
    if (token) {
      SetAuthState(JSON.parse(token));
    }
    if (client) {
      SetClientState(JSON.parse(client));
    }
  }, [token, client]);

  return (
    <div className="py-5 mx-auto w-11/12">
      <Header navText="Home" navLink="/admin/" />

      {Client ? (
        <div className=" space-y-4 md:space-y-8">
          <AddInvoice
            clientId={ClientState._id}
            clientName={ClientState.fullName}
            accesstoken={AuthState.accesstoken}
          />
          <AllInvoices
            clientId={ClientState._id}
            // clientInvoice={ClientState.clientInvoice}
            userId={ClientState.userId}
            accesstoken={AuthState.accesstoken}
          />
        </div>
      ) : (
        <div className="text-center py-20">
          <h1 className="text-3xl">Customer does not exist</h1>
          <p>
            See all &nbsp;
            <Link href="/admin/clients" className="underline text-blue-500">
              Customers
            </Link>
          </p>
        </div>
      )}
    </div>
  );
}
Client.protected = true;
export default Client;
