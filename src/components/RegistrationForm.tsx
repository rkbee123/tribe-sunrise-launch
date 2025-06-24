
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Registration data:', formData);
    // Here you would integrate with Supabase
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Join the Tribe 🎯
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to start your journey? Fill out this form and we'll match you with your perfect running community.
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="bg-gradient-to-br from-coral-50 to-ocean-50 rounded-2xl p-8 shadow-xl">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="name" className="text-gray-700 font-semibold">Name *</Label>
                <Input 
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="mt-2 border-gray-300 focus:border-coral-500 focus:ring-coral-500"
                  placeholder="Your full name"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="email" className="text-gray-700 font-semibold">Email *</Label>
                <Input 
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="mt-2 border-gray-300 focus:border-coral-500 focus:ring-coral-500"
                  placeholder="your@email.com"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="phone" className="text-gray-700 font-semibold">Phone (Optional)</Label>
                <Input 
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="mt-2 border-gray-300 focus:border-coral-500 focus:ring-coral-500"
                  placeholder="+91 9876543210"
                />
              </div>
              
              <div>
                <Label htmlFor="occupation" className="text-gray-700 font-semibold">Occupation</Label>
                <Input 
                  id="occupation"
                  value={formData.occupation}
                  onChange={(e) => setFormData({...formData, occupation: e.target.value})}
                  className="mt-2 border-gray-300 focus:border-coral-500 focus:ring-coral-500"
                  placeholder="Student, Developer, Designer..."
                />
              </div>
              
              <div>
                <Label htmlFor="location" className="text-gray-700 font-semibold">Location</Label>
                <Select onValueChange={(value) => setFormData({...formData, location: value})}>
                  <SelectTrigger className="mt-2 border-gray-300 focus:border-coral-500 focus:ring-coral-500">
                    <SelectValue placeholder="Select your area" />
                  </SelectTrigger>
                  <SelectContent>
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
                <Label htmlFor="fitnessLevel" className="text-gray-700 font-semibold">Fitness Level</Label>
                <Select onValueChange={(value) => setFormData({...formData, fitnessLevel: value})}>
                  <SelectTrigger className="mt-2 border-gray-300 focus:border-coral-500 focus:ring-coral-500">
                    <SelectValue placeholder="Select your level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="beginner">Beginner 🌱</SelectItem>
                    <SelectItem value="intermediate">Intermediate 🏃‍♀️</SelectItem>
                    <SelectItem value="advanced">Advanced 🏃‍♂️💨</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="mt-6">
              <Label htmlFor="skills" className="text-gray-700 font-semibold">Skills/Expertise</Label>
              <Textarea 
                id="skills"
                value={formData.skills}
                onChange={(e) => setFormData({...formData, skills: e.target.value})}
                className="mt-2 border-gray-300 focus:border-coral-500 focus:ring-coral-500"
                placeholder="Programming, Design, Writing, Photography, Music..."
                rows={3}
              />
            </div>
            
            <div className="mt-6">
              <Label htmlFor="interests" className="text-gray-700 font-semibold">Interests/Hobbies</Label>
              <Textarea 
                id="interests"
                value={formData.interests}
                onChange={(e) => setFormData({...formData, interests: e.target.value})}
                className="mt-2 border-gray-300 focus:border-coral-500 focus:ring-coral-500"
                placeholder="Startups, Books, Travel, Fitness, Art, Technology..."
                rows={3}
              />
            </div>
            
            <div className="mt-8 text-center">
              <Button 
                type="submit"
                size="lg" 
                className="bg-gradient-to-r from-coral-500 to-sunrise-500 hover:from-coral-600 hover:to-sunrise-600 text-white border-0 px-12 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Join RunTribe 🚀
              </Button>
              <p className="mt-4 text-sm text-gray-600">
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
