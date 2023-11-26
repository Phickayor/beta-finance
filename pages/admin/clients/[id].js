import { useEffect, useState } from "react";
import Header from "@/components/Admin/Header";
import { useRouter } from "next/router";
import NotFound from "@/components/NotFound";
import AddInvoice from "@/components/Admin/AddInvoice";
import AllInvoices from "@/components/Admin/AllInvoices";
import Cookies from "js-cookie";

function Client() {
  const userState = JSON.parse(Cookies.get("user"));
  const [clientInfo, setClientInfo] = useState([]);
  const router = useRouter();
  const ClientId = router.query.id;

  useEffect(() => {
    userState.clients.map((client) => {
      if (ClientId === client.id) {
        clientInfo.push(client);
      }
    });
  }, [userState, ClientId, clientInfo]);

  return (
    <div className="py-5 mx-auto w-11/12">
      <Header navText="Home" navLink="/admin/" />

      {!clientInfo ? (
        <div className=" space-y-4 md:space-y-8">
          <AddInvoice />
          <AllInvoices client={clientInfo} />
        </div>
      ) : (
        <NotFound />
      )}
    </div>
  );
}
Client.protected = true;
export default Client;
