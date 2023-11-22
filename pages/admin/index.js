import AuthContext from "@/contexts/AuthContext";
import { useContext } from "react";

function Home() {
  const { state } = useContext(AuthContext);

  if (!state.isAuthorized) {
    // Redirect logic or handle unauthorized access
    return <div>Unauthorized access</div>;
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
