import { DarkModeContext } from './context/DarkModeContext'
import { useContext, useEffect } from 'react'
import { createPortal } from 'react-dom'
import Model from './components/Modal'
import Homepage from './routes/Homepage'
import PageNotFound from './routes/PageNotFound'
import { ModalToggleContextProvider } from './context/ModalToggleContext.jsx'
import {BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom'



function App() {

   const body = document.body
   const {mode} = useContext(DarkModeContext)
   body.setAttribute("data-theme", mode)

   const mountElement = document.getElementById('overlay')  

   return (
      <>
         <BrowserRouter>
            <ModalToggleContextProvider>
               {/* {createPortal(<Model/>, mountElement)} */}
               <Routes>
                  <Route path='/' element={<Homepage/>}/>
                  <Route path='*'element={<PageNotFound/>}/>
               </Routes>
            </ModalToggleContextProvider>
         </BrowserRouter>
      </>
   )
}

export default App