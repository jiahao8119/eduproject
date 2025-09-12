import React from 'react';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';

const UpcomingEvents = () => {
  const events = [
    {
      id: 1,
      title: "Breaking Mental Barriers",
      speaker: {
        name: "Sarah Johnson",
        image: "/public/ryanl.jpeg"
      },
      date: "March 15, 2025",
      time: "7:00 PM - 9:00 PM",
      location: "Grand Auditorium",
      description: "Discover the power within you to overcome limiting beliefs and achieve extraordinary success.",
      attendees: 250,
      spotsLeft: 15
    },
    {
      id: 2,
      title: "The Success Mindset",
      speaker: {
        name: "Michael Chen",
        image: "/public/ryanl.jpeg"
      },
      date: "March 22, 2025",
      time: "6:30 PM - 8:30 PM",
      location: "Innovation Center",
      description: "Transform your thinking patterns and develop the mindset of highly successful individuals.",
      attendees: 180,
      spotsLeft: 32
    },
    {
      id: 3,
      title: "Resilience & Recovery",
      speaker: {
        name: "Dr. Emily Rodriguez",
        image: "/public/ryanl.jpeg"
      },
      date: "March 29, 2025",
      time: "7:30 PM - 9:00 PM",
      location: "Wellness Plaza",
      description: "Learn how to bounce back stronger from life's challenges and turn setbacks into comebacks.",
      attendees: 200,
      spotsLeft: 8
    }
  ];

  return (
    <section id="events" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Upcoming <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">Events</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't miss these life-changing opportunities to connect, learn, and grow with like-minded individuals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div
              key={event.id}
              className="group bg-white/70 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              {/* Speaker Image */}
              <div className="relative mb-6">
                <img
                  src={event.speaker.image}
                  alt={event.speaker.name}
                  className="w-20 h-20 rounded-full object-cover mx-auto ring-4 ring-gradient-to-r from-orange-500 to-pink-500"
                />
                <div className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-2 py-1 rounded-full">
                  {event.spotsLeft} spots left
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">
                {event.title}
              </h3>
              
              <p className="text-center text-gray-600 mb-4 font-medium">
                by {event.speaker.name}
              </p>

              <p className="text-gray-600 mb-6 text-center leading-relaxed">
                {event.description}
              </p>

              {/* Event Details */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-gray-700">
                  <Calendar className="w-5 h-5 text-orange-500 mr-3" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <Clock className="w-5 h-5 text-orange-500 mr-3" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <MapPin className="w-5 h-5 text-orange-500 mr-3" />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <Users className="w-5 h-5 text-orange-500 mr-3" />
                  <span>{event.attendees} registered</span>
                </div>
              </div>

              <button className="w-full bg-gradient-to-r from-orange-500 to-pink-500 text-white py-3 rounded-full font-bold hover:shadow-lg hover:scale-105 transition-all duration-200">
                Reserve Your Seat
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;