import React from 'react'
import { useContext ,useState } from "react"
import { DarkModeContext } from '../context/DarkModeContext'
import {List, X, Sun, Moon} from "@phosphor-icons/react"



function Navigation() {
  
  const [isActive, setIsActive] = useState(false)
  const {mode, isDarkMode} = useContext(DarkModeContext)

  const toggleMenu = () => setIsActive((prev) => !prev)
  const toggleMode = () => isDarkMode((prev) => !prev)
  
  return (
    <nav className="navigation">

      <div className="navigation__toggle" onClick={toggleMenu}>
          {isActive ? <X/> : <List/>}
      </div>

      <ul className="navigation__menu--desktop">
        <li><a className="navigation__link" href="#about">About</a></li>
        <li><a className="navigation__link" href="#portfolio">Projects</a></li>
        <li><a className="navigation__link" href="#">Resume</a></li>
        <li><a className="navigation__link" href="#contact">Contact</a></li>
      </ul>

      <div className="navigation__mode" onClick={toggleMode}>
        {
          mode 
          ? <Moon/>
          : <Sun/>
        }
      </div>

      { 
        isActive 
        ? <ul className="navigation__menu--mobile">
            <li><a className="navigation__link" href="#about" onClick={toggleMenu} >About</a></li>
            <li><a className="navigation__link" href="#portfolio" onClick={toggleMenu} >Projects</a></li>
            <li><a className="navigation__link" href="#" onClick={toggleMenu} >Resume</a></li>
            <li><a className="navigation__link" href="#contact" onClick={toggleMenu} >Contact</a></li>
          </ul> 
        : ""
      }
      
    </nav>
  )
}
  
export default Navigation