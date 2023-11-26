import Header from "@/components/Admin/Header";
import Welcome from "@/components/Admin/Welcome";
import ActivityBar from "@/components/Admin/ActivityBar";
import Cookies from "js-cookie";

function Home() {
  const state = JSON.parse(Cookies.get("user"));

  return (
    <div className="py-5 mx-auto w-11/12 space-y-8">
      <Header navText="Add Client" navLink="/admin/clients" />
      <Welcome name={state.businessName} balance={state.userWalllet} />
      <ActivityBar />
    </div>
  );
}

Home.protected = true;
export default Home;
