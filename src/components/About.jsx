import React from 'react'
import { Link } from 'react-router-dom'
import { AppRoute } from '../consts'
import { aboutPageDescr } from '../data'
import {nanoid} from 'nanoid';

function About () {
  return (
    <section className='section about'>
      <div className='section-center about-center'>
        <article className='about-img'>
          <img
            src='./images/hero-img.jpeg'
            className='hero-photo'
            alt='about author'
          ></img>
        </article>
        <article className='about-info'>
          <div className='section-title about-title'>
            <h2>about</h2>
            <div className='underline'></div>
          </div>
          {aboutPageDescr.map((descr) => <p key={nanoid()}>{descr}</p>)}
          <Link to={AppRoute.ABOUT} className='btn'>
            about me
          </Link>
        </article>
      </div>
    </section>
  )
}

export default About
