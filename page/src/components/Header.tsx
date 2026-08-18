import logo from "../assets/logo.png";

function Header() {
  return (
    <div className="font-heading text-5xl flex justify-center">
      <img className="size-90" src={logo} alt="logo" />
    </div>
  );
}

export default Header;
