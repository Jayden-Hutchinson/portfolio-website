import FlexCol from "./FlexCol";
import { PERSONAL_INFO } from "../data";

function FullName() {
  return (
    <FlexCol className="font-google-sans text-[clamp(3rem,4vw,7rem)] leading-none font-bold text-blue-200">
      <div>{PERSONAL_INFO.firstName}</div>
      <div>{PERSONAL_INFO.lastName}</div>
    </FlexCol>
  );
}

export default FullName;
