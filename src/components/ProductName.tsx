type ProductNameProps = {
  name: string;
};

function ProductName({ name }: ProductNameProps) {
  return <div className="font-bold text-xl">{name}</div>;
}

export default ProductName;
