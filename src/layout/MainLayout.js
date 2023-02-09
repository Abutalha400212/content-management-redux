import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../sharedComponent/Navbar";

export default function MainLayout() {
  return (
    <div className="px-10">
      <Navbar />
      <Outlet />
    </div>
  );
}
