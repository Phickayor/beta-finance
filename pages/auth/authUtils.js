// authUtils.js
import Router from "next/router";
import React from "react";

export function RedirectToLogin() {
  if (typeof window !== "undefined") {
    Router.push({
      pathname: "/auth"
    });
  }
}
