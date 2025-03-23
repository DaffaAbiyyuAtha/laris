import React from "react";
import Home from "./assets/page/Home";
import Login from "./assets/page/Login";
import Signup from "./assets/page/Signup";
import Dashboard from "./assets/page/Dashboard";
import DashboardProduct from "./assets/page/DashboardProduct";
import DashboardTransactions from "./assets/page/DashboardTransactions";
import DashboardAccount from "./assets/page/DashboardAccount";
import DashboardTransactionsDetail from "./assets/page/DashboardTransactionsDetail";
import DashboardFavorite from "./assets/page/DashboardFavorite";
import DashboardNewProduct from "./assets/page/DashboardNewProduct";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Categories from "./assets/page/Categories";
import Product from "./assets/page/Product";
import Cart from "./assets/page/Cart";
import LoginSuccess from "./assets/page/LoginSuccess";
import LoginSuccessAdmin from "./assets/page/LoginSuccessAdmin";
import Coba from "./assets/page/Coba";
import Coba from "./assets/page/Coba"
import { Provider } from "react-redux";
import {store} from "./assets/redux/store";
import {persistStore} from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

const persistor = persistStore(store)
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
    path: "/login/login-success",
    element: <LoginSuccess />,
  },
  {
    path: "/login/login-success-admin",
    element: <LoginSuccessAdmin />,
  },
  {
    path: "/sign-up",
    element: <Signup />,
  },
  {
    path: "/categories",
    element: <Categories />,
  },
  {
    path: "/product/:id",
    element: <Product />,
  },
  {
    path: "/product/cart",
    element: <Cart />,
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
  {
    path: "/coba",
    element: <Coba />,
  },
]);

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  );
}

export default App;
