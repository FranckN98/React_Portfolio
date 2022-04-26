import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'
import {useState} from 'react'
import LOGO from '../../assets/logo.jpeg'
import useLocalStorage from 'use-local-storage'

const Nav = (theme, setTheme) => {
  const [activeNav, setActiveNav] = useState('#')
  const defaultDark = window.matchMedia('(prefers-color-scheme: light)').matches;
  

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';

    if(theme === 'light'){
      newTheme = 'dark'
    }
    else{
      newTheme = 'light'
    }
    setTheme(newTheme)

  }
  return (
    <div className="parent">
       <div className="n-wrapper">
      <div className="n-left">
        <div className="n-logo">
          <img src={LOGO} alt="Electronic freak" />
        </div>
        <button onClick={switchTheme}>{theme === 'light' ? 'Dark':'Light'}</button>
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
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
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
   
   
   
  )
}

export default Nav