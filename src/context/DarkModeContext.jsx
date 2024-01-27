import { useLocalStorage } from "@uidotdev/usehooks";
import React, {createContext} from "react";

export const DarkModeContext = createContext();

export const DarkModeContextProvider = ({children}) => {
    const [mode, setDarkMode] =  useLocalStorage('DARK_MODE', true)

    // useEffect(()=> {
    //    localStorage.setItem("DARK_MODE", mode)
    // },[mode])

    const toggleMode = () => {
        setDarkMode((prev) => !prev)
    }

    return (
        <DarkModeContext.Provider value={{mode, toggleMode}} >
            {children}
        </DarkModeContext.Provider>
    )

}