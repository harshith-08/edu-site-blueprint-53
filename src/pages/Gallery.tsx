
import { useState } from "react";
import Layout from "@/components/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Gallery as GalleryIcon, GalleryVertical } from "lucide-react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const Gallery = () => {
  const [activeTab, setActiveTab] = useState("campus");
  const [viewMode, setViewMode] = useState<"grid" | "masonry">("grid");

  const galleryItems = {
    campus: [
      { id: 1, src: "/lovable-uploads/805efae8-1428-4b19-9a41-f2f62680aefc.png", alt: "Campus Main Building" },
      { id: 7, src: "/lovable-uploads/084d247d-fba5-4d09-b18e-9685cdd1084d.png", alt: "Chemistry Laboratory" },
      { id: 5, src: "/lovable-uploads/71dea894-961d-4fd6-ac1f-78e8db8d93b4.png", alt: "Auditorium" },
      { id: 6, src: "/lovable-uploads/365bcf12-2218-4dd4-a6e7-6d4bc591739a.png", alt: "Computer Lab" },
      { id: 3, src: "https://source.unsplash.com/random/800x600?college,3", alt: "Sports Complex" },
      { id: 6, src: "https://source.unsplash.com/random/800x600?building,6", alt: "Student Center" }
    ],
    events: [
      { id: 1, src: "/lovable-uploads/9f96f106-897d-46e3-a4a1-4c4b8f8f9f0c.png", alt: "NCC Cadets Formation" },
      { id: 2, src: "/lovable-uploads/14236ae3-818e-41ef-a801-cd1e4e2eb10e.png", alt: "NCC Group Photo" },
      { id: 3, src: "/lovable-uploads/17bb2e0f-adc8-46fd-b6dc-aa370c366ef2.png", alt: "NCC Parade Review" },
      { id: 4, src: "https://source.unsplash.com/random/800x600?seminar,4", alt: "National Conference" },
      { id: 5, src: "https://source.unsplash.com/random/800x600?workshop,5", alt: "Industry Workshop" },
      { id: 6, src: "https://source.unsplash.com/random/800x600?graduation,6", alt: "Graduation Ceremony" }
    ],
    achievements: [
      { id: 1, src: "/lovable-uploads/3f2ac2fe-5cc6-403c-b266-c0a4bfc92b9a.png", alt: "Robotics Research Center" },
      { id: 2, src: "/lovable-uploads/8ca0ef83-413e-4894-9e73-7361e0c0106c.png", alt: "Student Achievement Ceremony" },
      { id: 3, src: "/lovable-uploads/7e88e73b-ef9a-4c29-a6b7-de49570db1f5.png", alt: "Research Excellence" },
      { id: 4, src: "/lovable-uploads/d1d2add7-8d38-40a3-9b07-6b30cc16b6bc.png", alt: "Academic Excellence Awards" }
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
            backgroundImage: 'url("/lovable-uploads/805efae8-1428-4b19-9a41-f2f62680aefc.png")', 
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
                  <GalleryIcon className="h-5 w-5" />
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
