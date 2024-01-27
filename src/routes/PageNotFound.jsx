import React from 'react'
import { Button } from '../components/Button'

function PageNotFound() {
 
  return (
    <>
        <div className="error">
            <div className="error__container">
                <h1 className="error__code">404</h1>
                <h1 className="error__message">Oops! Page could not be found</h1>
            </div>
            <div className="error__navigation">
                <p>Maybe find what you need here?</p>
                <div className="link--container">
                    <div className="link" ><a href="#">Home</a></div>
                    <div className="link" ><a href="#">About</a></div>
                    <div className="link" ><a href="#">Projects</a></div>
                    <div className="link" ><a href="#">Resume</a></div>
                    <div className="link" ><a href="#">Contact</a></div>
                </div>
            </div>
          
        </div>
    </>
  )
}
  
export default PageNotFound