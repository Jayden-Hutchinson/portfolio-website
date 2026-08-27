import { ProductsData } from "../data/productsData";
import ProductCard from "./ProductCard";

function Products() {
  return (
    <div className="flex w-full justify-center">
      {ProductsData.map((productData) => (
        <ProductCard key={productData.name} {...productData} />
      ))}
    </div>
  );
}

export default Products;
