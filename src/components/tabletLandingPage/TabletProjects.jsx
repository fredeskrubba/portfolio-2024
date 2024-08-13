import React from 'react'
import Project from '../projects/Project'

const TabletProjects = ({projects}) => {
  return (
    <div className='projects'>
       {
        projects.map((project)=> <Project title={project.title} description={project.description} tags={project.tags} githubLink={project.githubLink} demoLink={project.demoLink} image={project.image} key={project.id}/>)
       } 
    </div>
  )
}

export default TabletProjects