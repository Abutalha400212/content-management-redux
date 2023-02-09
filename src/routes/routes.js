import { createBrowserRouter } from "react-router-dom";
import AddContentCompo from "../components/AddContentCompo";
import DashboardLayout from "../layout/DashBoard/DashboardLayout";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import AdminRoute from "./AdminRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <AdminRoute>
        <DashboardLayout />
      </AdminRoute>
    ),
    children: [
      {
        path: "add-content",
        element: (
          <AdminRoute>
            <AddContentCompo />
          </AdminRoute>
        ),
      },
    ],
  },
]);
