import React, { useCallback } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import logo from "../img/logo.svg";
import PopupProduct from "./popUp/PopupProduct";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  FaMagnifyingGlass,
  FaUser,
  FaHeart,
  FaBagShopping,
} from "react-icons/fa6";

function Navbar({ isPopupOpen }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const tokens = useSelector((state) => state.auth.token);
  const [loading, setLoading] = React.useState(false);
  const [popup, setPopup] = React.useState(false);
  const [productFilter, setProductFilter] = React.useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  function handleAccount() {
    if (location.pathname !== "/dashboard/my-account") {
      setLoading(true);
      setTimeout(() => {
        navigate("/dashboard/my-account");
      }, 2000);
    }
  }

  function handleCart() {
    if (location.pathname !== "/product/cart") {
      setLoading(true);
      setTimeout(() => {
        navigate("/product/cart");
      }, 2000);
    }
  }

  function handleFavorite() {
    if (location.pathname !== "/dashboard/my-favorite") {
      setLoading(true);
      setTimeout(() => {
        navigate("/dashboard/my-favorite");
      }, 2000);
    }
  }

  function handleLogin() {
    if (location.pathname !== "/login") {
      setLoading(true);
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    }
  }

  function handleSignUp() {
    if (location.pathname !== "/sign-up") {
      setLoading(true);
      setTimeout(() => {
        navigate("/sign-up");
      }, 2000);
    }
  }

  const handleSearch = async (e) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);

    try {
      const formData = new FormData(e.target);
      const search = formData.get("search");

      if (!search) {
        setTimeout(() => {
          navigate(0);
          setLoading(false);
        }, 2000);
        return;
      }

      const response = await fetch(
        `http://localhost:8100/product/page?search=${search}`
      );
      if (!response.ok)
        throw new Error(`HTTP error! status: ${response.status}`);

      const product = await response.json();

      setTimeout(() => {
        setProductFilter(product.result);
        setPopup(true);
        setLoading(false);
      }, 2000);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  };

  return (
    <>
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="spinner"></div>
        </div>
      )}
      <nav className={`${isPopupOpen ? "hidden" : "block"}`}>
        <div className="flex justify-between items-center border-b-2 h-16 shadow-sm px-28">
          <Link to="/" className="">
            <img src={logo} alt="" className="h-12" />
          </Link>
          <div className="flex gap-12 items-center text-[#33BEC5]">
            <div className="">
              <form
                onSubmit={handleSearch}
                className="flex w-full gap-4 items-center border-[#33BEC5] bg-transparent border-2 h-9 px-6 rounded-2xl text-[#468585] overflow-hidden "
              >
                <button type="submit" className="text-[#33BEC5]">
                  <FaMagnifyingGlass />
                </button>
                <input
                  type="text"
                  name="search"
                  id="search"
                  placeholder="Search"
                  className="flex-1 outline-none bg-transparent text-[#33BEC5] text-xs placeholder:text-[#33BEC5]"
                />
              </form>
            </div>
            {tokens === null ? (
              <>
                <div
                  onClick={handleSignUp}
                  className="text-[#33BEC5] text-xs cursor-pointer"
                >
                  Sign Up
                </div>
                <div
                  onClick={handleLogin}
                  className="text-xs text-white bg-[#33BEC5] py-1 px-2 rounded-full cursor-pointer"
                >
                  Login
                </div>
              </>
            ) : (
              <div className="flex gap-6">
                <div
                  onClick={handleAccount}
                  className="cursor-pointer text-2xl"
                >
                  <FaUser />
                </div>
                <div
                  onClick={handleFavorite}
                  className="cursor-pointer text-2xl"
                >
                  <FaHeart />
                </div>
                <div onClick={handleCart} className="relative cursor-pointer">
                  <FaBagShopping className="text-2xl" />
                  {cart.length > 0 && (
                    <div className="absolute -top-2 -right-2 flex items-center justify-center text-xs w-5 h-5 rounded-full bg-red-500 text-white">
                      {cart.length}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
      {popup && <PopupProduct productFilters={productFilter} />}
    </>
  );
}

export default Navbar;
