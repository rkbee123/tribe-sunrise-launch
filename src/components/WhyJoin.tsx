
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
    <section className="py-24 bg-gradient-to-br from-gray-900 to-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl sm:text-6xl font-black cloka-heading mb-8">
            🌱 WHY JOIN RUNTRIBE?
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light">
            Join a community that believes in growth, connection, and starting every day with intention.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="cloka-card p-10 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group bg-gray-900/80 backdrop-blur-sm"
            >
              <div className="text-5xl mb-8 group-hover:animate-pulse-soft">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-black cloka-heading mb-6 group-hover:text-orange-500 transition-colors">
                {benefit.title}
              </h3>
              <p className="text-gray-300 leading-relaxed font-light">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <div className="inline-block cloka-card rounded-2xl px-12 py-6 shadow-lg bg-gray-900/80 backdrop-blur-sm border border-gray-800">
            <p className="text-xl font-black cloka-heading text-white">
              READY TO TRANSFORM YOUR SATURDAYS? 🚀
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyJoin;
