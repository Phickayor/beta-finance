import Header from "@/components/Header";
import Login from "@/components/Login";
import React from "react";

function LoginPage() {
  return (
    <div>
      <img
        src="/images/auth-bg.png"
        className="hidden md:block w-screen object-cover absolute "
        alt="Header Background"
      />
      <img
        src="/images/mobile-auth-bg.png"
        className="md:hidden w-screen object-cover absolute "
        alt="Header Background"
      />
      <Header navLink="/auth/register" navText="Sign up" />
      <div className="h-screen flex flex-col justify-center">
        <Login />
      </div>
    </div>
  );
}

export default LoginPage;
