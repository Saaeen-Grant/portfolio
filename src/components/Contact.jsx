import React from 'react'
import { Button } from './Button'

function Contact() {

    return (
      <>
        <section className="contact">
          <div className="contact__heading heading">
            <h2>Contact Me</h2>
            <p>Reach me directly at saaeengrant@saaeengrant.com or through this form</p>
          </div>
          <form>
              <input type="email" name="email" id="email" placeholder="Enter Email Here" autoComplete="on" />
              <textarea name="message" id="message"  placeholder="Enter Message Here" cols="30" rows="10"></textarea>
              <Button icon={"plane--tilt"}>Submit</Button>
          </form>
        </section>
      </>
    )
  }
  
export default Contact