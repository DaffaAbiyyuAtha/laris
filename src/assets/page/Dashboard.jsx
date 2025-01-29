import React from "react";
import Sidebar from "../component/Sidebar";
import NavbarDashboard from "../component/NavbarDashboard";
import product1 from "../img/product1.svg"
import product2 from "../img/product2.svg"
import { FaArrowAltCircleRight } from "react-icons/fa";

function Dashboard() {
    return (
        <div className="flex h-screen text-[#0C0D36]">
            <div className="w-1/5">
                <Sidebar />
            </div>
            <div className="w-4/5 bg-[#F5F5FB] p-10">
                <div className="flex justify-between">
                    <div className="text-2xl text-[#0C0D36]">
                        Dashboard
                    </div>
                    <div className="">
                        <NavbarDashboard />
                    </div>
                </div>
                <div className="text-[#9191A9] mb-6">
                    Look what you have made today!
                </div>
                <div className="flex mb-6 w-full justify-between gap-10">
                    <div className="w-1/3 bg-white p-6 rounded-lg">
                        <div className="text-[#C5C5C5]">Customer</div>
                        <div className="font-semibold text-3xl text-[#0C0D36]">15.209</div>
                    </div>
                    <div className="w-1/3 bg-white p-6 rounded-lg">
                        <div className="text-[#C5C5C5]">Revenue</div>
                        <div className="font-semibold text-3xl text-[#0C0D36]">Rp 120.000.000</div>
                    </div>
                    <div className="w-1/3 bg-white p-6 rounded-lg">
                        <div className="text-[#C5C5C5]">Transaction</div>
                        <div className="font-semibold text-3xl text-[#0C0D36]">900</div>
                    </div>
                </div>
                <div className="mb-6 font-medium text-lg">
                    Recent Transactions
                </div>
                <div className="flex text-lg mb-4 items-center bg-white rounded-lg p-3">
                    <div className="flex gap-3 items-center w-2/6">
                        <div className="">
                            <img src={product1} alt="" className="h-11 w-11 rounded"/>
                        </div>
                        <div className="text-lg">MSI Raider GE76</div>
                    </div>
                    <div className="w-2/6">Raisa</div>
                    <div className="w-2/6">12 Januari 2025</div>
                    <div className="">
                        <FaArrowAltCircleRight />
                    </div>
                </div>
                <div className="flex text-lg mb-4 items-center bg-white rounded-lg p-3">
                    <div className="flex gap-3 items-center w-2/6">
                        <div className="">
                            <img src={product2} alt="" className="h-11 w-11 rounded"/>
                        </div>
                        <div className="text-lg">PS 5</div>
                    </div>
                    <div className="w-2/6">Ilyas</div>
                    <div className="w-2/6">1 Januari 2025</div>
                    <div className="">
                        <FaArrowAltCircleRight />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Dashboard