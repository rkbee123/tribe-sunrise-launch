import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';

const Success = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4 tribal-pattern relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-orange-400/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="sigma-card p-12 w-full max-w-md shadow-2xl sigma-glow text-center relative z-10 animate-fade-up">
        <div className="mb-8">
          <CheckCircle className="w-20 h-20 text-orange-500 mx-auto mb-6 pulse-orange" />
          <h1 className="text-4xl font-black sigma-heading text-gradient-orange mb-4 glitch-text" data-text="WELCOME TO RUNTRIBE!">
            WELCOME TO RUNTRIBE!
          </h1>
          <p className="text-gray-300 font-light text-lg">
            Your email has been verified successfully. You're now part of the tribe!
          </p>
        </div>

        <div className="space-y-4">
          <Button
            onClick={() => navigate('/')}
            className="w-full sigma-button text-lg py-6"
          >
            🚀 CONTINUE TO RUNTRIBE
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Success;