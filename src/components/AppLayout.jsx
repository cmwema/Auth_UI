import React from "react";
import { Outlet } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Header from "./Header";
import Footer from "./Footer";

function AppLayout() {
  return (
    <>
      <AnimatePresence>
        <div className="flex hero min-h-screen w-screen flex-col items-center">
          <main className="flex flex-col w-full my-16 p-2 md:mt-20 items-center justify-center">
            <Outlet />
          </main>
        </div>
      </AnimatePresence>
    </>
  );
}

export default AppLayout;
