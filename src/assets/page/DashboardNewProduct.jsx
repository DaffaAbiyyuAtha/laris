import React from "react";
import Sidebar from "../component/Sidebar";
import NavbarDashboard from "../component/NavbarDashboard";
import product1 from "../img/product1.svg"
import product2 from "../img/product2.svg"
import { FaXmark } from "react-icons/fa6";

function DashboardNewProduct() {
    return (
        <div className="flex h-screen text-[#0C0D36]">
            <div className="w-1/5">
                <Sidebar />
            </div>
            <div className="bg-[rgb(245,245,251)] w-4/5 p-10 flex flex-col h-screen">
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
                <div className="h-0 flex-grow overflow-y-auto">
                    <div className="bg-white p-10 rounded-lg mb-6 text-[#0C0D36]">
                        <div className="">
                            <div className="flex gap-6 w-full mb-5">
                                <div className="w-1/2">
                                    <div className="mb-1">Product Name</div>
                                    <input 
                                        type="text" 
                                        name="productName" 
                                        id="productName"
                                        className="p-2 bg-[#F3F3F3] w-full rounded-lg" />
                                </div>
                                <div className="w-1/2">
                                    <div className="mb-1">Price</div>
                                    <input 
                                        type="number" 
                                        name="price" 
                                        id="price"
                                        className="p-2 bg-[#F3F3F3] w-full rounded-lg" />
                                </div>
                            </div>
                            <div className="mb-5">
                                <div className="mb-1">Category</div>
                                <select 
                                    defaultValue="" 
                                    className="p-2 bg-[#F3F3F3] w-full rounded-lg"
                                >
                                    <option value="" disabled>Choose Category</option>
                                    <option value="tv">TV</option>
                                    <option value="speaker">Speaker</option>
                                    <option value="headset">Headset</option>
                                    <option value="hp">HP</option>
                                    <option value="laptop">Laptop</option>
                                    <option value="computer">Computer</option>
                                    <option value="tool">Tool</option>
                                </select>
                            </div>
                            <div className="mb-5">
                                <div className="mb-1">Description</div>
                                <textarea 
                                    type="text" 
                                    name="description" 
                                    id="description"
                                    className="p-2 bg-[#F3F3F3] w-full rounded-lg" />
                            </div>
                            <button type="button" className="flex w-full justify-center items-center bg-[#29A867] p-2 rounded-md text-white">
                                Creat Product
                            </button>
                        </div>
                    </div>
                    <div className="bg-white p-10 rounded-lg ">
                        <div className="">
                            <div className="flex gap-12 mb-6">
                                <div className="w-1/3 relative">
                                    <div className="flex justify-end">
                                        <div className="absolute -top-3 -right-3 bg-red-500 p-2 rounded-full">
                                            <FaXmark className="text-white"/>
                                        </div>
                                    </div>
                                    <img src={product1} alt="" />
                                </div>
                                <div className="w-1/3 relative">
                                    <div className="flex justify-end">
                                        <div className="absolute -top-3 -right-3 bg-red-500 p-2 rounded-full">
                                            <FaXmark className="text-white"/>
                                        </div>
                                    </div>
                                    <img src={product1} alt="" />
                                </div>
                                <div className="w-1/3 relative">
                                    <div className="flex justify-end">
                                        <div className="absolute -top-3 -right-3 bg-red-500 p-2 rounded-full">
                                            <FaXmark className="text-white"/>
                                        </div>
                                    </div>
                                    <img src={product1} alt="" />
                                </div>
                            </div>
                            <button type="button" className="flex w-full justify-center items-center bg-[#29A867] p-2 rounded-md text-white">
                                Add Picture
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default DashboardNewProduct