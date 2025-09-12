import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Jennifer Martinez",
      role: "Entrepreneur",
      avatar: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=400",
      text: "This talk changed my life! I went from doubting myself to launching my dream business. The mindset shift was incredible.",
      rating: 5
    },
    {
      id: 2,
      name: "Alex Thompson",
      role: "Marketing Director",
      avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
      text: "I feel unstoppable now! The strategies shared here helped me overcome my biggest fears and achieve goals I never thought possible.",
      rating: 5
    },
    {
      id: 3,
      name: "Maria Rodriguez",
      role: "Student & Activist",
      avatar: "https://images.pexels.com/photos/3018993/pexels-photo-3018993.jpeg?auto=compress&cs=tinysrgb&w=400",
      text: "The energy in the room was electric! I learned practical tools for resilience that I use every single day.",
      rating: 5
    },
    {
      id: 4,
      name: "Robert Kim",
      role: "Software Engineer",
      avatar: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400",
      text: "These talks gave me the confidence to pursue leadership roles. The speakers truly understand what it takes to succeed.",
      rating: 5
    },
    {
      id: 5,
      name: "Sarah Williams",
      role: "Life Coach",
      avatar: "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400",
      text: "As a coach myself, I'm impressed by the depth and authenticity of these presentations. Pure gold!",
      rating: 5
    },
    {
      id: 6,
      name: "David Chen",
      role: "Sales Manager",
      avatar: "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=400",
      text: "The transformation I experienced in just one session was remarkable. My team performance has increased by 40%!",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Success <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Stories</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Hear from thousands of individuals whose lives have been transformed by our motivational talks.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="group bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/10 hover:border-yellow-400/30 hover:-translate-y-2 hover:shadow-2xl hover:shadow-yellow-400/10 transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="mb-4">
                <Quote className="w-8 h-8 text-yellow-400 opacity-60" />
              </div>

              {/* Rating */}
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-300 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-yellow-400/30 mr-4"
                />
                <div>
                  <h4 className="text-white font-bold">
                    {testimonial.name}
                  </h4>
                  <p className="text-yellow-400 text-sm">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-orange-500 to-pink-500 rounded-2xl p-8 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Write Your Success Story?
            </h3>
            <p className="text-white/90 mb-6 max-w-xl mx-auto">
              Join thousands of others who have transformed their lives through our powerful talks.
            </p>
            <button className="bg-white text-orange-500 px-8 py-3 rounded-full font-bold hover:shadow-lg hover:scale-105 transition-all duration-200">
              Start Your Journey Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;