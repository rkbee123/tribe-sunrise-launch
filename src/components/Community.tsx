
const Community = () => {
  const testimonials = [
    {
      name: "Priya S.",
      role: "UX Designer",
      text: "RunTribe changed my Saturdays completely! I've made incredible friends and my network has grown so much.",
      avatar: "👩‍💻"
    },
    {
      name: "Arjun M.",
      role: "Startup Founder",
      text: "The connections I've made here are genuine. We support each other's goals both on and off the track.",
      avatar: "👨‍💼"
    },
    {
      name: "Kavitha R.",
      role: "Content Creator",
      text: "Best decision ever! The energy, the people, the morning motivation - everything is perfect.",
      avatar: "🎨"
    }
  ];

  return (
    <section id="community" className="py-24 bg-gradient-to-br from-gray-900 to-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl sm:text-6xl font-black cloka-heading mb-8">
            BUILT BY DREAMERS LIKE YOU 💭
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light">
            Not just runners. We're builders, creatives, explorers who believe in growing together.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="cloka-card p-10 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-gray-900/80 backdrop-blur-sm border border-gray-800"
            >
              <div className="text-center">
                <div className="text-5xl mb-6">{testimonial.avatar}</div>
                <h3 className="text-xl font-black cloka-heading text-white mb-3">{testimonial.name}</h3>
                <p className="text-orange-500 font-bold cloka-heading text-sm mb-6">{testimonial.role}</p>
                <p className="text-gray-300 italic leading-relaxed font-light">"{testimonial.text}"</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <div className="cloka-card p-12 shadow-2xl max-w-4xl mx-auto bg-gray-900/80 backdrop-blur-sm border border-gray-800">
            <h3 className="text-3xl font-black cloka-heading text-white mb-8">OUR GROWING COMMUNITY 🌟</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-black text-orange-500 mb-3 cloka-heading">150+</div>
                <p className="text-gray-300 font-light">Active Runners</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-orange-500 mb-3 cloka-heading">25+</div>
                <p className="text-gray-300 font-light">Weekly Meetups</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-orange-500 mb-3 cloka-heading">500+</div>
                <p className="text-gray-300 font-light">Connections Made</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-orange-500 mb-3 cloka-heading">100%</div>
                <p className="text-gray-300 font-light">Good Vibes</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-20 text-center">
          <div className="inline-block bg-gradient-orange rounded-2xl p-12 text-black shadow-2xl">
            <h3 className="text-2xl font-black cloka-heading mb-4">READY TO BE PART OF SOMETHING AMAZING? 🌅</h3>
            <p className="text-lg font-bold">Your Saturday mornings will never be the same!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
