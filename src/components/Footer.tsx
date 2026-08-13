const LOCATION = "Coquitlam, BC, Canada";
const EMAIL = "smokd@gmail.com";
const ESTABLISHED = "2024";
const COMPANY_NAME = "SMOKD";
function Footer() {
  return (
    <div className="bg-red-900 flex justify-between items-center p-10">
      <div>
        <div className="font-heading text-3xl">{COMPANY_NAME}</div>
      </div>

      <div className="flex flex-col gap-2 text-sm">
        <div>{EMAIL}</div>
        <div>{LOCATION}</div>
      </div>
    </div>
  );
}

export default Footer;
