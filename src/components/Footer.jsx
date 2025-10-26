import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-uwed-blue rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">U</span>
              </div>
              <span className="text-xl font-display font-semibold">UWED MUN</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Empowering future diplomats through Model United Nations since 2014.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
              <li><a href="#events" className="text-gray-400 hover:text-white transition-colors">Events</a></li>
              <li><a href="#committees" className="text-gray-400 hover:text-white transition-colors">Committees</a></li>
              <li><a href="#team" className="text-gray-400 hover:text-white transition-colors">Team</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-display font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Conference Guide</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Rules of Procedure</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Position Paper Tips</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">FAQs</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">📧 contact@uwedmun.org</li>
              <li className="text-gray-400">📍 Tashkent, Uzbekistan</li>
              <li className="text-gray-400">🏛️ University of World Economy and Diplomacy</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2025 UWED Model United Nations. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

