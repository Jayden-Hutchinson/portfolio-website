import { useEffect, useRef, useState } from "react";
import { type Position } from "../types";

type Props = {
  children: React.ReactNode;
};

function World({ children }: Props) {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });

  const worldRef = useRef<HTMLDivElement>(null);

  function getWorldCenterPosition(): Position {
    const world = worldRef.current;

    if (!world) {
      console.log("No world reference");
      return { x: 0, y: 0 };
    }

    const x = (window.innerWidth - world.offsetWidth) / 2;
    const y = (window.innerHeight - world.offsetHeight) / 2;

    return { x, y };
  }

  function centerWorld(): void {
    setPosition(getWorldCenterPosition());
  }

  useEffect(() => {
    centerWorld();

    window.addEventListener("resize", centerWorld);

    return () => {
      window.removeEventListener("resize", centerWorld);
    };
  }, []);

  return (
    <div
      ref={worldRef}
      className="world"
      style={{ left: position.x, top: position.y }}
    >
      {children}
    </div>
  );
}

export default World;
