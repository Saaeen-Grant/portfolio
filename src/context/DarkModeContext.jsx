import React, {createContext, useState} from "react";

export const DarkModeContext = createContext();

export const DarkModeContextProvider = ({children}) => {
    const [mode, isDarkMode] = useState(true)

    return (
        <DarkModeContext.Provider value={{mode, isDarkMode}} >
            {children}
        </DarkModeContext.Provider>
    )

}