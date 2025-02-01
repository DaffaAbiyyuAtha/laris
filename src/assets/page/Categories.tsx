import React, { useState } from "react";
import NavbarLogin from "../../../../../laris/src/assets/component/NavbarLogin";
import Footer from "../../../../../laris/src/assets/component/Footer";
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

export default function Categories() {
  const [activeComponent, setActiveComponent] = useState<string>("TV");
  return (
    <div className="flex flex-col h-full justify-between gap-16">
      <NavbarLogin />
      <div className="flex flex-col items-center gap-16 h-screen">
        <CategoryMenu setActiveComponent={setActiveComponent} />
        {activeComponent === "TV" && <CategoryTV />}
        {activeComponent === "Speaker" && <CategorySpeaker />}
        {activeComponent === "Headset" && <CategoryHeadset />}
        {activeComponent === "HP" && <CategoryHP />}
        {activeComponent === "Laptop" && <CategoryLaptop />}
        {activeComponent === "COM" && <CategoryCOM />}
        {activeComponent === "Tool" && <CategoryTool />}
        {activeComponent === "Watch" && <CategoryWatch />}
        {activeComponent === "PS" && <CategoryPS />}
      </div>
      <Footer />
    </div>
  );
}
