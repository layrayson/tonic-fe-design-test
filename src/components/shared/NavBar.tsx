import Image from "next/image";
import Link from "next/link";
import Button from "../custom/Button";

const NavBar = () => {
  return (
    <nav className="flex justify-between items-center">
      <div>
        <Image
          src="/assets/images/boldo_nav_logo.svg"
          alt="logo"
          width={162}
          height={42}
        />
      </div>
      <div className="flex items-center gap-x-10 ">
        <Link href={"#"} className="text-base text-white font-normal">
          Product
        </Link>
        <Link href={"#"} className="text-base text-white font-normal">
          Services
        </Link>
        <Link href={"#"} className="text-base text-white font-normal">
          About
        </Link>
        <Button className="h-10 w-32 text-dark-blue text-base bg-white font-bold rounded-full">
          Log in
        </Button>
      </div>
    </nav>
  );
};

export default NavBar;
