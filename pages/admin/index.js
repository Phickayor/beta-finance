import AuthContext from "@/contexts/AuthContext";
import { useContext, useReducer } from "react";
import RedirectToLogin from "../auth/authUtils";
import Header from "@/components/Admin/Header";
import Welcome from "@/components/Admin/Welcome";
import ActivityBar from "@/components/Admin/ActivityBar";
import userReducer from "@/reducers/userReducer";

function Home() {
  const { state } = useContext(AuthContext);
  const [userState] = useReducer(userReducer);
  if (state.isAuthorized) {
    RedirectToLogin();
  }

  return (
    <div className="py-5 mx-auto w-11/12 space-y-8">
      <Header navText="Add Client" navLink="/admin/clients" />
      <Welcome name={"James"} balance={"1000"} />
      <ActivityBar activities={state.activities} />
    </div>
  );
}
Home.protected = true;
export default Home;
