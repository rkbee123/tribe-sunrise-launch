
import { useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { useNavigate } from 'react-router-dom';

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  
  const { signUp, signIn, user } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();

  // Redirect if already logged in
  if (user) {
    navigate('/');
    return null;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      let error;
      if (isSignUp) {
        if (!name.trim()) {
          toast({
            title: "Bruh! 🤦‍♂️",
            description: "We need your name to know what to call ya!",
            variant: "destructive",
          });
          setLoading(false);
          return;
        }
        ({ error } = await signUp(email, password, name));
        if (!error) {
          toast({
            title: "Welcome to the tribe! 🎉",
            description: "Check your email to verify your account, then come back and sign in!",
          });
        }
      } else {
        ({ error } = await signIn(email, password));
        if (!error) {
          toast({
            title: "You're in! 🔥",
            description: "Ready to run with the squad?",
          });
          navigate('/');
        }
      }

      if (error) {
        toast({
          title: "Oops! Something went wrong 😅",
          description: error.message,
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Technical difficulties 🤖",
        description: "Try again in a sec!",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-400 via-red-500 to-pink-500 flex items-center justify-center p-4">
      <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-8 w-full max-w-md shadow-2xl border border-white/20">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-black bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent mb-2">
            {isSignUp ? "Join the Squad! 🏃‍♂️" : "Welcome Back! 👋"}
          </h1>
          <p className="text-gray-600">
            {isSignUp ? "Ready to level up your running game?" : "Time to get back to running!"}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {isSignUp && (
            <div>
              <Label htmlFor="name" className="text-gray-700 font-semibold">Your Name *</Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="What should we call you?"
                className="mt-2 border-gray-300 focus:border-orange-500 focus:ring-orange-500 rounded-xl"
                required
              />
            </div>
          )}
          
          <div>
            <Label htmlFor="email" className="text-gray-700 font-semibold">Email *</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your.email@example.com"
              className="mt-2 border-gray-300 focus:border-orange-500 focus:ring-orange-500 rounded-xl"
              required
            />
          </div>
          
          <div>
            <Label htmlFor="password" className="text-gray-700 font-semibold">Password *</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Make it secure! 🔐"
              className="mt-2 border-gray-300 focus:border-orange-500 focus:ring-orange-500 rounded-xl"
              required
            />
          </div>
          
          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-4 rounded-xl text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            {loading ? "Loading... ⏳" : isSignUp ? "Join RunTribe! 🚀" : "Let's Go! 🏃‍♂️"}
          </Button>
        </form>
        
        <div className="mt-6 text-center">
          <button
            onClick={() => setIsSignUp(!isSignUp)}
            className="text-orange-500 hover:text-orange-600 font-semibold transition-colors"
          >
            {isSignUp ? "Already have an account? Sign in! 👈" : "New here? Join the tribe! 👉"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Auth;
