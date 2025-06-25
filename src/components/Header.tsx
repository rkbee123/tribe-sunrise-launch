
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const { user, signOut } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Spacer to prevent content overlap */}
      <div className="h-20"></div>
      
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-xl border-b border-gray-800 shadow-2xl">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 hover:scale-105 transition-transform">
              <img 
                src="/logo.png" 
                alt="RunTribe Logo" 
                className="h-10 w-10 rounded-lg"
              />
              <div className="text-2xl font-black cloka-heading bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">
                RUNTRIBE
              </div>
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#about" className="text-gray-300 hover:text-orange-500 transition-all duration-300 font-medium text-sm uppercase tracking-wide hover:scale-105 px-3 py-2 rounded-full hover:bg-gray-900">
                About
              </a>
              <a href="#meetups" className="text-gray-300 hover:text-orange-500 transition-all duration-300 font-medium text-sm uppercase tracking-wide hover:scale-105 px-3 py-2 rounded-full hover:bg-gray-900">
                Meetups
              </a>
              <a href="#community" className="text-gray-300 hover:text-orange-500 transition-all duration-300 font-medium text-sm uppercase tracking-wide hover:scale-105 px-3 py-2 rounded-full hover:bg-gray-900">
                Community
              </a>
              <a href="#contact" className="text-gray-300 hover:text-orange-500 transition-all duration-300 font-medium text-sm uppercase tracking-wide hover:scale-105 px-3 py-2 rounded-full hover:bg-gray-900">
                Contact
              </a>
            </nav>
            
            {/* Auth Buttons - Desktop */}
            <div className="hidden md:flex items-center space-x-3">
              {user ? (
                <>
                  <span className="text-gray-300 font-medium">
                    Welcome back!
                  </span>
                  <Button 
                    onClick={signOut}
                    variant="ghost" 
                    className="text-gray-300 hover:text-orange-500 hover:bg-gray-900 transition-all duration-300 rounded-full"
                  >
                    Sign Out
                  </Button>
                </>
              ) : (
                <>
                  <Link to="/auth">
                    <Button variant="ghost" className="text-gray-300 hover:text-orange-500 hover:bg-gray-900 transition-all duration-300 rounded-full">
                      Login
                    </Button>
                  </Link>
                  <Link to="/auth">
                    <Button className="cloka-button">
                      Join Now
                    </Button>
                  </Link>
                </>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-full hover:bg-gray-900 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-gray-800 shadow-lg">
              <div className="p-4 space-y-4">
                <nav className="space-y-2">
                  <a href="#about" className="block text-gray-300 hover:text-orange-500 transition-all duration-300 font-medium text-sm uppercase tracking-wide px-3 py-2 rounded-full hover:bg-gray-900">
                    About
                  </a>
                  <a href="#meetups" className="block text-gray-300 hover:text-orange-500 transition-all duration-300 font-medium text-sm uppercase tracking-wide px-3 py-2 rounded-full hover:bg-gray-900">
                    Meetups
                  </a>
                  <a href="#community" className="block text-gray-300 hover:text-orange-500 transition-all duration-300 font-medium text-sm uppercase tracking-wide px-3 py-2 rounded-full hover:bg-gray-900">
                    Community
                  </a>
                  <a href="#contact" className="block text-gray-300 hover:text-orange-500 transition-all duration-300 font-medium text-sm uppercase tracking-wide px-3 py-2 rounded-full hover:bg-gray-900">
                    Contact
                  </a>
                </nav>
                
                <div className="pt-4 border-t border-gray-800 space-y-2">
                  {user ? (
                    <>
                      <div className="text-gray-300 font-medium px-3">
                        Welcome back!
                      </div>
                      <Button 
                        onClick={signOut}
                        variant="ghost" 
                        className="w-full text-gray-300 hover:text-orange-500 hover:bg-gray-900 transition-all duration-300 rounded-full"
                      >
                        Sign Out
                      </Button>
                    </>
                  ) : (
                    <>
                      <Link to="/auth" className="block">
                        <Button variant="ghost" className="w-full text-gray-300 hover:text-orange-500 hover:bg-gray-900 transition-all duration-300 rounded-full">
                          Login
                        </Button>
                      </Link>
                      <Link to="/auth" className="block">
                        <Button className="w-full cloka-button">
                          Join Now
                        </Button>
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
