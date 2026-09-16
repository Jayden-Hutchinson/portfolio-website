type Props = {
  children: React.ReactNode;
  className?: string;
};

function FlexRow({ children, className }: Props) {
  return <div className={`flex flex-row ${className}`}>{children}</div>;
}

export default FlexRow;
