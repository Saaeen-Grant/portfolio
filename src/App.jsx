import Navigation from './components/Navigation'
import Intro from './components/Intro'
import Portfolio from './components/Portfolio'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { DarkModeContext } from './context/DarkModeContext'
import { useContext } from 'react'

function App() {
  const {mode} = useContext(DarkModeContext)
  console.log(mode)

  return (
     <main className="app" data-theme={mode ? "dark" : "light"}>
       <div className="container">
        <Navigation/>
          <Intro/>
          <Portfolio/>
          <About/>
          <Contact/>
          <Footer/>
       </div>
     </main>
  )
}

export default App