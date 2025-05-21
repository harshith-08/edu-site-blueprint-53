
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Award, Users, BookOpen, Building, Calendar, Bell, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const { toast } = useToast();
  const [currentAnnouncement, setCurrentAnnouncement] = useState(0);
  const announcements = [
    {
      id: 1,
      title: "Admission Open for 2025-26",
      date: "May 15, 2025",
      link: "/admission-notice.pdf",
      category: "Admissions"
    },
    {
      id: 2,
      title: "Annual Sports Meet Registration",
      date: "May 12, 2025",
      link: "/sports-registration.pdf",
      category: "Events"
    },
    {
      id: 3,
      title: "Scholarship Applications Due",
      date: "May 10, 2025",
      link: "/scholarship-info.pdf",
      category: "Financial Aid"
    },
    {
      id: 4,
      title: "National Level Technical Symposium",
      date: "May 5, 2025",
      link: "/symposium-details.pdf",
      category: "Academic"
    }
  ];

  const moreAnnouncements = [
    {
      id: 5,
      title: "Faculty Development Program on Machine Learning",
      date: "May 20, 2025",
      link: "#",
      category: "Faculty"
    },
    {
      id: 6,
      title: "Industrial Visit to Tech Park Scheduled",
      date: "May 22, 2025",
      link: "#",
      category: "Industrial Visit"
    },
    {
      id: 7,
      title: "Celebration of National Science Day",
      date: "May 25, 2025",
      link: "#",
      category: "Events"
    },
    {
      id: 8,
      title: "IEEE Distinguished Lecture Series",
      date: "May 28, 2025",
      link: "#",
      category: "Lecture"
    },
    {
      id: 9,
      title: "Campus Recruitment Drive - TCS",
      date: "June 2, 2025",
      link: "#",
      category: "Placements"
    },
    {
      id: 10,
      title: "Workshop on IoT Applications",
      date: "June 5, 2025",
      link: "#",
      category: "Workshop"
    }
  ];

  const allAnnouncements = [...announcements, ...moreAnnouncements];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAnnouncement((prev) => (prev + 1) % announcements.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [announcements.length]);

  const collegeStats = [
    {
      icon: <BookOpen className="h-8 w-8 text-college-blue" />,
      count: "45+",
      label: "Years of Excellence"
    },
    {
      icon: <Users className="h-8 w-8 text-college-blue" />,
      count: "150+",
      label: "Experienced Faculty"
    },
    {
      icon: <Building className="h-8 w-8 text-college-blue" />,
      count: "12+",
      label: "Departments"
    },
    {
      icon: <Award className="h-8 w-8 text-college-blue" />,
      count: "95%",
      label: "Placement Rate"
    }
  ];

  const latestNews = [
    {
      id: 1,
      title: "College Secures Top Rank in State Engineering Rankings",
      date: "May 18, 2025",
      image: "https://source.unsplash.com/random/300x200?campus,1"
    },
    {
      id: 2,
      title: "SVRMC Students Win National Robotics Competition",
      date: "May 14, 2025",
      image: "https://source.unsplash.com/random/300x200?students,2"
    },
    {
      id: 3,
      title: "New Research Center Inaugurated by Education Minister",
      date: "May 10, 2025",
      image: "https://source.unsplash.com/random/300x200?research,3"
    }
  ];
  
  const handleAnnouncementView = (announcement) => {
    toast({
      title: `Viewing: ${announcement.title}`,
      description: `Opening document from ${announcement.date}`,
    });
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: 'url("https://source.unsplash.com/random/1920x1080?university,campus")' }}>
        <div className="hero-overlay"></div>
        <div className="hero-content container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">Shri Velagapudi Ramakrishna Memorial College</h1>
          <p className="text-xl md:text-2xl mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>Empowering Students Through Quality Education</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Button size="lg" className="bg-college-blue hover:bg-blue-700 hover-scale" asChild>
              <Link to="/admission">Apply Now</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-college-blue hover-scale" asChild>
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Announcements Ticker */}
      <div className="bg-college-blue text-white py-3">
        <div className="container mx-auto px-4">
          <div className="flex items-center">
            <div className="font-bold whitespace-nowrap mr-4 flex items-center">
              <Bell className="h-4 w-4 mr-2 animate-pulse-slow" />
              ANNOUNCEMENTS:
            </div>
            <div className="overflow-hidden flex-1 relative h-6">
              {announcements.map((announcement, index) => (
                <div 
                  key={announcement.id}
                  className={`absolute w-full transition-all duration-1000 ease-in-out ${
                    index === currentAnnouncement ? "top-0 opacity-100" : "top-10 opacity-0"
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <span>{announcement.title}</span>
                    <a 
                      href={announcement.link} 
                      className="text-sm text-college-gold hover:underline whitespace-nowrap"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => handleAnnouncementView(announcement)}
                    >
                      View Details
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content with Announcements Column */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Announcements */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 shadow-sm mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-bold text-college-blue flex items-center">
                      <Bell className="mr-2 h-5 w-5" />
                      Announcements
                    </h2>
                    <Link to="/announcements" className="text-sm text-college-blue hover:underline">View All</Link>
                  </div>
                  <div className="space-y-4 announcements-container">
                    {allAnnouncements.map((announcement, index) => (
                      <div 
                        key={announcement.id} 
                        className="announcement-card slide-in-right"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <div className="flex justify-between items-start">
                          <div>
                            <span className="inline-block px-2 py-1 text-xs rounded bg-college-blue/10 text-college-blue mb-2">
                              {announcement.category}
                            </span>
                            <h3 className="font-medium mb-1">{announcement.title}</h3>
                            <p className="text-sm text-gray-500 flex items-center">
                              <Calendar className="h-3 w-3 mr-1" /> {announcement.date}
                            </p>
                          </div>
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            className="h-8 w-8 p-0"
                            onClick={() => handleAnnouncementView(announcement)}
                          >
                            <ExternalLink className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-college-blue text-white p-6 rounded-lg shadow-md animate-fade-in">
                  <h2 className="text-xl font-bold mb-3">Quick Links</h2>
                  <ul className="space-y-2">
                    <li>
                      <Link to="/student-documents" className="flex items-center hover:text-college-gold transition-colors">
                        <ArrowRight className="h-4 w-4 mr-2" />
                        Student Documents
                      </Link>
                    </li>
                    <li>
                      <Link to="/faculty-login" className="flex items-center hover:text-college-gold transition-colors">
                        <ArrowRight className="h-4 w-4 mr-2" />
                        Faculty Portal
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="flex items-center hover:text-college-gold transition-colors">
                        <ArrowRight className="h-4 w-4 mr-2" />
                        Examination Schedule
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="flex items-center hover:text-college-gold transition-colors">
                        <ArrowRight className="h-4 w-4 mr-2" />
                        Academic Calendar
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="flex items-center hover:text-college-gold transition-colors">
                        <ArrowRight className="h-4 w-4 mr-2" />
                        Campus Facilities
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Right Column - Main Content */}
            <div className="lg:col-span-2">
              {/* Welcome Message */}
              <div className="mb-12">
                <h2 className="section-title">Welcome to SVRMC</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                  <div>
                    <p className="mb-4 slide-up">Founded in 1975, Shri Velagapudi Ramakrishna Memorial College has established itself as one of the premier educational institutions in Andhra Pradesh. Our commitment to academic excellence, research, and innovation has helped us nurture generations of successful professionals.</p>
                    <p className="mb-6 slide-up" style={{ animationDelay: "0.2s" }}>The college offers undergraduate and postgraduate programs across various disciplines including Engineering, Science, Management, and more. With state-of-the-art infrastructure and experienced faculty, we provide a conducive environment for holistic development.</p>
                    <Button className="bg-college-blue hover:bg-blue-700 hover-scale flex items-center slide-up" style={{ animationDelay: "0.3s" }} asChild>
                      <Link to="/about">
                        Explore Departments <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                  <div className="rounded-lg overflow-hidden shadow-lg hover-scale">
                    <img 
                      src="https://source.unsplash.com/random/800x600?college,building" 
                      alt="SVRMC Campus" 
                      className="w-full h-[300px] object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* College Stats */}
              <div className="mb-12">
                <h2 className="section-title">Our Achievements</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {collegeStats.map((stat, index) => (
                    <div 
                      key={index} 
                      className="glass-card p-4 text-center hover:shadow-lg transition-shadow animate-fade-in"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="flex justify-center mb-3">{stat.icon}</div>
                      <h3 className="text-2xl font-bold text-college-blue mb-1">{stat.count}</h3>
                      <p className="text-gray-600 text-sm">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Latest News */}
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
                  {latestNews.map((news, index) => (
                    <Card 
                      key={news.id} 
                      className="overflow-hidden hover:shadow-lg transition-shadow animate-fade-in cursor-pointer hover-scale"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <img 
                        src={news.image} 
                        alt={news.title} 
                        className="w-full h-48 object-cover"
                      />
                      <CardContent className="p-4">
                        <p className="text-sm text-muted-foreground mb-2">{news.date}</p>
                        <h3 className="font-bold text-lg mb-2">{news.title}</h3>
                        <Link to={`/news/${news.id}`} className="text-college-blue hover:underline inline-flex items-center">
                          Read More <ArrowRight className="ml-1 h-3.5 w-3.5" />
                        </Link>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
              
              {/* Testimonial Carousel */}
              <div className="mb-12">
                <h2 className="section-title">Student Testimonials</h2>
                <p className="text-muted-foreground mb-6">Hear from our students and alumni</p>
                <div className="max-w-3xl mx-auto">
                  <Carousel className="animate-fade-in">
                    <CarouselContent>
                      <CarouselItem>
                        <div className="bg-white p-8 rounded-lg shadow text-center border border-gray-100">
                          <div className="mb-6">
                            <img 
                              src="https://source.unsplash.com/random/100x100?portrait,1" 
                              alt="Student" 
                              className="w-16 h-16 rounded-full mx-auto object-cover border-2 border-college-gold"
                            />
                          </div>
                          <p className="italic mb-4">"The supportive faculty and excellent infrastructure at SVRMC helped me secure a placement at my dream company. The practical approach to education gave me an edge during interviews."</p>
                          <div>
                            <h4 className="font-semibold">Priya Sharma</h4>
                            <p className="text-sm text-muted-foreground">CSE Graduate, 2023</p>
                          </div>
                        </div>
                      </CarouselItem>
                      <CarouselItem>
                        <div className="bg-white p-8 rounded-lg shadow text-center border border-gray-100">
                          <div className="mb-6">
                            <img 
                              src="https://source.unsplash.com/random/100x100?portrait,2" 
                              alt="Student" 
                              className="w-16 h-16 rounded-full mx-auto object-cover border-2 border-college-gold"
                            />
                          </div>
                          <p className="italic mb-4">"SVRMC provided me with numerous opportunities to showcase my talents. The technical fests and workshops helped me develop both technical and soft skills essential for my career."</p>
                          <div>
                            <h4 className="font-semibold">Rahul Patel</h4>
                            <p className="text-sm text-muted-foreground">ECE Graduate, 2022</p>
                          </div>
                        </div>
                      </CarouselItem>
                      <CarouselItem>
                        <div className="bg-white p-8 rounded-lg shadow text-center border border-gray-100">
                          <div className="mb-6">
                            <img 
                              src="https://source.unsplash.com/random/100x100?portrait,3" 
                              alt="Student" 
                              className="w-16 h-16 rounded-full mx-auto object-cover border-2 border-college-gold"
                            />
                          </div>
                          <p className="italic mb-4">"The research opportunities at SVRMC are exceptional. The faculty encouraged me to pursue my research interests, which helped me secure admission for higher studies abroad."</p>
                          <div>
                            <h4 className="font-semibold">Ananya Reddy</h4>
                            <p className="text-sm text-muted-foreground">Civil Engineering Graduate, 2023</p>
                          </div>
                        </div>
                      </CarouselItem>
                    </CarouselContent>
                    <div className="flex justify-center mt-4">
                      <CarouselPrevious className="relative mr-2" />
                      <CarouselNext className="relative ml-2" />
                    </div>
                  </Carousel>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-cover bg-center" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("https://source.unsplash.com/random/1920x500?campus,students")' }}>
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in">Ready to Start Your Academic Journey?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>Join SVRMC and unlock a world of opportunities. Our application process for the 2025-26 academic year is now open.</p>
          <div className="flex justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Button size="lg" className="bg-college-gold text-college-blue hover:bg-yellow-400 hover-scale" asChild>
              <Link to="/admission">Apply Now</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-college-blue hover-scale" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
