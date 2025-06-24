
const WhyJoin = () => {
  const benefits = [
    {
      icon: "🧠",
      title: "Meet Ambitious Minds",
      description: "Connect with entrepreneurs, creatives, and changemakers who share your drive"
    },
    {
      icon: "🤝",
      title: "Build Meaningful Connections",
      description: "Form genuine friendships and professional networks that go beyond the run"
    },
    {
      icon: "⚡",
      title: "Start Your Day with Energy",
      description: "Begin each Saturday with endorphins, fresh air, and unstoppable momentum"
    },
    {
      icon: "🌱",
      title: "Grow Physically, Mentally, Socially",
      description: "Holistic growth through fitness, mindfulness, and community support"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-sunrise-50 via-coral-50 to-ocean-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            🌱 Why Join RunTribe?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join a community that believes in growth, connection, and starting every day with intention.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="text-5xl mb-6 group-hover:animate-pulse-soft">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-coral-500 transition-colors">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-block bg-white rounded-full px-8 py-4 shadow-lg">
            <p className="text-lg font-semibold text-gray-800">
              Ready to transform your Saturdays? 🚀
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyJoin;
