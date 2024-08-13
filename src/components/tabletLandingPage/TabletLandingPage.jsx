import React from 'react'
import IMAGES from '../../assets/images/Images'
import "../../styles/landing-page.css"
import { useState } from 'react'
import TabletAbout from './TabletAbout'
import TabletProjects from './TabletProjects'

const TabletLandingPage = ({projectsArray}) => {

    const [currentSection, setCurrentSection] = useState("about")

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
                <button onClick={() => setCurrentSection("about")} className={currentSection === "about" ? "active": ""}>
                    Om mig
                </button>
                <button onClick={()=> setCurrentSection("projects")} className={currentSection === "projects" ? "active": ""}>
                    Projekter
                </button>
            </article>
            <div className="section-container">
                {
                    currentSection === "about" && <TabletAbout/>
                }
                {
                    currentSection === "projects" && <TabletProjects projects={projectsArray}/>
                }
            </div>
        </div>
    </div>
  )
}

export default TabletLandingPage