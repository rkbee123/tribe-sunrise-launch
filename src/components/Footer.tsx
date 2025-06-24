
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="text-3xl font-bold bg-gradient-to-r from-coral-400 to-sunrise-400 bg-clip-text text-transparent mb-4">
              🏃‍♀️ RunTribe
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Chennai's most energetic running community. Building connections, 
              one Saturday morning at a time.
            </p>
            <div className="flex space-x-4">
              <div className="bg-gray-800 rounded-full p-3 hover:bg-coral-500 transition-colors cursor-pointer">
                📱
              </div>
              <div className="bg-gray-800 rounded-full p-3 hover:bg-coral-500 transition-colors cursor-pointer">
                📷
              </div>
              <div className="bg-gray-800 rounded-full p-3 hover:bg-coral-500 transition-colors cursor-pointer">
                💬
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <div className="space-y-3">
              <a href="#about" className="block text-gray-300 hover:text-coral-400 transition-colors">
                About
              </a>
              <a href="#meetups" className="block text-gray-300 hover:text-coral-400 transition-colors">
                Meetups
              </a>
              <a href="#community" className="block text-gray-300 hover:text-coral-400 transition-colors">
                Community
              </a>
              <a href="#contact" className="block text-gray-300 hover:text-coral-400 transition-colors">
                Contact
              </a>
            </div>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-6">Stay Updated</h3>
            <p className="text-gray-300 text-sm mb-4">
              Get weekly updates about runs, events, and community highlights.
            </p>
            <div className="flex">
              <Input 
                placeholder="Your email" 
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 rounded-r-none focus:border-coral-500"
              />
              <Button className="bg-coral-500 hover:bg-coral-600 rounded-l-none">
                Join
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 RunTribe. Made with 💛 in Chennai.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-coral-400 text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-coral-400 text-sm transition-colors">
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
