import React, { useState, useEffect } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import CategoryMenu from "../component/categories/CategoryMenu";
import CategoryTV from "../component/categories/CategoryTV";
import CategoryHeadset from "../component/categories/CategoryHeadset";
import CategorySpeaker from "../component/categories/CategorySpeaker";
import CategoryHP from "../component/categories/CategoryHP";
import CategoryLaptop from "../component/categories/CategoryLaptop";
import CategoryCOM from "../component/categories/CategoryCOM";
import CategoryTool from "../component/categories/CategoryTool";
import CategoryWatch from "../component/categories/CategoryWatch";
import CategoryPS from "../component/categories/CategoryPS";
import { useLocation } from "react-router-dom";

export default function Categories() {
  const location = useLocation();
  const defaultCategory = location.state?.activeComponent || "TV";
  const [activeComponent, setActiveComponent] = useState(defaultCategory);
  const [product, setProduct] = React.useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch(
          `http://localhost:8100/categories/filter?search=${activeComponent}`
        );
        const data = await res.json();
        setProduct(data.result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchProducts();
  }, [activeComponent]);

  return (
    <div className="flex flex-col h-full justify-between gap-16">
      <Navbar />
      <div className="flex flex-col items-center gap-16 h-screen">
        <CategoryMenu setActiveComponent={setActiveComponent} />
        {activeComponent === "TV" && <CategoryTV products={product} />}
        {activeComponent === "Speaker" && (
          <CategorySpeaker products={product} />
        )}
        {activeComponent === "Headset" && (
          <CategoryHeadset products={product} />
        )}
        {activeComponent === "HP" && <CategoryHP products={product} />}
        {activeComponent === "Laptop" && <CategoryLaptop products={product} />}
        {activeComponent === "COM" && <CategoryCOM products={product} />}
        {activeComponent === "Tool" && <CategoryTool products={product} />}
        {activeComponent === "Watch" && <CategoryWatch products={product} />}
        {activeComponent === "PS" && <CategoryPS products={product} />}
      </div>
      <Footer />
    </div>
  );
}
