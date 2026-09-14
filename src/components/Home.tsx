import portrait from "../assets/images/portrait.png";
import BounceText from "./BounceText";

function Home() {
  return (
    <div className="flex h-150 w-280 items-center justify-between border border-white/10 text-white">
      <div className="animate-fade-in-right flex flex-col justify-center gap-4">
        <div className="text-8xl font-bold">Jayden Hutchinson</div>
        <div className="font-mono text-3xl text-neutral-300">
          <BounceText text="Software Developer" />
        </div>
      </div>
      <img
        className="animate-fade-in-left size-130 mask-[radial-gradient(ellipse_at_center,black_80%,transparent_85%)]"
        src={portrait}
        alt="Self Portrait"
      />
    </div>
  );
}

export default Home;
