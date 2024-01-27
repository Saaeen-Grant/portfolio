import React from 'react'

import {GithubLogo, LinkedinLogo, EnvelopeSimple} from "@phosphor-icons/react"

const socials = [<GithubLogo/>, <LinkedinLogo/>, <EnvelopeSimple/>]

function Socials() {

    return (
      <>
        <div className="socials">
            {socials.map(social => (
              <button className="socials__link">
                {social}
              </button>
            ))}
        </div>
      </>
    )
  }
  
export default Socials