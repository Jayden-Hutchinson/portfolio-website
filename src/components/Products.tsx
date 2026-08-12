import { ProductsData } from "../data/ProductsData";
import Product from "./Product";

function Products() {
  return (
    <div className="w-full bg-black">
      {ProductsData.map((productData) => (
        <Product key={productData.name} {...productData} />
      ))}
    </div>
  );
}

export default Products;
