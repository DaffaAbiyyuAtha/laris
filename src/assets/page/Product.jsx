import Footer from "../component/Footer";
import NavbarLogin from "../component/NavbarLogin";
import ProductPrice from "../component/product/ProductPrice";
import ProductSpecification from "../component/product/ProductSpecification";

export default function Product() {
  return (
    <div className="flex flex-col h-full justify-between">
      <NavbarLogin />
      <div className="flex flex-col items-center w-full px-32 justify-center py-32 gap-16 h-full">
        <ProductPrice />
        <ProductSpecification />
      </div>
      <Footer />
    </div>
  );
}
