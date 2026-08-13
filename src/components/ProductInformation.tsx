import ProductDescription from "./ProductDescription";
import ProductName from "./ProductName";
import ProductPrice from "./ProductPrice";
import ProductWeight from "./ProductWeight";

export type ProductInformationProps = {
  name: string;
  price: number;
  weightGrams: number;
  description: string;
};

function ProductInformation({
  name,
  price,
  weightGrams,
  description,
}: ProductInformationProps) {
  return (
    <div className="flex flex-col px-2 gap-2 items-center">
      <ProductName name={name} />
      <div className="w-8 bg-red-900 h-0.5"></div>
      <ProductDescription description={description} />

      <div className="flex justify-between w-full items-end">
        <ProductWeight weight={weightGrams} />
        <ProductPrice price={price} />
      </div>
    </div>
  );
}

export default ProductInformation;
