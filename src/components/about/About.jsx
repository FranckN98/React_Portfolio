
import './about.css';
import ME from '../../assets/me-about4.jpeg'
import {FaAward} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'
import {FiUsers} from 'react-icons/fi'
import { animate } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

function Counter({ from, to }) {
  const nodeRef = useRef();

  useEffect(() => {
    const node = nodeRef.current;

    const controls = animate(from, to, {
      duration: 2,
      onUpdate(value) {
        node.textContent = value.toFixed(0);
      }
    });

    return () => controls.stop();
  }, [from, to]);

  return <span ref={nodeRef} />;
}


const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
          <div className="about__me">
              <div className="about__me-image">
                <img src={ME} alt="About Image" />
              </div>
          </div>

          <div className="about__content">
              <div className="about__cards">
                <article className="about__card">
                  <FaAward className='about__icon'/>
                  <h5>Experience</h5>
                  <small><Counter from={0} to={2} />+ Years </small>
                </article>

                <article className="about__card">
                  <FiUsers className='about__icon'/>
                  <h5>Clients</h5>
                  <small><Counter from={0} to={25} />+ Worldwide</small>
                </article>

                <article className="about__card">
                  <VscFolderLibrary className='about__icon'/>
                  <h5>Projects</h5>
                  <small><Counter from={0} to={30} />+ Completed</small>
                </article>
              </div>
              <div className="about__cta">
                  <p className='about__text'>
                  Having a baccalaureate degree in electronics, I opted for a technician's certificate in industrial computing because of a strong interest in the programming of industrial processes. then I continued my career by obtaining a Bachelor's degree in industrial and production maintenance. During this course, I had the opportunity to do an internship in a brewing company with the aim of establishing quality control of the production process. I am a meticulous man concerned with details and a job well done, always looking for new challenges. teamwork is obvious to me because I know how to integrate and participate actively with this one
                  </p>
                  <a href="#contact" className='btn btn-primary'>Download CV</a>
              </div>
          </div>
      </div>
    </section>
  )
}

export default About