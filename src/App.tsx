import Home from "./components/Home";
// import MouseArea from "./components/MouseArea";
import StarBackground from "./components/StarBackground";
import Viewport from "./components/Viewport";
import World from "./components/World";

function App() {
  return (
    <Viewport>
      {/* <MouseArea /> */}

      <World>
        <StarBackground />
        <Home />
      </World>
    </Viewport>
  );
}

export default App;
