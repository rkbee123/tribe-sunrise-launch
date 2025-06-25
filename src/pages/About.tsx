
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      <section className="min-h-screen flex items-center justify-center bg-black">
        <div className="text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto py-20">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold sigma-heading mb-16 leading-tight">
            ABOUT.<br/>
            <span className="text-orange-500">RUNTRIBE.</span>
          </h1>
          
          <div className="sigma-card mb-16 max-w-4xl mx-auto">
            <p className="text-2xl sm:text-3xl font-bold sigma-heading mb-6 text-white">
              MORE THAN JUST RUNNING
            </p>
            
            <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              We're a movement that blends <span className="text-orange-500 font-semibold">fitness</span>, 
              <span className="text-orange-500 font-semibold"> mental well-being</span>, and 
              <span className="text-orange-500 font-semibold"> meaningful connections</span>. 
              Every Saturday, we gather ambitious minds who believe in starting their day with purpose and energy.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="sigma-card text-center">
              <div className="text-4xl mb-4">🏃</div>
              <h3 className="text-xl font-bold sigma-heading mb-3 text-orange-500">
                GROUP RUNS
              </h3>
              <p className="text-gray-300">
                Energizing runs along Thiruvanmiyur Beach with fellow ambitious minds
              </p>
            </div>

            <div className="sigma-card text-center">
              <div className="text-4xl mb-4">☕</div>
              <h3 className="text-xl font-bold sigma-heading mb-3 text-orange-500">
                COFFEE HANGOUTS
              </h3>
              <p className="text-gray-300">
                Post-run coffee sessions to build lasting connections and share ideas
              </p>
            </div>

            <div className="sigma-card text-center">
              <div className="text-4xl mb-4">🧘</div>
              <h3 className="text-xl font-bold sigma-heading mb-3 text-orange-500">
                MINDFUL COOLDOWNS
              </h3>
              <p className="text-gray-300">
                Meditation and stretching sessions to center your mind for the day ahead
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="sigma-card text-center">
              <div className="text-3xl mb-3">🧠</div>
              <h3 className="text-lg font-bold sigma-heading mb-2 text-orange-500">
                AMBITIOUS MINDS
              </h3>
              <p className="text-gray-300 text-sm">
                Connect with entrepreneurs and changemakers
              </p>
            </div>

            <div className="sigma-card text-center">
              <div className="text-3xl mb-3">🤝</div>
              <h3 className="text-lg font-bold sigma-heading mb-2 text-orange-500">
                BUILD CONNECTIONS
              </h3>
              <p className="text-gray-300 text-sm">
                Form genuine friendships and professional networks
              </p>
            </div>

            <div className="sigma-card text-center">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="text-lg font-bold sigma-heading mb-2 text-orange-500">
                START WITH ENERGY
              </h3>
              <p className="text-gray-300 text-sm">
                Begin each Saturday with endorphins and momentum
              </p>
            </div>

            <div className="sigma-card text-center">
              <div className="text-3xl mb-3">🌱</div>
              <h3 className="text-lg font-bold sigma-heading mb-2 text-orange-500">
                HOLISTIC GROWTH
              </h3>
              <p className="text-gray-300 text-sm">
                Physical, mental, and social development through community
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
