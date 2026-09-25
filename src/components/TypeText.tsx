import { useEffect, useState } from "react";
import FlexRow from "./FlexRow";
import ConsoleCursor from "./ConsoleCursor";

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
        const delay = Math.random() * 100 + 50;
        timeout = setTimeout(typeNext, delay);
      }
    }

    timeout = setTimeout(typeNext, animationDelay);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <FlexRow className={`${className} items-center`}>
      {typeText}
      {typeText && <ConsoleCursor />}
    </FlexRow>
  );
}

export default TypeText;
