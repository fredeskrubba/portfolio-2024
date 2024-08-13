import "../../styles/projects.css"
import ArrowIcon from "../../assets/icons/arrow-icon.svg?react";
import Project from "./Project";
import { useState } from "react";


const Projects = ({projectsArray}) => {

    const [showSection, setShowSection] = useState(false)

    return ( 
        <section id="projects-section">
            <div className="section-collapsable">
                <h2>Projekter</h2>
                <ArrowIcon className={showSection ? "" : "rotate-arrow"} onClick={()=> {
                    setShowSection(!showSection)
                }}/>
            </div>
            {
                showSection &&
                    <>
                        <article id="projects-container">
                            {projectsArray.map((project) => <Project title={project.title} description={project.description} tags={project.tags} githubLink={project.githubLink} demoLink={project.demoLink} image={project.image} key={project.id}/>)}
                        </article>
                        <button type="button" className="see-more">
                            Se mere
                        </button>
                    </>
            }
        </section>
    );
}
 
export default Projects;