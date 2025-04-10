import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import { FaXmark } from "react-icons/fa6";
import ProductLaptop1 from "../img/productLaptop1.svg";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../redux/reducers/cartSlice";

export default function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const tokens = useSelector((state) => state.auth.token);

  const [amounts, setAmounts] = useState(
    cart.reduce((acc, item) => ({ ...acc, [item.id]: 1 }), {})
  );

  const handleAmountChange = (id, value) => {
    const newValue = value === "" ? "" : Math.max(1, parseInt(value) || 1);
    setAmounts((prev) => ({ ...prev, [id]: newValue }));
  };

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * amounts[item.id],
    0
  );
  const total = cart.reduce(
    (sum, item) => sum + item.finalPrice * amounts[item.id],
    0
  );
  const totalDiscount = subtotal - total;

  async function Transaction(e) {
    e.preventDefault();

    const items = cart.map((item) => ({
      product_id: item.id,
      qty: amounts[item.id],
    }));

    const requestData = {
      products: items,
    };

    try {
      const response = await fetch("http://localhost:8100/order", {
        method: "POST",
        headers: {
          Authorization: "Bearer " + tokens,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });

      const result = await response.json();
      console.log(result, "ini hasil");
      if (result.result.items) {
        alert("Transaksi berhasil!");
      } else {
        alert("Transaksi gagal!");
      }
    } catch (error) {
      console.error("Error saat transaksi:", error);
      alert("Terjadi kesalahan saat memproses transaksi.");
    }
  }

  return (
    <div className="flex flex-col h-full justify-between">
      <Navbar />
      <div className="flex justify-center w-full px-32 py-32 gap-16">
        <div className="flex gap-4 items-start flex-col">
          <h1 className="text-xl font-bold">Tas ({cart.length})</h1>
          <div className="flex  items-start gap-3 ">
            <div className="flex flex-col h-[750px] no-scrollbar px-2 overflow-y-scroll gap-9">
              {cart.length === 0 ? (
                <div className="">You don't have a cart at the moment</div>
              ) : (
                cart.map((items) => (
                  <div
                    key={items.id}
                    className="flex bg-[#ECF6FF] gap-8  px-5 pt-6 w-full justify-between  shadow-black/50 shadow-lg rounded-lg pb-[52px]"
                  >
                    <img src={items.image} alt="product" className="w-60" />
                    <div className="flex flex-col justify-between">
                      <div className="flex flex-col gap-2">
                        <h1 className="text-xl font-semibold">
                          {items.category}
                        </h1>
                        <h2 className="text-2xl">{items.name}</h2>
                      </div>
                      {/* <div className="flex flex-col gap-2">
                      <h1 className="text-xl font-semibold">Model</h1>
                      <h2 className="text-2xl">{items.model}</h2>
                    </div> */}
                      <div className="flex flex-col gap-2">
                        <h1 className="text-xl font-semibold">Amount</h1>
                        <input
                          type="number"
                          value={amounts[items.id]}
                          onChange={(e) =>
                            handleAmountChange(items.id, e.target.value)
                          }
                          className="w-20 text-center border rounded-md p-1"
                          min="1"
                        />
                      </div>
                    </div>
                    <div className="flex gap-3 justify-start items-end">
                      <h1 className="font-bold text-2xl">
                        Rp{" "}
                        {(items.finalPrice * amounts[items.id]).toLocaleString(
                          "id-ID"
                        )}
                      </h1>
                      {items.discount > 0 ? (
                        <>
                          <h2 className="text-2xl font-bold text-stone-500 line-through">
                            Rp{" "}
                            {(items.price * amounts[items.id]).toLocaleString(
                              "id-ID"
                            )}
                          </h2>
                          <h3 className="text-2xl text-[#FF2525] font-bold">
                            {items.discount} %
                          </h3>
                        </>
                      ) : null}
                    </div>
                    <div className="flex flex-col items-end justify-between">
                      <button
                        onClick={() => dispatch(removeFromCart(items.id))}
                      >
                        <FaXmark />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
            <div className="flex flex-col gap-9">
              <div className="flex flex-col  gap-4">
                <h1 className="text-xl font-bold">Total</h1>
                <div className="flex flex-col px-5 py-4 rounded-xl gap-3 w-[406px] shadow-black/50 shadow-lg bg-[#ECF6FF]">
                  <div className="flex justify-between text-xl font-bold">
                    <h1>Subtotal ({cart.length} Product)</h1>
                    <h2>
                      {subtotal > 0
                        ? `Rp ${subtotal.toLocaleString("id-ID")}`
                        : "-"}
                    </h2>
                  </div>
                  <div className="flex justify-between text-red-500 text-xl font-bold mb-8">
                    <h1>Total Discount</h1>
                    <h2>
                      {totalDiscount > 0
                        ? `Rp ${totalDiscount.toLocaleString("id-ID")}`
                        : "-"}
                    </h2>
                  </div>
                  <div className="flex justify-between text-xl font-bold">
                    <h1>Total</h1>
                    <h2>
                      {total > 0 ? `Rp ${total.toLocaleString("id-ID")}` : "-"}
                    </h2>
                  </div>
                </div>
              </div>
              <button
                onClick={Transaction}
                className="px-28 py-3 bg-[#33BEC5] text-white rounded-xl shadow-black/50 shadow-lg active:shadow-none"
              >
                Process to Buy
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
