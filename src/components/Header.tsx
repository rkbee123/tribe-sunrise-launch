
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-coral-500 to-sunrise-500 bg-clip-text text-transparent">
              🏃‍♀️ RunTribe
            </div>
          </div>
          
          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-700 hover:text-coral-500 transition-colors duration-200 font-medium">
              About
            </a>
            <a href="#meetups" className="text-gray-700 hover:text-coral-500 transition-colors duration-200 font-medium">
              Meetups
            </a>
            <a href="#community" className="text-gray-700 hover:text-coral-500 transition-colors duration-200 font-medium">
              Community
            </a>
            <a href="#contact" className="text-gray-700 hover:text-coral-500 transition-colors duration-200 font-medium">
              Contact
            </a>
          </nav>
          
          {/* Auth Buttons */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="text-gray-700 hover:text-coral-500">
              Login
            </Button>
            <Button className="bg-gradient-to-r from-coral-500 to-sunrise-500 hover:from-coral-600 hover:to-sunrise-600 text-white border-0 rounded-full px-6">
              Join Now
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
