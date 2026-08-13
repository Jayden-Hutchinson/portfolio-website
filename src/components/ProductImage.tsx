type ProductImageProps = {
  image: string;
};

function ProductImage({ image }: ProductImageProps) {
  return (
    <img className={`${image ? "" : "border"} w-fill aspect-4/5`} src={image} />
  );
}

export default ProductImage;
