import AuthContext from "@/contexts/AuthContext";
import { useContext } from "react";

function AddClients() {
  const { state } = useContext(AuthContext);

  if (!state.isAuthorized) {
    // Redirect logic or handle unauthorized access
    return <div>Unauthorized access</div>;
  }

  return (
    <>
      <h1>New Page</h1>
      {/* Other content */}
    </>
  );
}
AddClients.protected = true;
export default AddClients;
