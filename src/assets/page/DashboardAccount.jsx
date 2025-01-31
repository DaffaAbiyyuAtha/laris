import React from "react";
import Sidebar from "../component/Sidebar";
import NavbarDashboard from "../component/NavbarDashboard";
import product1 from "../img/product1.svg"
import product2 from "../img/product2.svg"
import { FaArrowAltCircleRight } from "react-icons/fa";

function DashboardAccount() {
    return (
        <div className="flex h-screen text-[#0C0D36]">
            <div className="w-1/5">
                <Sidebar />
            </div>
            <div className="bg-[rgb(245,245,251)] w-4/5 p-10 flex flex-col h-screen">
                <div className="flex justify-between">
                    <div className="text-2xl text-[#0C0D36]">
                        My Account
                    </div>
                    <div className="">
                        <NavbarDashboard />
                    </div>
                </div>
                <div className="text-[#9191A9] mb-6">
                    Update your current profile
                </div>
                <div className="bg-white p-10 rounded-lg text-[#0C0D36] h-screen">
                    <div className="flex flex-col justify-between h-full">
                        <div className="">
                            <div className="flex gap-6 w-full mb-5">
                                <div className="w-1/2">
                                    <div className="mb-1">Full Name</div>
                                    <input 
                                        type="text" 
                                        name="fullName" 
                                        id="fullName"
                                        className="p-2 bg-[#F3F3F3] w-full rounded-lg" />
                                </div>
                                <div className="w-1/2">
                                    <div className="mb-1">Email</div>
                                    <input 
                                        type="email" 
                                        name="email" 
                                        id="email"
                                        className="p-2 bg-[#F3F3F3] w-full rounded-lg" />
                                </div>
                            </div>
                            <div className="flex gap-6 w-full mb-5">
                                <div className="w-1/3">
                                    <div className="mb-1">Province</div>
                                    <input 
                                        type="text" 
                                        name="province" 
                                        id="province"
                                        className="p-2 bg-[#F3F3F3] w-full rounded-lg" />
                                </div>
                                <div className="w-1/3">
                                    <div className="mb-1">City</div>
                                    <input 
                                        type="text" 
                                        name="city" 
                                        id="city"
                                        className="p-2 bg-[#F3F3F3] w-full rounded-lg" />
                                </div>
                                <div className="w-1/3">
                                    <div className="mb-1">Postal Code</div>
                                    <input 
                                        type="text" 
                                        name="postalCode" 
                                        id="postalCode"
                                        className="p-2 bg-[#F3F3F3] w-full rounded-lg" />
                                </div>
                            </div>
                            <div className="flex gap-6 w-full mb-5">
                                <div className="w-1/2">
                                    <div className="mb-1">Country</div>
                                    <input 
                                        type="text" 
                                        name="country" 
                                        id="country"
                                        className="p-2 bg-[#F3F3F3] w-full rounded-lg" />
                                </div>
                                <div className="w-1/2">
                                    <div className="mb-1">Mobile</div>
                                    <input 
                                        type="text" 
                                        name="mobile" 
                                        id="mobile"
                                        className="p-2 bg-[#F3F3F3] w-full rounded-lg" />
                                </div>
                            </div>
                            <div className="">
                                <div className="mb-1">Address</div>
                                <textarea 
                                    type="textarea" 
                                    name="address" 
                                    id="address"
                                    className="p-2 bg-[#F3F3F3] w-full rounded-lg" />
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
    )
}
export default DashboardAccount