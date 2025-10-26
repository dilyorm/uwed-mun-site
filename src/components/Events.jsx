import React from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const Events = () => {
  const [ref, isVisible] = useScrollAnimation(0.1)
  const upcomingEvents = [
    {
      title: 'UWED MUN 2025',
      date: 'March 15-18, 2025',
      location: 'Tashkent, Uzbekistan',
      description: 'Our flagship conference featuring 6 committees, 300+ delegates, and distinguished guest speakers.',
    },
    {
      title: 'Diplomatic Training Workshop',
      date: 'February 10, 2025',
      location: 'UWED Campus',
      description: 'Learn the fundamentals of Model UN debate, resolution writing, and diplomatic protocol.',
    },
    {
      title: 'Youth Diplomacy Summit',
      date: 'April 20-22, 2025',
      location: 'Tashkent, Uzbekistan',
      description: 'A multi-stakeholder dialogue on climate action, peacebuilding, and sustainable development.',
    },
  ]

  const pastEvents = [
    { title: 'UWED MUN 2024', date: 'March 2024', location: 'Tashkent', participants: '280' },
    { title: 'Central Asia MUN 2023', date: 'November 2023', location: 'Tashkent', participants: '350' },
    { title: 'UWED MUN 2023', date: 'April 2023', location: 'Tashkent', participants: '320' },
  ]

  return (
    <section id="events" className="py-24 bg-gradient-to-b from-white to-blue-50/30">
      <div className="container mx-auto px-6" ref={ref}>
        <div className={`text-center mb-16 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            Upcoming <span className="text-uwed-blue">Events</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-uwed-blue to-uwed-dark mx-auto"></div>
        </div>

        {/* Upcoming Events */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {upcomingEvents.map((event, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100"
            >
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-2 h-2 bg-uwed-blue rounded-full animate-pulse"></div>
                  <span className="text-sm text-gray-500 font-medium">Upcoming</span>
                </div>
                <h3 className="text-2xl font-display font-bold text-gray-900 mb-2">{event.title}</h3>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {event.date}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {event.location}
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">{event.description}</p>
              </div>
              <div className="px-6 pb-6">
                <button className="w-full py-3 bg-gradient-to-r from-uwed-blue to-uwed-dark text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Past Events */}
        <div>
          <h3 className="text-3xl font-display font-bold text-gray-900 mb-8 text-center">Past Conferences</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pastEvents.map((event, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                <h4 className="text-xl font-display font-semibold text-gray-900 mb-2">{event.title}</h4>
                <div className="text-gray-600 mb-2">{event.date}</div>
                <div className="text-gray-600 mb-3">{event.location}</div>
                <div className="flex items-center text-sm text-uwed-blue">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  {event.participants} participants
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Events

