import React, { useState } from "react";
import { Play, Quote, Eye } from "lucide-react";

const PastHighlights = () => {
  const highlights = [
    {
      id: 1,
      title: "The Power of Positive Thinking",
      speaker: "Elon Musk",
      quote: "I'm going to go to Mars. I will go to Mars",
      thumbnail:
        "/images/elon.jpg",
      views: "2.5M views",
      duration: "45:30",
      video: "https://www.youtube.com/embed/43TmnIaL3n4?si=qAzWG3vkDmWpUsPk",
    },
    {
      id: 2,
      title: "Overcoming Fear and Anxiety",
      speaker: "Tim Cook",
      quote:
        "Courage isn't the absence of fear - it's taking action despite it.",
      thumbnail:
        "/images/cook.png",
      views: "1.8M views",
      duration: "38:15",
      video: "https://www.youtube.com/embed/D80RTRjP1tQ?si=083aNTMSnX3wxmqE",
    },
    {
      id: 3,
      title: "Building Unstoppable Confidence",
      speaker: "Andrew Tate",
      quote:
        "When a man speaks you will listen",
      thumbnail:
        "/images/topg.png",
      views: "3.2M views",
      duration: "52:20",
      video: "https://www.youtube.com/embed/zE4qla0JnIw?si=DwwlNp2moiLYGGnm",
    },
    {
      id: 4,
      title: "The Art of Resilience",
      speaker: "Lei Jun",
      quote: "伟大的公司赢得人心",
      thumbnail:
        "/images/leijun.png",
      views: "1.5M views",
      duration: "41:45",
      video: "https://www.youtube.com/embed/V_wOXkIxxcc?si=ozv04ry99xvRr0zg",
    },
  ];

  // Modal state
  const [openVideo, setOpenVideo] = useState<null | string>(null);

  // Reusable QuoteBox component
  const QuoteBox = ({ quote }: { quote: string }) => (
    <div className="bg-white/5 rounded-lg p-3 border border-white/10 mb-4">
      <Quote className="w-4 h-8 text-orange-400 mb-2" />
      <p className="text-gray-300 text-sm italic">{quote}</p>
    </div>
  );

  return (
    <section id="highlights" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Past{" "}
            <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
              Highlights
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Relive the most powerful moments from our previous talks that have
            inspired millions.
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
                <button
                  className="w-full bg-gradient-to-r from-orange-500 to-pink-500 text-white py-2 rounded-full font-bold hover:shadow-lg hover:scale-105 transition-all duration-200 mt-auto"
                  onClick={() => setOpenVideo(highlight.video)}
                >
                  Watch Replay
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Video Modal (outside map, only one at a time) */}
        {openVideo && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
            <div className="relative bg-black rounded-2xl shadow-2xl w-full max-w-2xl mx-4">
              <button
                className="absolute top-2 right-3 text-white text-3xl font-bold hover:text-orange-400 z-10"
                onClick={() => setOpenVideo(null)}
                aria-label="Close"
              >
                &times;
              </button>
              <div className="aspect-w-16 aspect-h-9 w-full">
                <iframe
                  width="100%"
                  height="400"
                  src={openVideo}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  className="rounded-b-2xl"
                ></iframe>
              </div>
            </div>
          </div>
        )}

        <div className="text-center mt-12">
          <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-3 rounded-full font-bold hover:bg-white/20 hover:scale-105 transition-all duration-300">
            View All Highlights
          </button>
        </div>
      </div>
    </section>
  );
};

export default PastHighlights;
