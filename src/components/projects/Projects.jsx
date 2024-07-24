import "../../styles/projects.css"
import ArrowIcon from "../../assets/icons/arrow-icon.svg?react";
import Project from "./Project";
import IMAGES from "../../assets/images/Images";
import { useState } from "react";


const Projects = () => {

    const [showSection, setShowSection] = useState(false)
    const projectsArray = [
        {
            title: "Projekt 1",
            description: "Beskrivelse på dette første projekt som linker til en live demo og github",
            tags: [
                "#HTML",
                "#CSS",
                "Javascript",
                "#C#"
            ],
            githubLink: "https://www.google.com/",
            demoLink: "https://www.dr.dk/drtv/",
            image: IMAGES.projectImage, 
            id: 1
        }
    ]

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