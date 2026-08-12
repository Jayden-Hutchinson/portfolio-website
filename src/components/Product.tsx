import ProductDescription from "./ProductDescription";
import ProductImage from "./ProductImage";
import ProductName from "./ProductName";
import ProductPrice from "./ProductPrice";

type ProductProps = {
  image: string;
  name: string;
  price: number;
  description: string;
};

function Product({ image, name, price, description }: ProductProps) {
  return (
    <div className="flex flex-col gap-2 justify-center w-sm text-start">
      <ProductImage image={image} />
      <ProductName name={name} />
      <ProductDescription description={description} />
      <ProductPrice price={price} />
    </div>
  );
}

export default Product;
