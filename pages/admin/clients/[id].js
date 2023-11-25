import AuthContext from "@/contexts/AuthContext";
import { useContext, useEffect, useReducer, useState } from "react";
import RedirectToLogin from "../../auth/authUtils";
import Header from "@/components/Admin/Header";
import userReducer from "@/reducers/userReducer";
import { useRouter } from "next/router";
import NotFound from "@/components/NotFound";

function Client() {
  const { state } = useContext(AuthContext);
  const [userState] = useReducer(userReducer);
  const [clientInfo, setClientInfo] = useState(null);
  const router = useRouter();
  const ClientId = router.query.id;

  if (state.isAuthorized) {
    RedirectToLogin();
  }
  // useEffect(() => {
  //   userState.clients.map((client) => {
  //     if (ClientId === client.id) {
  //       setClientInfo(client);
  //     }
  //   });
  // }, [userState, ClientId]);

  return (
    <div className="py-5 mx-auto w-11/12 space-y-4 md:space-y-8">
      <Header navText="Home" navLink="/admin/" />

      {clientInfo ? <div>exists</div> : <NotFound />}
    </div>
  );
}
Client.protected = true;
export default Client;
