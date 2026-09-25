import { WORLD_POSITIONS } from "../data";
import { useWorld } from "../WorldContext";
import FlexCenter from "./FlexCenter";
import Hero from "./Hero";
import NavButton from "./NavButton";

function Home() {
  const { moveTo } = useWorld();
  return (
    <FlexCenter className="relative h-screen w-screen">
      <Hero />
      <NavButton
        onClick={() => {
          console.log("click");
          moveTo(WORLD_POSITIONS.about);
        }}
        className="absolute bottom-25"
      >
        About Me
      </NavButton>
    </FlexCenter>
  );
}

export default Home;
