
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer id="contact" className="bg-black text-white py-20 border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="text-4xl font-black cloka-heading bg-gradient-orange bg-clip-text text-transparent mb-6">
              🏃‍♀️ RUNTRIBE
            </div>
            <p className="text-gray-300 leading-relaxed mb-8 max-w-md font-light">
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
            <h3 className="text-xl font-black cloka-heading mb-8">QUICK LINKS</h3>
            <div className="space-y-4">
              <a href="#about" className="block text-gray-300 hover:text-orange-500 transition-colors font-light">
                About
              </a>
              <a href="#meetups" className="block text-gray-300 hover:text-orange-500 transition-colors font-light">
                Meetups
              </a>
              <a href="#community" className="block text-gray-300 hover:text-orange-500 transition-colors font-light">
                Community
              </a>
              <a href="#contact" className="block text-gray-300 hover:text-orange-500 transition-colors font-light">
                Contact
              </a>
            </div>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-black cloka-heading mb-8">STAY UPDATED</h3>
            <p className="text-gray-300 text-sm mb-6 font-light">
              Get weekly updates about runs, events, and community highlights.
            </p>
            <div className="flex">
              <Input 
                placeholder="Your email" 
                className="cloka-input rounded-r-none focus:border-orange-500"
              />
              <Button className="bg-orange-500 hover:bg-orange-600 text-black font-bold rounded-l-none px-6">
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
