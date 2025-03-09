import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ProductPrice({ data = {} }) {
  const nav = useNavigate();
  const images = data.images || [];
  const [mainImage, setMainImage] = useState("");

  useEffect(() => {
    if (images.length > 0) {
      setMainImage(images[0]);
    }
  }, [images]);

  const handleAddToCart = () => nav("/product/cart");

  const discountedPrice = data.price
    ? data.discount > 0
      ? data.price - (data.price * data.discount) / 100
      : data.price
    : 0;

  return (
    <div className="flex justify-between items-start gap-16 w-full">
      <div className="flex flex-col items-center gap-3">
        <img
          src={mainImage}
          alt="product"
          className="w-96 h-96 object-cover rounded-lg border border-gray-300"
        />
        <div className="flex gap-4 justify-center">
          {images.length > 0 ? (
            images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`${data.name_product || "Product"} ${index + 1}`}
                className={`w-24 h-24 object-cover rounded-lg cursor-pointer border-2 ${
                  mainImage === img ? "border-[#33BEC5]" : "border-transparent"
                } hover:border-[#33BEC5]`}
                onClick={() => setMainImage(img)}
              />
            ))
          ) : (
            <p className="text-gray-500">No images available</p>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-8 items-start w-2/6">
        <div className="flex flex-col gap-2 items-start">
          <h1 className="text-xl font-bold">{data.name_categories || "Category"}</h1>
          <h2 className="text-2xl">{data.name_product || "Product Name"}</h2>
        </div>

        <div className="flex gap-6 items-center">
          <h1 className="text-2xl font-semibold">Rp {discountedPrice.toLocaleString()}</h1>
          {data.discount > 0 && (
            <div className="flex items-center gap-1">
              <h2 className="text-2xl font-bold text-stone-500 line-through">
                Rp {data.price.toLocaleString()}
              </h2>
              <h3 className="text-2xl text-[#FF2525] font-bold">{data.discount}%</h3>
            </div>
          )}
        </div>
        <div className="flex flex-col gap-2 items-start">
          <h1 className="text-xl font-bold">Color</h1>
          <img
            src={mainImage}
            alt="product color"
            className="w-32 h-32 object-cover rounded-lg border border-gray-300"
          />
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-xl font-bold">Model</h1>
          <div className="flex gap-2">
            <button className="bg-[#33BEC5] rounded-lg text-white px-4 py-3">12 UHS</button>
            <button className="border-[#33BEC5] border rounded-lg bg-white px-4 py-3">12 UE</button>
          </div>
        </div>
        <div className="flex items-center gap-2 w-full">
          <button className="bg-[#33BEC5] rounded-lg w-full text-white px-4 py-3" onClick={handleAddToCart}>
            Add to Cart
          </button>
          <button className="border-[#33BEC5] border rounded-lg bg-white px-4 py-3">
            <svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M18.3182 0.625C15.9467 0.625 13.8847 1.77082 12.6719 3.69101C11.459 1.77082 9.39702 0.625 7.02557 0.625C5.22922 0.627242 3.50704 1.39282 2.23683 2.75379C0.966616 4.11476 0.252092 5.95998 0.25 7.88468C0.25 11.4177 2.30526 15.0948 6.3593 18.8117C8.21699 20.5078 10.2237 22.007 12.3512 23.2885C12.4498 23.3453 12.5599 23.375 12.6719 23.375C12.7838 23.375 12.894 23.3453 12.9926 23.2885C15.1201 22.007 17.1268 20.5078 18.9844 18.8117C23.0385 15.0948 25.0938 11.4177 25.0938 7.88468C25.0917 5.95998 24.3771 4.11476 23.1069 2.75379C21.8367 1.39282 20.1145 0.627242 18.3182 0.625ZM12.6719 21.8124C10.8188 20.6666 1.60511 14.6265 1.60511 7.88468C1.60661 6.34487 2.17817 4.86857 3.19438 3.77976C4.21059 2.69094 5.58843 2.07854 7.02557 2.07694C9.31571 2.07694 11.2388 3.38731 12.0451 5.49746C12.0962 5.63061 12.183 5.74449 12.2946 5.82464C12.4062 5.90479 12.5375 5.94758 12.6719 5.94758C12.8062 5.94758 12.9375 5.90479 13.0491 5.82464C13.1607 5.74449 13.2476 5.63061 13.2986 5.49746C14.1049 3.38731 16.028 2.07694 18.3182 2.07694Z"
                fill="#33BEC5"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
