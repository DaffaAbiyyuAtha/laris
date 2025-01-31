import { useState } from "react";
import product3 from "../../img/product3.svg";

export default function CategoryHeadset() {
  const [page, setPage] = useState(1);
  const products = Array(16).fill({
    name: "Cloud Mix",
    price: "Rp 20.699.000",
    img: product3,
  });

  const itemsPerPage = 8;
  const totalPages = Math.ceil(products.length / itemsPerPage);
  const startIndex = (page - 1) * itemsPerPage;
  const displayedProducts = products.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div className="flex flex-col items-center justify-center h-full gap-6">
      <div className="grid grid-cols-4 gap-x-10 gap-y-12">
        {displayedProducts.map((product, index) => (
          <div
            key={index}
            className="flex flex-col bg-[#ECF6FF] gap-6 px-11 shadow-lg rounded-lg shadow-black/50 py-3"
          >
            <div className="flex flex-col gap-4">
              <img src={product.img} alt={product.name} />
              <h1>{product.name}</h1>
            </div>
            <h2>{product.price}</h2>
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center w-full px-6">
        <div className="flex text-[#408A89] text-2xl gap-2 items-center">
          <h1>Page</h1>
          <h2>
            {page}/{totalPages}
          </h2>
        </div>
        <div className="flex gap-6 items-center">
          <button
            className={`px-3 py-1 text-xl bg-[#408A89] text-white rounded-2xl ${
              page === 1 ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={() => page > 1 && setPage(page - 1)}
          >
            Previous
          </button>
          <button
            className={`px-3 py-1 text-xl bg-[#408A89] text-white rounded-2xl ${
              page === totalPages ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={() => page < totalPages && setPage(page + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
