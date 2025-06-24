
import { useState, useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { useNavigate, useSearchParams } from 'react-router-dom';

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  
  const { signUp, signIn, user } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  // Check if this is a redirect from email verification
  useEffect(() => {
    const type = searchParams.get('type');
    if (type === 'signup') {
      // User clicked the verification link, redirect to success page
      navigate('/success');
    }
  }, [searchParams, navigate]);

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
            title: "Name Required",
            description: "Please enter your name to continue",
            variant: "destructive",
          });
          setLoading(false);
          return;
        }
        
        // Set redirect URL to auth page with success parameter
        const redirectUrl = `${window.location.origin}/auth?type=signup`;
        
        ({ error } = await signUp(email, password, name));
        if (!error) {
          toast({
            title: "Check Your Email",
            description: "We've sent you a verification link. Click it to complete your registration!",
          });
        }
      } else {
        ({ error } = await signIn(email, password));
        if (!error) {
          toast({
            title: "Welcome Back!",
            description: "Ready to run with the community?",
          });
          navigate('/');
        }
      }

      if (error) {
        toast({
          title: "Something went wrong",
          description: error.message,
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Please try again later",
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
          <img 
            src="/images/runtribe-logo.png" 
            alt="RunTribe Logo" 
            className="h-16 w-16 mx-auto mb-4 rounded-2xl"
          />
          <h1 className="text-3xl font-black bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent mb-2">
            {isSignUp ? "Join RunTribe" : "Welcome Back"}
          </h1>
          <p className="text-gray-600">
            {isSignUp ? "Ready to start your running journey?" : "Let's get back to running!"}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {isSignUp && (
            <div>
              <Label htmlFor="name" className="text-gray-700 font-semibold">Full Name *</Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your full name"
                className="mt-2 border-gray-300 focus:border-orange-500 focus:ring-orange-500 rounded-xl"
                required
              />
            </div>
          )}
          
          <div>
            <Label htmlFor="email" className="text-gray-700 font-semibold">Email Address *</Label>
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
              placeholder="Enter a secure password"
              className="mt-2 border-gray-300 focus:border-orange-500 focus:ring-orange-500 rounded-xl"
              required
            />
          </div>
          
          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-4 rounded-xl text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            {loading ? "Please wait..." : isSignUp ? "Create Account" : "Sign In"}
          </Button>
        </form>
        
        <div className="mt-6 text-center">
          <button
            onClick={() => setIsSignUp(!isSignUp)}
            className="text-orange-500 hover:text-orange-600 font-semibold transition-colors"
          >
            {isSignUp ? "Already have an account? Sign in" : "New to RunTribe? Create account"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Auth;
