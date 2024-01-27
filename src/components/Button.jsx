import React from 'react'
import { Link } from 'react-scroll'
import {ArrowCircleRight, ArrowCircleUpRight, PaperPlaneTilt} from "@phosphor-icons/react"

const STYLES = ['btn--default','btn--outline', 'btn--text']

const ICONS = {
    'arrow--right': <ArrowCircleRight/>,
    'arrow--tilt': <ArrowCircleUpRight/>, 
    'plane--tilt': <PaperPlaneTilt/>
}

export const Button = ({children, type, onClick, style, icon, to, className}) => {

    const checkStyle = STYLES.includes(style) ? style : STYLES[0]
    return (
        <Link smooth={true} duration={500} to={to}>
            <button 
            className={`btn ${checkStyle} ${className}`}
            onClick={onClick}
            type={type}
            >
                {children}
                <div className={icon? "btn-icon" : "btn-icon--none"}>
                    {ICONS[icon]}
                </div>
            </button>
        </Link>
    )
}
