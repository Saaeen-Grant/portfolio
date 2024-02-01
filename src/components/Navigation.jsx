import React, { useEffect, useRef } from 'react'
import { useContext ,useState } from "react"
import { DarkModeContext } from '../context/DarkModeContext'
import {List, X, Sun, Moon} from "@phosphor-icons/react"
import { Link } from 'react-scroll'
import { Link as NavLink } from 'react-router-dom'
import MyResume from '../assets/saaeen_resume.pdf'
import { createPortal } from 'react-dom'


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
      'name': 'Contact',
      'path': 'contact',
    }
  ]
  
  const mountElement = document.getElementById('overlay')  
  const {mode, toggleMode} = useContext(DarkModeContext)
  const [isActive, setIsActive] = useState(false)
  const menuRef = useRef()
  const toggleMenu = () => {
    setIsActive((prev) => !prev)
  }

  const closeMenu = (e) => {
    if(menuRef.current==e.target) {
      setIsActive((prev) => !prev)
    }
  }



  
  return (
    <>
      {isActive&&  createPortal(<div ref={menuRef} className="navigation-overlay" onClick={closeMenu}></div>, mountElement)}
     
      <nav className="navigation container" >
      
        <div className="navigation__toggle" onClick={toggleMenu}>
            {isActive ? <X/> : <List/>}
        </div>

        <ul className="navigation__menu--desktop">
          {navigationLinks.map((link)=> (
            <li  key={link.id} ><Link className="navigation__link" smooth={true} duration={500} to={link.path}>{link.name}</Link></li>
          ))}
        </ul>

        <div className='navigation__button-container'>
          <NavLink className="navigation__resume--btn" to={MyResume} target='_blank'>
            <p>Resume</p>
          </NavLink>
          <button className="navigation__mode" onClick={toggleMode}>
            {mode ? <Moon/> : <Sun/>}
          </button>
        </div>

        { isActive &&
          <ul className="navigation__menu--mobile">
            {navigationLinks.map((link)=> (
              <li key={link.id} ><Link className="navigation__link" smooth={true} duration={500} to={link.path} onClick={toggleMenu}>{link.name}</Link></li>
            ))}
          </ul> 
        }
      </nav>
    </>
  )
}
  
export default Navigation