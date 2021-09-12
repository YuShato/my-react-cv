import React from 'react'
import { CourseData } from '../data'
import TimelineItem from './TimelineItem'


function Timeline() {
    return (
        <section className="section timeline">
        <div className="section-title">
          <h2>timeline</h2>
          <div className="underline"></div>
        </div>
        <div className="section-center timeline-center">
          {CourseData.map((item) => <TimelineItem item={item} key={item.id}/>)}
        </div>
      </section>
    )
}

export default Timeline
