import React from "react";
import Carousel from "../components/Login/Carousel";
import Login from "../components/Login/Login";

function LogIn() {
  return (
    <div className="grid grid-cols-2 w-full min-h-[100vh]">
      <Carousel />
      <Login />
    </div>
  );
}

export default LogIn;
