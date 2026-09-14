type Props = {
  children: React.ReactNode;
};

function Viewport({ children }: Props) {
  return <div className="viewport">{children}</div>;
}

export default Viewport;
