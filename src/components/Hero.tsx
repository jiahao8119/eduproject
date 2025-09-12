import { Play, Calendar } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500 via-pink-500 to-purple-600"></div>
      
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=1200)'
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-tight">
            Ignite Your
            <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Potential
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Join our motivational talks and live talkshows to transform your mindset and unlock unlimited possibilities.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center space-x-2">
              <Calendar size={24} />
              <span>Join Next Event</span>
            </button>
            
            <button className="group bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 hover:scale-105 transition-all duration-300 flex items-center space-x-2">
              <Play size={24} />
              <span>Watch Past Talks</span>
            </button>
          </div>
        </div>

        {/* Floating Stats (now below buttons) */}
        <div className="mt-10 hidden lg:flex justify-center space-x-8">
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 text-center border border-white/20">
            <div className="text-2xl font-bold text-yellow-400">1000+</div>
            <div className="text-white/80 text-sm">Lives Changed</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 text-center border border-white/20">
            <div className="text-2xl font-bold text-yellow-400">50+</div>
            <div className="text-white/80 text-sm">Expert Speakers</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 text-center border border-white/20">
            <div className="text-2xl font-bold text-yellow-400">200+</div>
            <div className="text-white/80 text-sm">Inspiring Events</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;