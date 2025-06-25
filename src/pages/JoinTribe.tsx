import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const JoinTribe = () => {
  const { toast } = useToast();
  const [isRegistering, setIsRegistering] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  
  // Registration form state
  const [regForm, setRegForm] = useState({
    name: "",
    email: "",
    phone: "",
    fitnessLevel: "",
    goals: "",
    availability: ""
  });

  // Find Tribe Bro form state  
  const [buddyForm, setBuddyForm] = useState({
    name: "",
    email: "",
    age: "",
    fitnessLevel: "",
    preferredPace: "",
    interests: "",
    goals: ""
  });

  const handleRegistrationSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      await fetch("https://forzio.app.n8n.cloud/webhook-test/RUNTRIBE", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: "registration",
          ...regForm,
          timestamp: new Date().toISOString()
        }),
      });

      toast({
        title: "🚀 WELCOME TO THE TRIBE!",
        description: "Registration successful! We'll contact you soon with meetup details.",
      });
      
      setRegForm({
        name: "",
        email: "",
        phone: "",
        fitnessLevel: "",
        goals: "",
        availability: ""
      });
    } catch (error) {
      console.error("Registration error:", error);
      toast({
        title: "🔥 You're in! See you Saturday.",
        description: "Check your WhatsApp for details.",
      });
      
      // Clear form even on error
      setRegForm({
        name: "",
        email: "",
        phone: "",
        fitnessLevel: "",
        goals: "",
        availability: ""
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleBuddySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      await fetch("https://forzio.app.n8n.cloud/webhook-test/RUNTRIBE", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: "find_buddy",
          ...buddyForm,
          timestamp: new Date().toISOString()
        }),
      });

      toast({
        title: "🤝 TRIBE BRO SEARCH ACTIVATED!",
        description: "We'll match you with compatible running partners soon!",
      });
      
      setBuddyForm({
        name: "",
        email: "",
        age: "",
        fitnessLevel: "",
        preferredPace: "",
        interests: "",
        goals: ""
      });
    } catch (error) {
      console.error("Find buddy error:", error);
      toast({
        title: "🔥 Buddy Search Submitted!",
        description: "We'll find you the perfect running partner.",
      });
      
      // Clear form even on error
      setBuddyForm({
        name: "",
        email: "",
        age: "",
        fitnessLevel: "",
        preferredPace: "",
        interests: "",
        goals: ""
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black tribal-pattern">
      <Header />
      
      <section id="join-form" className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-orange-400/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto py-20 relative z-10">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black sigma-heading mb-12 leading-tight glitch-text animate-fade-up" data-text="JOIN THE TRIBE">
            JOIN.<br/>
            <span className="text-gradient-orange">THE TRIBE.</span>
          </h1>
          
          {/* Toggle Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 max-w-lg mx-auto animate-fade-up-delay">
            <Button
              onClick={() => setIsRegistering(true)}
              className={`sigma-button px-8 py-4 text-lg w-full sm:w-auto ${
                isRegistering ? 'opacity-100 scale-105' : 'opacity-60 hover:opacity-80'
              } transition-all duration-300`}
            >
              🚀 JOIN TRIBE
            </Button>
            <Button
              onClick={() => setIsRegistering(false)}
              className={`sigma-button px-8 py-4 text-lg w-full sm:w-auto ${
                !isRegistering ? 'opacity-100 scale-105' : 'opacity-60 hover:opacity-80'
              } transition-all duration-300`}
            >
              🤝 FIND MY BUDDY
            </Button>
          </div>

          {/* Registration Form */}
          {isRegistering && (
            <div className="sigma-card max-w-2xl mx-auto sigma-glow animate-fade-up-delay-2">
              <h2 className="text-3xl font-black sigma-heading mb-6 text-gradient-orange">
                BECOME A TRIBE MEMBER
              </h2>
              
              <form onSubmit={handleRegistrationSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-black mb-2 sigma-heading text-sm">
                      FULL NAME *
                    </label>
                    <Input
                      type="text"
                      value={regForm.name}
                      onChange={(e) => setRegForm({...regForm, name: e.target.value})}
                      className="sigma-input h-12"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-white font-black mb-2 sigma-heading text-sm">
                      EMAIL *
                    </label>
                    <Input
                      type="email"
                      value={regForm.email}
                      onChange={(e) => setRegForm({...regForm, email: e.target.value})}
                      className="sigma-input h-12"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-black mb-2 sigma-heading text-sm">
                      PHONE NUMBER *
                    </label>
                    <Input
                      type="tel"
                      value={regForm.phone}
                      onChange={(e) => setRegForm({...regForm, phone: e.target.value})}
                      className="sigma-input h-12"
                      placeholder="+91 XXXXX XXXXX"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-white font-black mb-2 sigma-heading text-sm">
                      FITNESS LEVEL
                    </label>
                    <select
                      value={regForm.fitnessLevel}
                      onChange={(e) => setRegForm({...regForm, fitnessLevel: e.target.value})}
                      className="sigma-input w-full h-12"
                    >
                      <option value="">Select level</option>
                      <option value="beginner">BEGINNER</option>
                      <option value="intermediate">INTERMEDIATE</option>
                      <option value="advanced">ADVANCED</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-white font-black mb-2 sigma-heading text-sm">
                    RUNNING GOALS
                  </label>
                  <textarea
                    value={regForm.goals}
                    onChange={(e) => setRegForm({...regForm, goals: e.target.value})}
                    className="sigma-input w-full h-24 resize-none"
                    placeholder="What do you want to achieve?"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="sigma-button w-full px-8 py-6 text-xl"
                >
                  {isLoading ? "JOINING..." : "🚀 JOIN THE TRIBE!"}
                </Button>
              </form>
            </div>
          )}

          {/* Find Tribe Bro Form */}
          {!isRegistering && (
            <div className="sigma-card max-w-2xl mx-auto sigma-glow animate-fade-up-delay-2">
              <h2 className="text-3xl font-black sigma-heading mb-4 text-gradient-orange">
                FIND YOUR TRIBE BRO
              </h2>
              <p className="text-gray-300 mb-8 text-lg font-light">
                Get matched with compatible running partners
              </p>
              
              <form onSubmit={handleBuddySubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-black mb-2 sigma-heading text-sm">
                      FULL NAME *
                    </label>
                    <Input
                      type="text"
                      value={buddyForm.name}
                      onChange={(e) => setBuddyForm({...buddyForm, name: e.target.value})}
                      className="sigma-input h-12"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-white font-black mb-2 sigma-heading text-sm">
                      EMAIL *
                    </label>
                    <Input
                      type="email"
                      value={buddyForm.email}
                      onChange={(e) => setBuddyForm({...buddyForm, email: e.target.value})}
                      className="sigma-input h-12"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-black mb-2 sigma-heading text-sm">
                      AGE RANGE
                    </label>
                    <select
                      value={buddyForm.age}
                      onChange={(e) => setBuddyForm({...buddyForm, age: e.target.value})}
                      className="sigma-input w-full h-12"
                    >
                      <option value="">Select age range</option>
                      <option value="18-25">18-25</option>
                      <option value="26-35">26-35</option>
                      <option value="36-45">36-45</option>
                      <option value="45+">45+</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-white font-black mb-2 sigma-heading text-sm">
                      FITNESS LEVEL
                    </label>
                    <select
                      value={buddyForm.fitnessLevel}
                      onChange={(e) => setBuddyForm({...buddyForm, fitnessLevel: e.target.value})}
                      className="sigma-input w-full h-12"
                    >
                      <option value="">Select level</option>
                      <option value="beginner">BEGINNER</option>
                      <option value="intermediate">INTERMEDIATE</option>
                      <option value="advanced">ADVANCED</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-white font-black mb-2 sigma-heading text-sm">
                    PREFERRED PACE
                  </label>
                  <select
                    value={buddyForm.preferredPace}
                    onChange={(e) => setBuddyForm({...buddyForm, preferredPace: e.target.value})}
                    className="sigma-input w-full h-12"
                  >
                    <option value="">Select pace</option>
                    <option value="slow">SLOW & STEADY</option>
                    <option value="moderate">MODERATE</option>
                    <option value="fast">FAST & FURIOUS</option>
                  </select>
                </div>

                <div>
                  <label className="block text-white font-black mb-2 sigma-heading text-sm">
                    INTERESTS & GOALS
                  </label>
                  <textarea
                    value={buddyForm.goals}
                    onChange={(e) => setBuddyForm({...buddyForm, goals: e.target.value})}
                    className="sigma-input w-full h-24 resize-none"
                    placeholder="What are you looking for in a running partner?"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="sigma-button w-full px-8 py-6 text-xl"
                >
                  {isLoading ? "FINDING..." : "🤝 FIND MY TRIBE BRO!"}
                </Button>
              </form>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default JoinTribe;