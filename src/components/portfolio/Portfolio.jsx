import React from 'react'
import './portfolio.css'
import portfolioItems from "./portfolio-item.json"
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'
import IMG7 from '../../assets/portfolio7.jpg'
import IMG8 from '../../assets/portfolio8.jpg'
import IMG9 from '../../assets/portfolio9.jpg'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {
          portfolioItems.map(({id,title,imageUrl,codeUrl,MediaUrl})=>{

            return(
              <article className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={imageUrl} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={MediaUrl} className='btn' target='_blank'>Video</a>
                  <a href={codeUrl} className='btn btn-primary' target='_blank'>Github</a>
                </div> 
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio