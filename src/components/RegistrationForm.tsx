
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
      await fetch("http://localhost:5678/webhook/runtribe", {
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
        title: "Registration Successful!",
        description: "Welcome to RunTribe! We'll be in touch soon.",
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
        title: "Something went wrong",
        description: "Please try again later",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="registration" className="py-24 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl sm:text-6xl font-black cloka-heading mb-8">
            JOIN THE TRIBE 🎯
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light">
            Ready to start your journey? Fill out this form and we'll match you with your perfect running community.
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="cloka-card p-12 shadow-2xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <Label htmlFor="name" className="text-white font-bold cloka-heading text-sm mb-3 block">NAME *</Label>
                <Input 
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="cloka-input h-12"
                  placeholder="Your full name"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="email" className="text-white font-bold cloka-heading text-sm mb-3 block">EMAIL *</Label>
                <Input 
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="cloka-input h-12"
                  placeholder="your@email.com"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="phone" className="text-white font-bold cloka-heading text-sm mb-3 block">PHONE (OPTIONAL)</Label>
                <Input 
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="cloka-input h-12"
                  placeholder="+91 9876543210"
                />
              </div>
              
              <div>
                <Label htmlFor="occupation" className="text-white font-bold cloka-heading text-sm mb-3 block">OCCUPATION</Label>
                <Input 
                  id="occupation"
                  value={formData.occupation}
                  onChange={(e) => setFormData({...formData, occupation: e.target.value})}
                  className="cloka-input h-12"
                  placeholder="Student, Developer, Designer..."
                />
              </div>
              
              <div>
                <Label htmlFor="location" className="text-white font-bold cloka-heading text-sm mb-3 block">LOCATION</Label>
                <Select onValueChange={(value) => setFormData({...formData, location: value})}>
                  <SelectTrigger className="cloka-input h-12">
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
              
              <div>
                <Label htmlFor="fitnessLevel" className="text-white font-bold cloka-heading text-sm mb-3 block">FITNESS LEVEL</Label>
                <Select onValueChange={(value) => setFormData({...formData, fitnessLevel: value})}>
                  <SelectTrigger className="cloka-input h-12">
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
            
            <div className="mt-8">
              <Label htmlFor="skills" className="text-white font-bold cloka-heading text-sm mb-3 block">SKILLS/EXPERTISE</Label>
              <Textarea 
                id="skills"
                value={formData.skills}
                onChange={(e) => setFormData({...formData, skills: e.target.value})}
                className="cloka-input min-h-24"
                placeholder="Programming, Design, Writing, Photography, Music..."
                rows={3}
              />
            </div>
            
            <div className="mt-8">
              <Label htmlFor="interests" className="text-white font-bold cloka-heading text-sm mb-3 block">INTERESTS/HOBBIES</Label>
              <Textarea 
                id="interests"
                value={formData.interests}
                onChange={(e) => setFormData({...formData, interests: e.target.value})}
                className="cloka-input min-h-24"
                placeholder="Startups, Books, Travel, Fitness, Art, Technology..."
                rows={3}
              />
            </div>
            
            <div className="mt-12 text-center">
              <Button 
                type="submit"
                disabled={isLoading}
                className="cloka-button text-xl py-6 px-16"
              >
                {isLoading ? "JOINING..." : "JOIN RUNTRIBE 🚀"}
              </Button>
              <p className="mt-6 text-sm text-gray-400 font-light">
                We'll match you with your perfect running buddies within 24 hours!
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default RegistrationForm;
