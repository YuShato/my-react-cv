import React from 'react'
import { ProjectData, ProjectsDescription } from '../data'
import { AppRoute, MAX_PROJECTS_LENGTH } from '../consts'
import ProjectItem from './ProjectItem'
import { Link } from 'react-router-dom'

function Projects () {
  return (
    <section className='section projects'>
      <div className='section-title'>
        <h2>latest works</h2>
        <div className='underline'></div>
        {ProjectsDescription.map((text, index) => {
          return (
            <p className='projects-text' key={index}>
              {text}
            </p>
          )
        })}
      </div>
      <div className='section-center projects-center'>
        {ProjectData.slice(0, MAX_PROJECTS_LENGTH).map(project => (
          <ProjectItem key={project.id} project={project} />
        ))}
      </div>
      <div className='section-center block-center'>
        <Link className='btn hero-btn btn-center' to={AppRoute.PROJECTS}>
          View all projects
        </Link>
      </div>
    </section>
  )
}

export default Projects
