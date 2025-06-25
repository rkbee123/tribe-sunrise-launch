import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-black tribal-pattern">
      <Header />
      
      <section className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-orange-400/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto py-20 relative z-10">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black sigma-heading mb-16 leading-tight glitch-text animate-fade-up" data-text="ABOUT RUNTRIBE">
            ABOUT.<br/>
            <span className="text-gradient-orange">RUNTRIBE.</span>
          </h1>
          
          <div className="sigma-card mb-16 max-w-4xl mx-auto sigma-glow animate-fade-up-delay">
            <p className="text-2xl sm:text-3xl font-black sigma-heading mb-6 text-white">
              MORE THAN JUST RUNNING
            </p>
            
            <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed font-light">
              We're a movement that blends <span className="text-orange-500 font-semibold">FITNESS</span>, 
              <span className="text-orange-500 font-semibold"> MENTAL WELL-BEING</span>, and 
              <span className="text-orange-500 font-semibold"> MEANINGFUL CONNECTIONS</span>. 
              Every Saturday, we gather ambitious minds who believe in starting their day with purpose and energy.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16 animate-fade-up-delay-2">
            <div className="sigma-card text-center sigma-glow transform hover:scale-105 transition-all duration-300">
              <div className="text-5xl mb-6 animate-float">🏃</div>
              <h3 className="text-xl font-black sigma-heading mb-4 text-gradient-orange">
                GROUP RUNS
              </h3>
              <p className="text-gray-300 font-light">
                Energizing runs along Thiruvanmiyur Beach with fellow ambitious minds
              </p>
            </div>

            <div className="sigma-card text-center sigma-glow transform hover:scale-105 transition-all duration-300">
              <div className="text-5xl mb-6 animate-float" style={{animationDelay: '0.5s'}}>☕</div>
              <h3 className="text-xl font-black sigma-heading mb-4 text-gradient-orange">
                COFFEE HANGOUTS
              </h3>
              <p className="text-gray-300 font-light">
                Post-run coffee sessions to build lasting connections and share ideas
              </p>
            </div>

            <div className="sigma-card text-center sigma-glow transform hover:scale-105 transition-all duration-300">
              <div className="text-5xl mb-6 animate-float" style={{animationDelay: '1s'}}>🧘</div>
              <h3 className="text-xl font-black sigma-heading mb-4 text-gradient-orange">
                MINDFUL COOLDOWNS
              </h3>
              <p className="text-gray-300 font-light">
                Meditation and stretching sessions to center your mind for the day ahead
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="sigma-card text-center transform hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-4 animate-float">🧠</div>
              <h3 className="text-lg font-black sigma-heading mb-3 text-gradient-orange">
                AMBITIOUS MINDS
              </h3>
              <p className="text-gray-300 text-sm font-light">
                Connect with entrepreneurs and changemakers
              </p>
            </div>

            <div className="sigma-card text-center transform hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-4 animate-float" style={{animationDelay: '0.3s'}}>🤝</div>
              <h3 className="text-lg font-black sigma-heading mb-3 text-gradient-orange">
                BUILD CONNECTIONS
              </h3>
              <p className="text-gray-300 text-sm font-light">
                Form genuine friendships and professional networks
              </p>
            </div>

            <div className="sigma-card text-center transform hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-4 animate-float" style={{animationDelay: '0.6s'}}>⚡</div>
              <h3 className="text-lg font-black sigma-heading mb-3 text-gradient-orange">
                START WITH ENERGY
              </h3>
              <p className="text-gray-300 text-sm font-light">
                Begin each Saturday with endorphins and momentum
              </p>
            </div>

            <div className="sigma-card text-center transform hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-4 animate-float" style={{animationDelay: '0.9s'}}>🌱</div>
              <h3 className="text-lg font-black sigma-heading mb-3 text-gradient-orange">
                HOLISTIC GROWTH
              </h3>
              <p className="text-gray-300 text-sm font-light">
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