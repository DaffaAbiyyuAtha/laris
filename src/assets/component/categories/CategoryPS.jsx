import { useState, useEffect } from "react";
import NotFound from "./NotFound";

export default function CategoryPS() {
  const [page, setPage] = useState(1);
  const [products, setProducts] = useState([]);

  const itemsPerPage = 8;
  const totalPages = Math.ceil(products.length / itemsPerPage);
  const startIndex = (page - 1) * itemsPerPage;
  const displayedProducts = products.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch(
          "http://localhost:8080/product/category?categoriesId=9"
        );
        const res = await fetch("http://localhost:8100/categories/filter?search=PS");
        const data = await res.json();
        console.log("Fetched data:", data);

        setProducts(Array.isArray(data.result) ? data.result : []);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }
    fetchProducts();
  }, []);

  return (
    <>
      {products.length === 0 ? (
        <div className="flex items-center justify-center h-full">
          <NotFound />
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-full gap-6">
          <div className="grid grid-cols-4 gap-x-10 gap-y-12">
            {(displayedProducts || []).map((product, index) => (
              <div
                key={index}
                className="flex flex-col bg-[#ECF6FF] gap-6 px-11 shadow-lg rounded-lg shadow-black/50 py-3"
              >
                <div className="flex flex-col gap-4">
                  <img
                    src={product.images?.[0] || "/placeholder.png"}
                    alt={product.name_product || "Product Name"}
                    className="w-40 h-40 object-cover"
                  />
                  <h1>
                    {product.name_product || "Nama Produk Tidak Diketahui"}
                  </h1>
                </div>
                <h2>Rp {product.price?.toLocaleString("id-ID") || "0"}</h2>
              </div>
            ))}
          </div>
          <div className="flex justify-between items-center w-full px-6">
            <div className="flex text-[#408A89] text-2xl gap-2 items-center">
              <h1>Page</h1>
              <h2>
                {page}/{totalPages || 1}
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
      )}
    </>
  );
}
