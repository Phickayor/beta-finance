import { useEffect, useState } from "react";
import Header from "@/components/Admin/Header";
import { useRouter } from "next/router";
import AddInvoice from "@/components/Admin/AddInvoice";
import AllInvoices from "@/components/Admin/AllInvoices";
import Cookies from "js-cookie";
import Link from "next/link";
import baseurl from "@/config/host";
import { toast } from "react-toastify";

function Client() {
  const router = useRouter();
  const ClientId = router.query.id;
  const [userState, SetUserState] = useState({});
  const [AuthState, SetAuthState] = useState({});
  const token = Cookies.get("token");
  const user = Cookies.get("user");

  useEffect(() => {
    if (user) {
      SetUserState(JSON.parse(user));
    }
    if (token) {
      SetAuthState(JSON.parse(token));
    }
  }, [user, token]);

  return (
    <div className="py-5 mx-auto w-11/12">
      <Header navText="Home" navLink="/admin/" />

      {Client ? (
        <div className=" space-y-4 md:space-y-8">
          <AddInvoice clientId={ClientId} clientName={Client.fullName} />
          <AllInvoices
            clientId={ClientId}
            userId={userState._id}
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
