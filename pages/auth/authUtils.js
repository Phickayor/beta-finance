// authUtils.js
import Router, { useRouter } from "next/router";
import React from "react";

export function RedirectToLogin() {
  if (typeof window !== "undefined") {
    Router.push({
      pathname: "/auth"
    });
  }
}
