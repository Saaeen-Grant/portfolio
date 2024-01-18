import { Button } from './Button'

function Contact() {

    return (
      <>
        <section className="contact">
          <div className="contact__heading heading">
            <h3>Contact Me</h3>
            <p>Reach me directly at saaeengrant@saaeengrant.com or through this form</p>
          </div>
          <form>
              <input type="email" name="email" id="email" autoComplete="on" />
              <textarea name="message" id="message" cols="30" rows="10"></textarea>
              <Button icon={"plane--tilt"}>Submit</Button>
          </form>
        </section>
      </>
    )
  }
  
export default Contact