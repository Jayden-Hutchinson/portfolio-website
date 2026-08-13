import type { Product } from "../data/ProductsData";
import ProductImage from "./ProductImage";
import ProductInformation from "./ProductInformation";

function ProductCard({
  image,
  name,
  price,
  weightGrams,
  description,
}: Product) {
  return (
    <div className="flex flex-col gap-4 justify-center w-xs text-start">
      <ProductImage image={image} />
      <ProductInformation
        name={name}
        price={price}
        weightGrams={weightGrams}
        description={description}
      />
    </div>
  );
}

export default ProductCard;
