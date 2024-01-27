import React from 'react'
import Navigation from '../components/Navigation'
import Intro from '../components/Intro'
import Portfolio from '../components/Portfolio'
import About from '../components/About'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

function Homepage() {

  return (
    <>
        <Navigation/>
        <div className="container">
            <Intro/>
            <Portfolio/>
            <About/>
            <Contact/>   
        </div>
        <Footer/>
    </>
  )
}
  
export default Homepage