import React from 'react'
import { FaPassport } from 'react-icons/fa'

function TimelineItem ({ item }) {
  const { courseName, date, link, id } = item
  return (
    <article className='timeline-item' key={id}>
      <h4> {courseName}</h4>
      <p>{date}</p>
      <a href={link} className='btn' target='_blank' rel='noreferrer'>
        <FaPassport /> certificate
      </a>
      <span className='number'>{id}</span>
    </article>
  )
}

export default TimelineItem
