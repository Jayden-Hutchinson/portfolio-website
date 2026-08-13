type ProductDescriptionProps = {
  description: string;
};

function ProductDescription({ description }: ProductDescriptionProps) {
  return <div className="text-center text-secondary-text">{description}</div>;
}

export default ProductDescription;
