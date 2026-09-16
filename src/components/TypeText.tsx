import { useEffect, useState } from "react";
import FlexRow from "./FlexRow";

type Props = {
  text: string;
  animationDelay: number;
  className?: string;
};

function TypeText({ text, animationDelay, className }: Props) {
  const [typeText, setTypeText] = useState("");

  useEffect(() => {
    let i = 0;
    let timeout: ReturnType<typeof setTimeout>;

    function typeNext() {
      setTypeText(text.slice(0, i + 1));
      i++;

      if (i < text.length) {
        const delay = Math.random() * 250 + 50;
        timeout = setTimeout(typeNext, delay);
      }
    }

    timeout = setTimeout(typeNext, animationDelay);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <FlexRow className={`${className} items-center`}>
      {typeText}
      {typeText && <div className="h-[1em] w-[0.5em] animate-pulse bg-white" />}
    </FlexRow>
  );
}

export default TypeText;
