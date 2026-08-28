const LOCATION = "Port Coquitlam, BC, Canada";
const EMAIL = "smokdjerky@gmail.com";
// const ESTABLISHED = "2024";
const COMPANY_NAME = "SMOKD";
function Footer() {
  return (
    <div className="flex items-center justify-between bg-red-900 p-10">
      <div>
        <div className="font-heading text-secondary text-3xl">
          {COMPANY_NAME}
        </div>
      </div>

      <div className="text-secondary flex flex-col gap-2 text-sm">
        <div>{EMAIL}</div>
        <div>{LOCATION}</div>
      </div>
    </div>
  );
}

export default Footer;
