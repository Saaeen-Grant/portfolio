import React from 'react'

import {ArrowCircleRight, ArrowCircleUpRight, PaperPlaneTilt} from "@phosphor-icons/react"

const STYLES = ['btn--default','btn--outline', 'btn--text']

const ICONS = {
    'arrow--right': <ArrowCircleRight/>,
    'arrow--tilt': <ArrowCircleUpRight/>, 
    'plane--tilt': <PaperPlaneTilt/>
}

export const Button = ({children, type, onClick, style, icon}) => {

    const checkStyle = STYLES.includes(style) ? style : STYLES[0]
    return (
        <a href="#">
            <button 
            className={`btn ${checkStyle}`}
            onClick={onClick}
            type={type}
            >
                {children}
                <div className={icon? "btn-icon" : "btn-icon--none"}>
                    {ICONS[icon]}
                </div>
            </button>
        </a>
    )
}
