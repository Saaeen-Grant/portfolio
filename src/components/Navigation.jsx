import React from 'react'
import { useContext ,useState } from "react"
import { DarkModeContext } from '../context/DarkModeContext'
import {List, X, Sun, Moon} from "@phosphor-icons/react"
import { Link } from 'react-scroll'
import { Link as NavLink } from 'react-router-dom'
function Navigation() {

  const navigationLinks = [
    {
      'id': 1,
      'name': 'About',
      'path': 'about',
    },
    {
      'id': 2,
      'name': 'Projects',
      'path': 'portfolio',
    },
    {
      'id': 3,
      'name': 'Resume',
      'path': '/resume',
    },
    {
      'id': 4,
      'name': 'Contact',
      'path': 'contact',
    }
  ]
  
  const {mode, toggleMode} = useContext(DarkModeContext)
  const [isActive, setIsActive] = useState(false)
  const toggleMenu = () => setIsActive((prev) => !prev)
  
  return (
    <nav className="navigation container">

      <div className="navigation__toggle" onClick={toggleMenu}>
          {isActive ? <X/> : <List/>}
      </div>

      <ul className="navigation__menu--desktop">
        {navigationLinks.map((link)=> (
          <li><Link className="navigation__link" smooth={true} duration={500} to={link.path}>{link.name}</Link></li>
        ))}
        <li><NavLink to="/resume" >Test</NavLink></li>
      </ul>

      <button className="navigation__mode" onClick={toggleMode}>
        {
          mode 
          ? <Moon/>
          : <Sun/>
        }
      </button>

      { isActive &&
        <ul className="navigation__menu--mobile">
          {navigationLinks.map((link)=> (
             <li><Link className="navigation__link" smooth={true} duration={500} to={link.path} onClick={toggleMenu}>{link.name}</Link></li>
          ))}
        </ul> 
      }
      
    </nav>
  )
}
  
export default Navigation