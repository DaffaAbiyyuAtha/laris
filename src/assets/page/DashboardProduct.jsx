import React, { useRef, useEffect, useState } from "react";
import Sidebar from "../component/Sidebar";
import NavbarDashboard from "../component/NavbarDashboard";
import product1 from "../img/product1.svg"
import { FaMagnifyingGlass, FaXmark, FaCheck } from "react-icons/fa6";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function DashboardProduct() {
    const navigate = useNavigate();
    const tokens = useSelector((state) => state.auth.token);
    const [listProducts, setListProduts] = React.useState([]);
    const [popup, setPopup] = React.useState(false);
    const [deleted, setDeleted] = React.useState({id: null, nameProduct: ""});

    async function productHome() {
        const dataProducts = await fetch("http://localhost:8100/product/home", {});
        const listData = await dataProducts.json();
        console.log(listData.result)
        setListProduts(listData.result);
    }

    async function productHomeFilter(data) {
        data.preventDefault();
        const dataSearch = encodeURIComponent(data.target.search.value);
        const dataProducts = await fetch(`http://localhost:8100/product/filter?product=${dataSearch}`, {});
        const listProduct = await dataProducts.json();
        setListProduts(listProduct.result);
    }
    
    async function deleteProduct() {
        const dataDelete = await fetch(`http://localhost:8100/product/` + deleted.id, {
            method: 'DELETE',
            headers: {
                Authorization: "Bearer " + tokens,
            },
        });
        const listDataDelete = await dataDelete.json();
        if (listDataDelete.success) {
            productHome();
            navigate(0)
        }
    }

    function confirmDelete(id, nameProduct){
        setDeleted({id, nameProduct});
        if (popup === false) {
            setPopup(true);
        } else {
            setPopup(false)
        }
    }

    function cancelDelete(){
        navigate(0);
    }

    useEffect(() => {
        productHome();
      }, []);

    return (
        <>
            <div className="flex relative h-screen text-[#0C0D36]">
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
                        <div className="flex h-screen w-full items-center justify-center">
                            Product Not Found
                        </div>
                    ) : (
                        <div className="h-0 flex-grow overflow-y-auto pt-4 pr-4">
                            <div className="grid grid-cols-3 gap-10">
                                {listProducts.map((items) => {
                                    return (
                                        <div className="bg-white p-3 rounded-lg relative">
                                            <Link 
                                                to={`/product/${items.id}`}
                                                className="">
                                                    <div className="flex justify-end">
                                                    </div>
                                                    <div className="mb-5">
                                                        <img src={items.image[0]} alt="" className="object-cover object-center"/>
                                                    </div>
                                                    <div className="text-lg">{items.nameProduct}</div>
                                                    <div className="text-[#C5C5C5]">{items.name_categories}</div>
                                            </Link>
                                            <button 
                                                onClick={() => confirmDelete(items.id, items.nameProduct)}
                                                className="absolute -top-3 -right-3 bg-red-500 p-2 rounded-full">
                                                    <FaXmark className="text-white"/>
                                            </button>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    )}
                </div>
            </div>
            {popup === false ? (
                <div className="hidden"></div>
            ) : (
                <div className="flex items-center top-0 left-0 justify-center absolute h-screen w-full bg-black/20">
                    <div className="flex flex-col gap-6 bg-white rounded-lg px-20 py-10">
                        <div className="flex flex-col justify-center">
                            <div className="">
                                Are You Sure To Delete
                            </div>
                            <div className="flex justify-center font-semibold text-lg">
                                {deleted.nameProduct}
                            </div>
                        </div>
                        <div className="flex gap-7 justify-center">
                            <button 
                                onClick={deleteProduct}
                                type="button">
                                    <FaCheck className="hover:text-green-500"/>
                            </button>
                            <button 
                                onClick={cancelDelete}
                                type="button">
                                    <FaXmark className="hover:text-red-500"/>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
export default DashboardProduct