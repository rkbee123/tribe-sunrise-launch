
const AboutUs = () => {
  const features = [
    {
      icon: "🏃",
      title: "Group Runs",
      description: "Energizing runs along the beautiful Thiruvanmiyur Beach with fellow ambitious minds"
    },
    {
      icon: "☕",
      title: "Coffee Hangouts",
      description: "Post-run coffee sessions to build lasting connections and share ideas"
    },
    {
      icon: "🧘",
      title: "Mindful Cooldowns",
      description: "Meditation and stretching sessions to center your mind for the day ahead"
    }
  ];

  return (
    <section id="about" className="py-24 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl opacity-50 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl opacity-50 translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block bg-gradient-orange text-black px-8 py-3 rounded-full text-sm font-black cloka-heading mb-8">
            ABOUT RUNTRIBE
          </div>
          <h2 className="text-5xl sm:text-7xl font-black cloka-heading mb-12 leading-tight">
            WHAT IS <span className="bg-gradient-orange bg-clip-text text-transparent">RUNTRIBE</span>? 🤔
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
            More than just a running club – we're a movement that blends fitness, mental well-being, 
            and meaningful connections. Every Saturday, we gather ambitious minds who believe in 
            starting their day with purpose and energy.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group cloka-card p-10 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 border border-gray-800 bg-gray-900/50 backdrop-blur-sm"
            >
              <div className="text-6xl mb-8 animate-float" style={{animationDelay: `${index * 0.5}s`}}>
                {feature.icon}
              </div>
              <h3 className="text-2xl font-black cloka-heading mb-6 group-hover:text-orange-500 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-300 leading-relaxed font-light">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <div className="inline-block bg-gradient-orange rounded-3xl p-12 max-w-3xl text-black shadow-2xl">
            <p className="text-xl font-bold cloka-heading leading-relaxed">
              "WE'RE NOT JUST BUILDING FITNESS HABITS – WE'RE BUILDING A COMMUNITY OF DREAMERS, 
              CREATORS, AND GO-GETTERS WHO SUPPORT EACH OTHER'S GROWTH." 💫
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
