import React from "react";
import Sidebar from "../component/Sidebar";
import NavbarDashboard from "../component/NavbarDashboard";
import product1 from "../img/product1.svg"
import { FaMagnifyingGlass, FaXmark } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function DashboardFavorite() {
    const [listWishlist, setListWishlist] = React.useState([]);
    console.log(listWishlist)
    const tokens = useSelector((state) => state.auth.token);

    async function dataWishlist() {
        const dataDelete = await fetch(`http://localhost:8100/wishlist/`, {
            method: 'GET',
            headers: {
                Authorization: "Bearer " + tokens,
            },
        });
        const listDataUpdate = await dataDelete.json();
        setListWishlist(listDataUpdate.result || []);
    }

    useEffect(() => {
        dataWishlist();
    }, []);

    async function searchWishlist(dataSearch) {
        dataSearch.preventDefault();
        const search = dataSearch.target.search.value;
        if (search === "") {
            dataWishlist();
            return;
        }
        const dataWishlists = await fetch(`http://localhost:8100/wishlist/search?product_name=` + search, {
            method: 'GET',
            headers: {
                Authorization: "Bearer " + tokens,
            },
        });
        const wishlistDataUpdate = await dataWishlists.json();
        setListWishlist(wishlistDataUpdate.result || []);
    }

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
                <form
                    onSubmit={searchWishlist} 
                    className="flex justify-end">
                    <div className="flex mb-4 max-w-52 w-full gap-4 items-center border-black bg-transparent border-2 h-9 px-6 rounded-2xl overflow-hidden ">
                        <button type="submit" className="">
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
                {Array.isArray(listWishlist) && listWishlist.length === 0 ? (
                        <div className="flex h-screen w-full items-center justify-center">
                            Product Not Found
                        </div>
                ) : (
                    <div className="h-0 flex-grow overflow-y-auto pt-4 pr-4">
                        <div className="grid grid-cols-3 gap-10">
                        {Array.isArray(listWishlist) ? listWishlist.map((items) => (
                            <Link to={`/product/${items.product_id}`} key={items.product_id}>
                                <div className="bg-white p-3 rounded-lg">
                                    <div className="mb-5">
                                        <img src={items?.image?.[0]} alt="" className="object-cover object-center" />
                                    </div>
                                    <div className="text-lg">{items?.name_product}</div>
                                    <div className="text-[#C5C5C5]">{items?.name_categories}</div>
                                </div>
                            </Link>
                        )) : null}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
export default DashboardFavorite