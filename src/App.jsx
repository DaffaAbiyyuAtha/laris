import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store } from "./assets/redux/store";
import { persistStore } from "redux-persist";
import ScrollToTop from "./assets/component/scrollToTop/ScrollToTop";

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
import Categories from "./assets/page/Categories";
import Product from "./assets/page/Product";
import Cart from "./assets/page/Cart";
import LoginSuccess from "./assets/page/LoginSuccess";
import LoginSuccessAdmin from "./assets/page/LoginSuccessAdmin";
import Coba from "./assets/page/Coba";
import DashboardAccountSetting from "./assets/page/DashboardAccountSetting";
import DashboardAccountSettingAdmin from "./assets/page/DashboardAccountSettingAdmin";
import PageNotFound from "./assets/page/PageNotFound";
import PopupProduct from "./assets/component/popUp/PopupProduct";
import CategoryTV from "./assets/component/categories/CategoryTV";

const persistor = persistStore(store);

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/login/login-success" element={<LoginSuccess />} />
            <Route
              path="/login/login-success-admin"
              element={<LoginSuccessAdmin />}
            />
            <Route path="/sign-up" element={<Signup />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/product/cart" element={<Cart />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dashboard/product" element={<DashboardProduct />} />
            <Route
              path="/dashboard/transaction/sell-product"
              element={<DashboardTransactions />}
            />
            <Route
              path="/dashboard/my-account"
              element={<DashboardAccount />}
            />
            <Route
              path="/dashboard/transaction/detail"
              element={<DashboardTransactionsDetail />}
            />
            <Route
              path="/dashboard/my-favorite"
              element={<DashboardFavorite />}
            />
            <Route
              path="/dashboard/product/new-product"
              element={<DashboardNewProduct />}
            />
            <Route path="/coba" element={<Coba />} />
            <Route path="/login-success" element={<LoginSuccess />} />
            <Route
              path="/dashboard/account-setting/owner"
              element={<DashboardAccountSetting />}
            />
            <Route
              path="/dashboard/account-setting/admin"
              element={<DashboardAccountSettingAdmin />}
            />
            <Route path="/pop" element={<PopupProduct />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
