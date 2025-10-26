import React, { useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const Committees = () => {
  const [hoveredCommittee, setHoveredCommittee] = useState(null)
  const [ref, isVisible] = useScrollAnimation(0.1)

  const committees = [
    {
      name: 'UN Security Council',
      acronym: 'UNSC',
      color: 'from-red-600 to-red-800',
      description: 'Addressing threats to international peace and security.',
      topics: ['Middle East Stability', 'Cybersecurity', 'Nuclear Non-proliferation'],
    },
    {
      name: 'UN Human Rights Council',
      acronym: 'UNHRC',
      color: 'from-green-600 to-green-800',
      description: 'Protecting and promoting human rights worldwide.',
      topics: ['Freedom of Speech', 'Refugee Rights', 'Economic Justice'],
    },
    {
      name: 'World Health Organization',
      acronym: 'WHO',
      color: 'from-blue-600 to-blue-800',
      description: 'Leading global health initiatives and emergency response.',
      topics: ['Pandemic Preparedness', 'Mental Health', 'Global Vaccination'],
    },
    {
      name: 'UN Environment Programme',
      acronym: 'UNEP',
      color: 'from-emerald-600 to-emerald-800',
      description: 'Coordinating global environmental action.',
      topics: ['Climate Change', 'Plastic Pollution', 'Biodiversity Loss'],
    },
    {
      name: 'General Assembly Third Committee',
      acronym: 'SOCHUM',
      color: 'from-purple-600 to-purple-800',
      description: 'Deliberating on social, humanitarian, and cultural issues.',
      topics: ['Education Access', 'Gender Equality', 'Youth Development'],
    },
    {
      name: 'Economic and Social Council',
      acronym: 'ECOSOC',
      color: 'from-orange-600 to-orange-800',
      description: 'Promoting international economic and social cooperation.',
      topics: ['Sustainable Development', 'Digital Economy', 'International Trade'],
    },
  ]

  return (
    <section id="committees" className="py-24 bg-white">
      <div className="container mx-auto px-6" ref={ref}>
        <div className={`text-center mb-16 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            Our <span className="text-uwed-blue">Committees</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-uwed-blue to-uwed-dark mx-auto"></div>
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
            Engage in authentic UN-style debates across diverse committees addressing the world's most pressing challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {committees.map((committee, index) => (
            <div
              key={index}
              className="relative group cursor-pointer"
              onMouseEnter={() => setHoveredCommittee(index)}
              onMouseLeave={() => setHoveredCommittee(null)}
            >
              <div
                className={`relative h-64 rounded-2xl bg-gradient-to-br ${committee.color} p-6 text-white transition-all duration-300 transform hover:scale-105 hover:shadow-2xl overflow-hidden`}
              >
                {/* Animated Background Pattern */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-0 right-0 w-32 h-32 border-4 border-white rounded-full -mr-16 -mt-16"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 border-4 border-white rounded-full -ml-12 -mb-12"></div>
                </div>

                {/* Committee Info */}
                <div className="relative z-10 h-full flex flex-col">
                  <div className="mb-4">
                    <div className="text-sm font-medium opacity-90 mb-2">Committee</div>
                    <h3 className="text-2xl font-display font-bold">{committee.acronym}</h3>
                    <div className="text-sm mt-1 opacity-80">{committee.name}</div>
                  </div>

                  {/* Hover Overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${committee.color} transition-opacity duration-300 ${
                      hoveredCommittee === index ? 'opacity-95' : 'opacity-0'
                    } p-6`}
                  >
                    <div className="h-full flex flex-col justify-between">
                      <p className="text-white/90 leading-relaxed">{committee.description}</p>
                      <div className="space-y-2">
                        <div className="text-white/80 font-medium text-sm">Sample Topics:</div>
                        {committee.topics.map((topic, idx) => (
                          <div key={idx} className="flex items-center text-white/70 text-sm">
                            <div className="w-1.5 h-1.5 rounded-full bg-white mr-2"></div>
                            {topic}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Committees

