import Header from "@/components/Admin/Header";
import AddClient from "@/components/Admin/AddClient";
import AllClients from "@/components/Admin/AllClients";
import Cookies from "js-cookie";

function Clients() {
  const userState = JSON.parse(Cookies.get("user"));

  return (
    <div className="py-5 mx-auto w-11/12 space-y-8">
      <Header navText="Home" navLink="/admin/" />
      <AddClient email={userState.email} />
      <AllClients clients={userState.clients}/>
    </div>
  );
}
Clients.protected = true;
export default Clients;
