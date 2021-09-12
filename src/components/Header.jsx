import React from 'react'
import { Link } from 'react-router-dom'
import { AppRoute } from '../consts'
import SocialHero from './SocialHero'

function Header () {
  return (
    <header className='hero'>
      <div className='section-center hero-center'>
        <article className='hero-info'>
          <div className='underline'></div>
          <h1>i'm Yuliya</h1>
          <h4>Junior Frontend developer</h4>
          <Link to={AppRoute.CONTACT} className='btn hero-btn'>
            hire me
          </Link>
          <SocialHero />
        </article>
        <article className='hero-img'>
          <img
            src="./images/hero-img-main.jpg"
            className='hero-photo'
            alt='yuliya shatokhina cv'
          />
        </article>
      </div>
    </header>
  )
}

export default Header
