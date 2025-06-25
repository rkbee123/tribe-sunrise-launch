
import { Button } from "@/components/ui/button";

const MeetupDetails = () => {
  return (
    <section id="meetups" className="py-24 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl sm:text-6xl font-black cloka-heading mb-8">
            📍 WHERE & WHEN?
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light">
            Join us every Saturday morning for an energizing start to your weekend.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Details */}
          <div className="space-y-8">
            <div className="cloka-card p-10 bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700">
              <div className="space-y-8">
                <div className="flex items-center space-x-6">
                  <div className="text-4xl">📅</div>
                  <div>
                    <h3 className="text-2xl font-black cloka-heading text-white">EVERY SATURDAY</h3>
                    <p className="text-gray-300 font-light">Weekly community runs</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-6">
                  <div className="text-4xl">⏰</div>
                  <div>
                    <h3 className="text-2xl font-black cloka-heading text-white">6:00 AM</h3>
                    <p className="text-gray-300 font-light">Start fresh with the sunrise</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-6">
                  <div className="text-4xl">🏖️</div>
                  <div>
                    <h3 className="text-2xl font-black cloka-heading text-white">THIRUVANMIYUR BEACH</h3>
                    <p className="text-gray-300 font-light">Beautiful coastline, perfect running track</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center lg:text-left">
              <Button className="cloka-button text-xl py-6 px-12">
                JOIN THIS WEEK'S RUN 🏃‍♀️
              </Button>
            </div>
          </div>
          
          {/* Map Placeholder */}
          <div className="cloka-card h-80 lg:h-96 flex items-center justify-center shadow-2xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700">
            <div className="text-center">
              <div className="text-6xl mb-6">🗺️</div>
              <h3 className="text-3xl font-black cloka-heading text-white mb-4">THIRUVANMIYUR BEACH</h3>
              <p className="text-gray-300 text-xl font-light">Chennai, Tamil Nadu</p>
              <div className="mt-6">
                <Button variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-black rounded-xl px-8 py-3 font-bold transition-all duration-300">
                  OPEN IN MAPS
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-20 text-center">
          <div className="cloka-card p-10 max-w-3xl mx-auto bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700">
            <h3 className="text-3xl font-black cloka-heading text-white mb-6">WHAT TO EXPECT? 🤔</h3>
            <div className="grid sm:grid-cols-3 gap-6 text-lg text-gray-300 font-light">
              <div className="font-medium">🏃‍♀️ 30-45 MIN RUN</div>
              <div className="font-medium">☕ POST-RUN COFFEE</div>
              <div className="font-medium">🧘 COOL-DOWN SESSION</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetupDetails;
