import React from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const Contact = () => {
  const [ref, isVisible] = useScrollAnimation(0.1)

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-uwed-blue via-uwed-dark to-uwed-blue text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border-4 border-white rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 border-4 border-white rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 border-4 border-white rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto" ref={ref}>
          <div className={`text-center mb-12 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Join UWED MUN 2025
            </h2>
            <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
            <p className="text-xl text-white/90 leading-relaxed">
              Ready to embark on a journey of diplomatic excellence? Apply now to be part of our upcoming conference.
            </p>
          </div>

          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-white/20">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-white/90 mb-2 font-medium">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:border-white/60 transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-white/90 mb-2 font-medium">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:border-white/60 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="university" className="block text-white/90 mb-2 font-medium">
                    University
                  </label>
                  <input
                    type="text"
                    id="university"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:border-white/60 transition-colors"
                    placeholder="University of World Economy and Diplomacy"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-white/90 mb-2 font-medium">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:border-white/60 transition-colors"
                    placeholder="+998 99 123 4567"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-white/90 mb-2 font-medium">
                  Message (Optional)
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:border-white/60 transition-colors resize-none"
                  placeholder="Tell us about your interest in Model UN..."
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-white text-uwed-blue rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
                onClick={(e) => {
                  e.preventDefault()
                  alert('Thank you for your interest! In a production environment, this form would submit your application.')
                }}
              >
                Submit Application
              </button>
            </form>
          </div>

          {/* Social Links */}
          <div className="mt-12 text-center">
            <p className="text-white/80 mb-6">Connect with us on social media</p>
            <div className="flex justify-center gap-6">
              {[
                { icon: '📧', label: 'Email', url: 'mailto:contact@uwedmun.org' },
                { icon: '📱', label: 'Instagram', url: 'https://instagram.com/uwedmun' },
                { icon: '💼', label: 'LinkedIn', url: 'https://linkedin.com/company/uwedmun' },
                { icon: '🐦', label: 'Twitter', url: 'https://twitter.com/uwedmun' },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 rounded-full bg-white/10 hover:bg-white/20 border border-white/30 flex items-center justify-center text-2xl hover:scale-110 transition-all duration-300"
                  title={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

