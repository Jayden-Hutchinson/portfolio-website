type Props = {
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

function NavButton({ children, className, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className={`group bg-background isolate z-0 cursor-pointer overflow-hidden rounded-lg px-10 py-4 font-semibold text-white ${className}`}
    >
      <span className="animate-spin-slow absolute top-1/2 left-1/2 -z-20 h-[300%] w-[300%] -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-300 [background:conic-gradient(from_0deg,#ff2d55,#ff9500,#ffcc00,#34c759,#00c7be,#007aff,#af52de,#ff2d55)] group-hover:opacity-100" />
      <span className="bg-background absolute inset-0.5 -z-10 rounded-lg" />
      {children}
    </button>
  );
}

export default NavButton;
