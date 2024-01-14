import HeroSection from "@/components/about/HeroSection";
import OurNumbers from "@/components/about/OurNumbers";
import OurStory from "@/components/about/OurStory";

const AboutPage = () => {
  return (
    <div>
      <HeroSection />
      <div className="max-w-1400px mx-auto px-100px">
        <OurNumbers />
      </div>
      <OurStory />
    </div>
  );
};

export default AboutPage;
