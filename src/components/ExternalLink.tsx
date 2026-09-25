type Props = {
  children: React.ReactNode;
  href: string;
  className?: string;
};

function ExternalLink({ children, href, className }: Props) {
  return (
    <a href={href} target="_blank" className={`${className}`}>
      {children}
    </a>
  );
}

export default ExternalLink;
