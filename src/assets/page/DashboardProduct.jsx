import React, { useRef, useEffect, useState } from "react";
import Sidebar from "../component/Sidebar";
import NavbarDashboard from "../component/NavbarDashboard";
import product1 from "../img/product1.svg"
import { FaMagnifyingGlass } from "react-icons/fa6";
import { Link } from "react-router-dom";

function DashboardProduct() {
    const [listProducts, setListProduts] = React.useState([]);

    async function productHome() {
        const dataHome = await fetch("http://localhost:8080/product/home", {});
        const listData = await dataHome.json();
        console.log(listData.result)
        setListProduts(listData.result);
    }

    async function productHomeFilter(data) {
        data.preventDefault();
        const dataSearch = encodeURIComponent(data.target.search.value); // Encode data
        const dataHome = await fetch(`http://localhost:8080/product/filter?product=${dataSearch}`, {});
        const listProduct = await dataHome.json();
        setListProduts(listProduct.result);
        console.log(listProduct.result);
    }
    

    useEffect(() => {
        productHome();
      }, []);

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
                <Link to="/dashboard/product/new-product"
                    className="font-medium max-w-[180px] mb-2 text-white py-2 px-5 bg-[#29A867] rounded-md"
                    >
                        Add New Product
                </Link>
                <form 
                    onSubmit={productHomeFilter}
                    className="flex justify-end">
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
                </form>
                {listProducts.length === 0 ? (
                    <div className="flex h-screen w-full justify-center items-center">Product Not Found</div>
                ) : (
                    <div className="h-0 flex-grow overflow-y-auto">
                        <div className="grid grid-cols-3 gap-10">
                            {listProducts.map((items) => {
                                return (
                                    <div className="bg-white p-3 rounded-lg">
                                        <div className="mb-5">
                                            <img src={items.image[0]} alt="" className="object-cover object-center"/>
                                        </div>
                                        <div className="text-lg">{items.nameProduct}</div>
                                        <div className="text-[#C5C5C5]">{items.name_categories}</div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
export default DashboardProduct