import React from 'react'
import { Button } from '../components/Button'
import { Link } from 'react-router-dom'

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
                <Link to="/"><Button icon={"arrow--left"} className="back-btn">Back To Home</Button></Link>
            </div>
          
        </div>
    </>
  )
}
  
export default PageNotFound