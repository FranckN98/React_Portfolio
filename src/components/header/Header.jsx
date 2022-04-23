import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import Thumbup from '../../assets/thumbup.png'
import Crown from '../../assets/crown.png'
import GlassesEmoji from '../../assets/glassesimoji.png'
import HeaderSocial from './HeaderSocial'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs' 
import FloatingDiv from './FloatingDiv/FloatingDiv'
import {motion} from 'framer-motion'

const Header = () => {

  const transition = {duration:3, type:'spring'}
  const line1 = "Serge Yossa";


  const sentence = {
    hidden: {
      opacity: 1
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 1,
        staggerChildren: 0.08
      }
    }
    // exit: {
    //   zIndex: 0,
    //   //x: 600,
    //   opacity: 0
    // }
  };
  const letter = {
    hidden: {
      opacity: 0,
      y: 50
    },
    visible: {
      opacity: 1,
      y: 0
    }
  };
  return (
    <header className='intro'> 
      {/* <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Franck Ngami</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA/>
        <HeaderSocial/>

      
        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div> */}

      <div className="i-left">
        <div className="i-name">
        <span>Hello I'm</span>
          <motion.span 
          variants={sentence}
          initial="hidden"
          animate="visible"
          exit={{ opacity: 0 }}
          >
              {line1.split("").map((char, index) => {
              return (
                <motion.span key={char + "-" + index} variants={letter}>
                  {char}
                </motion.span>
              );
            })}
          </motion.span>
         
          <span>Electronic circuit developer with high level of experience in Microcontroller programming</span>
        </div>
        <a href="#contact" className='btn btn-primary button'>Hire me</a>
        <div className="i-icons">
          <a href="https://linkedin.com"><BsLinkedin size={40}/></a>
          <a href="https://github.com"><FaGithub size={40}/></a>
          <a href="https://xing.com"><BsInstagram size={40}/></a>
        </div>
      </div>
      <div className="i-right">
        <div className="me">
            <img src={ME} alt="me" />
        </div>
        <motion.img className='emoji'
        initial={{left:'-24%'}}
        whileInView={{left:'-36%'}}
        transition={transition}
        src={GlassesEmoji} alt="" />

        <motion.div className='passion'
          initial={{top:'16%', left:'50%'}}
          whileInView={{left:'68%'}}
          transition={transition}
          style={{top:'16%', left:'68%'}}>
          <FloatingDiv image={Crown} txt1="Electronic" txt2="Tutor"/>
        </motion.div>
        <motion.div className='fonction'
         initial={{top:'30rem', left:'5rem'}}
         whileInView={{left:'-1rem'}}
         transition={transition}
        style={{top:'30rem', left:'-1rem'}}>
          <FloatingDiv image={Thumbup} txt1="Hardware" txt2="Developer"/>
        </motion.div>
      </div>
    </header>
  )
}

export default Header