import { TokenVerification, VerifyToken } from "@/components/TokenVerification";
import AuthContext, { AuthProvider } from "@/contexts/AuthContext";
import authReducer from "@/reducers/AuthReducer";
import "@/styles/globals.css";
import { useEffect, useReducer } from "react";

export default function App({ Component, pageProps }) {
  var initialState = {
    isAuthorized: false
  };
  const [state, dispatch] = useReducer(authReducer, initialState);
  // useEffect(() => {
  VerifyToken();
  // }, [state]);

  if (Component.protected) {
    return (
      <AuthContext.Provider value={{ state, dispatch }}>
        <Component {...pageProps} />
      </AuthContext.Provider>
    );
  } else {
    return <Component {...pageProps} />;
  }
}
