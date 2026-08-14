type ProductNameProps = {
  name: string;
};

function ProductName({ name }: ProductNameProps) {
  return <div className="font-heading text-2xl">{name}</div>;
}

export default ProductName;
