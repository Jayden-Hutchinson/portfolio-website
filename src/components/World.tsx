import { useLayoutEffect, useRef, useState } from "react";
import { type Vector2 } from "../types";
import { WorldContext } from "../WorldContext";

type Props = {
  children: React.ReactNode;
};

function World({ children }: Props) {
  const [position, setPosition] = useState<Vector2>({ x: 0, y: 0 });
  const [initialized, setInitialized] = useState(false);

  const worldRef = useRef<HTMLDivElement>(null);

  function getWorldCenterPosition(): Vector2 {
    const world = worldRef.current;

    if (!world) {
      console.log("No world reference");
      return { x: 0, y: 0 };
    }

    const x = (window.innerWidth - world.offsetWidth) / 2;
    const y = (window.innerHeight - world.offsetHeight) / 2;

    console.log(x, y);
    return { x, y };
  }

  function moveTo(position: Vector2) {
    setPosition(position);
  }

  function centerWorld(): void {
    setPosition(getWorldCenterPosition());
  }

  useLayoutEffect(() => {
    centerWorld();

    requestAnimationFrame(() => {
      setInitialized(true);
    });

    window.addEventListener("resize", centerWorld);

    return () => {
      window.removeEventListener("resize", centerWorld);
    };
  }, []);

  return (
    <WorldContext.Provider value={{ moveTo }}>
      <div
        ref={worldRef}
        className={`world ${initialized ? "transition-[left,top] duration-700 ease-in-out" : ""}`}
        style={{ left: position.x, top: position.y }}
      >
        {children}
      </div>
    </WorldContext.Provider>
  );
}

export default World;
