import "@/styles/globals.css";
import Cookies from "js-cookie";

export default function App({ Component, pageProps }) {
  const AuthState = JSON.parse(Cookies.get("token"));

  if (Component.protected) {
    if (!AuthState.accesstoken) {
      RedirectToLogin();
    } else {
      return <Component {...pageProps} />;
    }
  } else {
    return <Component {...pageProps} />;
  }
}
