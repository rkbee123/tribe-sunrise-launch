
import { Button } from "@/components/ui/button";

const RunnerMatch = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-ocean-50 via-coral-50 to-sunrise-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Find Your RunBuddy 🤝
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our smart matching system connects you with runners who share your pace, 
            interests, and goals. Never run alone again!
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">How It Works ✨</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-coral-100 rounded-full p-3 text-coral-600 font-bold text-lg">1</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Complete Your Profile</h4>
                    <p className="text-gray-600">Tell us about your fitness level, interests, and goals</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-sunrise-100 rounded-full p-3 text-sunrise-600 font-bold text-lg">2</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Get Matched</h4>
                    <p className="text-gray-600">Our algorithm finds your perfect running companions</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-ocean-100 rounded-full p-3 text-ocean-600 font-bold text-lg">3</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Start Running Together</h4>
                    <p className="text-gray-600">Meet at the beach and build meaningful connections</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center lg:text-left">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-coral-500 to-ocean-500 hover:from-coral-600 hover:to-ocean-600 text-white border-0 px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Register & Match 🎯
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white rounded-xl p-6 shadow-lg text-center transform hover:scale-105 transition-all duration-300">
              <div className="text-3xl mb-3">🎯</div>
              <h4 className="font-bold text-gray-900 mb-2">Similar Pace</h4>
              <p className="text-sm text-gray-600">Matched by fitness level</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg text-center transform hover:scale-105 transition-all duration-300">
              <div className="text-3xl mb-3">💼</div>
              <h4 className="font-bold text-gray-900 mb-2">Shared Interests</h4>
              <p className="text-sm text-gray-600">Common hobbies & goals</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg text-center transform hover:scale-105 transition-all duration-300">
              <div className="text-3xl mb-3">📍</div>
              <h4 className="font-bold text-gray-900 mb-2">Location</h4>
              <p className="text-sm text-gray-600">Nearby neighborhoods</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg text-center transform hover:scale-105 transition-all duration-300">
              <div className="text-3xl mb-3">⏰</div>
              <h4 className="font-bold text-gray-900 mb-2">Schedule</h4>
              <p className="text-sm text-gray-600">Preferred run times</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RunnerMatch;
