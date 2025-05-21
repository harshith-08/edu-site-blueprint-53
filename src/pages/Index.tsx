
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Award, Users, BookOpen, Building } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";

const Index = () => {
  const [currentAnnouncement, setCurrentAnnouncement] = useState(0);
  const announcements = [
    {
      id: 1,
      title: "Admission Open for 2025-26",
      date: "May 15, 2025",
      link: "/admission-notice.pdf"
    },
    {
      id: 2,
      title: "Annual Sports Meet Registration",
      date: "May 12, 2025",
      link: "/sports-registration.pdf"
    },
    {
      id: 3,
      title: "Scholarship Applications Due",
      date: "May 10, 2025",
      link: "/scholarship-info.pdf"
    },
    {
      id: 4,
      title: "National Level Technical Symposium",
      date: "May 5, 2025",
      link: "/symposium-details.pdf"
    }
  ];

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

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: 'url("https://source.unsplash.com/random/1920x1080?university,campus")' }}>
        <div className="hero-overlay"></div>
        <div className="hero-content container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Shri Velagapudi Ramakrishna Memorial College</h1>
          <p className="text-xl md:text-2xl mb-8">Empowering Students Through Quality Education</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-college-blue hover:bg-blue-700" asChild>
              <Link to="/admission">Apply Now</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-college-blue" asChild>
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Announcements Ticker */}
      <div className="bg-college-blue text-white py-3">
        <div className="container mx-auto px-4">
          <div className="flex items-center">
            <div className="font-bold whitespace-nowrap mr-4">ANNOUNCEMENTS:</div>
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

      {/* Welcome Message */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">Welcome to SVRMC</h2>
              <p className="mb-4">Founded in 1975, Shri Velagapudi Ramakrishna Memorial College has established itself as one of the premier educational institutions in Andhra Pradesh. Our commitment to academic excellence, research, and innovation has helped us nurture generations of successful professionals.</p>
              <p className="mb-6">The college offers undergraduate and postgraduate programs across various disciplines including Engineering, Science, Management, and more. With state-of-the-art infrastructure and experienced faculty, we provide a conducive environment for holistic development.</p>
              <Button className="bg-college-blue hover:bg-blue-700 flex items-center" asChild>
                <Link to="/about">
                  Explore Departments <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://source.unsplash.com/random/800x600?college,building" 
                alt="SVRMC Campus" 
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* College Stats */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Achievements</h2>
            <p className="text-muted-foreground">SVRMC takes pride in its legacy of excellence</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {collegeStats.map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">{stat.icon}</div>
                <h3 className="text-3xl font-bold text-college-blue mb-1">{stat.count}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <h2 className="section-title">Latest News</h2>
            <Button variant="link" className="text-college-blue flex items-center" asChild>
              <Link to="/news">
                View All News <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {latestNews.map((news) => (
              <Card key={news.id} className="overflow-hidden hover:shadow-lg transition-shadow">
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
      </section>

      {/* Placement Highlight */}
      <section className="py-20 bg-college-blue text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 relative pb-4">
                Placement Excellence
                <span className="absolute bottom-0 left-0 w-20 h-1 bg-college-gold"></span>
              </h2>
              <p className="mb-6">Our dedicated Training & Placement Cell ensures that students are well-prepared for their professional journeys. With tie-ups with over 100+ companies, we provide excellent placement opportunities to our students.</p>
              <ul className="mb-8 space-y-2">
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-college-gold rounded-full mr-2"></span>
                  95% placement rate for eligible students
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-college-gold rounded-full mr-2"></span>
                  Average package of 6.5 LPA
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-college-gold rounded-full mr-2"></span>
                  Top recruiters include TCS, Infosys, Wipro, and more
                </li>
              </ul>
              <Button className="bg-white text-college-blue hover:bg-gray-100" asChild>
                <Link to="/placements">View Placement Records</Link>
              </Button>
            </div>
            <div>
              <img 
                src="https://source.unsplash.com/random/600x400?graduation,success" 
                alt="Placement Success" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Carousel */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Student Testimonials</h2>
            <p className="text-muted-foreground">Hear from our students and alumni</p>
          </div>
          <div className="max-w-3xl mx-auto">
            <Carousel>
              <CarouselContent>
                <CarouselItem>
                  <div className="bg-white p-8 rounded-lg shadow text-center">
                    <div className="mb-6">
                      <img 
                        src="https://source.unsplash.com/random/100x100?portrait,1" 
                        alt="Student" 
                        className="w-16 h-16 rounded-full mx-auto object-cover"
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
                  <div className="bg-white p-8 rounded-lg shadow text-center">
                    <div className="mb-6">
                      <img 
                        src="https://source.unsplash.com/random/100x100?portrait,2" 
                        alt="Student" 
                        className="w-16 h-16 rounded-full mx-auto object-cover"
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
                  <div className="bg-white p-8 rounded-lg shadow text-center">
                    <div className="mb-6">
                      <img 
                        src="https://source.unsplash.com/random/100x100?portrait,3" 
                        alt="Student" 
                        className="w-16 h-16 rounded-full mx-auto object-cover"
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
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-cover bg-center" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("https://source.unsplash.com/random/1920x500?campus,students")' }}>
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Academic Journey?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">Join SVRMC and unlock a world of opportunities. Our application process for the 2025-26 academic year is now open.</p>
          <div className="flex justify-center gap-4">
            <Button size="lg" className="bg-college-gold text-college-blue hover:bg-yellow-400" asChild>
              <Link to="/admission">Apply Now</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-college-blue" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
