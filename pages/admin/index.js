import AuthContext from "@/contexts/AuthContext";
import { useContext } from "react";
import RedirectToLogin from "../auth/authUtils";
import Header from "@/components/Admin/Header";
import Welcome from "@/components/Admin/Welcome";
import ActivityBar from "@/components/Admin/ActivityBar";

function Home() {
  const { state } = useContext(AuthContext);

  if (state.isAuthorized) {
    // Redirect logic or handle unauthorized access
    RedirectToLogin();
  }

  return (
    <div className="py-5 mx-auto w-11/12 space-y-8">
      <Header navText="Add Client" navLink="/admin/clients" />
      <Welcome name={state.name} />
      <ActivityBar />
    </div>
  );
}
Home.protected = true;
export default Home;
