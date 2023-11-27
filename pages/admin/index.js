import Header from "@/components/Admin/Header";
import Welcome from "@/components/Admin/Welcome";
import ActivityBar from "@/components/Admin/ActivityBar";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";

function Home() {
  const [userState, SetUserState] = useState({});
  const user = Cookies.get("user");
  useEffect(() => {
    if (user) {
      SetUserState(JSON.parse(user));
    }
  }, [user]);
  return (
    <div className="py-5 mx-auto w-11/12 space-y-8">
      <Header navText="Add Client" navLink="/admin/clients" />
      <Welcome name={userState.businessName} balance={userState.userWallet} />

      <ActivityBar />
    </div>
  );
}

Home.protected = true;
export default Home;
