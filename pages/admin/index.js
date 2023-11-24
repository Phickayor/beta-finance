import AuthContext from "@/contexts/AuthContext";
import { useContext } from "react";
import RedirectToLogin from "../auth/authUtils";

function Home() {
  const { state } = useContext(AuthContext);

  if (!state.isAuthorized) {
    // Redirect logic or handle unauthorized access
    RedirectToLogin();
  }

  return (
    <>
      <h1>Home Page</h1>
      {/* Other content */}
    </>
  );
}
Home.protected = true;
export default Home;
