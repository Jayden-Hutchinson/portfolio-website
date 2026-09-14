import { useEffect, useRef } from "react";

function MouseArea() {
  const mouseAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleMouseMove(event: MouseEvent) {
      if (!mouseAreaRef.current) {
        console.log("No mouse area ref");
        return;
      }

      const mouseArea = mouseAreaRef.current;

      mouseArea.style.left = `${event.clientX}px`;
      mouseArea.style.top = `${event.clientY}px`;
    }

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <div
      ref={mouseAreaRef}
      className="pointer-events-none absolute z-10 size-20 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white"
    ></div>
  );
}

export default MouseArea;
