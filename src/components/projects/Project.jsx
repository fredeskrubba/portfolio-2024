import  GithubIcon from "../../assets/icons/github-icon.svg?react";

const Project = ({title, description, tags, githubLink, demoLink, image}) => {

    return ( 
        <div className="project">
            <img src={image} alt="project-preview" />
            <article className="project-info">
                <h3>{title}</h3>
                <p>{description}</p>
                <article className="project-tags">
                    {tags.map((tag, i)=> <p key={i}>{tag}</p>)}
                </article>
            </article>
            <div className="project-links">
               <a href={demoLink} target="_blank">
                    <button type="button">
                        Demo
                    </button>
               </a>
               <a href={githubLink} target="_blank"><GithubIcon/> </a>
            </div>
        </div>
    );
}
 
export default Project