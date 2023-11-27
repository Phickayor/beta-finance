import { NewToken } from "@/components/NewToken";
import "@/styles/globals.css";
import Cookies from "js-cookie";
import { RedirectToLogin } from "./auth/authUtils";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }) {
  const HandleRefresh = async (refresh) => {
    return await NewToken(refresh);
  };
  const [AuthState, SetAuthState] = useState({});
  const token = Cookies.get("token");
  useEffect(() => {
    if (token) {
      SetAuthState(JSON.parse(token));
    } else {
      RedirectToLogin();
    }
  }, [token]);

  if (Component.protected) {
    if (AuthState.accesstoken) {
      return <Component {...pageProps} />;
    } else {
      const { success } = HandleRefresh(AuthState.refreshToken);
      console.log(success);
      if (!success) {
        RedirectToLogin();
      }
    }
  }
  return <Component {...pageProps} />;
}
