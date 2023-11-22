import Router from "next/router";
import React, { useEffect } from "react";

function Home() {
  useEffect(() => {
    Router.push({
      pathname: "/auth/login"
    });
  }, []);
}

export default Home;
