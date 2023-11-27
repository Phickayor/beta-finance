import Router from "next/router";

export default function RedirectToLogin() {
  if (typeof window !== "undefined") {
    Router.push({
      pathname: "/auth/login"
    });
  }
}
