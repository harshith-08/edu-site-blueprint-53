
import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Eye, EyeOff, Search, FileText, Download } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/Layout";

const StudentLogin = () => {
  const { toast } = useToast();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  
  const [filters, setFilters] = useState({
    semester: "",
    department: ""
  });
  
  const [searchQuery, setSearchQuery] = useState("");
  
  const marksheets = [
    {
      id: "1",
      title: "Mid Semester Exam Results",
      department: "Computer Science",
      semester: "4th Semester",
      uploadDate: "May 15, 2025",
      fileUrl: "#"
    },
    {
      id: "2",
      title: "Internal Assessment Marks",
      department: "Electronics & Communication",
      semester: "2nd Semester",
      uploadDate: "May 10, 2025",
      fileUrl: "#"
    },
    {
      id: "3",
      title: "Final Semester Results",
      department: "Computer Science",
      semester: "3rd Semester",
      uploadDate: "May 5, 2025",
      fileUrl: "#"
    },
    {
      id: "4",
      title: "Laboratory Performance Assessment",
      department: "Mechanical Engineering",
      semester: "5th Semester",
      uploadDate: "May 1, 2025",
      fileUrl: "#"
    },
    {
      id: "5",
      title: "Project Evaluation Results",
      department: "Civil Engineering",
      semester: "6th Semester",
      uploadDate: "April 28, 2025",
      fileUrl: "#"
    }
  ];

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate login process
    setTimeout(() => {
      setIsLoggedIn(true);
      setLoading(false);
      toast({
        title: "Login Successful",
        description: "Welcome to the student portal.",
        variant: "default",
      });
    }, 1500);
  };

  const handleFilterChange = (name, value) => {
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredMarksheets = marksheets.filter((sheet) => {
    const matchesSemester = !filters.semester || sheet.semester === filters.semester;
    const matchesDepartment = !filters.department || sheet.department === filters.department;
    const matchesSearch = !searchQuery || 
      sheet.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sheet.department.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesSemester && matchesDepartment && matchesSearch;
  });

  const handleDownload = (id) => {
    toast({
      title: "Download Started",
      description: "Your document is being downloaded.",
      variant: "default",
    });
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setLoginData({ email: "", password: "" });
    toast({
      title: "Logged Out",
      description: "You have been successfully logged out.",
      variant: "default",
    });
  };

  return (
    <Layout>
      <section className="py-20 bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4">
          {!isLoggedIn ? (
            <div className="max-w-md mx-auto">
              <Card>
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">Student Login</CardTitle>
                  <CardDescription>Access the student portal to view your documents</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleLogin} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email or Registration Number</Label>
                      <Input
                        id="email"
                        name="email"
                        placeholder="Enter your email or reg. number"
                        value={loginData.email}
                        onChange={handleLoginChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="password">Password</Label>
                      <div className="relative">
                        <Input
                          id="password"
                          name="password"
                          type={showPassword ? "text" : "password"}
                          placeholder="Enter your password"
                          value={loginData.password}
                          onChange={handleLoginChange}
                          required
                        />
                        <button
                          type="button"
                          className="absolute right-3 top-2.5 text-gray-500 hover:text-gray-700"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                        </button>
                      </div>
                    </div>
                    <Button type="submit" className="w-full bg-college-blue hover:bg-blue-700" disabled={loading}>
                      {loading ? "Logging in..." : "Login"}
                    </Button>
                  </form>
                </CardContent>
                <CardFooter className="flex flex-col items-center text-center">
                  <div className="text-sm text-muted-foreground">
                    <a href="#" className="hover:underline">Forgot password?</a>
                  </div>
                </CardFooter>
              </Card>
            </div>
          ) : (
            <div className="max-w-4xl mx-auto">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <div>
                    <CardTitle className="text-2xl">Student Portal</CardTitle>
                    <CardDescription>Access your marksheets and other academic documents</CardDescription>
                  </div>
                  <Button variant="outline" onClick={handleLogout}>Logout</Button>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-bold text-lg mb-4">Search & Filter Documents</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <Label htmlFor="searchQuery" className="mb-2">Search</Label>
                        <div className="relative">
                          <Input
                            id="searchQuery"
                            placeholder="Search by title or department"
                            value={searchQuery}
                            onChange={handleSearchChange}
                            className="pl-9"
                          />
                          <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="department" className="mb-2">Department</Label>
                        <Select 
                          onValueChange={(value) => handleFilterChange("department", value)}
                          value={filters.department}
                        >
                          <SelectTrigger id="department">
                            <SelectValue placeholder="All Departments" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="">All Departments</SelectItem>
                            <SelectItem value="Computer Science">Computer Science</SelectItem>
                            <SelectItem value="Electronics & Communication">Electronics & Communication</SelectItem>
                            <SelectItem value="Civil Engineering">Civil Engineering</SelectItem>
                            <SelectItem value="Mechanical Engineering">Mechanical Engineering</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="semester" className="mb-2">Semester</Label>
                        <Select 
                          onValueChange={(value) => handleFilterChange("semester", value)}
                          value={filters.semester}
                        >
                          <SelectTrigger id="semester">
                            <SelectValue placeholder="All Semesters" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="">All Semesters</SelectItem>
                            <SelectItem value="1st Semester">1st Semester</SelectItem>
                            <SelectItem value="2nd Semester">2nd Semester</SelectItem>
                            <SelectItem value="3rd Semester">3rd Semester</SelectItem>
                            <SelectItem value="4th Semester">4th Semester</SelectItem>
                            <SelectItem value="5th Semester">5th Semester</SelectItem>
                            <SelectItem value="6th Semester">6th Semester</SelectItem>
                            <SelectItem value="7th Semester">7th Semester</SelectItem>
                            <SelectItem value="8th Semester">8th Semester</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-bold text-lg mb-4">Available Documents</h3>
                    <div className="divide-y">
                      {filteredMarksheets.length > 0 ? (
                        filteredMarksheets.map((sheet) => (
                          <div key={sheet.id} className="py-4 flex items-center justify-between">
                            <div className="flex items-start gap-3">
                              <FileText size={24} className="text-college-blue mt-1" />
                              <div>
                                <h4 className="font-medium">{sheet.title}</h4>
                                <div className="text-sm text-muted-foreground">
                                  {sheet.department} | {sheet.semester} | Uploaded: {sheet.uploadDate}
                                </div>
                              </div>
                            </div>
                            <Button 
                              variant="outline" 
                              size="sm" 
                              className="flex items-center gap-1"
                              onClick={() => handleDownload(sheet.id)}
                            >
                              <Download size={16} />
                              Download
                            </Button>
                          </div>
                        ))
                      ) : (
                        <div className="py-8 text-center">
                          <p className="text-muted-foreground">No documents found matching your criteria</p>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default StudentLogin;
