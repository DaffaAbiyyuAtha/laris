import React from "react";
import logo from "../img/logo.svg"
import { Link } from "react-router-dom";

function Sidebar() {
    return (
        <div className="flex flex-col justify-between h-screen">
            <div className="">
                <Link to="/" className="flex justify-center pt-8 px-8 mb-16">
                    <img src={logo} alt="" />
                </Link>
                <div className="flex flex-col gap-6 pl-8 text-[#C5C5C5]">
                    <Link to="/dashboard" className="bg-gradient-to-r from-white to-[#24B8C5] border-r-4 border-[#198B95] py-4 text-[#0C0D36]">
                        Dashboard
                    </Link>
                    <Link to="/dashboard/product" className="hover:text-[#24B8C5]">
                        My Products
                    </Link>
                    <Link to="/dashboard/transaction/sell-product" className="hover:text-[#24B8C5]">
                        Transactions
                    </Link>
                    <div className="hover:text-[#24B8C5]">
                        Store Settings
                    </div>
                    <Link to="/dashboard/my-account" className="hover:text-[#24B8C5]">
                        My Account
                    </Link>
                    <Link to="/dashboard/my-favorite" className="hover:text-[#24B8C5]">
                        My Favorite
                    </Link>
                </div>
            </div>
            <div className="pl-6 pb-24 text-[#C5C5C5] hover:text-red-500">Logout</div>
        </div>
    )
}
export default Sidebar