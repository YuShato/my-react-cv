import React from 'react'
import { AboutTabsDescr, CourseData } from '../data'
import CourseList from './CourseList'

function AboutTabs () {
  return (
    <section className='section single-page'>
      <div className='section-title'>
        <h1>about me</h1>
        <div className='underline'></div>
      </div>
      <div className='section-center page-info'>
        {AboutTabsDescr.map((text, index) => {
          return <p key={index}>{text}</p>
        })}
      </div>
      <CourseList courses={CourseData} />
    </section>
  )
}

export default AboutTabs
