import react from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos'; // Import AOS library
import Projects from './Components/Projects'
import Experience from './Components/Experience'
import Contact from './Components/Contact'
import React, { useEffect } from 'react';


function App() {
 

    useEffect(() => {
      AOS.init();
    }, []);
  
  return (
    <>
    <Navbar/>
    <Hero/>
    <Projects/>
    <Experience/>
    <Contact/>
      
    </>
  )
}

export default App
