import React from "react";
import Carousel from "../components/Login/Carousel";
import Login from "../components/Login/Login";

function LogIn() {
  return (
    <div className="flex flex-col lg:flex-row w-full p-2 md:p-0 min-h-[100vh]">
      <Carousel />
      <Login />
    </div>
  );
}

export default LogIn;
