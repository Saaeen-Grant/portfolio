import React from 'react'
import { Button } from './Button'

function Contact() {

    return (
      <>
        <section className="contact">
          <div className="contact__heading heading">
            <h2>Contact Me</h2>
            <p>Reach me directly at official.saaeengrant@gmail.com or through this form</p>
          </div>
          <form>

              <div className="contact__input">
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" id="email" autoComplete="on" />
              </div>

              <div className="contact__input">
                <label htmlFor="email">Message:</label>
                <textarea name="message" id="message" cols="30" rows="10"></textarea>
              </div>
             
              <Button icon={"plane--tilt"}>Submit</Button>
          </form>
        </section>
      </>
    )
  }
  
export default Contact