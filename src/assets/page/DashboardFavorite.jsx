import React from "react";
import Sidebar from "../component/Sidebar";
import NavbarDashboard from "../component/NavbarDashboard";
import product1 from "../img/product1.svg"
import { FaMagnifyingGlass, FaXmark } from "react-icons/fa6";

function DashboardFavorite() {
    return (
        <div className="flex h-screen text-[#0C0D36]">
            <div className="w-1/5">
                <Sidebar />
            </div>
            <div className="w-4/5 bg-[#F5F5FB] p-10 flex flex-col h-screen">
                <div className="flex justify-between">
                    <div className="text-2xl text-[#0C0D36]">
                        My Favorite Product
                    </div>
                    <div className="">
                        <NavbarDashboard />
                    </div>
                </div>
                <div className="text-[#9191A9] mb-5">
                    We hope you buy it and have a nice day.
                </div>
                <div className="flex justify-end">
                    <div className="flex mb-4 max-w-52 w-full gap-4 items-center border-black bg-transparent border-2 h-9 px-6 rounded-2xl overflow-hidden ">
                        <button type="button" className="">
                            <FaMagnifyingGlass />
                        </button>
                        <input
                            type="text"
                            name="search"
                            id="search"
                            placeholder="Search"
                            className="flex-1 outline-none bg-transparent text-xs"
                        />
                    </div>
                </div>
                <div className="h-0 flex-grow overflow-y-auto pt-4 pr-4">
                    <div className="grid grid-cols-3 gap-10">
                        <div className="bg-white p-3 rounded-lg relative">
                            <div className="flex justify-end">
                                <div className="absolute -top-3 -right-3 bg-red-500 p-2 rounded-full">
                                    <FaXmark className="text-white"/>
                                </div>
                            </div>
                            <div className="mb-5">
                                <img src={product1} alt="" className="object-cover object-center"/>
                            </div>
                            <div className="text-lg">MSI Raider GE76</div>
                            <div className="text-[#C5C5C5]">electronic</div>
                        </div>
                        <div className="bg-white p-3 rounded-lg relative">
                            <div className="flex justify-end">
                                <div className="absolute -top-3 -right-3 bg-red-500 p-2 rounded-full">
                                    <FaXmark className="text-white"/>
                                </div>
                            </div>
                            <div className="mb-5">
                                <img src={product1} alt="" className="object-cover object-center"/>
                            </div>
                            <div className="text-lg">MSI Raider GE76</div>
                            <div className="text-[#C5C5C5]">electronic</div>
                        </div>
                        <div className="bg-white p-3 rounded-lg relative">
                            <div className="flex justify-end">
                                <div className="absolute -top-3 -right-3 bg-red-500 p-2 rounded-full">
                                    <FaXmark className="text-white"/>
                                </div>
                            </div>
                            <div className="mb-5">
                                <img src={product1} alt="" className="object-cover object-center"/>
                            </div>
                            <div className="text-lg">MSI Raider GE76</div>
                            <div className="text-[#C5C5C5]">electronic</div>
                        </div>
                        <div className="bg-white p-3 rounded-lg relative">
                            <div className="flex justify-end">
                                <div className="absolute -top-3 -right-3 bg-red-500 p-2 rounded-full">
                                    <FaXmark className="text-white"/>
                                </div>
                            </div>
                            <div className="mb-5">
                                <img src={product1} alt="" className="object-cover object-center"/>
                            </div>
                            <div className="text-lg">MSI Raider GE76</div>
                            <div className="text-[#C5C5C5]">electronic</div>
                        </div>
                        <div className="bg-white p-3 rounded-lg relative">
                            <div className="flex justify-end">
                                <div className="absolute -top-3 -right-3 bg-red-500 p-2 rounded-full">
                                    <FaXmark className="text-white"/>
                                </div>
                            </div>
                            <div className="mb-5">
                                <img src={product1} alt="" className="object-cover object-center"/>
                            </div>
                            <div className="text-lg">MSI Raider GE76</div>
                            <div className="text-[#C5C5C5]">electronic</div>
                        </div>
                        <div className="bg-white p-3 rounded-lg relative">
                            <div className="flex justify-end">
                                <div className="absolute -top-3 -right-3 bg-red-500 p-2 rounded-full">
                                    <FaXmark className="text-white"/>
                                </div>
                            </div>
                            <div className="mb-5">
                                <img src={product1} alt="" className="object-cover object-center"/>
                            </div>
                            <div className="text-lg">MSI Raider GE76</div>
                            <div className="text-[#C5C5C5]">electronic</div>
                        </div>
                        <div className="bg-white p-3 rounded-lg relative">
                            <div className="flex justify-end">
                                <div className="absolute -top-3 -right-3 bg-red-500 p-2 rounded-full">
                                    <FaXmark className="text-white"/>
                                </div>
                            </div>
                            <div className="mb-5">
                                <img src={product1} alt="" className="object-cover object-center"/>
                            </div>
                            <div className="text-lg">MSI Raider GE76</div>
                            <div className="text-[#C5C5C5]">electronic</div>
                        </div>
                        <div className="bg-white p-3 rounded-lg relative">
                            <div className="flex justify-end">
                                <div className="absolute -top-3 -right-3 bg-red-500 p-2 rounded-full">
                                    <FaXmark className="text-white"/>
                                </div>
                            </div>
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
export default DashboardFavorite