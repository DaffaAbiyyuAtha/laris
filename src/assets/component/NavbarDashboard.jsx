import React from "react";
import profile from "../img/profile.svg"
import { FaBagShopping } from "react-icons/fa6";

function NavbarDashboard() {
    return (
        <div className="flex items-center gap-3 text-[#0C0D36]">
            <div className="">
                <img src={profile} alt=""className="rounded-full w-11 h-11 object-cover object-center"/>
            </div>
            <div className="">
                Hi, Lord
            </div>
            <div className="">
                <FaBagShopping />
            </div>
        </div>
    )
}
export default NavbarDashboard