import Header from "@/components/Admin/Header";
import NotFound from "@/components/NotFound";
import React from "react";

function NotFoundPage() {
  return (
    <div className="py-5 mx-auto w-11/12 ">
      <Header navText="Home" navLink="/admin/" />
      <NotFound />
    </div>
  );
}

export default NotFoundPage;
