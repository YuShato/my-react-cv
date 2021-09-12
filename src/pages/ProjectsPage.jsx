import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'
import SingleProject from '../components/SingleProject'
import { ProjectData } from '../data'

function ProjectPage () {
  return (
    <div className='App'>
      <Navbar />
      <Sidebar />
      <section className='section'>
      <div className='section-title'>
            <h1>My projects</h1>
            <div className='underline'></div>
          </div>
        <div className='section-center projects-page-center'>
          
          {ProjectData.map(project => (
            <SingleProject key={project.id} project={project} />
          ))}
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default ProjectPage
