import React, { useContext } from 'react'
import {X} from "@phosphor-icons/react"
import { Button } from './Button'
import { ModalToggleContext } from '../context/ModalToggleContext'

function Modal() {
  const {isModalActive, toggleModal} = useContext(ModalToggleContext)

  return (
    <>
    {isModalActive &&
      <div className="modal">
        {/* <div className="modal__content--wrapper">
          <div className="modal__close--top">
            <h2>Data Not Found</h2>
            <div className="close--icon" onClick={toggleModal}>
              <X/>
            </div>
          </div>
          <div className="modal__content">
          </div>
          <div className="modal__close--bottom">
            <Button onClick={toggleModal} >Close</Button>
          </div>
        </div> */}
      </div>
    }
    </>
  )
}
  
export default Modal