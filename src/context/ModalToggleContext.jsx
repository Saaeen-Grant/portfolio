import React, {createContext, useState} from "react";

export const ModalToggleContext = createContext();

export const ModalToggleContextProvider = ({children}) => {
  const [isModalActive, setIsModalActive] = useState(false)
  const toggleModal = () => setIsModalActive((prev) => !prev)

    return (
        <ModalToggleContext.Provider value={{isModalActive, toggleModal}} >
            {children}
        </ModalToggleContext.Provider>
    )

}