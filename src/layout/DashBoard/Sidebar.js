import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="col-span-2 bg-indigo-200 md:h-[calc(100vh-25px)] p-5 rounded-lg">
      <ul className="flex gap-3  md:flex-col h-full justify-center">
        <li>Admin Dashboard</li>
        <li>
          <Link to="add-content"> Add Product </Link>
        </li>
        <li className="mt-auto">
          <Link to="/"> Back to Home </Link>
        </li>
      </ul>
    </div>
  );
}
