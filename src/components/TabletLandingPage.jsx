import React from 'react'
import IMAGES from '../assets/images/Images'
import "../styles/landing-page.css"

const TabletLandingPage = () => {
  return (
    <div className='tablet-landing-page'>
        <div className='tablet-intro-container'>
            <img src={IMAGES.profilePicture} alt="intro-picture" />
            <h2>
                I'm [Your Name], a web developer passionate about creating dynamic, user-friendly websites. I specialize in clean code and seamless user experiences, delivering high-quality solutions for your online presence.  
            </h2>
        </div>
        <div className="section-picker">
            <article className="button-container">
                <button>
                    Om mig
                </button>
                <button>
                    Projekter
                </button>
            </article>
        </div>
    </div>
  )
}

export default TabletLandingPage