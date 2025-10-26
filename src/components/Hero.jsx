import React, { useEffect, useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [ref, isVisible] = useScrollAnimation(0.1)

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div 
          className="absolute top-20 left-10 w-64 h-64 bg-uwed-blue opacity-10 rounded-full blur-3xl animate-float"
          style={{ transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)` }}
        />
        <div 
          className="absolute bottom-20 right-10 w-96 h-96 bg-uwed-light opacity-10 rounded-full blur-3xl animate-float"
          style={{ transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`, animationDelay: '1s' }}
        />
        
        {/* Floating Elements */}
        <div className="absolute top-1/4 right-1/4 animate-float">
          <svg className="w-24 h-24 opacity-5" viewBox="0 0 100 100">
            <path d="M50 5 L60 40 L95 45 L65 65 L75 100 L50 75 L25 100 L35 65 L5 45 L40 40 Z" fill="currentColor" />
          </svg>
        </div>
        <div className="absolute bottom-1/4 left-1/4 animate-float" style={{ animationDelay: '2s' }}>
          <svg className="w-32 h-32 opacity-5" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="2" />
            <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="50" cy="50" r="10" fill="currentColor" />
          </svg>
        </div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-uwed-blue rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">U</span>
              </div>
              <span className="text-xl font-display font-semibold text-gray-800">UWED MUN</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-gray-600 hover:text-uwed-blue transition-colors underline-animation">About</a>
              <a href="#events" className="text-gray-600 hover:text-uwed-blue transition-colors underline-animation">Events</a>
              <a href="#committees" className="text-gray-600 hover:text-uwed-blue transition-colors underline-animation">Committees</a>
              <a href="#team" className="text-gray-600 hover:text-uwed-blue transition-colors underline-animation">Team</a>
              <a href="#contact" className="text-gray-600 hover:text-uwed-blue transition-colors underline-animation">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div ref={ref} className={`relative z-10 text-center px-6 max-w-4xl mx-auto transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <h1 className="text-5xl md:text-7xl font-display font-bold text-gray-900 mb-6">
          <span className="text-uwed-blue">UWED</span> Model United Nations
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-12 font-light">
          Where diplomacy meets dialogue
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => scrollToSection('about')}
            className="px-8 py-4 bg-uwed-blue text-white rounded-lg font-medium hover:bg-uwed-dark transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            About MUN
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="px-8 py-4 bg-white text-uwed-blue border-2 border-uwed-blue rounded-lg font-medium hover:bg-uwed-blue hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Join Us
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}

export default Hero

