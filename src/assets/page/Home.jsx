import React, { useRef, useEffect, useState } from "react";
import Navbar from "../component/Navbar"
import Footer from "../component/Footer"
import banner from "../img/banner.svg"
import recomendhp from "../img/recomendhp.svg"
import recomendlaptop from "../img/recomendlaptop.svg"
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
import product4 from "../img/product4.svg"
import NavbarLogin from "../component/NavbarLogin"
import { Link, useNavigate } from "react-router-dom";
import CategoryMenu from "../component/categories/CategoryMenu";
import CategoryTV from "../component/categories/CategoryTV";
import CategoryHeadset from "../component/categories/CategoryHeadset";
import CategorySpeaker from "../component/categories/CategorySpeaker";
import CategoryHP from "../component/categories/CategoryHP";
import CategoryLaptop from "../component/categories/CategoryLaptop";
import CategoryCOM from "../component/categories/CategoryCOM";
import CategoryTool from "../component/categories/CategoryTool";
import CategoryWatch from "../component/categories/CategoryWatch";
import CategoryPS from "../component/categories/CategoryPS";

function Home() {
    const productRefTop = useRef(null);
    const productRefBottom = useRef(null);
    const banners = [banner, banner, banner];
    const [currentIndex, setCurrentIndex] = useState(0);
    const [prevIndex, setPrevIndex] = useState(0);
    const [listProducts, setListProduts] = React.useState([]);
    const [activeComponent, setActiveComponent] = useState("");
    const navigate = useNavigate();

    const handleCategoryClick = (category) => {
        navigate(`/categories`);
    };

    const handleScroll = (direction) => {
        if (productRefTop.current) {
            productRefTop.current.scrollBy({
                left: direction === "right" ? 200 : -200, 
                behavior: "smooth",
            });
        }
    };

    const handleScroll2 = (direction) => {
        if (productRefBottom.current) {
            productRefBottom.current.scrollBy({
                left: direction === "right" ? 200 : -200, 
                behavior: "smooth",
            });
        }
    };

    async function productHome() {
        const dataHome = await fetch("http://localhost:8080/product/home", {});
        const listProduct = await dataHome.json();
        setListProduts(listProduct.result);
        console.log(listProduct.result)
      }

    useEffect(() => {
        const interval = setInterval(() => {
          setPrevIndex(currentIndex); 
          setCurrentIndex(prevIndex => (prevIndex + 1) % banners.length); 
        }, 3000); 
    
        return () => clearInterval(interval); 
      }, [currentIndex]);
    
    useEffect(() => {
        productHome();
    }, []);
    
    return (
        <div className="flex flex-col gap-10">
            <div><NavbarLogin /></div>
            <div className="flex justify-center">
                <CategoryMenu setActiveComponent={setActiveComponent} />
                {activeComponent === "TV" && handleCategoryClick("TV")}
                {activeComponent === "Speaker" && handleCategoryClick("Speaker")}
                {activeComponent === "Headset" && handleCategoryClick("Headset")}
                {activeComponent === "HP" && handleCategoryClick("HP")}
                {activeComponent === "Laptop" && handleCategoryClick("Laptop")}
                {activeComponent === "COM" && handleCategoryClick("COM")}
                {activeComponent === "Tool" && handleCategoryClick("Tool")}
                {activeComponent === "Watch" && handleCategoryClick("Watch")}
                {activeComponent === "PS" && handleCategoryClick("PS")}
            </div>
            <div className="flex flex-col gap-10 px-28">
            <div className="w-full h-auto overflow-hidden relative">
                <div className="flex transition-all duration-1000 ease-in-out"
                    style={{
                        transform: `translateX(-${currentIndex * 100}%)`,
                    }}>
                    {banners.map((banner, index) => (
                    <img
                        key={index}
                        src={banner}
                        alt={`Banner ${index + 1}`}
                        className="w-full h-full object-contain flex-shrink-0"
                    />
                    ))}
                </div>
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {banners.map((_, index) => (
                    <div
                        key={index}
                        className={`w-4 h-4 rounded-full transition-all duration-300 ${
                        currentIndex === index ? 'bg-[#33BEC5]' : 'bg-black bg-opacity-25'
                        }`}
                    ></div>
                    ))}
                </div>
            </div>
            <div className="flex bg-[#33BEC5] py-6 pr-6 rounded">
                <div className="flex w-2/3 gap-2" >
                    <div 
                        className="flex gap-2 overflow-x-auto scrollbar-hide"
                        ref={productRefTop}
                        >
                            <div className="bg-[#ECF6FF] rounded p-5 flex-shrink-0">
                                <div className="mb-4">
                                    <img src={product4} alt="" className="w-[150px] h-[150px]" />
                                </div>
                                <div className="font-semibold text-xl mb-2">
                                    Galaxy Watch 6
                                </div>
                                <div className="text-[#FF2525] text-xs font-semibold mb-2 line-through">
                                    Rp 3.500.000
                                </div>
                                <div className="text-center font-semibold">
                                    Rp 2.450.000
                                </div>
                            </div>
                            <div className="bg-[#ECF6FF] rounded p-5 flex-shrink-0">
                                <div className="mb-4">
                                    <img src={product4} alt="" className="w-[150px] h-[150px]" />
                                </div>
                                <div className="font-semibold text-xl mb-2">
                                    Galaxy Watch 6
                                </div>
                                <div className="text-[#FF2525] text-xs font-semibold mb-2 line-through">
                                    Rp 3.500.000
                                </div>
                                <div className="text-center font-semibold">
                                    Rp 2.450.000
                                </div>
                            </div>
                            <div className="bg-[#ECF6FF] rounded p-5 flex-shrink-0">
                                <div className="mb-4">
                                    <img src={product4} alt="" className="w-[150px] h-[150px]" />
                                </div>
                                <div className="font-semibold text-xl mb-2">
                                    Galaxy Watch 6
                                </div>
                                <div className="text-[#FF2525] text-xs font-semibold mb-2 line-through">
                                    Rp 3.500.000
                                </div>
                                <div className="text-center font-semibold">
                                    Rp 2.450.000
                                </div>
                            </div>
                            <div className="bg-[#ECF6FF] rounded p-5 flex-shrink-0">
                                <div className="mb-4">
                                    <img src={product4} alt="" className="w-[150px] h-[150px]" />
                                </div>
                                <div className="font-semibold text-xl mb-2">
                                    Galaxy Watch 6
                                </div>
                                <div className="text-[#FF2525] text-xs font-semibold mb-2 line-through">
                                    Rp 3.500.000
                                </div>
                                <div className="text-center font-semibold">
                                    Rp 2.450.000
                                </div>
                            </div>
                            <div className="bg-[#ECF6FF] rounded p-5 flex-shrink-0">
                                <div className="mb-4">
                                    <img src={product4} alt="" className="w-[150px] h-[150px]" />
                                </div>
                                <div className="font-semibold text-xl mb-2">
                                    Galaxy Watch 6
                                </div>
                                <div className="text-[#FF2525] text-xs font-semibold mb-2 line-through">
                                    Rp 3.500.000
                                </div>
                                <div className="text-center font-semibold">
                                    Rp 2.450.000
                                </div>
                            </div>
                            <div className="bg-[#ECF6FF] rounded p-5 flex-shrink-0">
                                <div className="mb-4">
                                    <img src={product4} alt="" className="w-[150px] h-[150px]" />
                                </div>
                                <div className="font-semibold text-xl mb-2">
                                    Galaxy Watch 6
                                </div>
                                <div className="text-[#FF2525] text-xs font-semibold mb-2 line-through">
                                    Rp 3.500.000
                                </div>
                                <div className="text-center font-semibold">
                                    Rp 2.450.000
                                </div>
                            </div>
                    </div>
                    <div className="flex gap-2 h-full items-end">
                        <div className="bg-[#ECF6FF] p-1 rounded cursor-pointer"
                            onClick={() => handleScroll("left")}
                            >
                            <FaAngleLeft />
                        </div>
                        <div className="bg-[#ECF6FF] p-1 rounded cursor-pointer"
                            onClick={() => handleScroll("right")}
                            >
                            <FaAngleRight />
                        </div>
                    </div>
                </div>
                <div className="flex font-semibold justify-center gap-5 text-white flex-col items-center w-1/3">
                    <div className="flex gap-4 items-end">
                        <div className="text-3xl">
                            Discount
                        </div>
                        <div className="text-5xl">
                            10%
                        </div>
                    </div>
                    <div className="text-3xl">
                        For January
                    </div>
                </div>
            </div>
            <div className="flex gap-5 w-full text-white">
                <div className="w-1/2 bg-[#7EB1BE] p-2 rounded">
                    <div className="flex h-full">
                        <div className="w-1/5">
                            <img src={recomendhp} alt="" className="h-32 w-32"/>
                        </div>
                        <div className="flex h-full items-center justify-center font-semibold text-center text-2xl w-3/5">
                            Recommendations <br />HP for You
                        </div>
                        <div className="flex items-end justify-end w-1/5">
                            Cek Now &gt;
                        </div>
                    </div>
                </div>
                <div className="w-1/2 bg-[#80CFC9] p-2 rounded">
                    <div className="flex h-full">
                        <div className="w-1/5">
                            <img src={recomendlaptop} alt="" className="h-32 w-32"/>
                        </div>
                        <div className="flex h-full items-center justify-center font-semibold text-center text-2xl w-3/5">
                            Recommendations <br />Laptop for You
                        </div>
                        <div className="flex items-end justify-end w-1/5">
                            Cek Now &gt;
                        </div>
                    </div>
                </div>
            </div>
            <div className="">
                <div className="flex justify-between font-semibold text-2xl mb-3">
                    <div className="text-[#408A89]">
                        New Product
                    </div>
                    <div className="flex gap-1 items-end text-white">
                    <div className="bg-[#408A89] text-xs p-1 rounded cursor-pointer" onClick={() => handleScroll2("left")}>
                        <FaAngleLeft />
                    </div>
                    <div className="bg-[#408A89] text-xs p-1 rounded cursor-pointer" onClick={() => handleScroll2("right")}>
                        <FaAngleRight />
                    </div>
                </div>
                </div>
                <div 
                    ref={productRefBottom}
                    className="flex overflow-x-auto scrollbar-hide gap-3">
                        {listProducts.map((items) => {
                            return (
                                <Link to={`/product/${items.id}`}>
                                    <div className="flex flex-col justify-center items-center gap-3 bg-[#ECF6FF] font-semibold p-2 rounded shadow-lg flex-shrink-0">
                                        <div className="flex w-48 h-48 justify-center items-center">
                                            <img src={items.image} alt="" />
                                        </div>
                                        <div className="text-xl">
                                            {items.nameProduct}
                                        </div>
                                        <div className="">
                                            Rp {new Intl.NumberFormat('id-ID').format(items.price)}
                                        </div>
                                    </div>
                                </Link>
                            )
                        })}
                </div>
            </div>
            <div className="">
                <div className="font-semibold mb-5 text-2xl text-[#408A89]">
                    Best Seller
                </div>
                <div className="flex gap-5 bg-[#ECF6FF] p-12 rounded">
                    <div className="w-1/3 flex flex-col gap-5">
                        <div className="flex items-center justify-center flex-col gap-2 bg-white p-2 rounded flex-grow">
                            <div className="w-full h-full">
                                <img src={product4} alt="" className="w-full h-full object-contain" />
                            </div>
                            <div className="text-2xl font-semibold">
                                Galaxy Watch 6
                            </div>
                            <div className="text-2xl font-semibold">
                                Rp 2.450.000
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-5 w-1/3">
                        <div className="flex items-center justify-center flex-col gap-2 bg-white p-2 rounded">
                            <div>
                                <img src={product4} alt="" />
                            </div>
                            <div className="text-2xl font-semibold">
                                Galaxy Watch 6
                            </div>
                            <div className="text-2xl font-semibold">
                                Rp 2.450.000
                            </div>
                        </div>
                        <div className="flex items-center justify-center flex-col gap-2 bg-white p-2 rounded">
                            <div>
                                <img src={product4} alt="" />
                            </div>
                            <div className="text-2xl font-semibold">
                                Galaxy Watch 6
                            </div>
                            <div className="text-2xl font-semibold">
                                Rp 2.450.000
                            </div>
                        </div>
                        <div className="flex items-center justify-center flex-col gap-2 bg-white p-2 rounded">
                            <div>
                                <img src={product4} alt="" />
                            </div>
                            <div className="text-2xl font-semibold">
                                Galaxy Watch 6
                            </div>
                            <div className="text-2xl font-semibold">
                                Rp 2.450.000
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-5 w-1/3">
                        <div className="flex items-center justify-center flex-col gap-2 bg-white p-2 rounded">
                            <div>
                                <img src={product4} alt="" />
                            </div>
                            <div className="text-2xl font-semibold">
                                Galaxy Watch 6
                            </div>
                            <div className="text-2xl font-semibold">
                                Rp 2.450.000
                            </div>
                        </div>
                        <div className="flex items-center justify-center flex-col gap-2 bg-white p-2 rounded">
                            <div>
                                <img src={product4} alt="" />
                            </div>
                            <div className="text-2xl font-semibold">
                                Galaxy Watch 6
                            </div>
                            <div className="text-2xl font-semibold">
                                Rp 2.450.000
                            </div>
                        </div>
                        <div className="flex items-center justify-center flex-col gap-2 bg-white p-2 rounded">
                            <div>
                                <img src={product4} alt="" />
                            </div>
                            <div className="text-2xl font-semibold">
                                Galaxy Watch 6
                            </div>
                            <div className="text-2xl font-semibold">
                                Rp 2.450.000
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <div><Footer /></div>
        </div>
    )
}
export default Home;


