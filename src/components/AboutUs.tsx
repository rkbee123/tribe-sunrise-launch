
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
    <section id="about" className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-orange-100 rounded-full blur-3xl opacity-50 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-100 rounded-full blur-3xl opacity-50 translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wide mb-6">
            About RunTribe
          </div>
          <h2 className="text-4xl sm:text-6xl font-black text-gray-900 mb-8 leading-tight">
            What is <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">RunTribe</span>? 🤔
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            More than just a running club – we're a movement that blends fitness, mental well-being, 
            and meaningful connections. Every Saturday, we gather ambitious minds who believe in 
            starting their day with purpose and energy.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 border border-gray-100"
            >
              <div className="text-6xl mb-6 animate-float" style={{animationDelay: `${index * 0.5}s`}}>
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange-500 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <div className="inline-block bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl p-8 max-w-3xl text-white shadow-2xl">
            <p className="text-xl font-semibold">
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
