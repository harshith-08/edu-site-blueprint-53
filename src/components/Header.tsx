
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isMobile = useIsMobile();
  const [departmentDropdown, setDepartmentDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isActive = (path: string) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3">
            <img 
              src="/lovable-uploads/5c7ebe72-4ecd-4e54-8ce5-6bf0a6141878.png" 
              alt="SVRMC Logo" 
              className="h-12 w-12"
            />
            <div className={`flex flex-col ${scrolled ? "text-college-blue" : "text-white"}`}>
              <span className="font-bold text-sm md:text-base">Shri Velagapudi Ramakrishna Memorial College</span>
              <span className="text-xs">Govt. Aided College Sponsored by R.T.E.I. Society</span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center space-x-1">
            <Link to="/" className={`nav-link ${isActive("/") ? "active" : ""} ${scrolled ? "text-college-dark" : "text-white"}`}>
              Home
            </Link>
            <Link to="/about" className={`nav-link ${isActive("/about") ? "active" : ""} ${scrolled ? "text-college-dark" : "text-white"}`}>
              About
            </Link>
            <div 
              className="relative" 
              onMouseEnter={() => setDepartmentDropdown(true)}
              onMouseLeave={() => setDepartmentDropdown(false)}
            >
              <Link 
                to="/departments" 
                className={`nav-link flex items-center ${isActive("/departments") ? "active" : ""} ${scrolled ? "text-college-dark" : "text-white"}`}
              >
                Departments <ChevronDown className="ml-1 h-4 w-4" />
              </Link>
              {departmentDropdown && (
                <div className="absolute left-0 mt-1 w-48 bg-white rounded-md shadow-lg py-1 z-10 animate-fade-in">
                  <Link 
                    to="/departments/cse" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setDepartmentDropdown(false)}
                  >
                    Computer Science
                  </Link>
                  <Link 
                    to="/departments/ece" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setDepartmentDropdown(false)}
                  >
                    Electronics & Communication
                  </Link>
                  <Link 
                    to="/departments/civil" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setDepartmentDropdown(false)}
                  >
                    Civil Engineering
                  </Link>
                  <Link 
                    to="/departments/mech" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setDepartmentDropdown(false)}
                  >
                    Mechanical Engineering
                  </Link>
                </div>
              )}
            </div>
            <Link to="/placements" className={`nav-link ${isActive("/placements") ? "active" : ""} ${scrolled ? "text-college-dark" : "text-white"}`}>
              Placements
            </Link>
            <Link to="/news" className={`nav-link ${isActive("/news") ? "active" : ""} ${scrolled ? "text-college-dark" : "text-white"}`}>
              News
            </Link>
            <Link to="/gallery" className={`nav-link ${isActive("/gallery") ? "active" : ""} ${scrolled ? "text-college-dark" : "text-white"}`}>
              Gallery
            </Link>
            <Link to="/contact" className={`nav-link ${isActive("/contact") ? "active" : ""} ${scrolled ? "text-college-dark" : "text-white"}`}>
              Contact
            </Link>
          </nav>

          <div className="hidden lg:flex items-center space-x-2">
            <Button variant="outline" className={`border-primary ${scrolled ? "text-primary" : "text-white border-white hover:border-primary"}`} asChild>
              <Link to="/faculty-login">Faculty Login</Link>
            </Button>
            <Button className="bg-college-blue text-white hover:bg-blue-800" asChild>
              <Link to="/student-login">Student Login</Link>
            </Button>
          </div>

          <button 
            className="lg:hidden text-college-blue"
            onClick={toggleMobileMenu}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white mt-4 rounded-md shadow-lg py-2 animate-fade-in">
            <div className="flex flex-col space-y-1">
              <Link 
                to="/" 
                className={`px-4 py-2 ${isActive("/") ? "bg-primary/10 text-primary font-medium" : "text-gray-700"}`}
                onClick={closeMobileMenu}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className={`px-4 py-2 ${isActive("/about") ? "bg-primary/10 text-primary font-medium" : "text-gray-700"}`}
                onClick={closeMobileMenu}
              >
                About
              </Link>
              <div className="px-4 py-2 text-gray-700 font-medium">Departments</div>
              <Link 
                to="/departments/cse" 
                className={`pl-8 py-2 ${isActive("/departments/cse") ? "bg-primary/10 text-primary font-medium" : "text-gray-700"}`}
                onClick={closeMobileMenu}
              >
                Computer Science
              </Link>
              <Link 
                to="/departments/ece" 
                className={`pl-8 py-2 ${isActive("/departments/ece") ? "bg-primary/10 text-primary font-medium" : "text-gray-700"}`}
                onClick={closeMobileMenu}
              >
                Electronics & Communication
              </Link>
              <Link 
                to="/departments/civil" 
                className={`pl-8 py-2 ${isActive("/departments/civil") ? "bg-primary/10 text-primary font-medium" : "text-gray-700"}`}
                onClick={closeMobileMenu}
              >
                Civil Engineering
              </Link>
              <Link 
                to="/departments/mech" 
                className={`pl-8 py-2 ${isActive("/departments/mech") ? "bg-primary/10 text-primary font-medium" : "text-gray-700"}`}
                onClick={closeMobileMenu}
              >
                Mechanical Engineering
              </Link>
              <Link 
                to="/placements" 
                className={`px-4 py-2 ${isActive("/placements") ? "bg-primary/10 text-primary font-medium" : "text-gray-700"}`}
                onClick={closeMobileMenu}
              >
                Placements
              </Link>
              <Link 
                to="/news" 
                className={`px-4 py-2 ${isActive("/news") ? "bg-primary/10 text-primary font-medium" : "text-gray-700"}`}
                onClick={closeMobileMenu}
              >
                News
              </Link>
              <Link 
                to="/gallery" 
                className={`px-4 py-2 ${isActive("/gallery") ? "bg-primary/10 text-primary font-medium" : "text-gray-700"}`}
                onClick={closeMobileMenu}
              >
                Gallery
              </Link>
              <Link 
                to="/contact" 
                className={`px-4 py-2 ${isActive("/contact") ? "bg-primary/10 text-primary font-medium" : "text-gray-700"}`}
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
              <div className="pt-2 pb-1 px-4 border-t border-gray-200 flex space-x-2">
                <Button variant="outline" className="text-primary border-primary w-full" asChild>
                  <Link to="/faculty-login" onClick={closeMobileMenu}>Faculty Login</Link>
                </Button>
                <Button className="bg-college-blue text-white hover:bg-blue-800 w-full" asChild>
                  <Link to="/student-login" onClick={closeMobileMenu}>Student Login</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
