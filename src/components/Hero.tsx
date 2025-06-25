
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const Hero = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const scrollToRegistration = () => {
    const element = document.getElementById('registration');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleJoinTribe = async () => {
    if (user) {
      scrollToRegistration();
      return;
    }

    setIsLoading(true);
    
    try {
      // Send basic join intent to webhook
      await fetch("http://localhost:5678/webhook/runtribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          action: "join_tribe_clicked",
          timestamp: new Date().toISOString(),
          source: "hero_section"
        }),
      });

      toast({
        title: "🚀 LET'S GET YOU STARTED!",
        description: "Redirecting you to join the tribe...",
      });
      
      // Small delay for UX, then redirect
      setTimeout(() => {
        window.location.href = '/auth?type=signup';
      }, 1000);
      
    } catch (error) {
      console.error("Error:", error);
      // Still redirect even if webhook fails
      window.location.href = '/auth?type=signup';
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0A0A0A] via-[#111111] to-black">
      {/* Ultra Sigma Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-orange-500/20 rounded-full blur-xl animate-bounce pulse-orange" style={{animationDelay: '0s', animationDuration: '3s'}}></div>
        <div className="absolute top-40 right-20 w-48 h-48 bg-orange-500/10 rounded-full blur-2xl animate-bounce" style={{animationDelay: '1s', animationDuration: '4s'}}></div>
        <div className="absolute bottom-32 left-20 w-24 h-24 bg-orange-500/25 rounded-full blur-lg animate-bounce pulse-orange" style={{animationDelay: '2s', animationDuration: '2.5s'}}></div>
        <div className="absolute top-1/3 left-1/3 w-16 h-16 bg-orange-400/30 rounded-full blur-md animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-20 h-20 bg-orange-300/20 rounded-full blur-lg animate-pulse pulse-orange" style={{animationDelay: '1.5s'}}></div>
        
        {/* Sigma glow effect */}
        <div className="absolute inset-0 bg-gradient-radial from-orange-500/5 via-transparent to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-20">
        <div className="animate-fade-up">
          <div className="mb-16">
            <h1 className="text-6xl sm:text-8xl lg:text-9xl xl:text-[12rem] font-black sigma-heading mb-12 leading-none">
              RUN.<br/>
              <span className="sigma-text-glow animate-pulse">VIBE.</span><br/>
              <span className="text-orange-400 sigma-text-glow">CONNECT.</span>
            </h1>
          </div>
          
          <div className="sigma-card p-8 sm:p-16 mb-16 sigma-glow max-w-5xl mx-auto">
            <p className="text-3xl sm:text-4xl lg:text-5xl sigma-heading mb-8 text-white">
              CHENNAI'S MOST ELITE RUNNING COMMUNITY
            </p>
            
            <p className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
              Join the most <span className="text-orange-500 font-bold">POWERFUL</span> running community in Chennai! 
              Every Saturday at 6 AM, we gather at Thiruvanmiyur Beach to start the day with 
              <span className="text-orange-500 font-bold"> ENERGY</span>, 
              <span className="text-orange-500 font-bold"> MOTIVATION</span>, and 
              <span className="text-orange-500 font-bold"> UNSTOPPABLE VIBES</span>. 
              This isn't just fitness - it's about building an empire of connections.
            </p>
            
            <div className="inline-flex items-center bg-gradient-to-r from-orange-500 to-orange-600 text-black px-16 py-8 rounded-3xl font-black text-2xl sm:text-3xl shadow-2xl sigma-glow pulse-orange">
              <span className="animate-pulse mr-4 text-3xl">🚀</span>
              FIRST SESSION LAUNCHING SOON
              <span className="animate-pulse ml-4 text-3xl">🚀</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center max-w-4xl mx-auto">
            <Button 
              onClick={handleJoinTribe}
              disabled={isLoading}
              size="lg" 
              className="sigma-button text-2xl sm:text-3xl py-12 px-20 w-full sm:w-auto"
            >
              {isLoading ? "JOINING..." : (user ? "COMPLETE REGISTRATION" : "JOIN THE TRIBE 🔥")}
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-4 border-orange-500 bg-transparent text-white hover:bg-orange-500 hover:text-black px-20 py-12 text-2xl sm:text-3xl font-black rounded-3xl transition-all duration-300 hover:scale-105 sigma-heading w-full sm:w-auto"
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
