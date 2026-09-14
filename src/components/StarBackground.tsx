import { useEffect, useRef } from "react";

const CONTEXT_ID = "2d";
const FILL_STYLE = "white";
// const STAR_OFFSET = 50;
// const STAR_SIZE = 1;

// type Star = {
//   x: number;
//   y: number;
// };

function StarBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // const stars: Star[] = [];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      console.log("No canvas reference");
      return;
    }

    const context = canvas.getContext(CONTEXT_ID);
    if (!context) {
      console.log("No canvas context");
      return;
    }

    const canvasRect = canvas.getBoundingClientRect();

    const width = canvasRect.width;
    const height = canvasRect.height;
    const devicePixelRatio = window.devicePixelRatio;

    canvas.width = width * devicePixelRatio;
    canvas.height = height * devicePixelRatio;

    context.fillStyle = FILL_STYLE;
    context.scale(devicePixelRatio, devicePixelRatio);

    // for (let x = 0; x < width; x++) {
    //   const xOffset = x * STAR_OFFSET;
    //   for (let y = 0; y < height; y++) {
    //     const yOffset = y * STAR_OFFSET;

    //     stars.push({ x: xOffset, y: yOffset });
    //     context.fillRect(xOffset, yOffset, STAR_SIZE, STAR_SIZE);
    //   }
    // }
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 z-0 size-full"
    />
  );
}

export default StarBackground;
