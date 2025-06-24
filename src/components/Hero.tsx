
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { Link } from "react-router-dom";

const Hero = () => {
  const { user } = useAuth();

  const scrollToRegistration = () => {
    const element = document.getElementById('registration');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Modern Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-400 via-red-500 to-pink-500"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-bounce" style={{animationDelay: '0s', animationDuration: '3s'}}></div>
        <div className="absolute top-40 right-20 w-48 h-48 bg-white/5 rounded-full blur-2xl animate-bounce" style={{animationDelay: '1s', animationDuration: '4s'}}></div>
        <div className="absolute bottom-32 left-20 w-24 h-24 bg-white/15 rounded-full blur-lg animate-bounce" style={{animationDelay: '2s', animationDuration: '2.5s'}}></div>
        <div className="absolute top-1/3 left-1/3 w-16 h-16 bg-yellow-300/20 rounded-full blur-md animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-20 h-20 bg-purple-300/20 rounded-full blur-lg animate-pulse" style={{animationDelay: '1.5s'}}></div>
      </div>
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Running Silhouette - Enhanced */}
      <div className="absolute right-10 top-1/2 transform -translate-y-1/2 opacity-30 hidden lg:block">
        <div className="text-9xl animate-pulse">🏃‍♂️</div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="animate-fade-up">
          <div className="mb-8">
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-white mb-6 leading-tight tracking-tight">
              RUN.<br/>
              <span className="text-yellow-200 animate-pulse">VIBE.</span><br/>
              <span className="text-orange-200">SLAY.</span>
            </h1>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 mb-8 border border-white/20 shadow-2xl">
            <div className="flex justify-center space-x-4 mb-4 text-4xl">
              <span className="animate-bounce">🔥</span>
              <span className="animate-bounce" style={{animationDelay: '0.2s'}}>💪</span>
              <span className="animate-bounce" style={{animationDelay: '0.4s'}}>⚡</span>
            </div>
            
            <p className="text-xl sm:text-2xl text-white mb-4 font-bold uppercase tracking-wide">
              Chennai's Most Epic Running Squad
            </p>
            
            <p className="text-lg text-white/90 mb-6 max-w-3xl mx-auto leading-relaxed">
              Join the coolest running community in Chennai! Every Saturday at 6 AM, 
              we meet at Thiruvanmiyur Beach to start the day with energy, vibes, and good people. 
              It's not just fitness - it's a whole mood! 💯
            </p>
            
            <div className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-8 py-4 rounded-full font-bold text-lg shadow-xl">
              <span className="animate-pulse mr-2">🚀</span>
              FIRST SESSION COMING SOON
              <span className="animate-pulse ml-2">🚀</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            {user ? (
              <Button 
                onClick={scrollToRegistration}
                size="lg" 
                className="bg-white text-black hover:bg-gray-100 border-0 px-12 py-6 text-xl font-bold rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-2"
              >
                Complete Registration 🎯
              </Button>
            ) : (
              <Link to="/auth">
                <Button 
                  size="lg" 
                  className="bg-white text-black hover:bg-gray-100 border-0 px-12 py-6 text-xl font-bold rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-2"
                >
                  Join the Squad ⚡
                </Button>
              </Link>
            )}
            
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-3 border-white/50 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 px-12 py-6 text-xl font-bold rounded-full transition-all duration-300 hover:border-white hover:scale-105"
            >
              Learn More 🤔
            </Button>
          </div>
          
          {/* Fun Elements */}
          <div className="mt-12 flex justify-center space-x-8 text-2xl">
            <span className="animate-spin">🌟</span>
            <span className="animate-bounce">🏃‍♀️</span>
            <span className="animate-pulse">❤️</span>
            <span className="animate-bounce">🏃‍♂️</span>
            <span className="animate-spin">⭐</span>
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
