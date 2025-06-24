
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
      
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-white/20 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 hover:scale-105 transition-transform">
              <img 
                src="/images/runtribe-logo.png" 
                alt="RunTribe Logo" 
                className="h-10 w-10 rounded-lg"
              />
              <div className="text-2xl font-bold bg-gradient-to-r from-orange-500 via-red-500 to-orange-600 bg-clip-text text-transparent">
                RUNTRIBE
              </div>
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#about" className="text-gray-700 hover:text-orange-500 transition-all duration-300 font-medium text-sm uppercase tracking-wide hover:scale-105 px-3 py-2 rounded-full hover:bg-orange-50">
                About
              </a>
              <a href="#meetups" className="text-gray-700 hover:text-orange-500 transition-all duration-300 font-medium text-sm uppercase tracking-wide hover:scale-105 px-3 py-2 rounded-full hover:bg-orange-50">
                Meetups
              </a>
              <a href="#community" className="text-gray-700 hover:text-orange-500 transition-all duration-300 font-medium text-sm uppercase tracking-wide hover:scale-105 px-3 py-2 rounded-full hover:bg-orange-50">
                Community
              </a>
              <a href="#contact" className="text-gray-700 hover:text-orange-500 transition-all duration-300 font-medium text-sm uppercase tracking-wide hover:scale-105 px-3 py-2 rounded-full hover:bg-orange-50">
                Contact
              </a>
            </nav>
            
            {/* Auth Buttons - Desktop */}
            <div className="hidden md:flex items-center space-x-3">
              {user ? (
                <>
                  <span className="text-gray-700 font-medium">
                    Welcome back!
                  </span>
                  <Button 
                    onClick={signOut}
                    variant="ghost" 
                    className="text-gray-700 hover:text-orange-500 hover:bg-orange-50 transition-all duration-300 rounded-full"
                  >
                    Sign Out
                  </Button>
                </>
              ) : (
                <>
                  <Link to="/auth">
                    <Button variant="ghost" className="text-gray-700 hover:text-orange-500 hover:bg-orange-50 transition-all duration-300 rounded-full">
                      Login
                    </Button>
                  </Link>
                  <Link to="/auth">
                    <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white border-0 rounded-full px-6 py-2 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                      Join Now
                    </Button>
                  </Link>
                </>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-full hover:bg-orange-50 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-white/20 shadow-lg">
              <div className="p-4 space-y-4">
                <nav className="space-y-2">
                  <a href="#about" className="block text-gray-700 hover:text-orange-500 transition-all duration-300 font-medium text-sm uppercase tracking-wide px-3 py-2 rounded-full hover:bg-orange-50">
                    About
                  </a>
                  <a href="#meetups" className="block text-gray-700 hover:text-orange-500 transition-all duration-300 font-medium text-sm uppercase tracking-wide px-3 py-2 rounded-full hover:bg-orange-50">
                    Meetups
                  </a>
                  <a href="#community" className="block text-gray-700 hover:text-orange-500 transition-all duration-300 font-medium text-sm uppercase tracking-wide px-3 py-2 rounded-full hover:bg-orange-50">
                    Community
                  </a>
                  <a href="#contact" className="block text-gray-700 hover:text-orange-500 transition-all duration-300 font-medium text-sm uppercase tracking-wide px-3 py-2 rounded-full hover:bg-orange-50">
                    Contact
                  </a>
                </nav>
                
                <div className="pt-4 border-t border-gray-200 space-y-2">
                  {user ? (
                    <>
                      <div className="text-gray-700 font-medium px-3">
                        Welcome back!
                      </div>
                      <Button 
                        onClick={signOut}
                        variant="ghost" 
                        className="w-full text-gray-700 hover:text-orange-500 hover:bg-orange-50 transition-all duration-300 rounded-full"
                      >
                        Sign Out
                      </Button>
                    </>
                  ) : (
                    <>
                      <Link to="/auth" className="block">
                        <Button variant="ghost" className="w-full text-gray-700 hover:text-orange-500 hover:bg-orange-50 transition-all duration-300 rounded-full">
                          Login
                        </Button>
                      </Link>
                      <Link to="/auth" className="block">
                        <Button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white border-0 rounded-full px-6 py-2 shadow-lg hover:shadow-xl transition-all duration-300">
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
