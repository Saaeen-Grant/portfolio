import React from 'react'

import {GithubLogo, LinkedinLogo, EnvelopeSimple} from "@phosphor-icons/react"

const socials = [
  {
    "id": 1,
    "name":"github",  
    "path":"https://github.com/Saaeen-Grant",
    "target": "_blank",
    "icon":<GithubLogo/>
  }, 
  {
    "id": 2,
    "name":"linkedin",  
    "path":"#",
    "target": "_self",
    "icon":<LinkedinLogo/>
  }, 
  {
    "id": 3,
    "name":"email",  
    "path":"mailto:official.saaeengrant@gmail.com",
    "target": "_self",
    "icon":<EnvelopeSimple/>
  }
]

function Socials() {

    return (
      <>
        <div className="socials">
            {socials.map(social => (
              <a key={social.id} href={social.path} target={social.target} className={`socials__link ${social.name}`}>
                {social.icon}
              </a>
            ))}
        </div>
      </>
    )
  }
  
export default Socials