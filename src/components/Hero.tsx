import FlexCenter from "./FlexCenter";
import FlexCol from "./FlexCol";
import FullName from "./FullName";
import Portrait from "./Portrait";
import TypeText from "./TypeText";

import { PERSONAL_INFO, PERSONAL_LINKS } from "../data";
import portrait from "../assets/images/portrait.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import FlexRow from "./FlexRow";
import ExternalLink from "./ExternalLink";

function Hero() {
  return (
    <FlexCenter className="h-100 w-[40vw] flex-col-reverse lg:flex-row">
      <FlexCol className="animate-fade-in-right justify-center gap-4 text-center lg:text-start">
        <FullName />
        <FlexCol className="ml-4 gap-8">
          <TypeText
            text={PERSONAL_INFO.title}
            animationDelay={2250}
            className="h-9 font-mono text-[clamp(1rem,1.5vw,5rem)] text-neutral-300"
          />
          <FlexRow className="gap-4 text-neutral-400">
            <ExternalLink href={PERSONAL_LINKS.linkedIn}>
              <FaLinkedin className="size-9" />
            </ExternalLink>

            <ExternalLink href={PERSONAL_LINKS.github}>
              <FaGithub className="size-9" />
            </ExternalLink>
          </FlexRow>
        </FlexCol>
      </FlexCol>

      <div className="relative lg:w-1/2">
        <div className="absolute size-full rounded-full bg-blue-900/30 blur-3xl" />
        <Portrait src={portrait} />
      </div>
    </FlexCenter>
  );
}

export default Hero;
