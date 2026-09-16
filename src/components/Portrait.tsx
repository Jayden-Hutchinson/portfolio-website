type Props = {
  src: string;
};

function Portrait({ src }: Props) {
  return (
    <img
      className="animate-fade-in-left h-auto w-110 rounded-full mask-[radial-gradient(ellipse_at_center,black_50%,transparent_75%)]"
      src={src}
      alt="Self Portrait"
    />
  );
}

export default Portrait;
