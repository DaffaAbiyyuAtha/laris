import { React, useEffect, useState } from "react";
import Sidebar from "../component/Sidebar";
import NavbarDashboard from "../component/NavbarDashboard";
import { data, Link, useParams } from "react-router-dom";
import product1 from "../img/product1.svg";
import product2 from "../img/product2.svg";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { useSelector } from "react-redux";

function DashboardTransactionsDetail() {
  const { order_id } = useParams();
  const url = `http://localhost:8100`;
  const [status, setStatus] = useState("pending");
  const token = useSelector((state) => state.auth.token);
  const [dataProduct, setDataProduct] = useState([]);
  const [dataProfile, setDataProfile] = useState([]);
  const [productid, setListProducts] = useState([]);
  const productData = productid.find(
    (prod) => prod.id === dataProduct?.order_items[0]?.product_id
  );
  console.log(productData, "data");

  async function profile() {
    const data = await fetch(`${url}/profile`, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    const listData = await data.json();
    setDataProfile(listData.result);
  }

  async function product() {
    const dataId = await fetch(`${url}/product/home`, {});
    const listProduct = await dataId.json();
    setListProducts(listProduct.result);
    console.log(listProduct.result);
  }

  async function productId() {
    const dataProductId = await fetch(`${url}/order/` + order_id);
    const allDataProduct = await dataProductId.json();
    setDataProduct(allDataProduct.result);
  }

  useEffect(() => {
    profile();
    product();
    productId();
  }, []);

  return (
    <div className="flex h-screen text-[#0C0D36]">
      <div className="w-1/5">
        <Sidebar />
      </div>
      <div className="bg-[rgb(245,245,251)] w-4/5 p-10 flex flex-col h-screen">
        <div className="flex justify-between">
          <div className="text-2xl text-[#0C0D36]">#STORE0839</div>
          <div className="">
            <NavbarDashboard />
          </div>
        </div>
        <div className="flex text-[#9191A9] mb-6 gap-4">
          <Link to="/dashboard/transaction/sell-product" className="">
            Transactions
          </Link>
          <div className="">/</div>
          <div className="text-[#0C0D36] font-medium">Details</div>
        </div>
        <div className="h-0 flex-grow overflow-y-auto">
          <div className="bg-white p-10 rounded-lg text-[#0C0D36] h-screen">
            <div className="flex flex-col justify-between h-full">
              <div className="">
                <div className="flex mb-6 gap-9">
                  <div className="w-1/3">
                    {dataProduct?.order_items?.[0]?.product_image && (
                      <img
                        src={dataProduct.order_items[0].product_image}
                        alt="Product"
                        className=" object-cover"
                      />
                    )}
                  </div>
                  <div className="w-1/3">
                    <div className="mb-6">
                      <div className="text-[#C5C5C5] mb-2">Customer Name</div>
                      <div className="text-lg text-[#0C0D36]">
                        {dataProduct?.user?.fullname}
                      </div>
                    </div>
                    <div className="mb-6">
                      <div className="text-[#C5C5C5] mb-2">
                        Date of Transaction
                      </div>
                      <div className="text-lg text-[#0C0D36]">
                        {new Date(
                          dataProduct?.transaction_time
                        ).toLocaleDateString("en-US", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </div>
                    </div>
                    <div className="mb-6">
                      <div className="text-[#C5C5C5] mb-2">Total Amount</div>
                      {dataProduct?.order_items?.[0]?.price && (
                        <div className="text-lg text-[#0C0D36]">
                          {new Intl.NumberFormat("id-ID", {
                            style: "currency",
                            currency: "IDR",
                          }).format(dataProduct?.order_items?.[0]?.price)}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="w-1/3">
                    <div className="mb-6">
                      <div className="text-[#C5C5C5] mb-2">Product Name</div>
                      <div className="text-lg text-[#0C0D36]">
                        {productData?.nameProduct || "Tidak ada nama produk"}
                      </div>
                    </div>
                    <div className="mb-6">
                      <div className="text-[#C5C5C5] mb-2">Status</div>
                      <div className="text-lg text-[#F32355]">
                        {dataProduct?.payment_status}
                      </div>
                    </div>
                    <div className="mb-6">
                      <div className="text-[#C5C5C5] mb-2">Mobile</div>
                      <div className="text-lg text-[#0C0D36]">
                        {dataProfile?.user?.mobile || (
                          <p className="text-red-300">Mobile not yet charged</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-[#0C0D36] text-xl mb-6">
                  Shipping Information
                </div>
                <div className="mb-6">
                  <div className="text-[#C5C5C5] mb-2">Address</div>
                  <div className="text-lg text-[#0C0D36]">
                    {dataProfile?.profile?.address || (
                      <p className="text-red-300">Address not filled in</p>
                    )}
                  </div>
                </div>
                <div className="flex">
                  <div className="w-1/3 mb-6">
                    <div className="text-[#C5C5C5] mb-2">Province</div>
                    <div className="text-lg text-[#0C0D36]">
                      {dataProfile?.profile?.province || (
                        <p className="text-red-300">Province not filled yet</p>
                      )}
                    </div>
                  </div>
                  <div className="w-1/3 mb-6">
                    <div className="text-[#C5C5C5] mb-2">City</div>
                    <div className="text-lg text-[#0C0D36]">
                      {dataProfile?.profile?.city || (
                        <p className="text-red-300">City is not filled yet</p>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex">
                  <div className="w-1/3 mb-6">
                    <div className="text-[#C5C5C5] mb-2">Postal Code</div>
                    <div className="text-lg text-[#0C0D36]">
                      {dataProfile?.profile?.postalCode || (
                        <p className="text-red-300">
                          Postal Code is not filled in
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="w-1/3 mb-6">
                    <div className="text-[#C5C5C5] mb-2">Country</div>
                    <div className="text-lg text-[#0C0D36]">
                      {dataProfile?.profile?.country || (
                        <p className="text-red-300">
                          Country Code is not filled in
                        </p>
                      )}
                    </div>
                  </div>
                </div>
                <div className="w-1/3 mb-6">
                  <div className="text-[#C5C5C5] mb-2">Status</div>
                  <select
                    className={`py-2 px-3 rounded text-white ${
                      status === "shipped"
                        ? "bg-green-500"
                        : status === "cancelled"
                        ? "bg-red-500"
                        : "bg-gray-300 text-black"
                    }`}
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                  >
                    <option value="pending">Pending</option>
                    <option value="shipped">Shipped</option>
                    <option value="cancelled">Cancelled</option>
                  </select>
                </div>
              </div>

              <div className="flex justify-end">
                <button
                  type="button"
                  className="text-white font-medium bg-[#29A867] rounded-md py-2 px-12"
                >
                  Save Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default DashboardTransactionsDetail;
