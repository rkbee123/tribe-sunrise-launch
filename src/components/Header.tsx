import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const { user, signOut } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      {/* Spacer to prevent content overlap */}
      <div className="h-16"></div>
      
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-gray-800">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <img 
                src="/logo.png" 
                alt="RunTribe Logo" 
                className="h-10 w-10 rounded-lg pulse-orange"
              />
              <div className="text-xl font-black sigma-heading text-gradient-orange">
                RUNTRIBE
              </div>
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link 
                to="/" 
                className={`text-sm font-bold uppercase tracking-wider transition-colors hover:text-orange-500 ${
                  location.pathname === '/' ? 'text-orange-500' : 'text-gray-300'
                }`}
              >
                HOME
              </Link>
              <Link 
                to="/about" 
                className={`text-sm font-bold uppercase tracking-wider transition-colors hover:text-orange-500 ${
                  location.pathname === '/about' ? 'text-orange-500' : 'text-gray-300'
                }`}
              >
                ABOUT
              </Link>
              <Link 
                to="/join" 
                className={`text-sm font-bold uppercase tracking-wider transition-colors hover:text-orange-500 ${
                  location.pathname === '/join' ? 'text-orange-500' : 'text-gray-300'
                }`}
              >
                JOIN
              </Link>
            </nav>
            
            {/* Auth Buttons - Desktop */}
            <div className="hidden md:flex items-center space-x-4">
              {user ? (
                <>
                  <span className="text-gray-300 text-sm font-medium">
                    Welcome back!
                  </span>
                  <Button 
                    onClick={signOut}
                    variant="ghost" 
                    size="sm"
                    className="text-gray-300 hover:text-orange-500 font-bold uppercase tracking-wider"
                  >
                    SIGN OUT
                  </Button>
                </>
              ) : (
                <>
                  <Link to="/auth">
                    <Button variant="ghost" size="sm" className="text-gray-300 hover:text-orange-500 font-bold uppercase tracking-wider">
                      LOGIN
                    </Button>
                  </Link>
                  <Link to="/join">
                    <Button size="sm" className="sigma-button">
                      JOIN
                    </Button>
                  </Link>
                </>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-white hover:text-orange-500 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-gray-800">
              <div className="p-6 space-y-4">
                <nav className="space-y-4">
                  <Link 
                    to="/" 
                    className={`block text-sm font-bold uppercase tracking-wider py-2 ${
                      location.pathname === '/' ? 'text-orange-500' : 'text-gray-300'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    HOME
                  </Link>
                  <Link 
                    to="/about" 
                    className={`block text-sm font-bold uppercase tracking-wider py-2 ${
                      location.pathname === '/about' ? 'text-orange-500' : 'text-gray-300'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    ABOUT
                  </Link>
                  <Link 
                    to="/join" 
                    className={`block text-sm font-bold uppercase tracking-wider py-2 ${
                      location.pathname === '/join' ? 'text-orange-500' : 'text-gray-300'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    JOIN
                  </Link>
                </nav>
                
                <div className="pt-4 border-t border-gray-800 space-y-3">
                  {user ? (
                    <>
                      <div className="text-gray-300 text-sm py-2 font-medium">
                        Welcome back!
                      </div>
                      <Button 
                        onClick={signOut}
                        variant="ghost" 
                        size="sm"
                        className="w-full text-gray-300 hover:text-orange-500 font-bold uppercase tracking-wider"
                      >
                        SIGN OUT
                      </Button>
                    </>
                  ) : (
                    <>
                      <Link to="/auth" className="block" onClick={() => setIsMenuOpen(false)}>
                        <Button variant="ghost" size="sm" className="w-full text-gray-300 hover:text-orange-500 font-bold uppercase tracking-wider">
                          LOGIN
                        </Button>
                      </Link>
                      <Link to="/join" className="block" onClick={() => setIsMenuOpen(false)}>
                        <Button size="sm" className="w-full sigma-button">
                          JOIN
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