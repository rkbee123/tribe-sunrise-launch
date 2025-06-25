
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-cloka">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-orange-500/10 rounded-full blur-xl animate-bounce" style={{animationDelay: '0s', animationDuration: '3s'}}></div>
        <div className="absolute top-40 right-20 w-48 h-48 bg-orange-500/5 rounded-full blur-2xl animate-bounce" style={{animationDelay: '1s', animationDuration: '4s'}}></div>
        <div className="absolute bottom-32 left-20 w-24 h-24 bg-orange-500/15 rounded-full blur-lg animate-bounce" style={{animationDelay: '2s', animationDuration: '2.5s'}}></div>
        <div className="absolute top-1/3 left-1/3 w-16 h-16 bg-orange-400/20 rounded-full blur-md animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-20 h-20 bg-orange-300/20 rounded-full blur-lg animate-pulse" style={{animationDelay: '1.5s'}}></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto pt-20">
        <div className="animate-fade-up">
          <div className="mb-12">
            <h1 className="text-6xl sm:text-8xl lg:text-9xl font-black cloka-heading mb-8 leading-tight">
              RUN.<br/>
              <span className="text-orange-500 animate-pulse">VIBE.</span><br/>
              <span className="text-orange-400">CONNECT.</span>
            </h1>
          </div>
          
          <div className="cloka-card p-12 mb-12 border border-gray-800 shadow-2xl backdrop-blur-sm">
            <p className="text-2xl sm:text-3xl text-white mb-6 font-bold cloka-heading">
              CHENNAI'S PREMIER RUNNING COMMUNITY
            </p>
            
            <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed font-light">
              Join the most vibrant running community in Chennai! Every Saturday at 6 AM, 
              we gather at Thiruvanmiyur Beach to start the day with energy, motivation, and great company. 
              It's more than fitness - it's about building connections and pushing boundaries together.
            </p>
            
            <div className="inline-flex items-center bg-gradient-orange text-black px-12 py-6 rounded-2xl font-black text-xl shadow-xl cloka-heading">
              <span className="animate-pulse mr-3">🚀</span>
              FIRST SESSION LAUNCHING SOON
              <span className="animate-pulse ml-3">🚀</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            {user ? (
              <Button 
                onClick={scrollToRegistration}
                size="lg" 
                className="cloka-button text-2xl py-8 px-16"
              >
                COMPLETE REGISTRATION
              </Button>
            ) : (
              <Link to="/auth">
                <Button 
                  size="lg" 
                  className="cloka-button text-2xl py-8 px-16"
                >
                  JOIN THE COMMUNITY
                </Button>
              </Link>
            )}
            
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-orange-500 bg-transparent text-white hover:bg-orange-500 hover:text-black px-16 py-8 text-2xl font-bold rounded-2xl transition-all duration-300 hover:scale-105 cloka-heading"
            >
              LEARN MORE
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
