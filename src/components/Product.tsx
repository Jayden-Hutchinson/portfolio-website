import ProductDescription from "./ProductDescription";
import ProductImage from "./ProductImage";
import ProductName from "./ProductName";
import ProductPrice from "./ProductPrice";

export type ProductProps = {
  image: string;
  name: string;
  price: number;
  description: string;
};

function Product({ image, name, price, description }: ProductProps) {
  return (
    <div className="flex flex-col gap-2 justify-center w-xs text-start">
      {/* <ProductImage image={image} /> */}
      {/* image placeholder */}
      <div className="w-fill aspect-4/5 border"></div>
      <div className="flex flex-col p-4">
        <ProductName name={name} />
        <ProductPrice price={price} />
        <ProductDescription description={description} />
      </div>
    </div>
  );
}

export default Product;
