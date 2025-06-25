
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const RunnerMatch = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleFindBuddy = async () => {
    setIsLoading(true);
    
    try {
      const formData = {
        action: "find_buddy",
        timestamp: new Date().toISOString(),
        source: "runner_match_component"
      };

      await fetch("http://localhost:5678/webhook/runtribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      toast({
        title: "Request Sent!",
        description: "We'll help you find your perfect running buddy soon!",
      });
    } catch (error) {
      console.error("Error:", error);
      toast({
        title: "Something went wrong",
        description: "Please try again later",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 to-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl sm:text-6xl font-black cloka-heading mb-8">
            FIND YOUR RUNBUDDY 🤝
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light">
            Our smart matching system connects you with runners who share your pace, 
            interests, and goals. Never run alone again!
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="cloka-card p-10 shadow-2xl bg-gray-900/80 backdrop-blur-sm border border-gray-800">
              <h3 className="text-3xl font-black cloka-heading mb-8">HOW IT WORKS ✨</h3>
              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="bg-orange-500 rounded-full p-4 text-black font-black text-xl cloka-heading">1</div>
                  <div>
                    <h4 className="font-black cloka-heading text-white mb-2">COMPLETE YOUR PROFILE</h4>
                    <p className="text-gray-300 font-light">Tell us about your fitness level, interests, and goals</p>
                  </div>
                </div>
                <div className="flex items-start space-x-6">
                  <div className="bg-orange-500 rounded-full p-4 text-black font-black text-xl cloka-heading">2</div>
                  <div>
                    <h4 className="font-black cloka-heading text-white mb-2">GET MATCHED</h4>
                    <p className="text-gray-300 font-light">Our algorithm finds your perfect running companions</p>
                  </div>
                </div>
                <div className="flex items-start space-x-6">
                  <div className="bg-orange-500 rounded-full p-4 text-black font-black text-xl cloka-heading">3</div>
                  <div>
                    <h4 className="font-black cloka-heading text-white mb-2">START RUNNING TOGETHER</h4>
                    <p className="text-gray-300 font-light">Meet at the beach and build meaningful connections</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center lg:text-left">
              <Button 
                onClick={handleFindBuddy}
                disabled={isLoading}
                className="cloka-button text-xl py-6 px-12"
              >
                {isLoading ? "PROCESSING..." : "REGISTER & MATCH 🎯"}
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="cloka-card p-8 text-center transform hover:scale-105 transition-all duration-300 bg-gray-900/80 backdrop-blur-sm border border-gray-800">
              <div className="text-4xl mb-4">🎯</div>
              <h4 className="font-black cloka-heading text-white mb-3">SIMILAR PACE</h4>
              <p className="text-sm text-gray-300 font-light">Matched by fitness level</p>
            </div>
            <div className="cloka-card p-8 text-center transform hover:scale-105 transition-all duration-300 bg-gray-900/80 backdrop-blur-sm border border-gray-800">
              <div className="text-4xl mb-4">💼</div>
              <h4 className="font-black cloka-heading text-white mb-3">SHARED INTERESTS</h4>
              <p className="text-sm text-gray-300 font-light">Common hobbies & goals</p>
            </div>
            <div className="cloka-card p-8 text-center transform hover:scale-105 transition-all duration-300 bg-gray-900/80 backdrop-blur-sm border border-gray-800">
              <div className="text-4xl mb-4">📍</div>
              <h4 className="font-black cloka-heading text-white mb-3">LOCATION</h4>
              <p className="text-sm text-gray-300 font-light">Nearby neighborhoods</p>
            </div>
            <div className="cloka-card p-8 text-center transform hover:scale-105 transition-all duration-300 bg-gray-900/80 backdrop-blur-sm border border-gray-800">
              <div className="text-4xl mb-4">⏰</div>
              <h4 className="font-black cloka-heading text-white mb-3">SCHEDULE</h4>
              <p className="text-sm text-gray-300 font-light">Preferred run times</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RunnerMatch;
