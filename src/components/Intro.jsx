import Socials from './Socials'
import { Button } from './Button'


function Intro() {

    return (
      <>
        <section className="intro">
          
          <div className="intro__title">
            <h1>Saaeen Grant</h1>
            <h1>I'm a passionate computer science student and enthusiast.</h1>
          </div>
          <p className="intro__body">
            I'm a passionate University of the West Indies computer science student, skilled in HTML, CSS, JavaScript, PHP, Python and Java. Committed to creating innovative web solutions that elevate user experiences.
          </p>

          <div className="intro__cta">
            <div className="intro__buttons">
              <Button icon={"arrow--right"}>Contact Me</Button>
              <Button style={"btn--outline"} icon={"arrow--tilt"}>View Resume</Button>
            </div>

            <div className="intro_socials">
              <Socials/>
            </div>
          </div>

        </section>
      </>
    )
  }
  
export default Intro