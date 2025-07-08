import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Works from './components/Works'
import Qualities from './components/Qualities'
import Choice from './components/Choice'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="font-poppins">

      <div className="flex flex-col h-screen">
        <Navbar />
        <Hero />
      </div>
      <Services />
      <Works />
      <Qualities />
      <Choice />
      <CTA />
      <Footer />
    </div>
  )
}