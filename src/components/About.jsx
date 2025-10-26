import React from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const About = () => {
  const [ref, isVisible] = useScrollAnimation(0.1)

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6" ref={ref}>
        <div className={`max-w-4xl mx-auto transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          {/* Title */}
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
              Empowering Future <span className="text-uwed-blue">Diplomats</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-uwed-blue to-uwed-dark mx-auto"></div>
          </div>

          {/* Mission */}
          <div className="mb-16 animate-slide-up">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              UWED Model United Nations stands as a beacon of diplomatic excellence and global engagement at the University of World Economy and Diplomacy. Since our inception, we have been dedicated to fostering critical thinking, intercultural dialogue, and leadership skills among students passionate about international relations and diplomacy.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our commitment extends beyond the classroom, creating platforms where future leaders can debate pressing global issues, understand complex international dynamics, and develop the skills necessary to address the challenges of tomorrow.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-white border border-blue-100 hover:shadow-lg transition-shadow duration-300">
              <div className="text-4xl font-bold text-uwed-blue mb-2">10+</div>
              <div className="text-gray-600">Years of Excellence</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-white border border-blue-100 hover:shadow-lg transition-shadow duration-300">
              <div className="text-4xl font-bold text-uwed-blue mb-2">500+</div>
              <div className="text-gray-600">Delegates Trained</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-white border border-blue-100 hover:shadow-lg transition-shadow duration-300">
              <div className="text-4xl font-bold text-uwed-blue mb-2">25+</div>
              <div className="text-gray-600">Conferences Hosted</div>
            </div>
          </div>

          {/* Timeline */}
          <div className="relative">
            <h3 className="text-2xl font-display font-semibold text-gray-900 mb-8 text-center">Our Journey</h3>
            
            <div className="space-y-8">
              {[
                { year: '2014', title: 'Inception', description: 'UWED MUN was established with a vision to bring Model UN excellence to Central Asia.' },
                { year: '2016', title: 'Regional Expansion', description: 'Hosted our first international conference with delegates from 15 countries.' },
                { year: '2019', title: 'Global Recognition', description: 'Received recognition from the UN for outstanding contribution to youth engagement.' },
                { year: '2023', title: 'Digital Innovation', description: 'Launched virtual and hybrid conference formats, reaching global participants.' },
              ].map((milestone, index) => (
                <div key={index} className="flex gap-6 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-uwed-blue flex items-center justify-center text-white font-bold shadow-lg">
                      {milestone.year}
                    </div>
                    <div className="w-0.5 h-full bg-gradient-to-b from-uwed-blue to-transparent"></div>
                  </div>
                  <div className="flex-1 pb-8">
                    <h4 className="text-xl font-display font-semibold text-gray-900 mb-2">{milestone.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

