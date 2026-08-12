type ProductImageProps = {
  image: string;
};

function ProductImage({ image }: ProductImageProps) {
  return <img className="" src={image} />;
}

export default ProductImage;
