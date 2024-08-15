import React, { useEffect } from 'react'
import AOS from "aos";
import 'aos/dist/aos.css';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Analytice from './components/Analytice'
import Numhr from './components/Numhr'
import Footer from './components/Footer'
import Contact from './components/Contact'


function App() {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 700,
      easing: "ease-in",
      delay: 200,
    });
  });
  return (
    <div className='bg-gray-50'>
      <Navbar />
      <Hero />
      <Analytice/>
      <Numhr />
      <Contact />
      <Footer />

    </div>
  )
}

export default App