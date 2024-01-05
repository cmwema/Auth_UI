import React from "react";
import { Outlet } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function AppLayout() {
  return (
    <>
      <AnimatePresence>
        <div className="flex hero min-h-screen w-screen flex-col items-center">
          <main className="flex flex-col w-full min-h-[75vh] items-center justify-center">
            <Outlet />
          </main>
        </div>
      </AnimatePresence>
    </>
  );
}

export default AppLayout;
