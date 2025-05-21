
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface NewsItem {
  id: number;
  title: string;
  date: string;
  image: string;
}

interface LatestNewsProps {
  news: NewsItem[];
}

const LatestNews = ({ news }: LatestNewsProps) => {
  return (
    <div className="mb-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <h2 className="section-title">Latest News</h2>
        <Button variant="link" className="text-college-blue flex items-center" asChild>
          <Link to="/news">
            View All News <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {news.map((newsItem, index) => (
          <Card 
            key={newsItem.id} 
            className="overflow-hidden hover:shadow-lg transition-shadow animate-fade-in cursor-pointer hover-scale"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <img 
              src={newsItem.image} 
              alt={newsItem.title} 
              className="w-full h-48 object-cover"
            />
            <CardContent className="p-4">
              <p className="text-sm text-muted-foreground mb-2">{newsItem.date}</p>
              <h3 className="font-bold text-lg mb-2">{newsItem.title}</h3>
              <Link to={`/news/${newsItem.id}`} className="text-college-blue hover:underline inline-flex items-center">
                Read More <ArrowRight className="ml-1 h-3.5 w-3.5" />
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default LatestNews;
