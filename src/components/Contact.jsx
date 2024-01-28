import React from 'react'
import { Button } from './Button'

function Contact() {
  return (
    <>
      <section className="contact" id='contact'>
        <div className="contact__heading heading">
          <h2>Contact Me</h2>
          <p>Reach me directly at <a href="mailto:official.saaeengrant@gmail.com">official.saaeengrant@gmail.com</a> or through this form</p>
        </div>
        <form action='https://getform.io/f/fafc0248-02b0-469e-816a-a3f0134538a2' method='POST'>
            <div className="contact__input">
              <label htmlFor="email">Email:</label>
              <input type="email" name="email" id="email" autoComplete="on" required/>
            </div>

            <div className="contact__input">
              <label htmlFor="email">Message:</label>
              <textarea minLength="6" name="message" id="message" cols="30" rows="10" required></textarea>
            </div>
            
            <Button icon={"plane--tilt"}>Submit</Button>
        </form>
      </section>
    </>
  )
}
  
export default Contact