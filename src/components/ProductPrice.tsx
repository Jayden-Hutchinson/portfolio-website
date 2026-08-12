type ProductPriceProps = {
  price: number;
};

function ProductPrice({ price }: ProductPriceProps) {
  return <div className="text-2xl">${price}</div>;
}

export default ProductPrice;
