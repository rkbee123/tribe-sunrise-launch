
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Modern Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-400 via-red-500 to-orange-600"></div>
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Geometric Background Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-float"></div>
      <div className="absolute top-40 right-20 w-48 h-48 bg-white/5 rounded-full blur-2xl animate-float" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-32 left-20 w-24 h-24 bg-white/15 rounded-full blur-lg animate-float" style={{animationDelay: '2s'}}></div>
      
      {/* Runner Silhouette */}
      <div className="absolute right-10 top-1/2 transform -translate-y-1/2 opacity-20 hidden lg:block">
        <div className="w-64 h-96 bg-black/30 rounded-full blur-3xl"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="animate-fade-up">
          <div className="mb-8">
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-white mb-6 leading-tight tracking-tight">
              RUN.<br/>
              <span className="text-yellow-200">NETWORK.</span><br/>
              <span className="text-orange-200">GROW.</span>
            </h1>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 mb-8 border border-white/20">
            <p className="text-xl sm:text-2xl text-white mb-4 font-bold uppercase tracking-wide">
              Run Club for Entrepreneurs & Students
            </p>
            
            <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto leading-relaxed">
              Join Chennai's most ambitious running community. Every Saturday at 6 AM, 
              we meet at Thiruvanmiyur Beach to start the day with purpose and energy.
            </p>
            
            <div className="inline-block bg-yellow-400 text-black px-6 py-3 rounded-full font-bold text-lg">
              🔥 FIRST SESSION COMING SOON
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-white text-black hover:bg-gray-100 border-0 px-12 py-6 text-xl font-bold rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
            >
              Register Now ⚡
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-white/50 text-white hover:bg-white/10 backdrop-blur-sm px-12 py-6 text-xl font-bold rounded-full transition-all duration-300 hover:border-white"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
      
      {/* Bottom Modern Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full h-20 text-white">
          <path fill="currentColor" d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
