import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { useState, useEffect } from "react";

const Hero = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const handleJoinTribe = async () => {
    if (user) {
      window.location.href = '/join';
      return;
    }

    setIsLoading(true);
    
    try {
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
        title: "🚀 Let's get started!",
        description: "Redirecting you to join the tribe...",
      });
      
      setTimeout(() => {
        window.location.href = '/join';
      }, 1000);
      
    } catch (error) {
      console.error("Error:", error);
      window.location.href = '/join';
    } finally {
      setIsLoading(false);
    }
  };

  const scrollToForm = () => {
    const formSection = document.getElementById('join-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/join';
    }
  };

  return (
    <>
      <section className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden tribal-pattern">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-orange-400/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-orange-500/5 to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className="text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto py-20 relative z-10">
          <div className="mb-16 animate-fade-up">
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black sigma-heading mb-8 leading-tight glitch-text" data-text="RUNTRIBE">
              RUN<span className="text-gradient-orange">TRIBE</span>
            </h1>
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold sigma-heading mb-6 animate-fade-up-delay">
              RUN. <span className="text-orange-500">VIBE.</span> <span className="text-orange-500">CONNECT.</span>
            </div>
          </div>
          
          <div className="sigma-card mb-12 max-w-4xl mx-auto sigma-glow animate-fade-up-delay">
            <p className="text-2xl sm:text-3xl font-bold sigma-heading mb-6 text-white">
              CHENNAI'S ELITE RUNNING COMMUNITY
            </p>
            
            <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Join Chennai's most <span className="text-orange-500 font-semibold">POWERFUL</span> running community! 
              Every Saturday at 6 AM, we gather at Thiruvanmiyur Beach for energy, motivation, and connections.
            </p>
            
            <div className="inline-flex items-center bg-gradient-orange text-black px-8 py-4 rounded-xl font-black text-lg pulse-orange">
              <span className="mr-2">🚀</span>
              FIRST SESSION LAUNCHING SOON
              <span className="ml-2">🚀</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center max-w-2xl mx-auto animate-fade-up-delay-2">
            <Button 
              onClick={handleJoinTribe}
              disabled={isLoading}
              className="sigma-button text-xl px-12 py-6 w-full sm:w-auto"
            >
              {isLoading ? "JOINING..." : "🚀 JOIN THE TRIBE"}
            </Button>
            
            <Link to="/about">
              <Button 
                variant="outline" 
                className="border-2 border-orange-500 bg-transparent text-white hover:bg-orange-500 hover:text-black px-12 py-6 text-xl font-black rounded-xl transition-all duration-300 w-full sm:w-auto transform hover:scale-105"
              >
                LEARN MORE
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl opacity-50 -translate-x-1/2 -translate-y-1/2"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl sm:text-6xl font-black sigma-heading mb-8 text-gradient-orange">
              🚀 THE STORY
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="sigma-card text-center sigma-glow">
              <p className="text-xl sm:text-2xl text-gray-300 leading-relaxed font-light">
                A bunch of <span className="text-orange-500 font-bold">gym freaks</span> and 
                <span className="text-orange-500 font-bold"> college students</span> with huge ambition started 
                <span className="text-orange-500 font-bold"> RunTribe</span> to build something beyond fitness. 
                A space where <span className="text-orange-500 font-bold">freelancers</span>, 
                <span className="text-orange-500 font-bold"> students</span>, and 
                <span className="text-orange-500 font-bold"> creators</span> run, connect and grow—together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl opacity-50 translate-x-1/2 translate-y-1/2"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl sm:text-6xl font-black sigma-heading mb-8 text-gradient-orange">
              👥 COMMUNITY
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="sigma-card text-center sigma-glow mb-12">
              <p className="text-xl sm:text-2xl text-gray-300 leading-relaxed font-light mb-8">
                We're just getting started. The Tribe is <span className="text-orange-500 font-bold">BOOMING</span>—don't miss the wave. 
                <span className="text-orange-500 font-bold"> Network</span>, 
                <span className="text-orange-500 font-bold"> vibe</span>, 
                <span className="text-orange-500 font-bold"> build</span>. 
                It's only up from here.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-black text-orange-500 mb-3 sigma-heading">150+</div>
                  <p className="text-gray-300 font-light">Active Runners</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black text-orange-500 mb-3 sigma-heading">25+</div>
                  <p className="text-gray-300 font-light">Weekly Meetups</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black text-orange-500 mb-3 sigma-heading">500+</div>
                  <p className="text-gray-300 font-light">Connections Made</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black text-orange-500 mb-3 sigma-heading">100%</div>
                  <p className="text-gray-300 font-light">Good Vibes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Build with Us Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl sm:text-6xl font-black sigma-heading mb-8 text-gradient-orange">
              🧠 BUILD WITH US
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light">
              Want to help shape the future of RunTribe? Join our core team of builders and creators.
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <div className="sigma-card sigma-glow">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-black sigma-heading text-orange-500 mb-4">
                  BECOME A TRIBE BUILDER
                </h3>
                <p className="text-gray-300">
                  Help us organize events, build community, and create something legendary.
                </p>
              </div>
              
              <div className="text-center">
                <Link to="/join">
                  <Button className="sigma-button text-xl px-12 py-6">
                    🛠️ JOIN CORE TEAM
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Sticky CTA */}
      <div className="sticky-cta md:hidden">
        <Button 
          onClick={scrollToForm}
          className="sigma-button text-lg px-8 py-4 shadow-2xl"
        >
          🏃 JOIN THE TRIBE
        </Button>
      </div>
    </>
  );
};

export default Hero;