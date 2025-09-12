import React, { useState } from 'react';
import { Mail, Bell, Sparkles } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => {
        setIsSubscribed(false);
        setEmail('');
      }, 3000);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-orange-500 via-pink-500 to-purple-600 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-20 h-20 bg-white rounded-full blur-xl"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-yellow-400 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-white rounded-full blur-xl"></div>
        <div className="absolute bottom-40 right-1/3 w-16 h-16 bg-yellow-400 rounded-full blur-xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-white/10 backdrop-blur-md p-4 rounded-full border border-white/20">
              <Bell className="w-12 h-12 text-white" />
            </div>
          </div>

          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
            Be the First to Know
            <span className="block text-yellow-400">About New Talks</span>
          </h2>

          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Get exclusive access to upcoming events, speaker announcements, and transformational content delivered straight to your inbox.
          </p>

          {!isSubscribed ? (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="bg-white/10 backdrop-blur-md rounded-full p-2 border border-white/20 flex items-center">
                <Mail className="w-5 h-5 text-white/70 ml-4 mr-2" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 bg-transparent text-white placeholder-white/70 border-none outline-none px-2 py-2"
                  required
                />
                <button
                  type="submit"
                  className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-2 rounded-full font-bold hover:shadow-lg hover:scale-105 transition-all duration-200 flex items-center space-x-2"
                >
                  <span>Subscribe</span>
                  <Sparkles className="w-4 h-4" />
                </button>
              </div>
            </form>
          ) : (
            <div className="max-w-md mx-auto bg-green-500/20 backdrop-blur-md border border-green-400/30 rounded-full py-4 px-6">
              <div className="flex items-center justify-center space-x-2 text-green-400">
                <Sparkles className="w-5 h-5" />
                <span className="font-bold">Successfully subscribed! Welcome to the community!</span>
              </div>
            </div>
          )}

          <p className="text-white/70 text-sm mt-4">
            Join 50,000+ subscribers • No spam, unsubscribe anytime
          </p>

          {/* Benefits */}
          <div className="grid sm:grid-cols-3 gap-4 mt-12 max-w-3xl mx-auto">
            <div className="bg-white/5 backdrop-blur-md rounded-lg p-4 border border-white/10">
              <div className="text-yellow-400 text-2xl mb-2">🎯</div>
              <h4 className="text-white font-bold mb-1">Early Access</h4>
              <p className="text-white/70 text-sm">Be first to book limited seats</p>
            </div>
            <div className="bg-white/5 backdrop-blur-md rounded-lg p-4 border border-white/10">
              <div className="text-yellow-400 text-2xl mb-2">💡</div>
              <h4 className="text-white font-bold mb-1">Exclusive Content</h4>
              <p className="text-white/70 text-sm">Behind-the-scenes insights</p>
            </div>
            <div className="bg-white/5 backdrop-blur-md rounded-lg p-4 border border-white/10">
              <div className="text-yellow-400 text-2xl mb-2">🎁</div>
              <h4 className="text-white font-bold mb-1">Special Offers</h4>
              <p className="text-white/70 text-sm">Member-only discounts</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;