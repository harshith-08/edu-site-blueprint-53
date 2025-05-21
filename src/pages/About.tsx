
import { ArrowRight } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Layout from "@/components/Layout";

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-cover bg-center" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("https://source.unsplash.com/random/1920x600?university,library")' }}>
        <div className="container mx-auto px-4 text-white">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
            <p className="text-xl">Learn about our rich heritage, vision, and mission to provide quality education.</p>
          </div>
        </div>
      </section>

      {/* College Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">Our Institution</h2>
              <p className="mb-4">Established in 1975, SVRM College has grown to become one of the leading educational institutions in Andhra Pradesh. Named after the visionary philanthropist Shri Velagapudi Ramakrishna, the college was founded with the mission to provide quality education accessible to all sections of society.</p>
              <p className="mb-4">Over the decades, the college has maintained a tradition of academic excellence while constantly evolving to meet the changing educational needs of students. Today, SVRM College stands as a symbol of educational excellence, offering a wide range of undergraduate and postgraduate programs across various disciplines.</p>
              <p>The sprawling campus is equipped with modern facilities including well-equipped laboratories, a comprehensive library, sports facilities, and spacious classrooms to provide students with an enriching learning environment.</p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://source.unsplash.com/random/800x600?college,campus" 
                alt="SVRMC Campus" 
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="section-title">Vision & Mission</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-4 border-college-blue">
              <h3 className="text-2xl font-bold mb-4 text-college-blue">Our Vision</h3>
              <p className="text-gray-700">To be a premier educational institution recognized for academic excellence, innovative research, and producing graduates who are intellectually competent, professionally skilled, and socially responsible citizens contributing to the national development.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-4 border-college-gold">
              <h3 className="text-2xl font-bold mb-4 text-college-blue">Our Mission</h3>
              <ul className="text-gray-700 space-y-2">
                <li className="flex">
                  <ArrowRight className="h-5 w-5 text-college-gold mr-2 flex-shrink-0 mt-0.5" />
                  <span>To impart quality education through effective teaching-learning methods</span>
                </li>
                <li className="flex">
                  <ArrowRight className="h-5 w-5 text-college-gold mr-2 flex-shrink-0 mt-0.5" />
                  <span>To foster research, innovation, and entrepreneurship</span>
                </li>
                <li className="flex">
                  <ArrowRight className="h-5 w-5 text-college-gold mr-2 flex-shrink-0 mt-0.5" />
                  <span>To build industry-academia partnerships for enhanced learning</span>
                </li>
                <li className="flex">
                  <ArrowRight className="h-5 w-5 text-college-gold mr-2 flex-shrink-0 mt-0.5" />
                  <span>To promote holistic development through extracurricular activities</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Principal's Message */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            <div className="md:col-span-1">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://source.unsplash.com/random/400x500?professor,portrait" 
                  alt="Principal" 
                  className="w-full h-auto"
                />
              </div>
              <div className="bg-college-blue text-white p-4 mt-4 rounded-lg">
                <h3 className="text-xl font-bold">Dr. Rajesh Kumar</h3>
                <p className="text-sm">Principal</p>
                <p className="text-sm mt-1">Ph.D. in Educational Leadership</p>
              </div>
            </div>
            <div className="md:col-span-2">
              <h2 className="section-title">Principal's Message</h2>
              <div className="space-y-4 text-gray-700">
                <p>Dear Students, Parents, and Visitors,</p>
                <p>It gives me immense pleasure to welcome you to Shri Velagapudi Ramakrishna Memorial College. For over four decades, SVRMC has been at the forefront of providing quality education and nurturing young minds to become future leaders.</p>
                <p>At SVRMC, we believe in a holistic approach to education that goes beyond textbooks and classrooms. Our aim is to develop well-rounded individuals who excel not only academically but also possess the skills and values necessary to face real-world challenges.</p>
                <p>Our dedicated faculty members are committed to creating a stimulating learning environment where curiosity is encouraged, critical thinking is developed, and innovation is fostered. The state-of-the-art infrastructure and modern facilities further enhance the learning experience of our students.</p>
                <p>We are proud of our alumni who have excelled in various fields and brought laurels to their alma mater. Their success stories serve as an inspiration for our current students and motivate us to continue our pursuit of excellence.</p>
                <p>As we move forward, we remain committed to our vision of being a center of excellence in education, research, and innovation. I invite you to be a part of the SVRMC family and join us in this exciting journey of learning and growth.</p>
                <p className="font-semibold">Warm regards,</p>
                <p className="font-semibold">Dr. Rajesh Kumar</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards and Recognition */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Awards & Recognition</h2>
            <p className="text-muted-foreground">Celebrating our achievements and accolades</p>
          </div>
          
          <Tabs defaultValue="accreditation" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="accreditation">Accreditation</TabsTrigger>
              <TabsTrigger value="rankings">Rankings</TabsTrigger>
              <TabsTrigger value="awards">Awards</TabsTrigger>
            </TabsList>
            <TabsContent value="accreditation" className="mt-6">
              <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
                <div className="flex flex-col md:flex-row gap-4 items-center p-4 border border-gray-200 rounded-lg">
                  <img src="https://source.unsplash.com/random/100x100?certificate,1" alt="NAAC" className="w-20 h-20 object-cover rounded" />
                  <div>
                    <h4 className="font-bold text-lg">NAAC 'A+' Grade</h4>
                    <p className="text-muted-foreground">Awarded for excellence in academic standards, research, and infrastructure</p>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row gap-4 items-center p-4 border border-gray-200 rounded-lg">
                  <img src="https://source.unsplash.com/random/100x100?certificate,2" alt="NBA" className="w-20 h-20 object-cover rounded" />
                  <div>
                    <h4 className="font-bold text-lg">NBA Accreditation</h4>
                    <p className="text-muted-foreground">Multiple engineering programs accredited by the National Board of Accreditation</p>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row gap-4 items-center p-4 border border-gray-200 rounded-lg">
                  <img src="https://source.unsplash.com/random/100x100?certificate,3" alt="UGC" className="w-20 h-20 object-cover rounded" />
                  <div>
                    <h4 className="font-bold text-lg">UGC Recognition</h4>
                    <p className="text-muted-foreground">Recognized under Section 2(f) and 12(B) of the UGC Act</p>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="rankings" className="mt-6">
              <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
                <div className="flex flex-col md:flex-row gap-4 items-center p-4 border border-gray-200 rounded-lg">
                  <img src="https://source.unsplash.com/random/100x100?trophy,1" alt="NIRF" className="w-20 h-20 object-cover rounded" />
                  <div>
                    <h4 className="font-bold text-lg">NIRF Ranking</h4>
                    <p className="text-muted-foreground">Ranked among top 150 engineering colleges in India by NIRF</p>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row gap-4 items-center p-4 border border-gray-200 rounded-lg">
                  <img src="https://source.unsplash.com/random/100x100?trophy,2" alt="THE" className="w-20 h-20 object-cover rounded" />
                  <div>
                    <h4 className="font-bold text-lg">Times Higher Education Impact Rankings</h4>
                    <p className="text-muted-foreground">Featured in the Impact Rankings for contributions to sustainable development goals</p>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row gap-4 items-center p-4 border border-gray-200 rounded-lg">
                  <img src="https://source.unsplash.com/random/100x100?trophy,3" alt="Outlook" className="w-20 h-20 object-cover rounded" />
                  <div>
                    <h4 className="font-bold text-lg">Outlook-ICARE Rankings</h4>
                    <p className="text-muted-foreground">Top 50 engineering colleges in South India by Outlook-ICARE</p>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="awards" className="mt-6">
              <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
                <div className="flex flex-col md:flex-row gap-4 items-center p-4 border border-gray-200 rounded-lg">
                  <img src="https://source.unsplash.com/random/100x100?award,1" alt="Clean Campus" className="w-20 h-20 object-cover rounded" />
                  <div>
                    <h4 className="font-bold text-lg">Clean Campus Award</h4>
                    <p className="text-muted-foreground">Recognized for maintaining eco-friendly and sustainable campus</p>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row gap-4 items-center p-4 border border-gray-200 rounded-lg">
                  <img src="https://source.unsplash.com/random/100x100?award,2" alt="Innovation" className="w-20 h-20 object-cover rounded" />
                  <div>
                    <h4 className="font-bold text-lg">Innovation Excellence Award</h4>
                    <p className="text-muted-foreground">Awarded by CII for promoting research and innovation</p>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row gap-4 items-center p-4 border border-gray-200 rounded-lg">
                  <img src="https://source.unsplash.com/random/100x100?award,3" alt="Sports" className="w-20 h-20 object-cover rounded" />
                  <div>
                    <h4 className="font-bold text-lg">Best Sports Infrastructure Award</h4>
                    <p className="text-muted-foreground">Recognized for excellent sports facilities and achievements</p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </Layout>
  );
};

export default About;
