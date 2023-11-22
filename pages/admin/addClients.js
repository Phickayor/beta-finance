import React, { useReducer } from "react";
import { RedirectToLogin } from "../auth/authUtils";

function AddClients() {
  const [AuthorizationState, authDispatch] = useReducer(authReducer);
  if (!AuthorizationState.isAuthorized) {
    RedirectToLogin();
  } else {
    return (
      <>
        <h1>New Page</h1>
      </>
    );
  }
}

export default AddClients;
