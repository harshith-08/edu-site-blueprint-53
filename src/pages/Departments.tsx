
import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";

const Departments = () => {
  const [activeTab, setActiveTab] = useState("engineering");

  const departments = {
    engineering: [
      {
        id: "cse",
        name: "Computer Science & Engineering",
        image: "https://source.unsplash.com/random/400x300?computer,code",
        description: "Offers programs in software development, AI, machine learning, and more.",
        programs: ["B.Tech", "M.Tech", "Ph.D"]
      },
      {
        id: "ece",
        name: "Electronics & Communication Engineering",
        image: "https://source.unsplash.com/random/400x300?electronics,circuit",
        description: "Focuses on electronic systems, communication networks, and signal processing.",
        programs: ["B.Tech", "M.Tech", "Ph.D"]
      },
      {
        id: "civil",
        name: "Civil Engineering",
        image: "https://source.unsplash.com/random/400x300?construction,building",
        description: "Deals with design, construction, and maintenance of physical structures.",
        programs: ["B.Tech", "M.Tech"]
      },
      {
        id: "mech",
        name: "Mechanical Engineering",
        image: "https://source.unsplash.com/random/400x300?mechanical,machine",
        description: "Covers mechanics, thermodynamics, robotics, and manufacturing processes.",
        programs: ["B.Tech", "M.Tech", "Ph.D"]
      }
    ],
    science: [
      {
        id: "physics",
        name: "Physics",
        image: "https://source.unsplash.com/random/400x300?physics,science",
        description: "Study of matter, energy, and the interaction between them.",
        programs: ["B.Sc", "M.Sc", "Ph.D"]
      },
      {
        id: "chemistry",
        name: "Chemistry",
        image: "https://source.unsplash.com/random/400x300?chemistry,lab",
        description: "Explores the composition, structure, properties, and changes of matter.",
        programs: ["B.Sc", "M.Sc", "Ph.D"]
      },
      {
        id: "maths",
        name: "Mathematics",
        image: "https://source.unsplash.com/random/400x300?mathematics,equations",
        description: "Focuses on mathematical theories, computational techniques, and applications.",
        programs: ["B.Sc", "M.Sc", "Ph.D"]
      }
    ],
    management: [
      {
        id: "mba",
        name: "Business Administration",
        image: "https://source.unsplash.com/random/400x300?business,management",
        description: "Offers specializations in finance, marketing, HR, and operations management.",
        programs: ["BBA", "MBA"]
      },
      {
        id: "commerce",
        name: "Commerce",
        image: "https://source.unsplash.com/random/400x300?commerce,accounting",
        description: "Covers accounting, taxation, business law, and economics.",
        programs: ["B.Com", "M.Com"]
      }
    ]
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-cover bg-center" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("https://source.unsplash.com/random/1920x600?university,classroom")' }}>
        <div className="container mx-auto px-4 text-white">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Departments</h1>
            <p className="text-xl">Explore our diverse academic departments offering quality education across various disciplines.</p>
          </div>
        </div>
      </section>

      {/* Departments List */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="engineering" className="w-full" onValueChange={setActiveTab}>
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-3 w-full max-w-md">
                <TabsTrigger value="engineering">Engineering</TabsTrigger>
                <TabsTrigger value="science">Science</TabsTrigger>
                <TabsTrigger value="management">Management</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="engineering" className="space-y-6">
              <div className="text-center mb-6">
                <h2 className="text-3xl font-bold text-college-blue">Engineering Departments</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto mt-2">
                  Our engineering departments offer cutting-edge programs with a focus on practical skills and industry readiness.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {departments.engineering.map((dept) => (
                  <DepartmentCard key={dept.id} department={dept} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="science" className="space-y-6">
              <div className="text-center mb-6">
                <h2 className="text-3xl font-bold text-college-blue">Science Departments</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto mt-2">
                  Our science departments provide a strong foundation in theoretical concepts and laboratory skills.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {departments.science.map((dept) => (
                  <DepartmentCard key={dept.id} department={dept} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="management" className="space-y-6">
              <div className="text-center mb-6">
                <h2 className="text-3xl font-bold text-college-blue">Management Departments</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto mt-2">
                  Our management programs focus on developing entrepreneurial and leadership skills.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {departments.management.map((dept) => (
                  <DepartmentCard key={dept.id} department={dept} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Department Facilities */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Department Facilities</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              All our departments are equipped with state-of-the-art facilities to enhance the learning experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="h-48 mb-4 overflow-hidden rounded-md">
                <img 
                  src="https://source.unsplash.com/random/600x400?laboratory" 
                  alt="Modern Laboratories" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-college-blue mb-2">Modern Laboratories</h3>
              <p className="text-gray-700">
                Well-equipped labs with the latest equipment and technology to support practical learning and research activities.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="h-48 mb-4 overflow-hidden rounded-md">
                <img 
                  src="https://source.unsplash.com/random/600x400?library,books" 
                  alt="Departmental Libraries" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-college-blue mb-2">Departmental Libraries</h3>
              <p className="text-gray-700">
                Specialized libraries with an extensive collection of books, journals, and digital resources for in-depth study.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="h-48 mb-4 overflow-hidden rounded-md">
                <img 
                  src="https://source.unsplash.com/random/600x400?computer,lab" 
                  alt="Computing Facilities" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-college-blue mb-2">Computing Facilities</h3>
              <p className="text-gray-700">
                High-performance computing labs with the latest software tools and high-speed internet connectivity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty Excellence */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">Faculty Excellence</h2>
              <p className="mb-4">
                Our departments are led by distinguished faculty members who are experts in their respective fields. With a perfect blend of academic credentials and industry experience, our professors bring valuable insights into classrooms.
              </p>
              <p className="mb-4">
                Many of our faculty members are actively involved in research, have published papers in reputed journals, and have received prestigious grants for their work. Their dedication to teaching and research creates a stimulating learning environment for students.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-college-gold rounded-full mr-2"></span>
                  <span>150+ faculty members with doctoral degrees</span>
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-college-gold rounded-full mr-2"></span>
                  <span>Regular faculty development programs</span>
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-college-gold rounded-full mr-2"></span>
                  <span>Industry collaborations for practical learning</span>
                </li>
              </ul>
              <Button className="bg-college-blue hover:bg-blue-700" asChild>
                <Link to="/faculty-directory">Meet Our Faculty</Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://source.unsplash.com/random/300x400?professor,1" 
                alt="Faculty" 
                className="rounded-lg shadow-md h-64 w-full object-cover"
              />
              <img 
                src="https://source.unsplash.com/random/300x400?lecture,1" 
                alt="Faculty" 
                className="rounded-lg shadow-md h-64 w-full object-cover mt-8"
              />
              <img 
                src="https://source.unsplash.com/random/300x400?laboratory,research" 
                alt="Faculty" 
                className="rounded-lg shadow-md h-64 w-full object-cover mt-8"
              />
              <img 
                src="https://source.unsplash.com/random/300x400?professor,2" 
                alt="Faculty" 
                className="rounded-lg shadow-md h-64 w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-college-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Interested in Our Programs?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Explore our comprehensive range of programs and take the first step towards a successful career.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-white text-college-blue hover:bg-gray-100" asChild>
              <Link to="/admission">Apply Now</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10" asChild>
              <Link to="/contact">Request Information</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

const DepartmentCard = ({ department }) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col">
      <div className="h-48 overflow-hidden">
        <img 
          src={department.image} 
          alt={department.name} 
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
        />
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">{department.name}</CardTitle>
        <CardDescription className="flex gap-2 flex-wrap">
          {department.programs.map((program, index) => (
            <span key={index} className="bg-muted px-2 py-0.5 rounded-full text-xs">
              {program}
            </span>
          ))}
        </CardDescription>
      </CardHeader>
      <CardContent className="pb-2 flex-grow">
        <p className="text-sm text-muted-foreground">
          {department.description}
        </p>
      </CardContent>
      <CardFooter>
        <Button variant="link" className="text-college-blue px-0 flex items-center" asChild>
          <Link to={`/departments/${department.id}`}>
            Learn More <ArrowRight className="ml-1 h-3.5 w-3.5" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Departments;
