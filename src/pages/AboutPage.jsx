import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'
import AboutTabs from '../components/AboutTabs'


function AboutPage() {
    return (
        <div className="App">
            <Navbar/>
            <Sidebar/>
            <AboutTabs/>
            <Footer/>
        </div>
    )
}

export default AboutPage
