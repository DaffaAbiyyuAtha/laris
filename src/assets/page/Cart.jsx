import Footer from "../component/Footer";
import NavbarLogin from "../component/NavbarLogin";
import { FaXmark } from "react-icons/fa6";
import ProductLaptop1 from "../img/productLaptop1.svg";

export default function Cart() {
  const products = Array(8).fill({
    name: "MSI",
    type: "Raider GE76",
    model: "12 UE",
    amount: 1,
    price: "Rp 71.999.000",
    priceDiskon: "Rp 75.599.000",
    diskon: "-5%",
    img: ProductLaptop1,
  });
  return (
    <div className="flex flex-col h-full justify-between">
      <NavbarLogin />
      <div className="flex justify-center w-full px-32 py-32 gap-16">
        <div className="flex gap-4 items-start flex-col">
          <h1 className="text-xl font-bold">Tas ({products.length})</h1>
          <div className="flex  items-start gap-3 ">
            <div className="flex flex-col h-[750px] no-scrollbar px-2 overflow-y-scroll gap-9">
              {products.map((items) => {
                return (
                  <div className="flex bg-[#ECF6FF] gap-8  px-5 pt-6 w-full  shadow-black/50 shadow-lg rounded-lg pb-[52px]">
                    <img src={items.img} alt="product" />
                    <div className="flex flex-col gap-8">
                      <div className="flex flex-col gap-2">
                        <h1 className="text-xl font-semibold">{items.name}</h1>
                        <h2 className="text-2xl">{items.type}</h2>
                      </div>
                      <div className="flex flex-col gap-2">
                        <h1 className="text-xl font-semibold">Model</h1>
                        <h2 className="text-2xl">{items.model}</h2>
                      </div>
                      <div className="flex flex-col gap-2">
                        <h1 className="text-xl font-semibold">Amount</h1>
                        <h2 className="text-2xl">{items.amount}</h2>
                      </div>
                    </div>
                    <div className="flex flex-col items-end justify-between">
                      <button>
                        <FaXmark />
                      </button>
                      <div className="flex items-center">
                        <h1 className="font-bold text-2xl">{items.price}</h1>
                        <h2 className="text-2xl font-bold text-stone-500 line-through">
                          {items.priceDiskon}
                        </h2>
                        <h3 className="text-2xl text-[#FF2525] font-bold">
                          {items.diskon}
                        </h3>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="flex flex-col gap-9">
              <div className="flex flex-col  gap-4">
                <h1 className="text-xl font-bold">Total</h1>
                <div className="flex flex-col px-5 py-4 rounded-xl gap-3 w-[406px] shadow-black/50 shadow-lg bg-[#ECF6FF]">
                  <div className="flex justify-between text-xl font-bold">
                    <h1>Subtotal ({products.length} Product)</h1>
                    <h2>Rp 92.498.200</h2>
                  </div>
                  <div className="flex justify-between text-xl font-bold">
                    <h1>Vouchers</h1>
                    <h2>-</h2>
                  </div>
                  <p className="text-[#2FFF5D] text-xs">
                    See All Your vouchers
                  </p>
                  <div className="flex justify-between text-xl font-bold">
                    <h1>Total</h1>
                    <h2>Rp 92.498.200</h2>
                  </div>
                </div>
              </div>
              <button className="px-28 py-3 bg-[#33BEC5] text-white rounded-xl">
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
