import React from 'react';
import { Star, Award, BookOpen } from 'lucide-react';

const FeaturedSpeakers = () => {
  const speakers = [
    {
      id: 1,
      name: "Tony Mindset",
      role: "Motivational Speaker",
      tagline: "Unlock your unlimited potential",
      image: "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=400",
      icon: Star,
      specialty: "Peak Performance"
    },
    {
      id: 2,
      name: "Lisa Transform",
      role: "Life Coach",
      tagline: "Transform obstacles into opportunities",
      image: "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=400",
      icon: Award,
      specialty: "Personal Growth"
    },
    {
      id: 3,
      name: "Marcus Vision",
      role: "Success Mentor",
      tagline: "Vision without action is just a dream",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400",
      icon: BookOpen,
      specialty: "Leadership"
    },
    {
      id: 4,
      name: "Rachel Power",
      role: "Empowerment Speaker",
      tagline: "Embrace your inner strength",
      image: "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400",
      icon: Star,
      specialty: "Women's Empowerment"
    },
    {
      id: 5,
      name: "David Resilience",
      role: "Wellness Expert",
      tagline: "Bounce back stronger every time",
      image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400",
      icon: Award,
      specialty: "Mental Health"
    },
    {
      id: 6,
      name: "Sophie Breakthrough",
      role: "Innovation Speaker",
      tagline: "Break barriers, create breakthroughs",
      image: "https://images.pexels.com/photos/3018993/pexels-photo-3018993.jpeg?auto=compress&cs=tinysrgb&w=400",
      icon: BookOpen,
      specialty: "Innovation"
    }
  ];

  return (
    <section id="speakers" className="py-20 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Featured Speakers
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Learn from world-class speakers who have transformed millions of lives worldwide.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {speakers.map((speaker) => {
            const IconComponent = speaker.icon;
            return (
              <div
                key={speaker.id}
                className="group bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 hover:border-yellow-400/50 hover:-translate-y-3 hover:shadow-2xl hover:shadow-yellow-400/20 transition-all duration-300"
              >
                <div className="text-center">
                  <div className="relative inline-block mb-4">
                    <img
                      src={speaker.image}
                      alt={speaker.name}
                      className="w-24 h-24 rounded-full object-cover mx-auto ring-4 ring-white/30 group-hover:ring-yellow-400/50 transition-all duration-300"
                    />
                    <div className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-400 to-orange-500 p-2 rounded-full">
                      <IconComponent className="w-4 h-4 text-black" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-1">
                    {speaker.name}
                  </h3>
                  
                  <p className="text-yellow-400 font-semibold mb-2">
                    {speaker.role}
                  </p>

                  <p className="text-white/80 mb-4 italic">
                    "{speaker.tagline}"
                  </p>

                  <div className="bg-white/10 backdrop-blur-sm rounded-full py-1 px-3 inline-block">
                    <span className="text-white/90 text-sm font-medium">
                      {speaker.specialty}
                    </span>
                  </div>
                </div>

                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-4">
                  <button className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black py-2 rounded-full font-bold hover:shadow-lg transition-all duration-200">
                    View Profile
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSpeakers;