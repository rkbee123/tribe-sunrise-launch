
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
  
  const { signUp, signIn, user, session } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  // Check if this is a redirect from email verification
  useEffect(() => {
    const type = searchParams.get('type');
    if (type === 'signup' && session && user?.email_confirmed_at) {
      navigate('/');
    } else if (type === 'signup') {
      // User clicked the verification link, redirect to login
      navigate('/auth');
    }
  }, [searchParams, navigate, session, user]);

  // Additional check for session changes
  useEffect(() => {
    if (session && user?.email_confirmed_at) {
      navigate('/');
    }
  }, [session, user, navigate]);

  // Redirect if already logged in
  if (user && user.email_confirmed_at) {
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
        
        // Set redirect URL to auth page
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
    <div className="min-h-screen bg-gradient-cloka flex items-center justify-center p-4">
      <div className="cloka-card p-12 w-full max-w-md shadow-2xl border border-gray-800 bg-gray-900/95 backdrop-blur-xl">
        <div className="text-center mb-12">
          <img 
            src="/logo.png" 
            alt="RunTribe Logo" 
            className="h-16 w-16 mx-auto mb-6 rounded-2xl"
          />
          <h1 className="text-4xl font-black cloka-heading bg-gradient-orange bg-clip-text text-transparent mb-3">
            {isSignUp ? "JOIN RUNTRIBE" : "WELCOME BACK"}
          </h1>
          <p className="text-gray-300 font-light">
            {isSignUp ? "Ready to start your running journey?" : "Let's get back to running!"}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {isSignUp && (
            <div>
              <Label htmlFor="name" className="text-white font-bold cloka-heading text-sm mb-3 block">FULL NAME *</Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your full name"
                className="cloka-input h-12"
                required
              />
            </div>
          )}
          
          <div>
            <Label htmlFor="email" className="text-white font-bold cloka-heading text-sm mb-3 block">EMAIL ADDRESS *</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your.email@example.com"
              className="cloka-input h-12"
              required
            />
          </div>
          
          <div>
            <Label htmlFor="password" className="text-white font-bold cloka-heading text-sm mb-3 block">PASSWORD *</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter a secure password"
              className="cloka-input h-12"
              required
            />
          </div>
          
          <Button
            type="submit"
            disabled={loading}
            className="w-full cloka-button text-lg py-6"
          >
            {loading ? "PLEASE WAIT..." : isSignUp ? "CREATE ACCOUNT" : "SIGN IN"}
          </Button>
        </form>
        
        <div className="mt-8 text-center">
          <button
            onClick={() => setIsSignUp(!isSignUp)}
            className="text-orange-500 hover:text-orange-400 font-bold transition-colors"
          >
            {isSignUp ? "Already have an account? Sign in" : "New to RunTribe? Create account"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Auth;
