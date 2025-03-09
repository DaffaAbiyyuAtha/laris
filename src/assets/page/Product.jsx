import React from "react";
import { useEffect } from "react";
import Footer from "../component/Footer";
import { useParams } from "react-router-dom";
import NavbarLogin from "../component/NavbarLogin";
import ProductPrice from "../component/product/ProductPrice";
import ProductSpecification from "../component/product/ProductSpecification";

export default function Product() {
  const { id } = useParams();
  const [data, setData] = React.useState({});
  useEffect(() => {
    async function datas() {
      const dataProduct = await fetch("http://localhost:8080/product/" + id);
      const listData = await dataProduct.json();
      setData(listData.result);
      console.log(listData.result)
    }
    datas();
  }, []);
  return (
    <div className="flex flex-col h-full justify-between">
      <NavbarLogin />
      <div className="flex flex-col items-center w-full px-32 justify-center py-32 gap-16 h-full">
        <ProductPrice data={data} />
        <ProductSpecification data={data} />
      </div>
      <Footer />
    </div>
  );
}
