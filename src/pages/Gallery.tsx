import { useState } from "react";
import Layout from "@/components/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Grid3X3, GalleryVertical } from "lucide-react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const Gallery = () => {
  const [activeTab, setActiveTab] = useState("campus");
  const [viewMode, setViewMode] = useState<"grid" | "masonry">("grid");

  const galleryItems = {
    campus: [
      { id: 1, src: "/lovable-uploads/ad1edf50-6e71-4375-91d2-7e8d76b3b7b5.png", alt: "Main Campus Building" },
      { id: 2, src: "/lovable-uploads/b010e240-0ffe-43a4-884e-04e9e6094c36.png", alt: "College Entrance Gate" },
      { id: 3, src: "/lovable-uploads/c2330428-4591-4e58-92a3-ff6d9918a338.png", alt: "Lecture Hall Complex" },
      { id: 4, src: "/lovable-uploads/aa64612b-a2c2-4fc2-b645-b756306336a0.png", alt: "Students Center" },
      { id: 5, src: "/lovable-uploads/dd09abc5-6c94-4cbf-898d-c7df488183a6.png", alt: "Computer Laboratory" },
      { id: 6, src: "/lovable-uploads/2132c67c-81c1-4c7b-a949-3054c289f2ce.png", alt: "Sports Complex" }
    ],
    events: [
      { id: 1, src: "/lovable-uploads/061b3c84-914c-4bb5-893f-d12d6cff9d3f.png", alt: "NCC Cadets Formation" },
      { id: 2, src: "/lovable-uploads/14236ae3-818e-41ef-a801-cd1e4e2eb10e.png", alt: "NCC Group Photo" },
      { id: 3, src: "/lovable-uploads/17bb2e0f-adc8-46fd-b6dc-aa370c366ef2.png", alt: "NCC Parade Review" },
      { id: 4, src: "/lovable-uploads/c845d941-c566-4910-8dbb-82f90fb04f82.png", alt: "NCC Drill Formation" },
      { id: 5, src: "/lovable-uploads/b1fc6422-ad59-4662-83db-90f4d62b1001.png", alt: "Academic Seminar" },
      { id: 6, src: "/lovable-uploads/8ca0ef83-413e-4894-9e73-7361e0c0106c.png", alt: "Student Achievement Ceremony" }
    ],
    achievements: [
      { id: 1, src: "/lovable-uploads/828ea20e-f759-4b97-aa60-3dc97555221f.png", alt: "Top Rank Achievement" },
      { id: 2, src: "/lovable-uploads/4b78b0b7-424d-41e9-b09c-4108e1edd3c0.png", alt: "Research Center Excellence" },
      { id: 3, src: "/lovable-uploads/4459cba5-4f2b-407d-9115-b78608126cab.png", alt: "Technology Innovation" },
      { id: 4, src: "/lovable-uploads/26e5dd9a-23af-4d35-bf39-50ea0a90dcc1.png", alt: "Robotics Competition" },
      { id: 5, src: "/lovable-uploads/ee497235-78d2-427a-9aca-40010a64e520.png", alt: "Student Well-being Program" },
      { id: 6, src: "/lovable-uploads/d1d2add7-8d38-40a3-9b07-6b30cc16b6bc.png", alt: "Academic Excellence Awards" }
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
      <section className="pt-32 pb-12 relative">
        {/* Hero Background */}
        <div 
          className="absolute top-0 left-0 w-full h-64 bg-cover bg-center z-0" 
          style={{ 
            backgroundImage: 'url("/lovable-uploads/4459cba5-4f2b-407d-9115-b78608126cab.png")', 
            backgroundPosition: 'center 40%' 
          }}
        >
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Campus Photo Gallery</h1>
            <p className="text-gray-200">
              Explore our vibrant campus life, events, achievements, and sporting activities through our photo gallery.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 mb-8">
            <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-college-blue mb-4 sm:mb-0">Browse Gallery</h2>
              <ToggleGroup 
                type="single" 
                value={viewMode} 
                onValueChange={(value) => value && setViewMode(value as "grid" | "masonry")} 
                className="border border-gray-200 rounded-md"
              >
                <ToggleGroupItem value="grid" aria-label="Grid view">
                  <Grid3X3 className="h-5 w-5" />
                </ToggleGroupItem>
                <ToggleGroupItem value="masonry" aria-label="Masonry view">
                  <GalleryVertical className="h-5 w-5" />
                </ToggleGroupItem>
              </ToggleGroup>
            </div>
            
            <Tabs defaultValue="campus" className="w-full" value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
                <TabsTrigger value="campus" className="bg-college-blue text-white data-[state=active]:bg-college-gold data-[state=active]:text-black">Campus</TabsTrigger>
                <TabsTrigger value="events" className="bg-college-blue text-white data-[state=active]:bg-college-gold data-[state=active]:text-black">Events</TabsTrigger>
                <TabsTrigger value="achievements" className="bg-college-blue text-white data-[state=active]:bg-college-gold data-[state=active]:text-black">Achievements</TabsTrigger>
                <TabsTrigger value="sports" className="bg-college-blue text-white data-[state=active]:bg-college-gold data-[state=active]:text-black">Sports</TabsTrigger>
              </TabsList>
              
              {Object.keys(galleryItems).map(category => (
                <TabsContent key={category} value={category}>
                  <div className={`${viewMode === "grid" ? 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4' : 'columns-1 sm:columns-2 md:columns-3 gap-4'}`}>
                    {galleryItems[category as keyof typeof galleryItems].map((item) => (
                      <Card key={item.id} className={`overflow-hidden hover:shadow-lg transition-shadow ${viewMode === "masonry" ? "mb-4 break-inside-avoid" : ""}`}>
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
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;
