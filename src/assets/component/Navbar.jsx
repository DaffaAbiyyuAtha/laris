import React from "react";
import { useEffect } from "react";
import logo from "../img/logo.svg"
import { Link, useNavigate, useLocation } from "react-router-dom"
import { useSelector } from "react-redux";
import {
            FaMagnifyingGlass,
            FaUser,
            FaHeart,
            FaBagShopping,
        } from "react-icons/fa6";

function Navbar() {
    const tokens = useSelector((state) => state.auth.token);
    const [loading, setLoading] = React.useState(false);
    const navigate = useNavigate()
    const location = useLocation();

    function handleAccount() {
        if (location.pathname !== "/dashboard/my-favorite") {
            setLoading(true);
            setTimeout(() => {
                navigate("/dashboard/my-favorite");
            }, 2000);
        }
    }

    function handleAccount() {
        if (location.pathname !== "/dashboard/my-account") {
            setLoading(true);
            setTimeout(() => {
                navigate("/dashboard/my-account");
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

    return (
        <>
            {loading && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="spinner"></div>
                </div>
            )}
            {tokens === null ? (
                <div className="flex justify-between items-center border-b-2 h-16 shadow-sm px-28">
                    <Link to="/" className="">
                        <img src={logo} alt="" className="h-12"/>
                    </Link>
                    <div className="flex gap-12 items-center">
                        <div className="">
                            <div className="flex w-full gap-4 items-center border-[#33BEC5] bg-transparent border-2 h-9 px-6 rounded-2xl text-[#468585] overflow-hidden ">
                                <button type="button" className="text-[#33BEC5]">
                                    <FaMagnifyingGlass />
                                </button>
                                <input
                                    type="text"
                                    name="search"
                                    id="search"
                                    placeholder="Search"
                                    className="flex-1 outline-none bg-transparent text-[#33BEC5] text-xs placeholder:text-[#33BEC5]"
                                />
                            </div>
                        </div>
                        <div 
                            onClick={() => handleSignUp()}
                            className="text-[#33BEC5] text-xs cursor-pointer">
                                Sign Up
                        </div>
                        <div 
                            onClick={() => handleLogin()}
                            className="text-xs text-white bg-[#33BEC5] py-1 px-2 rounded-full cursor-pointer">
                                Login
                        </div>
                    </div>
                </div>
            ) : (
                <div className="flex justify-between items-center border-b-2 h-16 shadow-sm px-28">
                    <Link to="/" className="">
                        <img src={logo} alt="" className="h-12" />
                    </Link>
                    <div className="flex gap-12 items-center text-[#33BEC5]">
                        <div className="">
                        <div className="flex w-full gap-4 items-center border-[#33BEC5] bg-transparent border-2 h-9 px-6 rounded-2xl text-[#468585] overflow-hidden ">
                            <button type="button" className="text-[#33BEC5]">
                            <FaMagnifyingGlass />
                            </button>
                            <input
                            type="text"
                            name="search"
                            id="search"
                            placeholder="Search"
                            className="flex-1 outline-none bg-transparent text-[#33BEC5] text-xs placeholder:text-[#33BEC5]"
                            />
                        </div>
                        </div>
                        <div
                            onClick={() => handleAccount()}
                            className="cursor-pointer"
                        >
                            <FaUser />
                        </div>
                        <div
                            onClick={() => handleFavorite()}
                            className="cursor-pointer"
                        >
                            <FaHeart />
                        </div>
                        <Link to={"/product/cart"}>
                            <FaBagShopping />
                        </Link>
                    </div>
                </div>
            )}
        </>
    )
}

export default Navbar