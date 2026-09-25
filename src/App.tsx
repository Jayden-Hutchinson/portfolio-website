import AboutMe from "./components/AboutMe";
import Home from "./components/Home";
import Projects from "./components/Projects";
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
        {/* <Projects /> */}
        <AboutMe />
      </World>
    </Viewport>
  );
}

export default App;
