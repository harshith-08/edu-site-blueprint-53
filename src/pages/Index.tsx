
import { useState } from "react";
import Layout from "@/components/Layout";
import HeroSection from "@/components/home/HeroSection";
import AnnouncementsTicker from "@/components/home/AnnouncementsTicker";
import AnnouncementsSidebar from "@/components/home/AnnouncementsSidebar";
import MainContent from "@/components/home/MainContent";
import CallToAction from "@/components/home/CallToAction";

const Index = () => {
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

  const latestNews = [
    {
      id: 1,
      title: "College Secures Top Rank in State Rankings",
      date: "May 18, 2025",
      image: "/lovable-uploads/d85fb3d3-b73a-4321-ba55-69d5399a79a5.png"
    },
    {
      id: 2,
      title: "New Research Center Inaugurated",
      date: "May 14, 2025",
      image: "/lovable-uploads/a64e202d-8654-4eb7-9a72-956203b85f88.png"
    },
    {
      id: 3,
      title: "Students Excel in Academic Competitions",
      date: "May 10, 2025",
      image: "/lovable-uploads/fd7697be-4da9-4c9f-99c3-16a23c2dc964.png"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection />

      {/* Announcements Ticker */}
      <AnnouncementsTicker announcements={announcements} />

      {/* Main Content with Announcements Column */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Announcements */}
            <AnnouncementsSidebar announcements={allAnnouncements} />
            
            {/* Right Column - Main Content */}
            <MainContent latestNews={latestNews} />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CallToAction />
    </Layout>
  );
};

export default Index;
