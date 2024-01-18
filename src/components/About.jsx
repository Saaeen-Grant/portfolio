import React from 'react'
import Headshot from '../assets/headshot.png'
import Circle from '../assets/text-circle.svg'

function About() {

    return (
      <>
        <section className="about">
          <div className="about__col-1">
            <div className="about__image">
              <img src={Circle} alt="Saaeen Grant" />
              <img src={Headshot} alt="Saaeen Grant" />
            </div>
          </div>
          <div className="about__col-2">
            <div className="about__heading heading">
              <h2>About Me</h2>
              <p>A passionate computer science student</p>
            </div>
            <div className="about__body">
              <p>I am a second year University of the West Indies student pursuing a BSc. in Computer Science, My passion lies in web development, software engineering, and data analysis.I am driven by my appetite for learning, continuously seeking to grow and excel in these fields. My enthusiasm for technology fuels my determination to make a meaningful impact in the digital world. </p>
            </div>
          </div>
        </section>
      </>
    )
  }
  
export default About