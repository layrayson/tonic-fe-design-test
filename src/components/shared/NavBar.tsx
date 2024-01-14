import Image from "next/image";
import Link from "next/link";
import Button from "../custom/Button";

interface NavBarProps {
  dark?: boolean;
}

const NavBar = ({ dark = false }: NavBarProps) => {
  return (
    <nav className="flex justify-between items-center">
      <div>
        <Image
          src={
            dark
              ? "/assets/images/boldo_logo_dark_blue.svg"
              : "/assets/images/boldo_nav_logo.svg"
          }
          alt="logo"
          width={162}
          height={42}
        />
      </div>
      <div className="flex items-center gap-x-10 ">
        <Link
          href={"#"}
          className={`text-base font-semibold ${
            dark ? "text-dark-blue" : "text-white"
          }`}
        >
          Product
        </Link>
        <Link
          href={"#"}
          className={`text-base font-semibold ${
            dark ? "text-dark-blue" : "text-white"
          }`}
        >
          {" "}
          Services
        </Link>
        <Link
          href={"/about"}
          className={`text-base font-semibold ${
            dark ? "text-dark-blue" : "text-white"
          }`}
        >
          {" "}
          About
        </Link>
        <Button
          className={`h-10 w-32 font-bold rounded-full  text-base  ${
            dark
              ? "text-dark-blue bg-transparent border-2 border-dark-blue"
              : "text-dark-blue bg-white"
          }`}
        >
          Log in
        </Button>
      </div>
    </nav>
  );
};

export default NavBar;
