import Image from "next/image";
import Button from "../custom/Button";
import NavBar from "../shared/NavBar";

const HeroSection = () => {
  return (
    <section className="h-screen bg-dark-blue bg-hero-arc bg-no-repeat bg-right-top px-100px pt-14 pb-16 flex flex-col justify-between">
      <NavBar />
      <div className="flex items-center justify-between mb-14">
        <div className="flex-none gap-x-10">
          <h1 className="text-5xl leading-72 text-white mb-6">
            Save time by building <br /> fast with Boldo Template{" "}
          </h1>
          <p className="text-base text-white leading-7 mb-10">
            Funding handshake buyer business-to-business metrics iPad
            partnership. <br /> First mover advantage innovator success
            deployment non-disclosure.
          </p>
          <div className="flex gap-x-6">
            <Button className="h-60px w-247px text-dark-blue text-xl bg-green font-bold rounded-full">
              Buy template
            </Button>
            <Button className="h-60px w-187px text-white text-xl bg-dark-blue border-2 border-white font-bold rounded-full">
              Explore
            </Button>
          </div>
        </div>

        <div className="ml-10">
          <Image
            src="/assets/images/hero_graphics.svg"
            className="w-full"
            width={493}
            height={253}
            alt="hero_graph_one"
          />
        </div>
      </div>

      <div className="grid grid-cols-6 gap-x-16">
        <div className="w-full">
          <Image
            src={"/assets/images/boldo_logo_white.svg"}
            alt="logo"
            width={162}
            height={42}
          />
        </div>
        <div className="w-full">
          <Image
            src={"/assets/images/presto_logo_white.svg"}
            alt="logo"
            width={162}
            height={42}
          />
        </div>{" "}
        <div className="w-full">
          <Image
            src={"/assets/images/boldo_logo_white.svg"}
            alt="logo"
            width={162}
            height={42}
          />
        </div>{" "}
        <div className="w-full">
          <Image
            src={"/assets/images/presto_logo_white.svg"}
            alt="logo"
            width={162}
            height={42}
          />
        </div>{" "}
        <div className="w-full">
          <Image
            src={"/assets/images/boldo_logo_white.svg"}
            alt="logo"
            width={162}
            height={42}
          />
        </div>{" "}
        <div className="w-full">
          <Image
            src={"/assets/images/presto_logo_white.svg"}
            alt="logo"
            width={162}
            height={42}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
