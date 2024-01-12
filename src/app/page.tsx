import ConnectOurCustomersOne from "@/components/home/ConnectOurCustomersOne";
import ConnectOurCustomersTwo from "@/components/home/ConnectOurCustomersTwo";
import EnterpriseTemplate from "@/components/home/EnterpriseTemplate";
import HeroSection from "@/components/home/HeroSection";
import OurServices from "@/components/home/OurServices";
import NavBar from "@/components/shared/NavBar";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <div className="max-w-1400px mx-auto px-100px">
        <OurServices />
        <ConnectOurCustomersOne />
        <ConnectOurCustomersTwo />
      </div>
      <EnterpriseTemplate />
    </div>
  );
};

export default HomePage;
