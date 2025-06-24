
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { Link } from "react-router-dom";

const Header = () => {
  const { user, signOut } = useAuth();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 hover:scale-105 transition-transform">
            <img 
              src="/images/runtribe-logo.png" 
              alt="RunTribe Logo" 
              className="h-12 w-auto"
            />
            <div className="text-2xl font-bold bg-gradient-to-r from-orange-500 via-red-500 to-orange-600 bg-clip-text text-transparent">
              RUNTRIBE
            </div>
          </Link>
          
          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-600 hover:text-orange-500 transition-all duration-300 font-medium text-sm uppercase tracking-wide hover:scale-105">
              About
            </a>
            <a href="#meetups" className="text-gray-600 hover:text-orange-500 transition-all duration-300 font-medium text-sm uppercase tracking-wide hover:scale-105">
              Meetups
            </a>
            <a href="#community" className="text-gray-600 hover:text-orange-500 transition-all duration-300 font-medium text-sm uppercase tracking-wide hover:scale-105">
              Community
            </a>
            <a href="#contact" className="text-gray-600 hover:text-orange-500 transition-all duration-300 font-medium text-sm uppercase tracking-wide hover:scale-105">
              Contact
            </a>
          </nav>
          
          {/* Auth Buttons */}
          <div className="flex items-center space-x-3">
            {user ? (
              <>
                <span className="text-gray-600 font-medium hidden sm:block">
                  Hey there! 👋
                </span>
                <Button 
                  onClick={signOut}
                  variant="ghost" 
                  className="text-gray-600 hover:text-orange-500 hover:bg-orange-50 transition-all duration-300"
                >
                  Sign Out
                </Button>
              </>
            ) : (
              <>
                <Link to="/auth">
                  <Button variant="ghost" className="text-gray-600 hover:text-orange-500 hover:bg-orange-50 transition-all duration-300">
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
        </div>
      </div>
    </header>
  );
};

export default Header;
