
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0A0A0A] via-[#111111] to-black">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-orange-500/20 rounded-full blur-xl animate-bounce pulse-orange" style={{animationDelay: '0s', animationDuration: '3s'}}></div>
          <div className="absolute bottom-32 right-20 w-24 h-24 bg-orange-500/25 rounded-full blur-lg animate-bounce pulse-orange" style={{animationDelay: '2s', animationDuration: '2.5s'}}></div>
        </div>
        
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto pt-20">
          <div className="animate-fade-up">
            <h1 className="text-6xl sm:text-8xl lg:text-9xl font-black sigma-heading mb-12 leading-none">
              ABOUT.<br/>
              <span className="text-orange-400 sigma-text-glow">RUNTRIBE.</span>
            </h1>
            
            <div className="sigma-card p-8 sm:p-16 mb-16 sigma-glow max-w-5xl mx-auto">
              <p className="text-2xl sm:text-3xl lg:text-4xl sigma-heading mb-8 text-white">
                MORE THAN JUST RUNNING
              </p>
              
              <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed font-light">
                We're a movement that blends <span className="text-orange-500 font-bold">FITNESS</span>, 
                <span className="text-orange-500 font-bold"> MENTAL WELL-BEING</span>, and 
                <span className="text-orange-500 font-bold"> MEANINGFUL CONNECTIONS</span>. 
                Every Saturday, we gather ambitious minds who believe in starting their day with purpose and energy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 to-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl sm:text-6xl font-black sigma-heading mb-8">
              WHAT WE DO 🚀
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            <div className="sigma-card p-10 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2">
              <div className="text-6xl mb-8 animate-float">🏃</div>
              <h3 className="text-2xl font-black sigma-heading mb-6 text-orange-500">
                GROUP RUNS
              </h3>
              <p className="text-gray-300 leading-relaxed font-light">
                Energizing runs along the beautiful Thiruvanmiyur Beach with fellow ambitious minds
              </p>
            </div>

            <div className="sigma-card p-10 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2">
              <div className="text-6xl mb-8 animate-float" style={{animationDelay: '0.5s'}}>☕</div>
              <h3 className="text-2xl font-black sigma-heading mb-6 text-orange-500">
                COFFEE HANGOUTS
              </h3>
              <p className="text-gray-300 leading-relaxed font-light">
                Post-run coffee sessions to build lasting connections and share ideas
              </p>
            </div>

            <div className="sigma-card p-10 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2">
              <div className="text-6xl mb-8 animate-float" style={{animationDelay: '1s'}}>🧘</div>
              <h3 className="text-2xl font-black sigma-heading mb-6 text-orange-500">
                MINDFUL COOLDOWNS
              </h3>
              <p className="text-gray-300 leading-relaxed font-light">
                Meditation and stretching sessions to center your mind for the day ahead
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl sm:text-6xl font-black sigma-heading mb-8">
              WHY JOIN US? 💫
            </h2>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="sigma-card p-10 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="text-5xl mb-8 group-hover:animate-pulse-soft">🧠</div>
              <h3 className="text-xl font-black sigma-heading mb-6 group-hover:text-orange-500 transition-colors">
                MEET AMBITIOUS MINDS
              </h3>
              <p className="text-gray-300 leading-relaxed font-light">
                Connect with entrepreneurs, creatives, and changemakers who share your drive
              </p>
            </div>

            <div className="sigma-card p-10 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="text-5xl mb-8 group-hover:animate-pulse-soft">🤝</div>
              <h3 className="text-xl font-black sigma-heading mb-6 group-hover:text-orange-500 transition-colors">
                BUILD CONNECTIONS
              </h3>
              <p className="text-gray-300 leading-relaxed font-light">
                Form genuine friendships and professional networks that go beyond the run
              </p>
            </div>

            <div className="sigma-card p-10 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="text-5xl mb-8 group-hover:animate-pulse-soft">⚡</div>
              <h3 className="text-xl font-black sigma-heading mb-6 group-hover:text-orange-500 transition-colors">
                START WITH ENERGY
              </h3>
              <p className="text-gray-300 leading-relaxed font-light">
                Begin each Saturday with endorphins, fresh air, and unstoppable momentum
              </p>
            </div>

            <div className="sigma-card p-10 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="text-5xl mb-8 group-hover:animate-pulse-soft">🌱</div>
              <h3 className="text-xl font-black sigma-heading mb-6 group-hover:text-orange-500 transition-colors">
                HOLISTIC GROWTH
              </h3>
              <p className="text-gray-300 leading-relaxed font-light">
                Physical, mental, and social development through community support
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
