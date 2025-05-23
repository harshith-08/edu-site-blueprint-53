
import { useState } from "react";
import Layout from "@/components/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const Gallery = () => {
  const [activeTab, setActiveTab] = useState("campus");

  const galleryItems = {
    campus: [
      { id: 1, src: "https://source.unsplash.com/random/800x600?campus,1", alt: "Campus Main Building" },
      { id: 2, src: "https://source.unsplash.com/random/800x600?university,2", alt: "Library" },
      { id: 3, src: "https://source.unsplash.com/random/800x600?college,3", alt: "Sports Complex" },
      { id: 4, src: "https://source.unsplash.com/random/800x600?education,4", alt: "Computer Lab" },
      { id: 5, src: "https://source.unsplash.com/random/800x600?school,5", alt: "Auditorium" },
      { id: 6, src: "https://source.unsplash.com/random/800x600?building,6", alt: "Student Center" }
    ],
    events: [
      { id: 1, src: "https://source.unsplash.com/random/800x600?event,1", alt: "Annual Day Celebration" },
      { id: 2, src: "https://source.unsplash.com/random/800x600?concert,2", alt: "Cultural Fest" },
      { id: 3, src: "https://source.unsplash.com/random/800x600?conference,3", alt: "Technical Symposium" },
      { id: 4, src: "https://source.unsplash.com/random/800x600?seminar,4", alt: "National Conference" },
      { id: 5, src: "https://source.unsplash.com/random/800x600?workshop,5", alt: "Industry Workshop" },
      { id: 6, src: "https://source.unsplash.com/random/800x600?graduation,6", alt: "Graduation Ceremony" }
    ],
    achievements: [
      { id: 1, src: "https://source.unsplash.com/random/800x600?award,1", alt: "Robotics Competition Winners" },
      { id: 2, src: "https://source.unsplash.com/random/800x600?trophy,2", alt: "Sports Championship" },
      { id: 3, src: "https://source.unsplash.com/random/800x600?medal,3", alt: "Academic Excellence Awards" },
      { id: 4, src: "https://source.unsplash.com/random/800x600?certificate,4", alt: "Research Publication Recognition" }
    ],
    sports: [
      { id: 1, src: "https://source.unsplash.com/random/800x600?cricket,1", alt: "Cricket Match" },
      { id: 2, src: "https://source.unsplash.com/random/800x600?basketball,2", alt: "Basketball Tournament" },
      { id: 3, src: "https://source.unsplash.com/random/800x600?football,3", alt: "Football Match" },
      { id: 4, src: "https://source.unsplash.com/random/800x600?athletics,4", alt: "Athletics Meet" }
    ]
  };

  return (
    <Layout>
      <section className="pt-32 pb-12">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-college-blue mb-4">Photo Gallery</h1>
            <p className="text-gray-600">
              Explore our vibrant campus life, events, achievements, and sporting activities through our photo gallery.
            </p>
          </div>

          <Tabs defaultValue="campus" className="max-w-5xl mx-auto" value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
              <TabsTrigger value="campus">Campus</TabsTrigger>
              <TabsTrigger value="events">Events</TabsTrigger>
              <TabsTrigger value="achievements">Achievements</TabsTrigger>
              <TabsTrigger value="sports">Sports</TabsTrigger>
            </TabsList>
            
            {Object.keys(galleryItems).map(category => (
              <TabsContent key={category} value={category}>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {galleryItems[category as keyof typeof galleryItems].map((item) => (
                    <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                      <CardContent className="p-0">
                        <AspectRatio ratio={4/3} className="bg-muted">
                          <img 
                            src={item.src} 
                            alt={item.alt} 
                            className="object-cover w-full h-full hover:scale-105 transition-transform duration-300" 
                          />
                        </AspectRatio>
                        <div className="p-3 bg-white">
                          <p className="text-sm font-medium text-gray-700">{item.alt}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;
