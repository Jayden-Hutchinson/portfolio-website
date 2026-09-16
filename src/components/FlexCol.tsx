type Props = {
  children: React.ReactNode;
  className?: string;
};

function FlexCol({ children, className }: Props) {
  return <div className={`flex flex-col ${className}`}>{children}</div>;
}

export default FlexCol;
