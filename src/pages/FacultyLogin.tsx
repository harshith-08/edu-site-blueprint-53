
import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff, Upload, X, FileText } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/Layout";

const FacultyLogin = () => {
  const { toast } = useToast();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  
  const [uploadData, setUploadData] = useState({
    title: "",
    department: "",
    semester: "",
    file: null,
  });
  
  const [uploads, setUploads] = useState([
    {
      id: "1",
      title: "Mid Semester Exam Results",
      department: "Computer Science",
      semester: "4th Semester",
      date: "May 15, 2025",
      fileUrl: "#"
    },
    {
      id: "2",
      title: "Internal Assessment Marks",
      department: "Electronics & Communication",
      semester: "2nd Semester",
      date: "May 10, 2025",
      fileUrl: "#"
    }
  ]);

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
        description: "Welcome back to the faculty portal.",
        variant: "default",
      });
    }, 1500);
  };

  const handleUploadChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "file") {
      setUploadData((prev) => ({ ...prev, file: files[0] }));
    } else {
      setUploadData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleFileUpload = (e) => {
    e.preventDefault();
    
    // Validate if all fields are filled
    if (!uploadData.title || !uploadData.department || !uploadData.semester || !uploadData.file) {
      toast({
        title: "Error",
        description: "Please fill all fields and select a file to upload.",
        variant: "destructive",
      });
      return;
    }
    
    // Simulate file upload
    const newUpload = {
      id: Date.now().toString(),
      title: uploadData.title,
      department: uploadData.department,
      semester: uploadData.semester,
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      fileUrl: "#"
    };
    
    setUploads([newUpload, ...uploads]);
    setUploadData({
      title: "",
      department: "",
      semester: "",
      file: null,
    });
    
    toast({
      title: "Upload Successful",
      description: "File has been uploaded successfully.",
      variant: "default",
    });
  };

  const handleDeleteUpload = (id) => {
    setUploads(uploads.filter(upload => upload.id !== id));
    toast({
      title: "File Deleted",
      description: "The file has been removed.",
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
                  <CardTitle className="text-2xl">Faculty Login</CardTitle>
                  <CardDescription>Access the faculty portal to manage your documents</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleLogin} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Enter your email"
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
                    <CardTitle className="text-2xl">Faculty Portal</CardTitle>
                    <CardDescription>Upload and manage marksheets and other documents</CardDescription>
                  </div>
                  <Button variant="outline" onClick={handleLogout}>Logout</Button>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-bold text-lg mb-4">Upload PDF Document</h3>
                    <form onSubmit={handleFileUpload} className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="title">Document Title</Label>
                          <Input
                            id="title"
                            name="title"
                            placeholder="Enter document title"
                            value={uploadData.title}
                            onChange={handleUploadChange}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="department">Department</Label>
                          <Input
                            id="department"
                            name="department"
                            placeholder="Select department"
                            value={uploadData.department}
                            onChange={handleUploadChange}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="semester">Semester</Label>
                          <Input
                            id="semester"
                            name="semester"
                            placeholder="Enter semester"
                            value={uploadData.semester}
                            onChange={handleUploadChange}
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="file">Upload File (PDF only)</Label>
                        <div className="flex items-center gap-2">
                          <Input
                            id="file"
                            name="file"
                            type="file"
                            accept=".pdf"
                            onChange={handleUploadChange}
                            required
                            className="flex-1"
                          />
                          <Button type="submit" className="bg-college-blue hover:bg-blue-700 flex items-center gap-2">
                            <Upload size={16} />
                            Upload
                          </Button>
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">Maximum file size: 5MB</p>
                      </div>
                    </form>
                  </div>
                  
                  <div>
                    <h3 className="font-bold text-lg mb-4">Your Uploads</h3>
                    <div className="divide-y">
                      {uploads.length > 0 ? (
                        uploads.map((upload) => (
                          <div key={upload.id} className="py-4 flex items-center justify-between">
                            <div className="flex items-start gap-3">
                              <FileText size={24} className="text-college-blue mt-1" />
                              <div>
                                <h4 className="font-medium">{upload.title}</h4>
                                <div className="text-sm text-muted-foreground">
                                  {upload.department} | {upload.semester} | Uploaded: {upload.date}
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <Button variant="outline" size="sm" asChild>
                                <a href={upload.fileUrl} target="_blank" rel="noopener noreferrer">View</a>
                              </Button>
                              <Button
                                variant="ghost"
                                size="sm"
                                className="text-red-500 hover:text-red-700 hover:bg-red-50"
                                onClick={() => handleDeleteUpload(upload.id)}
                              >
                                <X size={16} />
                              </Button>
                            </div>
                          </div>
                        ))
                      ) : (
                        <div className="py-8 text-center">
                          <p className="text-muted-foreground">No documents uploaded yet</p>
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

export default FacultyLogin;
