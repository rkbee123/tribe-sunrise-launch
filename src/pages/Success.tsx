
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';

const Success = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-cloka flex items-center justify-center p-4">
      <div className="cloka-card p-12 w-full max-w-md shadow-2xl border border-gray-800 bg-gray-900/95 backdrop-blur-xl text-center">
        <div className="mb-8">
          <CheckCircle className="w-20 h-20 text-orange-500 mx-auto mb-6" />
          <h1 className="text-4xl font-black cloka-heading bg-gradient-orange bg-clip-text text-transparent mb-4">
            WELCOME TO RUNTRIBE!
          </h1>
          <p className="text-gray-300 font-light">
            Your email has been verified successfully. You're now part of the tribe!
          </p>
        </div>

        <div className="space-y-4">
          <Button
            onClick={() => navigate('/')}
            className="w-full cloka-button text-lg py-6"
          >
            CONTINUE TO RUNTRIBE
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Success;
