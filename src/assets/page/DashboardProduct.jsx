import React from "react";
import Sidebar from "../component/Sidebar";
import NavbarDashboard from "../component/NavbarDashboard";
import product1 from "../img/product1.svg"
import product2 from "../img/product2.svg"
import { FaArrowAltCircleRight } from "react-icons/fa";

function DashboardProduct() {
    return (
        <div className="flex h-screen text-[#0C0D36]">
            <div className="w-1/5">
                <Sidebar />
            </div>
            <div className="w-4/5 bg-[#F5F5FB] p-10 flex flex-col h-screen">
                <div className="flex justify-between">
                    <div className="text-2xl text-[#0C0D36]">
                        My Products
                    </div>
                    <div className="">
                        <NavbarDashboard />
                    </div>
                </div>
                <div className="text-[#9191A9] mb-5">
                    Manage it well and get money
                </div>
                <button 
                    type="button"
                    className="font-medium max-w-[180px] mb-8 text-white py-2 px-5 bg-[#29A867] rounded-md"
                    >
                        Add New Product
                </button>
                <div className="h-0 flex-grow overflow-y-auto">
                    <div className="grid grid-cols-3 gap-10">
                        <div className="bg-white p-3 rounded-lg">
                            <div className="mb-5">
                                <img src={product1} alt="" className="object-cover object-center"/>
                            </div>
                            <div className="text-lg">MSI Raider GE76</div>
                            <div className="text-[#C5C5C5]">electronic</div>
                        </div>
                        <div className="bg-white p-3 rounded-lg">
                            <div className="mb-5">
                                <img src={product1} alt="" className="object-cover object-center"/>
                            </div>
                            <div className="text-lg">MSI Raider GE76</div>
                            <div className="text-[#C5C5C5]">electronic</div>
                        </div>
                        <div className="bg-white p-3 rounded-lg">
                            <div className="mb-5">
                                <img src={product1} alt="" className="object-cover object-center"/>
                            </div>
                            <div className="text-lg">MSI Raider GE76</div>
                            <div className="text-[#C5C5C5]">electronic</div>
                        </div>
                        <div className="bg-white p-3 rounded-lg">
                            <div className="mb-5">
                                <img src={product1} alt="" className="object-cover object-center"/>
                            </div>
                            <div className="text-lg">MSI Raider GE76</div>
                            <div className="text-[#C5C5C5]">electronic</div>
                        </div>
                        <div className="bg-white p-3 rounded-lg">
                            <div className="mb-5">
                                <img src={product1} alt="" className="object-cover object-center"/>
                            </div>
                            <div className="text-lg">MSI Raider GE76</div>
                            <div className="text-[#C5C5C5]">electronic</div>
                        </div>
                        <div className="bg-white p-3 rounded-lg">
                            <div className="mb-5">
                                <img src={product1} alt="" className="object-cover object-center"/>
                            </div>
                            <div className="text-lg">MSI Raider GE76</div>
                            <div className="text-[#C5C5C5]">electronic</div>
                        </div>
                        <div className="bg-white p-3 rounded-lg">
                            <div className="mb-5">
                                <img src={product1} alt="" className="object-cover object-center"/>
                            </div>
                            <div className="text-lg">MSI Raider GE76</div>
                            <div className="text-[#C5C5C5]">electronic</div>
                        </div>
                        <div className="bg-white p-3 rounded-lg">
                            <div className="mb-5">
                                <img src={product1} alt="" className="object-cover object-center"/>
                            </div>
                            <div className="text-lg">MSI Raider GE76</div>
                            <div className="text-[#C5C5C5]">electronic</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default DashboardProduct