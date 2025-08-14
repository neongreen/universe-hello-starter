import { HeroSection } from "@/components/hero-section";
import { UrlTitleFetcher } from "@/components/url-title-fetcher";

const Index = () => {
  return (
    <div>
      <HeroSection />
      <div className="container mx-auto px-4 py-16">
        <UrlTitleFetcher />
      </div>
    </div>
  );
};

export default Index;
