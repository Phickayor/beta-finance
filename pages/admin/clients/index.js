import AuthContext from "@/contexts/AuthContext";
import { useContext, useReducer } from "react";
import RedirectToLogin from "../../auth/authUtils";
import Header from "@/components/Admin/Header";
import AddClient from "@/components/Admin/AddClient";
import AllClients from "@/components/Admin/AllClients";
import userReducer from "@/reducers/userReducer";

function Clients() {
  const { state } = useContext(AuthContext);
  const [userState] = useReducer(userReducer);

  if (state.isAuthorized) {
    RedirectToLogin();
  }

  return (
    <div className="py-5 mx-auto w-11/12 space-y-8">
      <Header navText="Home" navLink="/admin/" />
      <AddClient />
      <AllClients email={state.email} />
    </div>
  );
}
Clients.protected = true;
export default Clients;
