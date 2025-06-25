import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    occupation: "",
    skills: "",
    interests: "",
    location: "",
    preferredTime: "",
    fitnessLevel: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const payload = {
      ...formData,
      form_type: "registration",
      timestamp: new Date().toISOString(),
    };

    console.log("📤 Sending payload to n8n webhook:", payload);

    try {
      const response = await fetch("https://forzio.app.n8n.cloud/webhook-test/RUNTRIBE", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json().catch(() => null);

      if (response.ok) {
        toast({
          title: "🚀 WELCOME TO THE TRIBE!",
          description: "Your registration is complete! We'll match you with your tribe soon.",
        });
      } else {
        toast({
          title: "⚠️ Submission Failed!",
          description: `Server responded with ${response.status}`,
        });
      }

      console.log("✅ Webhook Response:", result || "No JSON body");
    } catch (error) {
      console.error("❌ Webhook error:", error);
      toast({
        title: "🔥 NETWORK ERROR",
        description: "Could not reach the server. Please try again later.",
      });
    } finally {
      setIsLoading(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        occupation: "",
        skills: "",
        interests: "",
        location: "",
        preferredTime: "",
        fitnessLevel: "",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="sigma-card p-8 sm:p-16 shadow-2xl sigma-glow">
      <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-4">
          <Label htmlFor="name">Name *</Label>
          <Input id="name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
        </div>

        <div className="space-y-4">
          <Label htmlFor="email">Email *</Label>
          <Input id="email" type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
        </div>

        <div className="space-y-4">
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
        </div>

        <div className="space-y-4">
          <Label htmlFor="occupation">Occupation</Label>
          <Input id="occupation" value={formData.occupation} onChange={(e) => setFormData({ ...formData, occupation: e.target.value })} />
        </div>

        <div className="space-y-4">
          <Label>Location</Label>
          <Select
            value={formData.location}
            onValueChange={(value) => setFormData({ ...formData, location: value })}
          >
            <SelectTrigger>
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

        <div className="space-y-4">
          <Label>Fitness Level</Label>
          <Select
            value={formData.fitnessLevel}
            onValueChange={(value) => setFormData({ ...formData, fitnessLevel: value })}
          >
            <SelectTrigger>
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

      <div className="mt-8 space-y-4">
        <Label htmlFor="skills">Skills/Expertise</Label>
        <Textarea
          id="skills"
          value={formData.skills}
          onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
          rows={4}
        />
      </div>

      <div className="mt-8 space-y-4">
        <Label htmlFor="interests">Interests/Hobbies</Label>
        <Textarea
          id="interests"
          value={formData.interests}
          onChange={(e) => setFormData({ ...formData, interests: e.target.value })}
          rows={4}
        />
      </div>

      <div className="mt-16 text-center">
        <Button type="submit" disabled={isLoading}>
          {isLoading ? "Joining..." : "JOIN RUNTRIBE 🚀"}
        </Button>
      </div>
    </form>
  );
};

export default RegistrationForm;
