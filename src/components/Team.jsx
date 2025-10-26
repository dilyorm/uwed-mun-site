import React from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const Team = () => {
  const [ref, isVisible] = useScrollAnimation(0.1)
  const teamMembers = [
    {
      name: 'Sarah Alimova',
      role: 'Secretary General',
      description: 'Leading UWED MUN with passion for international diplomacy',
      image: '👩‍💼',
    },
    {
      name: 'Rashid Karimov',
      role: 'Under-Secretary-General',
      description: 'Overseeing conference operations and logistics',
      image: '👨‍💼',
    },
    {
      name: 'Malika Yusupova',
      role: 'Director of Committees',
      description: 'Managing committee sessions and delegate coordination',
      image: '👩‍⚖️',
    },
    {
      name: 'Jamshid Hassanov',
      role: 'Chief of Communications',
      description: 'Handling public relations and media outreach',
      image: '👨‍💻',
    },
  ]

  return (
    <section id="team" className="py-24 bg-gradient-to-b from-white to-blue-50/30">
      <div className="container mx-auto px-6" ref={ref}>
        <div className={`text-center mb-16 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            Meet Our <span className="text-uwed-blue">Team</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-uwed-blue to-uwed-dark mx-auto"></div>
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
            Our Secretariat is dedicated to creating exceptional Model UN experiences for delegates worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100"
            >
              {/* Profile Image */}
              <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-uwed-blue to-uwed-dark">
                <div className="absolute inset-0 flex items-center justify-center text-6xl">
                  {member.image}
                </div>
              </div>

              {/* Info Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-uwed-blue to-uwed-dark opacity-0 group-hover:opacity-95 transition-opacity duration-300 p-6 flex flex-col justify-center items-center text-center">
                <p className="text-white leading-relaxed">{member.description}</p>
              </div>

              {/* Card Content */}
              <div className="p-6 relative z-10">
                <h3 className="text-xl font-display font-bold text-gray-900 mb-1 group-hover:text-uwed-blue transition-colors">
                  {member.name}
                </h3>
                <p className="text-uwed-blue font-medium">{member.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Join Us CTA */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <h3 className="text-2xl font-display font-bold text-gray-900 mb-3">
              Join Our Team
            </h3>
            <p className="text-gray-600 mb-6 max-w-md">
              Passionate about international relations and diplomacy? Consider applying for our Secretariat.
            </p>
            <a
              href="#contact"
              className="inline-block px-8 py-3 bg-uwed-blue text-white rounded-lg font-medium hover:bg-uwed-dark transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Apply Now
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Team

