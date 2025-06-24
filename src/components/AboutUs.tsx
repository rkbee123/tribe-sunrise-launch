
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
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            What is <span className="bg-gradient-to-r from-coral-500 to-sunrise-500 bg-clip-text text-transparent">RunTribe</span>? 🤔
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            More than just a running club – we're a movement that blends fitness, mental well-being, 
            and meaningful connections. Every Saturday, we gather ambitious minds who believe in 
            starting their day with purpose and energy.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center group hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="text-6xl mb-6 animate-float" style={{animationDelay: `${index * 0.5}s`}}>
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-coral-500 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-coral-50 to-ocean-50 rounded-2xl p-8 max-w-2xl">
            <p className="text-lg text-gray-700 italic">
              "We're not just building fitness habits – we're building a community of dreamers, 
              creators, and go-getters who support each other's growth." 💫
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
