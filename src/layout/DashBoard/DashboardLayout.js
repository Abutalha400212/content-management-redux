import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

export default function DashboardLayout() {
  return (
    <div className="grid md:grid-cols-12 p-3 gap-3 ">
      <Sidebar />
      <div className="col-span-10 w-full bg-gray-100 rounded-lg">
        <Outlet />
      </div>
    </div>
  );
}
