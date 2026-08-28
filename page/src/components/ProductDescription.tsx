type ProductDescriptionProps = {
  description: string;
};

function ProductDescription({ description }: ProductDescriptionProps) {
  return <div className="text-primary text-center">{description}</div>;
}

export default ProductDescription;
