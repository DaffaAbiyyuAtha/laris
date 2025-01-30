import { React, useState } from "react";
import Sidebar from "../component/Sidebar";
import NavbarDashboard from "../component/NavbarDashboard";
import { Link } from "react-router-dom";
import product1 from "../img/product1.svg"
import product2 from "../img/product2.svg"
import { FaArrowAltCircleRight } from "react-icons/fa";

function DashboardTransactionsDetail() {
    const [status, setStatus] = useState("pending");

    return (
        <div className="flex h-screen text-[#0C0D36]">
            <div className="w-1/5">
                <Sidebar />
            </div>
            <div className="bg-[rgb(245,245,251)] w-4/5 p-10 flex flex-col h-screen">
                <div className="flex justify-between">
                    <div className="text-2xl text-[#0C0D36]">
                        #STORE0839
                    </div>
                    <div className="">
                        <NavbarDashboard />
                    </div>
                </div>
                <div className="flex text-[#9191A9] mb-6 gap-4">
                    <Link to="/dashboard/transaction/sell-product" className="">Transactions</Link>
                    <div className="">/</div>
                    <div className="text-[#0C0D36] font-medium">Details</div>
                </div>
                <div className="h-0 flex-grow overflow-y-auto">
                    <div className="bg-white p-10 rounded-lg text-[#0C0D36] h-screen">
                        <div className="flex flex-col justify-between h-full">
                            <div className="">
                                <div className="flex mb-6 gap-9">
                                    <div className="w-1/3">
                                        <img src={product1} alt="" />
                                    </div>
                                    <div className="w-1/3">
                                        <div className="mb-6">
                                            <div className="text-[#C5C5C5] mb-2">Customer Name</div>
                                            <div className="text-lg text-[#0C0D36]">Daffa Abiyyu</div>
                                        </div>
                                        <div className="mb-6">
                                            <div className="text-[#C5C5C5] mb-2">Date of Transaction</div>
                                            <div className="text-lg text-[#0C0D36]">12 Januari 2025</div>
                                        </div>
                                        <div className="mb-6">
                                            <div className="text-[#C5C5C5] mb-2">Total Amount</div>
                                            <div className="text-lg text-[#0C0D36]">Rp 450.000</div>
                                        </div>
                                    </div>
                                    <div className="w-1/3">
                                        <div className="mb-6">
                                            <div className="text-[#C5C5C5] mb-2">Product Name</div>
                                            <div className="text-lg text-[#0C0D36]">MSI Raider GE76</div>
                                        </div>
                                        <div className="mb-6">
                                            <div className="text-[#C5C5C5] mb-2">Status</div>
                                            <div className="text-lg text-[#F32355]">Pending</div>
                                        </div>
                                        <div className="mb-6">
                                            <div className="text-[#C5C5C5] mb-2">Mobile</div>
                                            <div className="text-lg text-[#0C0D36]">085712345678</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-[#0C0D36] text-xl mb-6">Shipping Information</div>
                                <div className="mb-6">
                                    <div className="text-[#C5C5C5] mb-2">Address</div>
                                    <div className="text-lg text-[#0C0D36]">Jalan Mawar Nomor 7</div>
                                </div>
                                <div className="flex">
                                    <div className="w-1/3 mb-6">
                                        <div className="text-[#C5C5C5] mb-2">Province</div>
                                        <div className="text-lg text-[#0C0D36]">Central Java</div>
                                    </div>
                                    <div className="w-1/3 mb-6">
                                        <div className="text-[#C5C5C5] mb-2">City</div>
                                        <div className="text-lg text-[#0C0D36]">Boyolali</div>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="w-1/3 mb-6">
                                        <div className="text-[#C5C5C5] mb-2">Postal Code</div>
                                        <div className="text-lg text-[#0C0D36]">555555</div>
                                    </div>
                                    <div className="w-1/3 mb-6">
                                        <div className="text-[#C5C5C5] mb-2">Country</div>
                                        <div className="text-lg text-[#0C0D36]">Indonesia</div>
                                    </div>
                                </div>
                                <div className="w-1/3 mb-6">
                                    <div className="text-[#C5C5C5] mb-2">Status</div>
                                    <select
                                        className={`py-2 px-3 rounded text-white ${
                                            status === "shipped" ? "bg-green-500" : 
                                            status === "cancelled" ? "bg-red-500" : 
                                            "bg-gray-300 text-black"
                                        }`}
                                        value={status}
                                        onChange={(e) => setStatus(e.target.value)}
                                    >
                                        <option value="pending">Pending</option>
                                        <option value="shipped">Shipped</option>
                                        <option value="cancelled">Cancelled</option>
                                    </select>
                                </div>
                            </div>
                            <div className="flex justify-end">
                                <button type="button" className="text-white font-medium bg-[#29A867] rounded-md py-2 px-12">
                                    Save Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default DashboardTransactionsDetail