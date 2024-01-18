import {GithubLogo, LinkedinLogo, EnvelopeSimple} from "@phosphor-icons/react"

const socials = [<GithubLogo/>, <LinkedinLogo/>, <EnvelopeSimple/>]

function Socials() {

    return (
      <>
        <div className="socials">
            {socials.map(social => (
              <div className="socials__link">
                {social}
              </div>
            ))}
        </div>
      </>
    )
  }
  
export default Socials