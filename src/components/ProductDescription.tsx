type ProductDescriptionProps = {
  description: string;
};

function ProductDescription({ description }: ProductDescriptionProps) {
  return <div>{description}</div>;
}

export default ProductDescription;
