type Props = {
  text: string;
};

function BounceText({ text }: Props) {
  const staggerDurationMS = 150;
  const cycleDurationMS = text.length * staggerDurationMS;

  return (
    <>
      {text.split("").map((char, index) => (
        <span
          key={index}
          className="inline-block animate-bounce"
          style={{
            animationDelay: `${index * staggerDurationMS}ms`,
            animationDuration: `${cycleDurationMS}ms`,
          }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </>
  );
}

export default BounceText;
