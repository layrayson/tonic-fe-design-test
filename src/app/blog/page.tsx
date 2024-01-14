import HeroSection from "@/components/blog/HeroSection";
import LatestNews from "@/components/blog/LatestNews";

const BlogPage = () => {
  return (
    <div>
      <HeroSection />
      <div className="max-w-1400px mx-auto px-100px">
        <LatestNews />
      </div>
    </div>
  );
};

export default BlogPage;
