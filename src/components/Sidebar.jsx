import React, { useRef } from 'react'
import Social from './Social'
import { HeaderLinks } from '../consts'
import LinkItem from './LinkItem'
import { FaTimes } from 'react-icons/fa'
import { useGlobalContext } from '../context'

function Sidebar () {
  const { isSidebarOpen, closeSidebar } = useGlobalContext()
  const linksContainerRef = useRef(null)
  const linksRef = useRef(null)

  return (
    <aside
      className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}
      id='sidebar'
      ref={linksContainerRef}
    >
      <div>
        <button className='close-btn' id='close-btn' onClick={closeSidebar}>
          <FaTimes />
        </button>
        <ul className='sidebar-links' ref={linksRef}>
          {HeaderLinks.map(navLink => (
            <LinkItem key={navLink.id} navLink={navLink} />
          ))}
        </ul>
        <Social />
      </div>
    </aside>
  )
}

export default Sidebar
