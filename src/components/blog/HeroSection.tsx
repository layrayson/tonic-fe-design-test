import Image from "next/image";
import Button from "../custom/Button";
import NavBar from "../shared/NavBar";

const HeroSection = () => {
  return (
    <div className="bg-dark-blue bg-hero-arc bg-no-repeat bg-right-top">
      <section className="h-screen max-w-1400px mx-auto px-100px pt-14 pb-16 flex flex-col justify-between">
        <NavBar />
      </section>
    </div>
  );
};

export default HeroSection;
