import FlexCenter from "./FlexCenter";
import FlexCol from "./FlexCol";
import FullName from "./FullName";
import Portrait from "./Portrait";
import TypeText from "./TypeText";

import portrait from "../assets/images/portrait.png";
import { PERSONAL_INFO } from "../data";

function Home() {
  return (
    <FlexCenter className="h-100 w-[40vw] flex-col-reverse lg:flex-row">
      <FlexCol className="animate-fade-in-right justify-center gap-4 text-center lg:text-start">
        <FullName />
        <TypeText
          text={PERSONAL_INFO.title}
          animationDelay={2250}
          className="ml-4 h-9 font-mono text-[clamp(1rem,1.5vw,5rem)] text-neutral-300"
        />
      </FlexCol>

      <div className="relative lg:w-1/2">
        <div className="absolute size-full rounded-full bg-blue-900/30 blur-3xl" />
        <Portrait src={portrait} />
      </div>
    </FlexCenter>
  );
}

export default Home;
