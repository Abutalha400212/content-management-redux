import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
export default function AdminRoute({ children }) {
  const role = useSelector((state) => state.filter.role);
  if (!role) {
    return <Navigate to={"/"}></Navigate>;
  }
  return children;
}
