import { DarkModeContext } from './context/DarkModeContext'
import { useContext } from 'react'
import { createPortal } from 'react-dom'
import Model from './components/Modal'
import Homepage from './routes/Homepage'
import PageNotFound from './routes/PageNotFound'
import { ModalToggleContextProvider } from './context/ModalToggleContext.jsx'
import {BrowserRouter, Route, Routes } from 'react-router-dom'



function App() {

   const body = document.body
   const {mode} = useContext(DarkModeContext)
   body.setAttribute("data-theme", mode)
   const mountElement = document.getElementById('overlay')  

   return (
      <>
         <BrowserRouter>
            <ModalToggleContextProvider>
               {createPortal(<Model/>, mountElement)}
               <Routes>
                  <Route path='/portfolio' element={<Homepage/>}/>
                  <Route path='/portfolio/*'element={<PageNotFound/>}/>
               </Routes>
            </ModalToggleContextProvider>
         </BrowserRouter>
      </>
   )
}

export default App