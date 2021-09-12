import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { HeaderLinks, AppRoute } from '../consts'
import LinkItem from './LinkItem'
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from '../context'

function Navbar () {
  const navbarRef = useRef(document.getElementById('nav'))
  const { openSidebar } = useGlobalContext()

  return (
    <nav className='nav' id='nav' ref={navbarRef}>
      <div className='nav-center'>
        <div className='nav-header'>
          <Link to={AppRoute.MAIN}>
            <img
              src='./images/logo.svg'
              className='nav-logo'
              alt='nav logo'
              width='140'
            />
          </Link>
          <button className='nav-btn' id='nav-btn' onClick={openSidebar}>
            <FaBars />
          </button>
        </div>

        <ul className='nav-links'>
          {HeaderLinks.map(navLink => (
            <LinkItem key={navLink.id} navLink={navLink} />
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
