
import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsItem, TabsList } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Eye, EyeOff, Upload, X, FileText, Bell, Edit, Trash2, Plus, Calendar } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/Layout";

const AdminLogin = () => {
  const { toast } = useToast();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("documents");
  
  // Document upload state
  const [uploadData, setUploadData] = useState({
    title: "",
    department: "",
    semester: "",
    file: null,
  });
  
  // Announcement state
  const [announcementData, setAnnouncementData] = useState({
    title: "",
    content: "",
    type: "general",
    date: new Date().toISOString().split('T')[0]
  });
  
  const [editingAnnouncement, setEditingAnnouncement] = useState(null);
  
  const [documents, setDocuments] = useState([
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
  
  const [announcements, setAnnouncements] = useState([
    {
      id: "1",
      title: "Summer Vacation Announcement",
      content: "The college will remain closed from June 1 to June 30, 2025 for summer vacation.",
      type: "holiday",
      date: "May 15, 2025"
    },
    {
      id: "2",
      title: "Annual Sports Meet",
      content: "Annual sports meet will be held from May 25-27, 2025. All students are encouraged to participate.",
      type: "event",
      date: "May 10, 2025"
    },
    {
      id: "3",
      title: "New Library Resources",
      content: "Library has been updated with new resources for engineering students.",
      type: "general",
      date: "May 5, 2025"
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
        description: "Welcome to the admin portal.",
        variant: "default",
      });
    }, 1000);
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
    
    if (!uploadData.title || !uploadData.department || !uploadData.semester || !uploadData.file) {
      toast({
        title: "Error",
        description: "Please fill all fields and select a file to upload.",
        variant: "destructive",
      });
      return;
    }
    
    const newUpload = {
      id: Date.now().toString(),
      title: uploadData.title,
      department: uploadData.department,
      semester: uploadData.semester,
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      fileUrl: "#"
    };
    
    setDocuments([newUpload, ...documents]);
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

  const handleAnnouncementChange = (e) => {
    const { name, value } = e.target;
    setAnnouncementData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCreateAnnouncement = (e) => {
    e.preventDefault();
    
    if (!announcementData.title || !announcementData.content) {
      toast({
        title: "Error",
        description: "Please provide a title and content for the announcement.",
        variant: "destructive",
      });
      return;
    }
    
    if (editingAnnouncement) {
      // Update existing announcement
      const updatedAnnouncements = announcements.map(ann => 
        ann.id === editingAnnouncement 
          ? { 
              ...ann, 
              title: announcementData.title,
              content: announcementData.content,
              type: announcementData.type,
              date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
            } 
          : ann
      );
      
      setAnnouncements(updatedAnnouncements);
      setEditingAnnouncement(null);
      toast({
        title: "Announcement Updated",
        description: "The announcement has been updated successfully.",
        variant: "default",
      });
    } else {
      // Create new announcement
      const newAnnouncement = {
        id: Date.now().toString(),
        title: announcementData.title,
        content: announcementData.content,
        type: announcementData.type,
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
      };
      
      setAnnouncements([newAnnouncement, ...announcements]);
      toast({
        title: "Announcement Created",
        description: "New announcement has been created successfully.",
        variant: "default",
      });
    }
    
    setAnnouncementData({
      title: "",
      content: "",
      type: "general",
      date: new Date().toISOString().split('T')[0]
    });
  };

  const handleEditAnnouncement = (id) => {
    const announcement = announcements.find(a => a.id === id);
    if (announcement) {
      setAnnouncementData({
        title: announcement.title,
        content: announcement.content,
        type: announcement.type,
        date: announcement.date
      });
      setEditingAnnouncement(id);
    }
  };

  const handleDeleteAnnouncement = (id) => {
    setAnnouncements(announcements.filter(a => a.id !== id));
    toast({
      title: "Announcement Deleted",
      description: "The announcement has been removed.",
      variant: "default",
    });
  };

  const handleDeleteUpload = (id) => {
    setDocuments(documents.filter(doc => doc.id !== id));
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

  const getAnnouncementTypeStyles = (type) => {
    switch (type) {
      case "event":
        return "bg-blue-100 text-blue-800 border-blue-300";
      case "holiday":
        return "bg-green-100 text-green-800 border-green-300";
      case "exam":
        return "bg-purple-100 text-purple-800 border-purple-300";
      case "important":
        return "bg-red-100 text-red-800 border-red-300";
      default:
        return "bg-gray-100 text-gray-800 border-gray-300";
    }
  };

  const getAnnouncementIcon = (type) => {
    switch (type) {
      case "event":
        return <Calendar className="w-5 h-5 text-blue-600" />;
      case "holiday":
        return <Calendar className="w-5 h-5 text-green-600" />;
      case "exam":
        return <FileText className="w-5 h-5 text-purple-600" />;
      case "important":
        return <Bell className="w-5 h-5 text-red-600" />;
      default:
        return <Bell className="w-5 h-5 text-gray-600" />;
    }
  };

  return (
    <Layout>
      <section className="py-20 bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4">
          {!isLoggedIn ? (
            <div className="max-w-md mx-auto">
              <Card className="border-t-4 border-t-green-600">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">Admin Login</CardTitle>
                  <CardDescription>Access the administrative portal to manage documents and announcements</CardDescription>
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
                    <Button type="submit" className="w-full bg-green-600 hover:bg-green-700" disabled={loading}>
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
            <div className="max-w-6xl mx-auto">
              <Card className="border-t-4 border-t-green-600">
                <CardHeader className="flex flex-row items-center justify-between">
                  <div>
                    <CardTitle className="text-2xl">Admin Portal</CardTitle>
                    <CardDescription>Manage college documents and announcements</CardDescription>
                  </div>
                  <Button variant="outline" onClick={handleLogout}>Logout</Button>
                </CardHeader>
                <CardContent className="space-y-6">
                  <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsItem value="documents">Documents Management</TabsItem>
                      <TabsItem value="announcements">Announcements Management</TabsItem>
                    </TabsList>
                    
                    <TabsContent value="documents" className="pt-4">
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
                              <Select name="department" value={uploadData.department} onValueChange={(value) => setUploadData(prev => ({ ...prev, department: value }))}>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select department" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="Computer Science">Computer Science</SelectItem>
                                  <SelectItem value="Electronics & Communication">Electronics & Communication</SelectItem>
                                  <SelectItem value="Civil Engineering">Civil Engineering</SelectItem>
                                  <SelectItem value="Mechanical Engineering">Mechanical Engineering</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="semester">Semester</Label>
                              <Select name="semester" value={uploadData.semester} onValueChange={(value) => setUploadData(prev => ({ ...prev, semester: value }))}>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select semester" />
                                </SelectTrigger>
                                <SelectContent>
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
                              <Button type="submit" className="bg-green-600 hover:bg-green-700 flex items-center gap-2">
                                <Upload size={16} />
                                Upload
                              </Button>
                            </div>
                            <p className="text-xs text-muted-foreground mt-1">Maximum file size: 5MB</p>
                          </div>
                        </form>
                      </div>
                      
                      <div className="mt-8">
                        <h3 className="font-bold text-lg mb-4">Uploaded Documents</h3>
                        <div className="divide-y">
                          {documents.length > 0 ? (
                            documents.map((doc) => (
                              <div key={doc.id} className="py-4 flex items-center justify-between hover:bg-gray-50 p-2 rounded-lg transition-colors">
                                <div className="flex items-start gap-3">
                                  <FileText size={24} className="text-green-600 mt-1" />
                                  <div>
                                    <h4 className="font-medium">{doc.title}</h4>
                                    <div className="text-sm text-muted-foreground">
                                      {doc.department} | {doc.semester} | Uploaded: {doc.date}
                                    </div>
                                  </div>
                                </div>
                                <div className="flex items-center gap-2">
                                  <Button variant="outline" size="sm" asChild>
                                    <a href={doc.fileUrl} target="_blank" rel="noopener noreferrer">View</a>
                                  </Button>
                                  <Button
                                    variant="ghost"
                                    size="sm"
                                    className="text-red-500 hover:text-red-700 hover:bg-red-50"
                                    onClick={() => handleDeleteUpload(doc.id)}
                                  >
                                    <Trash2 size={16} />
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
                    </TabsContent>
                    
                    <TabsContent value="announcements" className="pt-4">
                      <div>
                        <h3 className="font-bold text-lg mb-4">
                          {editingAnnouncement ? "Edit Announcement" : "Create New Announcement"}
                        </h3>
                        <form onSubmit={handleCreateAnnouncement} className="space-y-4">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="title">Announcement Title</Label>
                              <Input
                                id="title"
                                name="title"
                                placeholder="Enter announcement title"
                                value={announcementData.title}
                                onChange={handleAnnouncementChange}
                                required
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="type">Announcement Type</Label>
                              <Select name="type" value={announcementData.type} onValueChange={(value) => setAnnouncementData(prev => ({ ...prev, type: value }))}>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select type" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="general">General</SelectItem>
                                  <SelectItem value="event">Event</SelectItem>
                                  <SelectItem value="holiday">Holiday</SelectItem>
                                  <SelectItem value="exam">Examination</SelectItem>
                                  <SelectItem value="important">Important</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="content">Announcement Content</Label>
                            <Textarea
                              id="content"
                              name="content"
                              placeholder="Enter announcement content"
                              value={announcementData.content}
                              onChange={handleAnnouncementChange}
                              rows={4}
                              required
                            />
                          </div>
                          <div className="flex justify-end">
                            {editingAnnouncement && (
                              <Button 
                                type="button" 
                                variant="outline" 
                                className="mr-2"
                                onClick={() => {
                                  setEditingAnnouncement(null);
                                  setAnnouncementData({
                                    title: "",
                                    content: "",
                                    type: "general",
                                    date: new Date().toISOString().split('T')[0]
                                  });
                                }}
                              >
                                Cancel
                              </Button>
                            )}
                            <Button type="submit" className="bg-green-600 hover:bg-green-700 flex items-center gap-2">
                              {editingAnnouncement ? (
                                <>
                                  <Edit size={16} />
                                  Update Announcement
                                </>
                              ) : (
                                <>
                                  <Plus size={16} />
                                  Create Announcement
                                </>
                              )}
                            </Button>
                          </div>
                        </form>
                      </div>
                      
                      <div className="mt-8">
                        <h3 className="font-bold text-lg mb-4">All Announcements</h3>
                        <div className="space-y-4">
                          {announcements.length > 0 ? (
                            announcements.map((announcement) => (
                              <div 
                                key={announcement.id} 
                                className={`border p-4 rounded-lg hover:shadow-md transition-shadow ${getAnnouncementTypeStyles(announcement.type)}`}
                              >
                                <div className="flex justify-between">
                                  <div className="flex items-center gap-3">
                                    {getAnnouncementIcon(announcement.type)}
                                    <h4 className="font-medium">{announcement.title}</h4>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <Button 
                                      variant="ghost" 
                                      size="sm"
                                      className="text-blue-600 hover:text-blue-800 hover:bg-blue-50"
                                      onClick={() => handleEditAnnouncement(announcement.id)}
                                    >
                                      <Edit size={16} />
                                    </Button>
                                    <Button
                                      variant="ghost"
                                      size="sm"
                                      className="text-red-500 hover:text-red-700 hover:bg-red-50"
                                      onClick={() => handleDeleteAnnouncement(announcement.id)}
                                    >
                                      <Trash2 size={16} />
                                    </Button>
                                  </div>
                                </div>
                                <p className="mt-2 text-sm">{announcement.content}</p>
                                <div className="text-xs text-gray-500 mt-2">
                                  Posted: {announcement.date}
                                </div>
                              </div>
                            ))
                          ) : (
                            <div className="py-8 text-center border rounded-lg">
                              <p className="text-muted-foreground">No announcements created yet</p>
                            </div>
                          )}
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default AdminLogin;
