import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer id="contact" className="bg-black text-white py-20 border-t border-gray-800 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-orange-500/5 rounded-full blur-3xl opacity-50"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/logo.png" 
                alt="RunTribe Logo" 
                className="h-12 w-12 rounded-lg pulse-orange"
              />
              <div className="text-3xl font-black sigma-heading text-gradient-orange">
                RUNTRIBE
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-8 max-w-md font-light text-lg">
              Chennai's most energetic running community. Building connections, 
              one Saturday morning at a time.
            </p>
            <div className="flex space-x-4">
              <div className="bg-gray-800 rounded-2xl p-4 hover:bg-orange-500 hover:text-black transition-all duration-300 cursor-pointer transform hover:scale-105">
                📱
              </div>
              <div className="bg-gray-800 rounded-2xl p-4 hover:bg-orange-500 hover:text-black transition-all duration-300 cursor-pointer transform hover:scale-105">
                📷
              </div>
              <div className="bg-gray-800 rounded-2xl p-4 hover:bg-orange-500 hover:text-black transition-all duration-300 cursor-pointer transform hover:scale-105">
                💬
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-black sigma-heading mb-8 text-orange-500">QUICK LINKS</h3>
            <div className="space-y-4">
              <a href="/" className="block text-gray-300 hover:text-orange-500 transition-colors font-light text-lg">
                Home
              </a>
              <a href="/about" className="block text-gray-300 hover:text-orange-500 transition-colors font-light text-lg">
                About
              </a>
              <a href="/join" className="block text-gray-300 hover:text-orange-500 transition-colors font-light text-lg">
                Join
              </a>
              <a href="#contact" className="block text-gray-300 hover:text-orange-500 transition-colors font-light text-lg">
                Contact
              </a>
            </div>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-black sigma-heading mb-8 text-orange-500">STAY UPDATED</h3>
            <p className="text-gray-300 text-sm mb-6 font-light">
              Get weekly updates about runs, events, and community highlights.
            </p>
            <div className="flex">
              <Input 
                placeholder="Your email" 
                className="sigma-input rounded-r-none focus:border-orange-500"
              />
              <Button className="sigma-button rounded-l-none px-6">
                JOIN
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-16 pt-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm font-light">
              © 2024 RunTribe. Made with 💛 in Chennai.
            </p>
            <div className="flex space-x-8 mt-6 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-orange-500 text-sm transition-colors font-light">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 text-sm transition-colors font-light">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;