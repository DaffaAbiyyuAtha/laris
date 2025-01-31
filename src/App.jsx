import React from "react";
import Home from "./assets/page/Home";
import Login from "./assets/page/Login";
import Signup from "./assets/page/Signup";
import Dashboard from "./assets/page/Dashboard";
import DashboardProduct from "./assets/page/DashboardProduct";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Categories from "./assets/page/user/Categories";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/sign-up",
    element: <Signup />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/dashboard/product",
    element: <DashboardProduct />,
  },
  {
    path: "/categories",
    element: <Categories />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
