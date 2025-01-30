import React from "react";
import Sidebar from "../component/Sidebar";
import NavbarDashboard from "../component/NavbarDashboard";
import product1 from "../img/product1.svg"
import product2 from "../img/product2.svg"
import { FaArrowAltCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

function DashboardTransactions() {
    return (
        <div className="flex h-screen text-[#0C0D36]">
            <div className="w-1/5">
                <Sidebar />
            </div>
            <div className="bg-[rgb(245,245,251)] w-4/5 p-10 flex flex-col h-screen">
                <div className="flex justify-between">
                    <div className="text-2xl text-[#0C0D36]">
                        Transactions
                    </div>
                    <div className="">
                        <NavbarDashboard />
                    </div>
                </div>
                <div className="text-[#9191A9] mb-6 font-light">
                    Big result start from the small one
                </div>
                <div className="flex gap-8">
                    <div className="mb-6 font-medium text-lg border-b-2 border-[#0C0D36]">
                        Sell Product
                    </div>
                    <div className="mb-6 font-medium text-lg text-[#9191A9]">
                        Buy Product
                    </div>
                </div>
                <div className="h-0 flex-grow overflow-y-auto">
                    <Link to="/dashboard/transaction/detail" className="flex text-lg mb-4 items-center bg-white rounded-lg p-3">
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
                    </Link>
                    <Link to="/dashboard/transaction/detail" className="flex text-lg mb-4 items-center bg-white rounded-lg p-3">
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
                    </Link>
                    <Link to="/dashboard/transaction/detail" className="flex text-lg mb-4 items-center bg-white rounded-lg p-3">
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
                    </Link>
                    <Link to="/dashboard/transaction/detail" className="flex text-lg mb-4 items-center bg-white rounded-lg p-3">
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
                    </Link>
                    <Link to="/dashboard/transaction/detail" className="flex text-lg mb-4 items-center bg-white rounded-lg p-3">
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
                    </Link>
                    <Link to="/dashboard/transaction/detail" className="flex text-lg mb-4 items-center bg-white rounded-lg p-3">
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
                    </Link>
                    <Link to="/dashboard/transaction/detail" className="flex text-lg mb-4 items-center bg-white rounded-lg p-3">
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
                    </Link>
                    <Link to="/dashboard/transaction/detail" className="flex text-lg mb-4 items-center bg-white rounded-lg p-3">
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
                    </Link>
                    <Link to="/dashboard/transaction/detail" className="flex text-lg mb-4 items-center bg-white rounded-lg p-3">
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
                    </Link>
                    <Link to="/dashboard/transaction/detail" className="flex text-lg mb-4 items-center bg-white rounded-lg p-3">
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
                    </Link>
                    <Link to="/dashboard/transaction/detail" className="flex text-lg mb-4 items-center bg-white rounded-lg p-3">
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
                    </Link>
                    <Link to="/dashboard/transaction/detail" className="flex text-lg mb-4 items-center bg-white rounded-lg p-3">
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
                    </Link>
                    <Link to="/dashboard/transaction/detail" className="flex text-lg mb-4 items-center bg-white rounded-lg p-3">
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
                    </Link>
                    <Link to="/dashboard/transaction/detail" className="flex text-lg mb-4 items-center bg-white rounded-lg p-3">
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
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default DashboardTransactions