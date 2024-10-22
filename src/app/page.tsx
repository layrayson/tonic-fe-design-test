import ConnectOurCustomersOne from "@/components/home/ConnectOurCustomersOne";
import ConnectOurCustomersThree from "@/components/home/ConnectOurCustomersThree";
import ConnectOurCustomersTwo from "@/components/home/ConnectOurCustomersTwo";
import EnterpriseTemplate from "@/components/home/EnterpriseTemplate";
import HeroSection from "@/components/home/HeroSection";
import OurBlog from "@/components/home/OurBlog";
import OurServices from "@/components/home/OurServices";

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
      <div className="max-w-1400px mx-auto px-100px">
        <ConnectOurCustomersThree />
        <OurBlog />
      </div>
    </div>
  );
};

export default HomePage;
