import Image from "next/image";
import Link from "next/link";
import Button from "../custom/Button";

const Footer = () => {
  return (
    <section className="mt-184px pb-117px pr-24">
      <div className="flex justify-between">
        <div className="max-w-80">
          <div className="mb-10">
            <Image
              src="/assets/images/boldo_logo_dark_blue.svg"
              alt="logo"
              width={156}
              height={41}
            />
          </div>
          <div className="mb-16">
            <p className="text-gray leading-7">
              Social media validation business model canvas graphical user
              interface launch party creative facebook iPad twitter.
            </p>
          </div>
          <div className="">
            <p className="text-gray leading-7">All rights reserved.</p>
          </div>
        </div>
        <div className="flex flex-col gap-y-8">
          <h5 className="text-xl font-bold leading-8">Landings</h5>
          <Link href={"/about"} className="text-xl text-gray font-normal">
            About
          </Link>
          <Link href={"#"} className="text-xl text-gray font-normal">
            Products
          </Link>{" "}
          <Link href={"#"} className="text-xl text-gray font-normal">
            Services
          </Link>
        </div>
        <div className="flex flex-col gap-y-8">
          <h5 className="text-xl font-bold leading-8">Company</h5>
          <Link href={"/"} className="text-xl text-gray font-normal">
            Home
          </Link>
          <Link href={"#"} className="text-xl text-gray font-normal">
            <div className="flex gap-x-3">
              Careers{" "}
              <Button className="rounded-full bg-green text-dark-blue font-bold text-xs h-30px w-72px">
                Hiring!
              </Button>
            </div>
          </Link>{" "}
          <Link href={"#"} className="text-xl text-gray font-normal">
            Services
          </Link>
        </div>
        <div className="flex flex-col gap-y-8">
          <h5 className="text-xl font-bold leading-8">Resources</h5>
          <Link href={"/blog"} className="text-xl text-gray font-normal">
            Blog
          </Link>
          <Link href={"#"} className="text-xl text-gray font-normal">
            Products
          </Link>{" "}
          <Link href={"#"} className="text-xl text-gray font-normal">
            Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Footer;
