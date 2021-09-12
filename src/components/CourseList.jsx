import React, { useState } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'

function CourseList ({ courses }) {
  const [value, setValue] = useState(0)
  const { imgSrc, date, duties, courseName, company, link } = courses[value]

  return (
    <section className='section'>
      <div className='section-title'>
        <h2>My courses</h2>
        <div className='underline'></div>
      </div>
      <div className='courses-center'>
        <div className='btn-container'>
          {courses.map((item, index) => {
            return (
              <button
                key={item.id}
                onClick={() => setValue(index)}
                className={`course-btn ${index === value && 'active-btn'}`}
              >
                {item.skill}
              </button>
            )
          })}
        </div>
        <article className='course-info'>
          <h3>{courseName}</h3>
          <h4>{company}</h4>
          <p className='course-date'>{date}</p>
          {duties.map((duty, index) => {
            return (
              <div key={index} className='course-desc'>
                <FaAngleDoubleRight className='course-icon' />
                <p>{duty}</p>
              </div>
            )
          })}
        </article>
        <a href={link} target='_blank' rel='noreferrer'>
          <img
            className='course-cert'
            src={imgSrc}
            alt={`certificate ${courseName}`}
            width='200'
          />
        </a>
      </div>
    </section>
  )
}

export default CourseList
