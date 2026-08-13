type ProductAmountProps = {
  amount: number;
};

function DollarAmount({ amount }: ProductAmountProps) {
  return (
    <div className="w-20 flex justify-end items-center">
      <div>$</div>
      <div className="w-8 text-end">{amount}</div>
    </div>
  );
}

export default DollarAmount;
