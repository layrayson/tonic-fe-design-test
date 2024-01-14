import HeroSection from "@/components/about/HeroSection";
import OurNumbers from "@/components/about/OurNumbers";
import OurStory from "@/components/about/OurStory";
import OurTeam from "@/components/about/OurTeam";
import OurBlog from "@/components/about/ourBlog";

const AboutPage = () => {
  return (
    <div>
      <HeroSection />
      <div className="max-w-1400px mx-auto px-100px">
        <OurNumbers />
      </div>
      <OurStory />
      <div className="max-w-1400px mx-auto px-100px">
        <OurTeam />
      </div>
      <OurBlog />
    </div>
  );
};

export default AboutPage;
