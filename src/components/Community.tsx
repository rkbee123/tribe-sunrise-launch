
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
    <section id="community" className="py-20 bg-gradient-to-br from-sunrise-50 via-coral-50 to-ocean-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Built by Dreamers like You 💭
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Not just runners. We're builders, creatives, explorers who believe in growing together.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="text-center">
                <div className="text-4xl mb-4">{testimonial.avatar}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{testimonial.name}</h3>
                <p className="text-coral-500 font-semibold mb-4">{testimonial.role}</p>
                <p className="text-gray-600 italic leading-relaxed">"{testimonial.text}"</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Growing Community 🌟</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-coral-500 mb-2">150+</div>
                <p className="text-gray-600">Active Runners</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-sunrise-500 mb-2">25+</div>
                <p className="text-gray-600">Weekly Meetups</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-ocean-500 mb-2">500+</div>
                <p className="text-gray-600">Connections Made</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-coral-500 mb-2">100%</div>
                <p className="text-gray-600">Good Vibes</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-coral-500 to-sunrise-500 rounded-2xl p-8 text-white shadow-xl">
            <h3 className="text-2xl font-bold mb-4">Ready to be part of something amazing? 🌅</h3>
            <p className="text-lg opacity-90">Your Saturday mornings will never be the same!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
