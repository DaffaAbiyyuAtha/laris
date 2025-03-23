import React from "react";
import { useEffect } from "react";
import Footer from "../component/Footer";
import { useParams } from "react-router-dom";
import Navbar from "../component/Navbar";
import ProductPrice from "../component/product/ProductPrice";
import ProductSpecification from "../component/product/ProductSpecification";

export default function Product() {
  const { id } = useParams();
  const [data, setData] = React.useState({});
  const [message, setMessage] = React.useState(true);

  useEffect(() => {
    if (message) {
        const timer = setTimeout(() => setMessage(""), 3000);
        return () => clearTimeout(timer);
    }
  }, [message]);

  useEffect(() => {
    async function datas() {
      const dataProduct = await fetch("http://localhost:8100/product/" + id);
      const listData = await dataProduct.json();
      setData(listData.result);
      console.log(listData.result)
    }
    datas();
  }, []);
  return (
    <div className="flex flex-col h-full justify-between">
      <Navbar />
      {typeof message === "string" && message && (
        <div
            className={`fixed top-20 right-1/2 transform translate-x-1/2 px-4 py-2 rounded-lg shadow-lg transition-opacity duration-500 ease-in-out ${
            message.toLowerCase().includes("failed") ? "bg-red-500" : "bg-[#33BEC5]"
            } ${message ? "opacity-100" : "opacity-0"} text-white`}
        >
            {message}
        </div>
      )}
      <div className="flex flex-col items-center w-full px-32 justify-center py-32 gap-16 h-full">
        <ProductPrice data={data} setMessage={setMessage} />
        <ProductSpecification data={data} />
      </div>
      <Footer />
    </div>
  );
}
