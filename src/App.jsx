import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Events from './components/Events'
import Committees from './components/Committees'
import Team from './components/Team'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <About />
      <Events />
      <Committees />
      <Team />
      <Contact />
      <Footer />
    </div>
  )
}

export default App

