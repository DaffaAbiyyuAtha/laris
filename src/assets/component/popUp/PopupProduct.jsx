import React, { useEffect } from "react";
import Navbar from "../Navbar";
import product4 from "../../img/product4.svg"
import { Link, useNavigate, useLocation } from "react-router-dom"

function popupProduct( { productFilters } ) {
    const [loading, setLoading] = React.useState(true);
    const navigate = useNavigate()
    useEffect(() => {
        document.body.style.overflow = "hidden";
        
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 2000);
        return () => clearTimeout(timer);
    }, []);

    function handleProductClick(id) {
        setLoading(true);
        setTimeout(() => {
          navigate(`/product/${id}`);
          navigate(0);
        }, 2000);
    }
    
    return (
        <>
            {loading && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="spinner"></div>
                </div>
            )}
            <div className="absolute w-full flex flex-col top-0 left-0 gap-10 pb-20 bg-white h-screen z-40">
                <Navbar />
                {productFilters.length === 0 ? (
                    <div className="flex w-full h-screen items-center justify-center text-[#33BEC5] text-xl font-semibold">
                        Product Not Found
                    </div>
                ) : (
                    <div className="grid grid-cols-4 gap-6 px-28 pb-10 overflow-y-auto">
                        {productFilters.map((items) => {
                            return (
                                <div
                                    key={items.id}
                                    onClick={() => handleProductClick(items.id)} 
                                    className="flex flex-col cursor-pointer items-center justify-center bg-[#ECF6FF] rounded p-5"
                                >
                                    <div className="mb-4">
                                        <img src={items.image} alt="" className="w-[150px] h-[150px]" />
                                    </div>
                                    <div className="font-semibold text-xl mb-2">
                                        {items.nameProduct}
                                    </div>
                                    {items.discount > 0 && (
                                        <div className="text-[#FF2525] text-xs font-semibold mb-2 line-through">
                                            Rp {new Intl.NumberFormat('id-ID').format(items.price)}
                                        </div>
                                    )}
                                    <div className="text-center font-semibold">
                                        Rp {new Intl.NumberFormat('id-ID').format(items.price - (items.price * items.discount) / 100)}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                )}
            </div>
        </>
    )
}
export default popupProduct