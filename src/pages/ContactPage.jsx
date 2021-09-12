import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'
import { SocialData } from '../data'

function ContactPage () {
  return (
    <div className='App'>
      <Navbar />
      <Sidebar />
      <section className='section single-page'>
        <div className='section-title'>
          <h1>contact</h1>
          <div className='underline'></div>
        </div>
        <div className='section-center page-info'>
          <p>
            If you are looking to get ahold of me, you can phone or write me
            
          </p>
          <ul>
              {SocialData.map((network) => {
                  const {id, link, name, icon} = network;
                  return (
                      <li key={id}>
                          <a href={link}>{icon} {name}</a>
                      </li>
                  )
              })}
          </ul>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default ContactPage
