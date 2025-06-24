
import { Button } from "@/components/ui/button";

const MeetupDetails = () => {
  return (
    <section id="meetups" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            📍 Where & When?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join us every Saturday morning for an energizing start to your weekend.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Details */}
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-coral-50 to-sunrise-50 rounded-2xl p-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="text-3xl">📅</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Every Saturday</h3>
                    <p className="text-gray-600">Weekly community runs</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="text-3xl">⏰</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">6:00 AM</h3>
                    <p className="text-gray-600">Start fresh with the sunrise</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="text-3xl">🏖️</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Thiruvanmiyur Beach</h3>
                    <p className="text-gray-600">Beautiful coastline, perfect running track</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center lg:text-left">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-ocean-500 to-coral-500 hover:from-ocean-600 hover:to-coral-600 text-white border-0 px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Join This Week's Run 🏃‍♀️
              </Button>
            </div>
          </div>
          
          {/* Map Placeholder */}
          <div className="bg-gradient-to-br from-ocean-100 to-coral-100 rounded-2xl h-80 lg:h-96 flex items-center justify-center shadow-lg">
            <div className="text-center">
              <div className="text-6xl mb-4">🗺️</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Thiruvanmiyur Beach</h3>
              <p className="text-gray-600">Chennai, Tamil Nadu</p>
              <div className="mt-4">
                <Button variant="outline" className="border-ocean-400 text-ocean-600 hover:bg-ocean-50">
                  Open in Maps
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-sunrise-50 to-coral-50 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">What to Expect? 🤔</h3>
            <div className="grid sm:grid-cols-3 gap-4 text-sm text-gray-700">
              <div>🏃‍♀️ 30-45 min run</div>
              <div>☕ Post-run coffee</div>
              <div>🧘 Cool-down session</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetupDetails;
