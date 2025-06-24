
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-sunrise-50 via-coral-50 to-ocean-50">
      {/* Background Image */}
      <div className="absolute inset-0 bg-gradient-to-br from-sunrise-200/20 via-coral-200/20 to-ocean-200/20"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-coral-400 rounded-full animate-float opacity-60"></div>
      <div className="absolute top-40 right-20 w-6 h-6 bg-ocean-400 rounded-full animate-float opacity-40" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-32 left-20 w-3 h-3 bg-sunrise-400 rounded-full animate-float opacity-50" style={{animationDelay: '2s'}}></div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="animate-fade-up">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Start Your Day with
            <span className="block bg-gradient-to-r from-coral-500 via-sunrise-500 to-ocean-500 bg-clip-text text-transparent">
              Purpose 🌅
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-700 mb-4 font-medium">
            Run. Connect. Recharge. Repeat.
          </p>
          
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            Join Chennai's most energetic running community. Every Saturday at 6 AM, 
            we meet at Thiruvanmiyur Beach to start the day right.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-coral-500 to-sunrise-500 hover:from-coral-600 hover:to-sunrise-600 text-white border-0 px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Register Now ✨
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-ocean-400 text-ocean-600 hover:bg-ocean-50 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300"
            >
              Login
            </Button>
          </div>
        </div>
      </div>
      
      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;
