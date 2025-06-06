import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";
import { FaRegHeart } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/reducers/cartSlice";

export default function ProductPrice({ data = {}, setMessage, setLoading }) {
  console.log(data)
  const cart = useSelector((state) => state.cart.cart);
  const [wishlistUpdated, setWishlistUpdated] = useState(false);
  const nav = useNavigate();
  const navigate = useNavigate();
  const tokens = useSelector((state) => state.auth.token);
  const images = data.image || [];
  const [mainImage, setMainImage] = useState("");
  const [listProducts, setListProduts] = React.useState([]);
  const [wishlist, setWishlist] = React.useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchWishlist() {
      if (!tokens) return;
      try {
        const response = await fetch("http://localhost:8100/wishlist/", {
          method: "GET",
          headers: {
            Authorization: "Bearer " + tokens,
          },
        });
  
        const data = await response.json();
        setListProduts(Array.isArray(data.result) ? data.result : []);
        
      } catch (error) {
        console.error("Error fetching wishlist:", error);
        setListProduts([]);
      }
    }
  
    fetchWishlist();
  }, [tokens]);
  
  
  useEffect(() => {
    const isInWishlist = listProducts.some((item) => item.product_id === data.id);
    console.log("Is In Wishlist:", isInWishlist);
    setWishlist(isInWishlist);
  }, [listProducts, data.id]);

  async function deleteWishlist() {
    setLoading(true);
  
    if (!tokens) {
      setMessage("You must login to remove from wishlist");
      setTimeout(() => setLoading(false), 2000);
      return;
    }
  
    try {
      const dataDelete = await fetch(`http://localhost:8100/wishlist/delete?product_id=` + data.id, {
        method: 'DELETE',
        headers: {
          Authorization: "Bearer " + tokens,
        },
      });
  
      const listDataDelete = await dataDelete.json();
      if (listDataDelete.success) {
        setMessage("You remove " + data.nameProduct + " from your wishlist");
        setWishlistUpdated(true);
      }
    } catch (error) {
      setMessage("Failed to remove from wishlist");
    } finally {
      setTimeout(() => setLoading(false), 2000);
    }
  }
  async function addWishlist() {
    setLoading(true);
  
    if (!tokens) {
      setMessage("You must login to add to wishlist");
      setTimeout(() => setLoading(false), 2000);
      return;
    }
  
    const createWishlist = data.id;
    const form = new URLSearchParams();
    form.append("product_id", createWishlist);
    
    const response = await fetch("http://localhost:8100/wishlist/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Bearer " + tokens,
      },
      body: form,
    });
    
    const result = await response.json();
    if (result.success) {
      setMessage("You have added " + data.nameProduct + " to your wishlist");
      setWishlistUpdated(true);
    }
  
    setTimeout(() => setLoading(false), 2000);
  }
  
  useEffect(() => {
    if (images.length > 0) {
      setMainImage(images[0]);
    }
  }, [images]);

  const handleAddToCart = () => {
    if (!tokens) {
      setMessage("You must login first to add cart");
      return;
    }
  
    const productData = {
      id: data.id,
      name: data.nameProduct,
      price: data.price,
      discount: data.discount,
      finalPrice: data.discount
        ? data.price - (data.price * data.discount) / 100
        : data.price,
      image: data.image?.[0],
      category: data.name_categories,
    };

    if (cart.some(item => item.id === data.id)) {
      setMessage("This product is already in your cart");
      return;
    }

    console.log("Before dispatch:", cart);
    dispatch(addToCart(productData));
    console.log("After dispatch:", cart);
    setMessage("You have successfully added the product to your cart");
  
    // setTimeout(() => {
    //   nav(0);
    // }, 2000);
  };

  const discountedPrice = data.price
    ? data.discount > 0
      ? data.price - (data.price * data.discount) / 100
      : data.price
    : 0;

  useEffect(() => {
    if (wishlistUpdated) {
      const timer = setTimeout(() => {
        navigate(0);
      }, 2000);
  
      return () => clearTimeout(timer);
    }
  }, [wishlistUpdated, navigate]);

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
          <h2 className="text-2xl">{data.nameProduct || "Product Name"}</h2>
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
          <button 
            className="bg-[#33BEC5] rounded-lg w-full text-white px-4 py-3" onClick={handleAddToCart}>
            Add to Cart
          </button>
          {wishlist === true ? (
            <button
              onClick={deleteWishlist}
              className="border-[#33BEC5] border rounded-lg bg-[#33BEC5] px-5 py-4">
                <FaRegHeart className="text-white"/>
            </button>
          ) : (
            <button
              onClick={addWishlist} 
              className="border-[#33BEC5] border rounded-lg bg-white px-5 py-4">
                <FaRegHeart className="text-[#33BEC5]"/>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
