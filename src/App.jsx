import React from 'react'
import Experience from './components/experience/Experience'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Portfolio from './components/portfolio/Portfolio'
import About from './components/about/About'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Services from './components/services/Service'

const App = () => {
  return (
    <>
      <div className="App">
        <Nav />
        <Header />
        <About />
        <Experience />
        <Services />
        <Portfolio />
        <Testimonials />
        <Contact  />
        <Footer /> 
      </div>
    </>
  )
}

export default App