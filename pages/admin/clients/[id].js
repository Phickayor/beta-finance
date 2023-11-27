import { useEffect, useState } from "react";
import Header from "@/components/Admin/Header";
import { useRouter } from "next/router";
import AddInvoice from "@/components/Admin/AddInvoice";
import AllInvoices from "@/components/Admin/AllInvoices";
import Cookies from "js-cookie";
import Link from "next/link";

function Client() {
  const router = useRouter();
  const ClientId = router.query.id;
  const [userState, SetUserState] = useState({ clients: [] });
  const user = Cookies.get("user");
  useEffect(() => {
    if (user) {
      SetUserState(JSON.parse(user));
    }
  }, [user]);

  return (
    <div className="py-5 mx-auto w-11/12">
      <Header navText="Home" navLink="/admin/" />

      {userState.clients[ClientId] ? (
        <div className=" space-y-4 md:space-y-8">
          <AddInvoice />
          <AllInvoices client={userState.clients[ClientId]} />
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
