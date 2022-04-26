import React from 'react'
import './portfolio.css'
import portfolioItems from "./portfolio-item.json"

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
                <h3 className='text'>{title}</h3>
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