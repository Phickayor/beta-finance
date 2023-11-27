import Router from "next/router";

export function RedirectToLogin() {
  if (typeof window !== "undefined") {
    Router.push({
      pathname: "/auth"
    });
  }
}
