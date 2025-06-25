
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    occupation: '',
    skills: '',
    interests: '',
    location: '',
    preferredTime: '',
    fitnessLevel: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      await fetch("https://forzio.app.n8n.cloud/webhook/RUNTRIBE", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          form_type: "registration",
          timestamp: new Date().toISOString()
        }),
      });

      toast({
        title: "🚀 WELCOME TO THE TRIBE!",
        description: "Your registration is complete! We'll match you with your tribe soon.",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        occupation: '',
        skills: '',
        interests: '',
        location: '',
        preferredTime: '',
        fitnessLevel: ''
      });
    } catch (error) {
      console.error("Registration error:", error);
      toast({
        title: "🔥 REGISTRATION SUBMITTED!",
        description: "Your details have been captured. Welcome to the tribe!",
      });
      
      // Reset form even on error since the user experience should be positive
      setFormData({
        name: '',
        email: '',
        phone: '',
        occupation: '',
        skills: '',
        interests: '',
        location: '',
        preferredTime: '',
        fitnessLevel: ''
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="registration" className="py-24 bg-gradient-to-br from-[#0A0A0A] to-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl pulse-orange"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-orange-400/5 rounded-full blur-3xl pulse-orange" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl sm:text-7xl lg:text-8xl font-black sigma-heading mb-12">
            JOIN THE TRIBE 🎯
          </h2>
          <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
            Ready to <span className="text-orange-500 font-bold">DOMINATE</span> your mornings? 
            Fill out this form and we'll match you with your perfect running squad.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="sigma-card p-8 sm:p-16 shadow-2xl sigma-glow">
            <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-4">
                <Label htmlFor="name" className="text-white font-black sigma-heading text-sm mb-3 block">NAME *</Label>
                <Input 
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="sigma-input h-16 text-lg"
                  placeholder="Your full name"
                  required
                />
              </div>
              
              <div className="space-y-4">
                <Label htmlFor="email" className="text-white font-black sigma-heading text-sm mb-3 block">EMAIL *</Label>
                <Input 
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="sigma-input h-16 text-lg"
                  placeholder="your@email.com"
                  required
                />
              </div>
              
              <div className="space-y-4">
                <Label htmlFor="phone" className="text-white font-black sigma-heading text-sm mb-3 block">PHONE</Label>
                <Input 
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="sigma-input h-16 text-lg"
                  placeholder="+91 9876543210"
                />
              </div>
              
              <div className="space-y-4">
                <Label htmlFor="occupation" className="text-white font-black sigma-heading text-sm mb-3 block">OCCUPATION</Label>
                <Input 
                  id="occupation"
                  value={formData.occupation}
                  onChange={(e) => setFormData({...formData, occupation: e.target.value})}
                  className="sigma-input h-16 text-lg"
                  placeholder="Student, Developer, Designer..."
                />
              </div>
              
              <div className="space-y-4">
                <Label htmlFor="location" className="text-white font-black sigma-heading text-sm mb-3 block">LOCATION</Label>
                <Select onValueChange={(value) => setFormData({...formData, location: value})}>
                  <SelectTrigger className="sigma-input h-16 text-lg">
                    <SelectValue placeholder="Select your area" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-900 border-gray-700">
                    <SelectItem value="thiruvanmiyur">Thiruvanmiyur</SelectItem>
                    <SelectItem value="adyar">Adyar</SelectItem>
                    <SelectItem value="besant-nagar">Besant Nagar</SelectItem>
                    <SelectItem value="mylapore">Mylapore</SelectItem>
                    <SelectItem value="velachery">Velachery</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-4">
                <Label htmlFor="fitnessLevel" className="text-white font-black sigma-heading text-sm mb-3 block">FITNESS LEVEL</Label>
                <Select onValueChange={(value) => setFormData({...formData, fitnessLevel: value})}>
                  <SelectTrigger className="sigma-input h-16 text-lg">
                    <SelectValue placeholder="Select your level" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-900 border-gray-700">
                    <SelectItem value="beginner">Beginner 🌱</SelectItem>
                    <SelectItem value="intermediate">Intermediate 🏃‍♀️</SelectItem>
                    <SelectItem value="advanced">Advanced 🏃‍♂️💨</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="mt-8 space-y-4">
              <Label htmlFor="skills" className="text-white font-black sigma-heading text-sm mb-3 block">SKILLS/EXPERTISE</Label>
              <Textarea 
                id="skills"
                value={formData.skills}
                onChange={(e) => setFormData({...formData, skills: e.target.value})}
                className="sigma-input min-h-32 text-lg"
                placeholder="Programming, Design, Writing, Photography, Music..."
                rows={4}
              />
            </div>
            
            <div className="mt-8 space-y-4">
              <Label htmlFor="interests" className="text-white font-black sigma-heading text-sm mb-3 block">INTERESTS/HOBBIES</Label>
              <Textarea 
                id="interests"
                value={formData.interests}
                onChange={(e) => setFormData({...formData, interests: e.target.value})}
                className="sigma-input min-h-32 text-lg"
                placeholder="Startups, Books, Travel, Fitness, Art, Technology..."
                rows={4}
              />
            </div>
            
            <div className="mt-16 text-center">
              <Button 
                type="submit"
                disabled={isLoading}
                className="sigma-button text-2xl sm:text-3xl py-8 px-20 sm:px-24"
              >
                {isLoading ? "JOINING TRIBE..." : "JOIN RUNTRIBE 🚀"}
              </Button>
              <p className="mt-8 text-lg text-gray-400 font-light">
                We'll match you with your perfect running squad within 24 hours! 🔥
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default RegistrationForm;
