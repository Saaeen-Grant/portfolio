import React from 'react'

import {GithubLogo, LinkedinLogo, EnvelopeSimple} from "@phosphor-icons/react"

const socials = [
  {
    "id": 1,
    "icon":<GithubLogo/>
  }, 
  {
    "id": 2,
    "icon":<LinkedinLogo/>
  }, 
  {
    "id": 3,
    "icon":<EnvelopeSimple/>
  }
]

function Socials() {

    return (
      <>
        <div className="socials">
            {socials.map(social => (
              <button key={social.id} className="socials__link">
                {social.icon}
              </button>
            ))}
        </div>
      </>
    )
  }
  
export default Socials