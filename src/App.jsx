import Navigation from './components/Navigation'
import Intro from './components/Intro'
import Portfolio from './components/Portfolio'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'



function App() {

  return (
    <>
     <div className="container">
        <Navigation/>
        <Portfolio/>
        <Intro/>
        <About/>
        <Contact/>
        <Footer/>
     </div>
    </>
  )
}

export default App