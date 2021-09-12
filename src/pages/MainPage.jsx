import React from 'react'
import About from '../components/About'
import CodeExample from '../components/CodeExample'
import Connect from '../components/Connect'
import EnglishLevel from '../components/EnglishLevel'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Projects from '../components/Projects'
import Sidebar from '../components/Sidebar'
import Skills from '../components/Skills'
import Timeline from '../components/Timeline.jsx'



function MainPage () {
  return (
    <div className='App'>
      <Navbar />
      <Sidebar />
      <Header />
      <About />
      <CodeExample />
      <Projects />
      <Connect />
      <Skills />
      <EnglishLevel/>
      <Timeline />
      <Footer />
    </div>
  )
}

export default MainPage
