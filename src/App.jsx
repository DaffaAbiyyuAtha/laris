import React from "react";
import Home from "./assets/page/Home";
import Login from "./assets/page/Login"
import Signup from "./assets/page/Signup"
import Dashboard from "./assets/page/Dashboard";
import DashboardProduct from "./assets/page/DashboardProduct";
import DashboardTransactions from "./assets/page/DashboardTransactions";
import DashboardAccount from "./assets/page/DashboardAccount";
import DashboardTransactionsDetail from "./assets/page/DashboardTransactionsDetail";
import DashboardFavorite from "./assets/page/DashboardFavorite";
import DashboardNewProduct from "./assets/page/DashboardNewProduct";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

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
    path: "/dashboard/transaction/sell-product",
    element: <DashboardTransactions />,
  },
  {
    path: "/dashboard/my-account",
    element: <DashboardAccount />,
  },
  {
    path: "/dashboard/transaction/detail",
    element: <DashboardTransactionsDetail />,
  },
  {
    path: "/dashboard/my-favorite",
    element: <DashboardFavorite />,
  },
  {
    path: "/dashboard/product/new-product",
    element: <DashboardNewProduct />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
