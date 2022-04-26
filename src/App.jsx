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
import useLocalStorage from 'use-local-storage'
import './components/nav/nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'

import {RiSunLine} from 'react-icons/ri'
import {FaRegMoon} from 'react-icons/fa'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'
import {useState} from 'react'
import LOGO from './assets/logo.jpeg'


const App = () => {
  const defaultDark = window.matchMedia('(prefers-color-scheme: light)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');
  const [activeNav, setActiveNav] = useState('#')
  const [backgroundImage, setBackgroundImage] = useState(0)
  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme)

  }
 
  
  return (
    <div data-theme={theme}>
      <div className="App"  >
      <div className="parent">
       <div className="n-wrapper">
      <div className="n-left">
        
        <button style={{backgroundColor:"var(--color-bg)", color:"var(--color-white)"}} onClick={switchTheme}>{theme === 'light' ? <FaRegMoon size={22}/>: <RiSunLine size={26}/>}</button>
      </div>

      <div className="n-right">
        <div className="n-list">
          <ul>
            <li><a href="#" className={activeNav === '#' ? 'active' : ''} onClick={()=> setActiveNav('#')} ><AiOutlineHome  size={25}/><span>Home</span></a></li>
            <li><a href="#about" className={activeNav === '#about' ? 'active' : ''} onClick={()=> setActiveNav('#about')} > <AiOutlineUser size={25} /><span>About</span></a></li>
            <li><a href="#experience" className={activeNav === '#experience' ? 'active' : ''} onClick={()=> setActiveNav('#experience')}> <BiBook size={25}/><span>Experience</span></a></li>
            <li><a href="#services" className={activeNav === '#services' ? 'active' : ''} onClick={()=> setActiveNav('#services')}> <RiServiceLine size={25}/><span>Service</span></a></li>
            <li><a href="#contact" className={activeNav === '#contact' ? 'active' : ''} onClick={()=> setActiveNav('#contact')}> <BiMessageSquareDetail size={25}/><span>Contact</span></a></li>
          </ul>
        </div>
       
      </div>
    </div>

    <nav>
      <a href="#" className={activeNav === '#' ? 'active' : ''} onClick={()=> setActiveNav('#')} ><AiOutlineHome/></a>
      <a href="#about" className={activeNav === '#about' ? 'active' : ''} onClick={()=> setActiveNav('#about')} > <AiOutlineUser/></a>
      <a href="#experience" className={activeNav === '#experience' ? 'active' : ''} onClick={()=> setActiveNav('#experience')}> <BiBook/></a>
      <a href="#services" className={activeNav === '#services' ? 'active' : ''} onClick={()=> setActiveNav('#services')}> <RiServiceLine/></a>
      <a href="#contact" className={activeNav === '#contact' ? 'active' : ''} onClick={()=> setActiveNav('#contact')}> <BiMessageSquareDetail/></a>
    </nav> 
    </div>
        <Header />
        <About />
        <Experience />
        <Services />
        <Portfolio />
        <Contact  />
       
      </div>
      <Footer className='footer'/> 
    </div>
    
    )
}

export default App