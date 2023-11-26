import { useReducer, useEffect } from "react";
import { RedirectToLogin } from "../auth/authUtils";
import Header from "@/components/Admin/Header";
import Welcome from "@/components/Admin/Welcome";
import ActivityBar from "@/components/Admin/ActivityBar";
import Cookies from "js-cookie";

function Home() {
  const AuthState = JSON.parse(Cookies.get("token"));
  const userState = JSON.parse(Cookies.get("user"));
  useEffect(() => {
    if (!AuthState.accesstoken) {
      RedirectToLogin();
    }
  }, [AuthState]);

  return (
    <div className="py-5 mx-auto w-11/12 space-y-8">
      <Header navText="Add Client" navLink="/admin/clients" />
      <Welcome name={userState.businessName} balance={"1000"} />
      <ActivityBar />
    </div>
  );
}

Home.protected = true;
export default Home;
