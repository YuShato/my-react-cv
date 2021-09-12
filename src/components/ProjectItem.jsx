import React from 'react'

function ProjectItem({project}) {
  const {id, imgSrc, alt, title, programs, sourceCode} = project;

    return (
        <a href={sourceCode} className={`project-${id}`} target="_blank" rel="noreferrer">
        <article className='project'>
          <img
            src={imgSrc}
            alt={alt}
            className='project-img'
          />
          <div className='project-info'>
            <h4>{title}</h4>
            <p>{programs}</p>
          </div>
        </article>
      </a>
    )
}

export default ProjectItem
