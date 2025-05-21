
import WelcomeSection from "./WelcomeSection";
import CollegeStats from "./CollegeStats";
import LatestNews from "./LatestNews";
import TestimonialsCarousel from "./TestimonialsCarousel";

interface NewsItem {
  id: number;
  title: string;
  date: string;
  image: string;
}

interface MainContentProps {
  latestNews: NewsItem[];
}

const MainContent = ({ latestNews }: MainContentProps) => {
  return (
    <div className="lg:col-span-2">
      <WelcomeSection />
      <CollegeStats />
      <LatestNews news={latestNews} />
      <TestimonialsCarousel />
    </div>
  );
};

export default MainContent;
