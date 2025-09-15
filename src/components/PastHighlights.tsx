import React from 'react';
import { Play, Quote, Eye } from 'lucide-react';

const PastHighlights = () => {
  const highlights = [
    {
      id: 1,
      title: "The Power of Positive Thinking",
      speaker: "Dr. Amanda Success",
      quote: "Your thoughts create your reality - choose them wisely.",
      thumbnail: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=600",
      views: "2.5M views",
      duration: "45:30"
    },
    {
      id: 2,
      title: "Overcoming Fear and Anxiety",
      speaker: "Mike Courage",
      quote: "Courage isn't the absence of fear - it's taking action despite it.",
      thumbnail: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=600",
      views: "1.8M views",
      duration: "38:15"
    },
    {
      id: 3,
      title: "Building Unstoppable Confidence",
      speaker: "Sarah Confident",
      quote: "Confidence is not 'they will like me'. Confidence is 'I'll be fine if they don't'.",
      thumbnail: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=600",
      views: "3.2M views",
      duration: "52:20"
    },
    {
      id: 4,
      title: "The Art of Resilience",
      speaker: "James Strong",
      quote: "Fall seven times, rise eight - that's the warrior's way.",
      thumbnail: "https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=600",
      views: "1.5M views",
      duration: "41:45"
    }
  ];

  // Reusable QuoteBox component
  const QuoteBox = ({ quote }: { quote: string }) => (
    <div className="bg-white/5 rounded-lg p-3 border border-white/10 mb-4">
      <Quote className="w-4 h-8 text-orange-400 mb-2" />
      <p className="text-gray-300 text-sm italic">
        {quote}
      </p>
    </div>
  );

  return (
    <section id="highlights" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Past <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">Highlights</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Relive the most powerful moments from our previous talks that have inspired millions.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((highlight) => (
            <div
              key={highlight.id}
              className="group bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 hover:border-orange-500/50 hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-300 flex flex-col relative"
            >
              {/* Video Thumbnail */}
              <div className="relative">
                <img
                  src={highlight.thumbnail}
                  alt={highlight.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300"></div>
                
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/20 backdrop-blur-md p-4 rounded-full border border-white/30 group-hover:bg-orange-500 group-hover:scale-110 transition-all duration-300">
                    <Play className="w-8 h-8 text-white fill-current" />
                  </div>
                </div>

                {/* Duration */}
                <div className="absolute bottom-3 right-3 bg-black/70 text-white text-sm px-2 py-1 rounded">
                  {highlight.duration}
                </div>

                {/* Views */}
                <div className="absolute top-3 left-3 bg-black/70 text-white text-xs px-2 py-1 rounded flex items-center space-x-1">
                  <Eye className="w-3 h-3" />
                  <span>{highlight.views}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex-1 flex flex-col justify-start">
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-orange-400 transition-colors duration-200">
                    {highlight.title}
                  </h3>
                  <p className="text-orange-400 font-medium mb-3 text-sm">
                    {highlight.speaker}
                  </p>
                </div>
                {/* Quote */}
                <QuoteBox quote={highlight.quote} />
                <button className="w-full bg-gradient-to-r from-orange-500 to-pink-500 text-white py-2 rounded-full font-bold hover:shadow-lg hover:scale-105 transition-all duration-200 mt-auto">
                  Watch Replay
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="text-center mt-12">
          <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-3 rounded-full font-bold hover:bg-white/20 hover:scale-105 transition-all duration-300">
            View All Highlights
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default PastHighlights;