
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/Layout";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent",
        description: "Thank you for contacting us. We'll get back to you soon.",
        variant: "default",
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setLoading(false);
    }, 1500);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-cover bg-center" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("https://source.unsplash.com/random/1920x600?college,building")' }}>
        <div className="container mx-auto px-4 text-white">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl">Get in touch with us for any inquiries or information.</p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-college-blue" />
                </div>
                <h3 className="font-bold text-lg mb-2">Address</h3>
                <p className="text-muted-foreground">
                  SVRM College Campus, NH-5,<br />
                  Nagaram, Guntur District,<br />
                  Andhra Pradesh - 522268
                </p>
              </div>
            </Card>
            
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Phone className="h-6 w-6 text-college-blue" />
                </div>
                <h3 className="font-bold text-lg mb-2">Phone</h3>
                <p className="text-muted-foreground">
                  Main Office: +91 9999999999<br />
                  Admissions: +91 8888888888<br />
                  Examinations: +91 7777777777
                </p>
              </div>
            </Card>
            
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Mail className="h-6 w-6 text-college-blue" />
                </div>
                <h3 className="font-bold text-lg mb-2">Email</h3>
                <p className="text-muted-foreground">
                  General: info@svrmc.edu.in<br />
                  Admissions: admissions@svrmc.edu.in<br />
                  Placements: placements@svrmc.edu.in
                </p>
              </div>
            </Card>
            
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-college-blue" />
                </div>
                <h3 className="font-bold text-lg mb-2">Office Hours</h3>
                <p className="text-muted-foreground">
                  Monday - Friday: 9:00 AM - 5:00 PM<br />
                  Saturday: 9:00 AM - 1:00 PM<br />
                  Sunday: Closed
                </p>
              </div>
            </Card>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div>
              <h2 className="section-title mb-8">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="Enter subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Enter your message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <Button 
                  type="submit" 
                  className="bg-college-blue hover:bg-blue-700 w-full md:w-auto"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
            
            <div>
              <h2 className="section-title mb-8">Find Us</h2>
              <div className="rounded-lg overflow-hidden shadow-md h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3836.7950223313613!2d80.53202607592844!3d15.900663043779911!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4a0bb3bc7db711%3A0xb6f3a7173223e89d!2sVelagapudi%20Ramakrishna%20Siddhartha%20Engineering%20College!5e0!3m2!1sen!2sin!4v1715777718390!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="College Location Map"
                ></iframe>
              </div>
              <div className="mt-6 bg-gray-50 p-4 rounded-lg">
                <h3 className="font-bold text-lg mb-2">How to Reach Us</h3>
                <div className="space-y-2">
                  <p className="text-sm">
                    <span className="font-medium">By Bus:</span> Regular state transport buses are available from Guntur, Vijayawada, and nearby towns.
                  </p>
                  <p className="text-sm">
                    <span className="font-medium">By Train:</span> Nearest railway station is Guntur Junction (15 km) with frequent auto/cab services to the college.
                  </p>
                  <p className="text-sm">
                    <span className="font-medium">By Air:</span> Nearest airport is Vijayawada Airport (50 km). Taxis are available from the airport to the college.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Departments Contact */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Department Contacts</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Contact specific departments directly for academic queries.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-6">
              <h3 className="font-bold text-lg mb-4 text-college-blue">Engineering Departments</h3>
              <ul className="space-y-3">
                <li>
                  <div className="font-medium">Computer Science & Engineering</div>
                  <div className="text-sm text-muted-foreground">cse@svrmc.edu.in | +91 9876543210</div>
                </li>
                <li>
                  <div className="font-medium">Electronics & Communication Engineering</div>
                  <div className="text-sm text-muted-foreground">ece@svrmc.edu.in | +91 9876543211</div>
                </li>
                <li>
                  <div className="font-medium">Civil Engineering</div>
                  <div className="text-sm text-muted-foreground">civil@svrmc.edu.in | +91 9876543212</div>
                </li>
                <li>
                  <div className="font-medium">Mechanical Engineering</div>
                  <div className="text-sm text-muted-foreground">mechanical@svrmc.edu.in | +91 9876543213</div>
                </li>
              </ul>
            </Card>
            
            <Card className="p-6">
              <h3 className="font-bold text-lg mb-4 text-college-blue">Science Departments</h3>
              <ul className="space-y-3">
                <li>
                  <div className="font-medium">Physics</div>
                  <div className="text-sm text-muted-foreground">physics@svrmc.edu.in | +91 9876543214</div>
                </li>
                <li>
                  <div className="font-medium">Chemistry</div>
                  <div className="text-sm text-muted-foreground">chemistry@svrmc.edu.in | +91 9876543215</div>
                </li>
                <li>
                  <div className="font-medium">Mathematics</div>
                  <div className="text-sm text-muted-foreground">maths@svrmc.edu.in | +91 9876543216</div>
                </li>
              </ul>
            </Card>
            
            <Card className="p-6">
              <h3 className="font-bold text-lg mb-4 text-college-blue">Administrative Offices</h3>
              <ul className="space-y-3">
                <li>
                  <div className="font-medium">Principal's Office</div>
                  <div className="text-sm text-muted-foreground">principal@svrmc.edu.in | +91 9876543217</div>
                </li>
                <li>
                  <div className="font-medium">Examination Cell</div>
                  <div className="text-sm text-muted-foreground">exams@svrmc.edu.in | +91 9876543218</div>
                </li>
                <li>
                  <div className="font-medium">Training & Placement Cell</div>
                  <div className="text-sm text-muted-foreground">placements@svrmc.edu.in | +91 9876543219</div>
                </li>
                <li>
                  <div className="font-medium">Hostel Administration</div>
                  <div className="text-sm text-muted-foreground">hostel@svrmc.edu.in | +91 9876543220</div>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Find answers to common queries about admissions, campus facilities, and more.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <Card className="mb-4">
              <div className="p-6">
                <h3 className="font-bold text-lg mb-2">What are the admission requirements?</h3>
                <p className="text-muted-foreground">
                  Admission requirements vary by program. Generally, for undergraduate programs, candidates must have completed 10+2 with the required percentage in relevant subjects. For postgraduate programs, a bachelor's degree in the relevant field is required. Please visit our Admissions page for specific program requirements.
                </p>
              </div>
            </Card>
            <Card className="mb-4">
              <div className="p-6">
                <h3 className="font-bold text-lg mb-2">Are hostel facilities available?</h3>
                <p className="text-muted-foreground">
                  Yes, we have separate hostel facilities for boys and girls with modern amenities. The hostels feature comfortable accommodations, mess facilities, recreational areas, and 24/7 security. For hostel applications and fees, please contact the Hostel Administration Office.
                </p>
              </div>
            </Card>
            <Card className="mb-4">
              <div className="p-6">
                <h3 className="font-bold text-lg mb-2">How can I apply for scholarships?</h3>
                <p className="text-muted-foreground">
                  The college offers various merit-based and need-based scholarships. Students can also apply for government scholarships. The application process and deadlines are announced at the beginning of each academic year. Please visit the Scholarships section on our website or contact the Scholarships Office for details.
                </p>
              </div>
            </Card>
            <Card>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-2">What placement services are provided?</h3>
                <p className="text-muted-foreground">
                  Our Training & Placement Cell actively works to secure placement opportunities for students. We conduct pre-placement training, arrange campus interviews, and organize career guidance workshops. We have partnerships with numerous companies across various industries for recruitment.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
