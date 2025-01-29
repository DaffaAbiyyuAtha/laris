import React from "react";
import logo from "../img/logo.svg"
import { Link } from "react-router-dom"
import { FaMagnifyingGlass } from "react-icons/fa6";

function Navbar() {
    return (
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
                <Link to="/sign-up" className="text-[#33BEC5] text-xs">
                    Sign Up
                </Link>
                <Link to="/login" 
                    className="text-xs text-white bg-[#33BEC5] py-1 px-2 rounded-full">
                    Login
                </Link>
            </div>
        </div>
    )
}

export default Navbar