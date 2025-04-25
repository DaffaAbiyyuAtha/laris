import React, { useState, useEffect } from "react";
import Sidebar from "../component/Sidebar";
import NavbarDashboard from "../component/NavbarDashboard";
import product1 from "../img/product1.svg";
import product2 from "../img/product2.svg";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function DashboardTransactions() {
  const url = `http://localhost:8100`;
  const navigate = useNavigate();
  const [product, setProducts] = useState([]);
  const [productid, setListProducts] = useState([]);
  const token = useSelector((state) => state.auth.token);
  const [loading, setLoading] = useState(false);
  async function order() {
    const data = await fetch(`${url}/order`, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    const listData = await data.json();
    setProducts(listData.result);
  }

  async function productId() {
    const dataId = await fetch(`${url}/product/home`, {});
    const listProduct = await dataId.json();
    setListProducts(listProduct.result);
    console.log(listProduct.result);
  }
  useEffect(() => {
    order();
    productId();
  }, []);

  function buttonProduct(order_id) {
    setLoading(true);
    setTimeout(() => {
      navigate(`/dashboard/transaction/detail/${order_id}`);
    });
  }

  return (
    <div className="flex h-screen text-[#0C0D36]">
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="spinner"></div>
        </div>
      )}
      <div className="w-1/5">
        <Sidebar />
      </div>
      <div className="bg-[rgb(245,245,251)] w-4/5 p-10 flex flex-col h-screen">
        <div className="flex justify-between">
          <div className="text-2xl text-[#0C0D36]">Transactions</div>
          <div className="">
            <NavbarDashboard />
          </div>
        </div>
        <div className="text-[#9191A9] mb-6 font-light">
          Big result start from the small one
        </div>
        <div className="flex gap-8">
          <div className="mb-6 font-medium text-lg border-b-2 border-[#0C0D36]">
            Sell Product
          </div>
          <div className="mb-6 font-medium text-lg text-[#9191A9]">
            Buy Product
          </div>
        </div>
        <div className="h-0 flex-grow overflow-y-auto">
          {product.map((item, index) => {
            const productData = productid.find(
              (prod) => prod.id === item?.order_items[0]?.product_id
            );
            return (
              <Link
                key={index}
                onClick={() => buttonProduct(item.order_id)}
                className="flex text-lg mb-4 items-center bg-white rounded-lg p-3"
              >
                <div className="flex gap-3 items-center w-2/6">
                  <div className="">
                    <img
                      src={item?.order_items[0]?.product_image}
                      alt=""
                      className="h-11 w-11 rounded"
                    />
                  </div>
                  <div className="text-lg">
                    {productData?.nameProduct || "Tidak ada nama produk"}
                  </div>
                </div>
                <div className="w-2/6">{item?.user?.fullname}</div>
                <div className="w-2/6">
                  {new Date(item.transaction_time).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </div>

                <div className="">
                  <FaArrowAltCircleRight />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default DashboardTransactions;
