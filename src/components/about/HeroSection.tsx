import Image from "next/image";
import Button from "../custom/Button";
import NavBar from "../shared/NavBar";

const HeroSection = () => {
  return (
    <div className="bg-green">
      <section className="max-w-1400px mx-auto px-100px pt-14 pb-16 flex flex-col justify-between">
        <NavBar dark={true} />

        <div className="py-24">
          <div className="flex justify-between items-center">
            <div className="w-1/2">
              <div className="mb-3">
                <p className="text-dark-blue font-normal text-xl">About</p>
              </div>
              <div>
                <h3 className="text-5xl leading-72 font-normal">
                  We love to make great <br /> things, things that matter.
                </h3>
              </div>
            </div>
            <div className="w-4/12">
              <p className="leading-7 text-dark-blue">
                Funding handshake buyer business-to-business metrics iPad
                partnership. First mover advantage innovator success deployment
                non-disclosure.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
