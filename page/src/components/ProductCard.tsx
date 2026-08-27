import type { Product } from "../data/productsData";
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
    <div className="flex w-xs flex-col justify-center gap-4 text-start">
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
