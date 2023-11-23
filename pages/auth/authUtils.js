// authUtils.js
import { useRouter } from "next/router";
import React from "react";

function RedirectToLogin() {
  const router = useRouter();
  if (typeof window !== "undefined") {
    router.push({
      pathname: "/auth"
    });
  }
}

export default RedirectToLogin;
