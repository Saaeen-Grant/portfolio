import React from 'react'
import { useState } from "react"
import {List, X, Sun, Moon} from "@phosphor-icons/react"



function Navigation() {
  
  const [isActive, setIsActive] = useState(false)
  const [mode, setMode] = useState(false)

  const toggleMenu = () => setIsActive((prev) => !prev)

  return (
    <nav className="navigation">

      <div className="navigation__toggle" onClick={toggleMenu}>
          {isActive ? <X/> : <List/>}
      </div>

      <ul className="navigation__menu--desktop">
        <li><a className="navigation__link" href="#">About</a></li>
        <li><a className="navigation__link" href="#">Projects</a></li>
        <li><a className="navigation__link" href="#">Resume</a></li>
        <li><a className="navigation__link" href="#">Contact</a></li>
      </ul>

      <div className={`navigation__mode ${mode ? "navigation__mode--dark" : "navigation__mode--light"}`} onClick={() => setMode((prev) => !prev)}>
        {
          mode 
          ? <Moon/>
          : <Sun/>
        }
      </div>

      { 
        isActive 
        ? <ul className="navigation__menu--mobile">
            <li><a className="navigation__link" href="#" onClick={toggleMenu} >About</a></li>
            <li><a className="navigation__link" href="#" onClick={toggleMenu} >Projects</a></li>
            <li><a className="navigation__link" href="#" onClick={toggleMenu} >Resume</a></li>
            <li><a className="navigation__link" href="#" onClick={toggleMenu} >Contact</a></li>
          </ul> 
        : ""
      }
      
    </nav>
  )
}
  
export default Navigation