import { useState } from "react";
import { Play, Calendar } from "lucide-react";

const Hero = () => {

  const [showVideoModal, setShowVideoModal] = useState(false);
  const [showCalendarModal, setShowCalendarModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [appointmentConfirmed, setAppointmentConfirmed] = useState(false);

  const handleOpenVideoModal = () => setShowVideoModal(true);
  const handleCloseVideoModal = () => setShowVideoModal(false);

  const handleOpenCalendarModal = () => {
    setShowCalendarModal(true);
    setAppointmentConfirmed(false);
    setSelectedDate("");
  };
  const handleCloseCalendarModal = () => setShowCalendarModal(false);
  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => setSelectedDate(e.target.value);
  const handleConfirmAppointment = () => setAppointmentConfirmed(true);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500 via-pink-500 to-purple-600"></div>

      {/* Background Image Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=1200)",
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
            Join our motivational talks and live talkshows to transform your
            mindset and unlock unlimited possibilities.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">

            <button
              className="group bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center space-x-2"
              onClick={handleOpenCalendarModal}
            >
              <Calendar size={24} />
              <span>Join Next Event</span>
            </button>

            <button
              className="group bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 hover:scale-105 transition-all duration-300 flex items-center space-x-2"
              onClick={handleOpenVideoModal}
            >
              <Play size={24} />
              <span>Watch Past Talks</span>
            </button>

            {/* Modal for YouTube video */}
            {showVideoModal && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
                <div className="relative bg-black rounded-2xl shadow-2xl w-full max-w-2xl mx-4">
                  <button
                    className="absolute top-2 right-3 text-white text-3xl font-bold hover:text-yellow-400 z-10"
                    onClick={handleCloseVideoModal}
                    aria-label="Close"
                  >
                    &times;
                  </button>
                  <div className="aspect-w-16 aspect-h-9 w-full">
                    <iframe
                      width="100%"
                      height="400"
                      src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
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

            {/* Modal for Calendar/Appointment */}
            {showCalendarModal && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
                <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md mx-4 p-8 flex flex-col items-center">
                  <button
                    className="absolute top-2 right-3 text-gray-700 text-3xl font-bold hover:text-orange-500 z-10"
                    onClick={handleCloseCalendarModal}
                    aria-label="Close"
                  >
                    &times;
                  </button>
                  <h2 className="text-2xl font-bold mb-4 text-gray-900">Book Your Appointment</h2>
                  <label className="mb-2 text-gray-700 font-medium">Select a date:</label>
                  <input
                    type="date"
                    className="mb-4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                    value={selectedDate}
                    onChange={handleDateChange}
                  />
                  <button
                    className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-2 rounded-full font-bold hover:shadow-lg transition-all duration-200 mb-2"
                    onClick={handleConfirmAppointment}
                    disabled={!selectedDate}
                  >
                    Confirm Appointment
                  </button>
                  {appointmentConfirmed && (
                    <div className="mt-2 text-green-600 font-semibold">Appointment booked for {selectedDate}!</div>
                  )}
                </div>
              </div>
            )}
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
