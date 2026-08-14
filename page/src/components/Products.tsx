import { ProductsData } from "../data/ProductsData";
import ProductCard from "./ProductCard";

function Products() {
  return (
    <div className="w-full flex justify-center">
      {ProductsData.map((productData) => (
        <ProductCard key={productData.name} {...productData} />
      ))}
    </div>
  );
}

export default Products;
