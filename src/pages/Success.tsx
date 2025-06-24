
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';

const Success = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-400 via-red-500 to-pink-500 flex items-center justify-center p-4">
      <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-8 w-full max-w-md shadow-2xl border border-white/20 text-center">
        <div className="mb-6">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h1 className="text-3xl font-black bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent mb-2">
            Welcome to RunTribe!
          </h1>
          <p className="text-gray-600">
            Your email has been verified successfully. You're now part of the tribe!
          </p>
        </div>

        <div className="space-y-4">
          <Button
            onClick={() => navigate('/')}
            className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-4 rounded-xl text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Continue to RunTribe
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Success;
