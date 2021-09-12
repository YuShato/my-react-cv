import React from 'react'
import { FaGithub, FaEye } from 'react-icons/fa'

function SingleProject ({ project }) {
  const { imgSrc, alt, title, programs, sourceCode, descr, deployLink } = project
  return (
    <article className='single-project'>
      <div className='project-container'>
        <img src={imgSrc} alt={alt} />
        <a href={deployLink} className='project-icon' target="_blank" rel="noreferrer">
          <FaEye/>
        </a>
      </div>
      <div className='project-details'>
        <h4>{title}</h4>
        <p>{programs}</p>
        <p>{descr}</p>
        <div className='project-footer'>
          <span>
            <FaGithub />
          </span>
          <a href={sourceCode} target="_blank" rel="noreferrer">source code</a>
        </div>
      </div>
    </article>
  )
}

export default SingleProject
