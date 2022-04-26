import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'
import "react-circular-progressbar/dist/styles.css";

import ProgressProvider from "./ProgressProvider";
import { CircularProgressbar, buildStyles  } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import {motion} from 'framer-motion'

const Experience = () => {

 
  const transition = {duration:3, type:'spring'}
  const line1 = "Let me Help you!"

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
    
    <section className='skills section'>
      <h5>The Skills I Have</h5>
          <h2>My Experience</h2>
      <div className="container">
      
        <div className="skills-box">
        <motion.h1  variants={sentence}
          initial="hidden"
          animate="visible"
          exit={{ opacity: 0 }}>{line1.split("").map((char, index) => {
            return (
              <motion.span key={char + "-" + index} variants={letter}>
                {char}
              </motion.span>
            );
          })}</motion.h1>
          <div className="box-heading">
           
            <div className="box-desc">
              <p className="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Laudantium laboriosam eaque hic in modi ratione veniam eveniet doloribus.
                Nihil deserunt incidunt, earum illum vitae nisi! Nam repudiandae ab voluptatem vitae!
                Nam repudiandae ab voluptatem vitae!
              </p>
              <a href="#contact" className='btn btn-primary button'>Hire me</a>
            </div>
          </div>
          <div className="skills-wrap">
            <div className="skill">
            <div className="sk-progress">
                  <ProgressProvider valueStart={0} valueEnd={89} >
                    {value => <CircularProgressbar background styles={buildStyles({ backgroundColor:"transparent",trailColor: "var(--color-bg-variant)",textColor: "var(--color-white)",pathColor: "var(--color-primary)",})} value={value}  strokeWidth={3} text={`${value}%`} />}
                  </ProgressProvider>
              </div>
              <div className="sk-title">Arduino</div>
            </div>
            <div className="skill">
            <div className="sk-progress">
                  <ProgressProvider valueStart={0} valueEnd={80} >
                    {value => <CircularProgressbar background styles={buildStyles({ backgroundColor:"transparent",trailColor: "var(--color-bg-variant)",textColor: "var(--color-white)",pathColor: "var(--color-primary)",})} value={value}  strokeWidth={3} text={`${value}%`} />}
                  </ProgressProvider>
              </div>
              <div className="sk-title">C/C++</div>
            </div>
            <div className="skill">
              <div className="sk-progress">
                  <ProgressProvider valueStart={0} valueEnd={65} >
                    {value => <CircularProgressbar background styles={buildStyles({ backgroundColor:"transparent",trailColor: "var(--color-bg-variant)",textColor: "var(--color-white)",pathColor: "var(--color-primary)",})} value={value}  strokeWidth={3} text={`${value}%`} />}
                  </ProgressProvider>
              </div>
              <div className="sk-title">Java</div>
            </div>
            <div className="skill">
            <div className="sk-progress">
                  <ProgressProvider valueStart={0} valueEnd={75} >
                    {value => <CircularProgressbar background styles={buildStyles({ backgroundColor:"transparent",trailColor: "var(--color-bg-variant)",textColor: "var(--color-white)",pathColor: "var(--color-primary)",})} value={value}  strokeWidth={3} text={`${value}%`} />}
                  </ProgressProvider>
              </div>
              <div className="sk-title">Matlab</div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}




export default Experience